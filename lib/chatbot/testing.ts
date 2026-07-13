/**
 * Chatbot Test Scenarios & Edge Cases
 *
 * Run chatbot locally, then paste these queries to verify behavior.
 * Mark PASS/FAIL for each test.
 */

export const testCategories = [
  {
    name: 'Core Business Info',
    tests: [
      { query: 'What is VoltEdge Electrical?', verify: ['mentions company name', 'Melbourne', 'electrical services'] },
      { query: 'What are your business hours?', verify: ['Mon-Fri', 'Sat', '7am', '6pm', '24/7 emergency'] },
      { query: 'Where are you located?', verify: ['Brunswick', 'Melbourne', 'Victoria'] },
      { query: 'Are you licensed?', verify: ['licensed', 'REC 12345', 'insured'] },
    ],
  },
  {
    name: 'Services Knowledge',
    tests: [
      { query: 'What services do you offer?', verify: ['residential', 'commercial', 'EV', 'smart home', 'CCTV', 'emergency'] },
      { query: 'Do you install EV chargers?', verify: ['EV charger', 'Tesla', 'Type 2'] },
      { query: 'Can you help with smart home setup?', verify: ['smart', 'automation', 'lighting', 'thermostat'] },
      { query: 'Do you do commercial electrical work?', verify: ['commercial', 'fit-out', 'three-phase'] },
    ],
  },
  {
    name: 'Emergency Handling',
    tests: [
      { query: 'I have a power outage!', verify: ['call', '1300 ELECTRICITYFORYOU', 'immediate'] },
      { query: 'There are sparks coming from my switchboard', verify: ['call', '1300 ELECTRICITYFORYOU', 'emergency'] },
      { query: 'How fast do you respond to emergencies?', verify: ['60 minutes', 'under'] },
    ],
  },
  {
    name: 'Pricing & Quotes',
    tests: [
      { query: 'How much does it cost to install a EV charger?', verify: ['quote', 'free', 'no-obligation', 'NOT a specific dollar amount'] },
      { query: 'Do you offer free quotes?', verify: ['free', 'no-obligation', 'quote'] },
    ],
  },
  {
    name: 'Service Areas',
    tests: [
      { query: 'Do you service the Northern Suburbs?', verify: ['Northern Suburbs', 'yes'] },
      { query: 'Are you available in Geelong?', verify: ['All Victoria', 'regional'] },
    ],
  },
  {
    name: 'Edge Cases',
    tests: [
      { query: '', verify: ['should not send', 'empty message blocked'] },
      { query: '你好', verify: ['responds', 'language'] },
      { query: 'What is the meaning of life?', verify: ['responds helpfully', 'electrical pun'] },
      { query: 'I want to book an appointment', verify: ['call', 'quote', 'contact', 'not booking itself'] },
    ],
  },
  {
    name: 'Personality & Tone',
    tests: [
      { query: 'Tell me a joke', verify: ['electrical pun', 'funny', '⚡'] },
      { query: 'Are you a real person?', verify: ['AI assistant', 'Sparky'] },
      { query: 'Thanks for your help!', verify: ['you\'re welcome', 'grateful', 'polite'] },
    ],
  },
]

/**
 * How to test manually:
 * 1. Start dev server: npm run dev
 * 2. Open the site and click the chat button (bottom-right)
 * 3. Paste each query from the test categories above
 * 4. Verify the response contains the keywords listed in `verify`
 * 5. Mark PASS if all keywords present, FAIL if any are missing
 *
 * Automated check:
 * For each test, check that ALL keywords in `verify` appear in the response (case-insensitive).
 * Names like 'Northern Suburbs' should appear as-is.
 * 'NOT' prefix means the keyword MUST NOT appear.
 */

export function validateTestResponse(query: string, response: string, verify: string[]): { pass: boolean; failures: string[] } {
  const failures: string[] = []
  const lowerResp = response.toLowerCase()

  for (const v of verify) {
    if (v.startsWith('NOT ')) {
      const forbidden = v.slice(4).toLowerCase()
      if (lowerResp.includes(forbidden)) {
        failures.push(`"${v.slice(4)}" should NOT appear but was found`)
      }
    } else if (!lowerResp.includes(v.toLowerCase())) {
      failures.push(`"${v}" not found in response`)
    }
  }

  return { pass: failures.length === 0, failures }
}
