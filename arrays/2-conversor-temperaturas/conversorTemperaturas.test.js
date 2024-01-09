import { describe, it } from 'node:test'
import assert from 'node:assert'
import convertTemps from './conversorTemperaturas.js'

describe.only('convertTemps', () => {
  it('converts celsius to fahrenheit', () => {
    const temps = [{ value: 32, unit: 'C' }]
    const output = convertTemps(temps)

    assert.deepStrictEqual(output, [{ value: 89.6, unit: 'F' }])
  })

  it('converts fahrenheit to celsius', () => {
    const temps = [{ value: 0, unit: 'F' }]
    const output = convertTemps(temps)

    assert.deepStrictEqual(output, [{ value: -17.78, unit: 'C' }])
  })

  it('converts multiple temperatures', () => {
    const temps = [
      { value: 32, unit: 'C' },
      { value: 0, unit: 'F' },
    ]
    const output = convertTemps(temps)
    assert.deepStrictEqual(output, [
      { value: 89.6, unit: 'F' },
      { value: -17.78, unit: 'C' },
    ])
  })
})
