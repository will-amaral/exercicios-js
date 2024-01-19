import { describe, it } from 'node:test'
import assert from 'node:assert'
import isPalindrome from './palindromo.js'

describe('isPalindrome', () => {
  it('returns true for palindromes', () => {
    assert.deepEqual(isPalindrome('radar'), true)
    assert.deepEqual(isPalindrome('roma é amor'), true)
    assert.deepEqual(isPalindrome('A grama é amarga'), true)
  })

  it('returns false for non-palindromes', () => {
    assert.deepEqual(isPalindrome('carro'), false)
    assert.deepEqual(isPalindrome('pessoa'), false)
    assert.deepEqual(isPalindrome('antonio é um bom companheiro'), false)
  })
})
