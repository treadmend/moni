'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, X, Send, Sparkles, RefreshCw, Clock } from 'lucide-react'
import type { Message } from '@/lib/chatbot/types'

const WELCOME: Message = {
  role: 'assistant',
  content: "Hi there! I'm Sparky, VoltEdge's AI assistant ⚡ I can help you with our electrical services, answer questions, or get you started with a free quote. What can I help you with today?",
  timestamp: Date.now(),
}

const QUICK_ACTIONS = [
  'What services do you offer?',
  'Do you offer free quotes?',
  'How fast is emergency response?',
  'Do you install EV chargers?',
]

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function renderMarkdown(text: string) {
  const lines = text.split('\n')
  const html = lines.map(line => {
    if (line.startsWith('## ')) return `<h3 class="text-sm font-semibold mt-3 mb-1">${line.slice(3)}</h3>`
    if (line.startsWith('### ')) return `<h4 class="text-sm font-semibold mt-2 mb-1">${line.slice(4)}</h4>`
    if (line.startsWith('* ') || line.startsWith('- ')) return `<li class="ml-3 list-disc">${line.slice(2)}</li>`
    if (line.match(/^\d+\.\s/)) return `<li class="ml-3 list-decimal">${line.replace(/^\d+\.\s/, '')}</li>`
    if (line.startsWith('> ')) return `<blockquote class="border-l-2 border-primary/30 pl-3 italic text-muted-foreground text-xs my-1">${line.slice(2)}</blockquote>`
    if (line.trim() === '') return '<br/>'
    const processed = line
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code class="bg-muted-foreground/10 px-1 rounded text-xs">$1</code>')
    return `<span>${processed}</span>`
  }).join('')

  const wrapped = html
    .replace(/((?:<li.*?>.*?<\/li>\n?)+)/g, '<ul class="space-y-0.5 my-1">$1</ul>')

  return wrapped
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === 'undefined') return [WELCOME]
    try {
      const saved = localStorage.getItem('voltedge-chat')
      if (saved) {
        const parsed = JSON.parse(saved)
        return Array.isArray(parsed) && parsed.length > 0 ? parsed : [WELCOME]
      }
    } catch {}
    return [WELCOME]
  })

  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [streamingText, setStreamingText] = useState('')
  const [lastError, setLastError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streamingText])

  useEffect(() => {
    try {
      localStorage.setItem('voltedge-chat', JSON.stringify(messages))
    } catch {}
  }, [messages])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 150)
  }, [isOpen])

  const handleSubmit = useCallback(async (text?: string) => {
    const content = (text ?? input).trim()
    if (!content || isLoading) return

    abortRef.current?.abort()
    setLastError(null)

    const userMsg: Message = { role: 'user', content, timestamp: Date.now() }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setIsLoading(true)
    setStreamingText('')

    try {
      const ac = new AbortController()
      abortRef.current = ac

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated.map(m => ({ role: m.role, content: m.content })) }),
        signal: ac.signal,
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Request failed' }))
        throw new Error(err.error || 'Request failed')
      }

      const contentType = res.headers.get('Content-Type') || ''

      if (contentType.includes('application/json')) {
        const data = await res.json()
        setMessages(prev => [...prev, { role: 'assistant', content: data.error || 'Sorry, I encountered an error.', timestamp: Date.now() }])
        if (data.error) setLastError(data.error)
        setIsLoading(false)
        return
      }

      const reader = res.body?.getReader()
      if (!reader) throw new Error('No response stream')

      const decoder = new TextDecoder()
      let fullText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        fullText += chunk
        setStreamingText(fullText)
      }

      setMessages(prev => [...prev, { role: 'assistant', content: fullText, timestamp: Date.now() }])
      setStreamingText('')
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return
      const errMsg = 'Sorry, I encountered an error. Please try again.'
      setMessages(prev => [...prev, { role: 'assistant', content: errMsg, timestamp: Date.now() }])
      setLastError(errMsg)
    } finally {
      setIsLoading(false)
      setStreamingText('')
      abortRef.current = null
    }
  }, [input, isLoading, messages])

  const handleRetry = useCallback(() => {
    if (!messages.length) return
    const lastUserIdx = [...messages].reverse().findIndex(m => m.role === 'user')
    if (lastUserIdx === -1) return
    const lastUserMsg = messages[messages.length - 1 - lastUserIdx]
    const cleaned = messages.slice(0, messages.length - lastUserIdx)
    setMessages(cleaned)
    setTimeout(() => {
      setInput(lastUserMsg.content)
      setIsLoading(false)
      setStreamingText('')
    }, 50)
  }, [messages])

  const handleClear = useCallback(() => {
    setMessages([WELCOME])
    try { localStorage.removeItem('voltedge-chat') } catch {}
  }, [])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Open chat"
      >
        <Sparkles className="h-5 w-5" />
        <span className="text-sm font-medium hidden sm:inline">Chat with Sparky</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] h-[640px] max-h-[calc(100vh-6rem)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-primary/5 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Sparky</div>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-xs text-muted-foreground">AI Assistant</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleClear}
                    className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    aria-label="Clear chat"
                    title="Clear chat"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    aria-label="Close chat"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-md'
                        : 'bg-muted text-foreground rounded-bl-md'
                    }`}>
                      {msg.role === 'assistant'
                        ? <div dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }} />
                        : msg.content
                      }
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-0.5 px-1 flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5" />
                      {msg.timestamp ? formatTime(msg.timestamp) : ''}
                    </span>
                  </div>
                ))}

                {/* Streaming in progress */}
                {streamingText && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-2xl rounded-bl-md px-4 py-2.5 text-sm leading-relaxed max-w-[88%]">
                      <div dangerouslySetInnerHTML={{ __html: renderMarkdown(streamingText) }} />
                      <span className="inline-block w-1.5 h-4 bg-primary/60 animate-pulse ml-0.5 align-text-bottom" />
                    </div>
                  </div>
                )}

                {/* Loading indicator (before stream starts) */}
                {isLoading && !streamingText && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}

                {/* Retry */}
                {lastError && !isLoading && (
                  <div className="flex justify-center">
                    <button
                      onClick={handleRetry}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      <RefreshCw className="h-3 w-3" />
                      Retry
                    </button>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick actions */}
              {messages.length <= 2 && !isLoading && (
                <div className="px-4 pb-2 shrink-0">
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_ACTIONS.map(action => (
                      <button
                        key={action}
                        onClick={() => handleSubmit(action)}
                        className="text-xs bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground px-2.5 py-1.5 rounded-full border border-border transition-colors"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <form
                onSubmit={e => { e.preventDefault(); handleSubmit() }}
                className="border-t border-border p-3 shrink-0"
              >
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Ask Sparky anything..."
                    disabled={isLoading}
                    className="flex-1 bg-background border border-input rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-1.5 text-[10px] text-muted-foreground text-center">
                  AI assistant — responses may not be accurate. Call 1300 ELECTRICITYFORYOU for urgent matters.
                </p>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
