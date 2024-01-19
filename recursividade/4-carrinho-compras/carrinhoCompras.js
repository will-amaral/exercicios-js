//@ts-check
import { prompt } from '../../utils.js'
import { produtos } from './data.js'

/**
 * @typedef Produto
 * @property {string} title - O nome do produto
 * @property {number} price - O preço do produto
 * @property {string} unit - A unidade de medida
 */
/**
 * @type {Produto[]}
 */
let carrinho = []
export default async function main() {
  let shouldDisplay = true
  const options = {
    1: add,
    2: remove,
    3: show,
    4: () => {
      console.log('Encerrando o programa')
      shouldDisplay = false
    },
  }

  while (shouldDisplay) {
    const input = await prompt(`
Mercado Digital
1. Adicionar item ao carrinho
2. Remover item do carrinho
3. Exibir total
4. Sair

Escolha uma opção: `)
    const option = Number(input)
    if (![1, 2, 3, 4].includes(option)) throw Error('Opção inválida')
    await options[option]?.(carrinho, produtos)
  }
}

/**
 * @param {Produto[]} carrinho
 * @param {Produto[]} produtos
 */
export async function add(carrinho, produtos) {
  // O código da opção 1 vai aqui
}

/**
 * @param {Produto[]} carrinho
 */
export async function remove(carrinho) {
  // O código da opção 2 vai aqui
}

/**
 * @param {Produto[]} carrinho
 */
export function show(carrinho) {
  // O código da opção 3 vai aqui
}

main()
