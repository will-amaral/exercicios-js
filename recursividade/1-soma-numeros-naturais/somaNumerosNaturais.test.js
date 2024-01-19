import { describe, it } from 'node:test'
import assert from 'node:assert'
import sum from './somaNumerosNaturais.js'

describe('sum', () => {
  it('returns the sum of n numbers', () => {
    const a = sum(5)
    const b = sum(10)
    const c = sum(22)

    assert.deepEqual(a, 15)
    assert.deepEqual(b, 55)
    assert.deepEqual(c, 253)
  })

  it('returns n when n is 1', () => {
    const result = sum(1)

    assert.deepEqual(result, 1)
  })

  it('returns 0 when n is 0', () => {
    const result = sum(0)

    assert.deepEqual(result, 0)
  })

  it('shows an error when n is not a natural number', () => {
    const result = sum(-1)

    assert.deepEqual(result, 'Erro: n deve ser um número natural')
  })
})
