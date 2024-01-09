import { createInterface } from 'node:readline/promises'

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
})

/**
 * @param {string} text - Text to be displayed before user input
 * @returns {Promise<string>} A promise containing the user answer
 */
export const prompt = async (text = '') => {
  const answer = await readline.question(text)
  readline.pause()
  return answer
}
