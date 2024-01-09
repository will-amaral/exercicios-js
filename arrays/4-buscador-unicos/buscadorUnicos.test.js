import { describe, it } from 'node:test'
import assert from 'node:assert'
import fs from 'node:fs/promises'
import getUnique from './buscadorUnicos.js'

describe('getUnique', () => {
  it('removes duplicates in an array', () => {
    const items = [1, 2, 2, 3, 4, 4, 5]
    const output = getUnique(items)

    assert.deepStrictEqual(output, [1, 2, 3, 4, 5])
  })

  it('leaves arrays without dupes unchanged', () => {
    const items = [1, 2, 3, 4, 5]
    const output = getUnique(items)

    assert.deepStrictEqual(output, items)
  })

  it('does not use the Set data structure', async () => {
    const filePath = new URL('buscadorUnicos.js', import.meta.url)
    const data = await fs.readFile(filePath, 'utf8')
    assert(!data.includes('Set'))
  })
})
