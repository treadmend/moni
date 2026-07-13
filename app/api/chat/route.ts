import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest } from 'next/server'
import { systemPrompt } from '@/lib/chatbot/personality'
import { companyInfo, services, serviceAreas, faqs, coreValues } from '@/lib/chatbot/reference-info'
import type { ChatRequest } from '@/lib/chatbot/types'

const referenceData = `
COMPANY INFORMATION:
Name: ${companyInfo.name}
Tagline: ${companyInfo.tagline}
Phone: ${companyInfo.phone}
Email: ${companyInfo.email}
Address: ${companyInfo.address}
Service Area: ${companyInfo.serviceArea}
License: ${companyInfo.license}
Experience: ${companyInfo.yearsExperience}
Projects Completed: ${companyInfo.projectsCompleted}
Hours: ${companyInfo.businessHours.weekdays} | ${companyInfo.businessHours.saturday} | ${companyInfo.businessHours.emergency}

SERVICES:
${services.map(s => `${s.category}: ${s.description}\n  - ${s.items.join('\n  - ')}`).join('\n\n')}

SERVICE AREAS:
${serviceAreas.join(', ')}

CORE VALUES:
${coreValues.join('\n')}

FAQ:
${faqs.map(f => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n')}
`

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not set')
      return new Response(JSON.stringify({ error: 'API key is not configured. Set GEMINI_API_KEY in environment variables.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const body: ChatRequest = await request.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' })

    const history = messages.slice(0, -1).reduce((acc, m) => {
      if (acc.length === 0 && m.role === 'assistant') return acc
      acc.push({
        role: m.role === 'assistant' ? 'model' as const : 'user' as const,
        parts: [{ text: m.content }],
      })
      return acc
    }, [] as { role: 'user' | 'model'; parts: { text: string }[] }[])

    const fullSystemPrompt = `${systemPrompt}\n\nHere is the reference information about VoltEdge Electrical:\n\n${referenceData}`
    const lastMessage = messages[messages.length - 1]

    const chat = model.startChat({
      history,
      systemInstruction: { parts: [{ text: fullSystemPrompt }] },
    })

    const result = await chat.sendMessageStream(lastMessage.content)

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text()
            if (text) {
              controller.enqueue(encoder.encode(text))
            }
          }
          controller.close()
        } catch (streamErr) {
          console.error('Stream error:', streamErr)
          const msg = streamErr instanceof Error ? streamErr.message : 'Stream error'
          controller.enqueue(encoder.encode(`\n\n_I ran into an issue: ${msg}. Please try again._`))
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (err) {
    console.error('Chat API error:', err)
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new Response(JSON.stringify({ error: `Error: ${message}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
