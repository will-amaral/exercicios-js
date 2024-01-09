import { describe, it } from 'node:test'
import assert from 'node:assert'
import maxProfit from './lucroMaximo.js'

describe('maxProfit', () => {
  it('gets the max profit from list', () => {
    const purchases = [7, 1, 5]
    const sales = [3, 6, 4]
    const output = maxProfit(purchases, sales)

    assert.strictEqual(output, 'Posição 1 - Lucro: 5')
  })

  it('handles empty sales and purchases', () => {
    const purchases = []
    const sales = []
    const output = maxProfit(purchases, sales)

    assert.strictEqual(output, 'Não há vendas e compras no período')
  })

  it('handles less sales than purchases', () => {
    const purchases = [7, 1, 5]
    const sales = [3]
    const output = maxProfit(purchases, sales)

    assert.strictEqual(output, 'Posição 0 - Lucro: -4')
  })

  it('invalidates more sales than purchases', () => {
    const purchases = [7]
    const sales = [3, 6, 4]
    const output = maxProfit(purchases, sales)

    assert.strictEqual(
      output,
      'O número de vendas não pode exceder o número de compras'
    )
  })
})
