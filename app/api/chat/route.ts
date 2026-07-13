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

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

    const history = messages.slice(0, -1).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user' as const,
      parts: [{ text: m.content }],
    }))

    const chat = model.startChat({
      history,
      systemInstruction: {
        role: 'user',
        parts: [{ text: `${systemPrompt}\n\nHere is the reference information about VoltEdge Electrical:\n\n${referenceData}` }],
      },
    })

    const lastMessage = messages[messages.length - 1]
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
        } catch {
          controller.enqueue(encoder.encode('\n\n_I encountered an error while generating a response. Please try again._'))
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
  } catch {
    return new Response(JSON.stringify({ error: 'Sorry, I encountered an error. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
