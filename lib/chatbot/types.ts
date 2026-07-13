export interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp?: number
}

export interface ChatRequest {
  messages: { role: 'user' | 'assistant'; content: string }[]
}
