import dotenv from 'dotenv-safe'
import { ChatGPTAPI } from 'chatgpt'

dotenv.config()

/**
 * Demo CLI for testing the `onProgress` streaming support.
 *
 * tsx demos/demo-on-progress.ts
 */
async function main() {
  const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY })

  const prompt =
    'Write a python version of bubble sort. Do not include example usage.'

  console.log(prompt)
  await api.sendMessage(prompt, {
    onProgress: (partialResponse) => {
      console.log(partialResponse.text)
    }
  })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
