import { describe, it } from 'node:test'
import assert from 'node:assert'
import reverse from './stringReversa.js'

describe('reverse', () => {
  it('reverses the received string', () => {
    const a = reverse('hello')
    const b = reverse('world')

    assert.deepEqual(a, 'olleh')
    assert.deepEqual(b, 'dlrow')
  })

  it('returns the same string if it is smaller than one character', () => {
    const a = reverse('a')
    const b = reverse('')

    assert.deepEqual(a, 'a')
    assert.deepEqual(b, '')
  })
})
