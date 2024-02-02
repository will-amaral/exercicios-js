import { describe, it } from 'node:test'
import assert from 'node:assert'
import Inventario from './inventario'

describe('Inventario', () => {
  it('creates empty object', () => {
    const inventario = new Inventario()

    assert.equal(inventario.banana, undefined)
  })

  it('adds new items', () => {
    const inventario = new Inventario()

    inventario.add('banana', 1)

    assert.equal(inventario.banana, 1)
  })

  it('increments quantity', () => {
    const inventario = new Inventario()

    inventario.add('banana', 1)
    inventario.add('banana', 4)

    assert.equal(inventario.banana, 5)
  })

  it('decrements quantity', () => {
    const inventario = new Inventario()

    inventario.add('banana', 1)
    inventario.add('banana', 4)
    inventario.remove('banana', 2)

    assert.equal(inventario.banana, 3)
  })
})
