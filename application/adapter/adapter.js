import { createInterface } from 'readline'

export const adapterEntry = async (question, controller) => {
  const entry = createInterface({ input: process.stdin, output: process.stdout })

  return entry.question(`${question}:\b`, async request => {
    const response = await controller.handle(request)
    if(response) {
      console.log(response)
      entry.close()
      return process.exit()
    }
  })
}
