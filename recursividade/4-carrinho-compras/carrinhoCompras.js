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
  console.log(`Digite o numero do item que deseja adicionar ao carrinho:
  1.Maçã R$0,50/kg
  2.Pão R$2,20/kg
  3.Leite R$3,00/Litro
  4.Frango R$12,00/kg `)

  carrinho.push(produtos[Number(prompt('')) - 1])
  carrinho = unificador(carrinho)
}

function unificador(carrinho) {
  return carrinho.reduce((acc, itemAtual) => {
    const itemEncontrado = acc.find((item) => item.title === itemAtual.title)
    if (itemEncontrado) {
      itemEncontrado.quantidade += itemAtual.quantidade
    } else {
      acc.push({ ...itemAtual })
    }
    return acc
  }, [])
}

/**
 * @param {Produto[]} carrinho
 */
export async function remove(carrinho) {
  // O código da opção 2 vai aqui
  carrinho.splice(
    Number(prompt('Digite o numero do item que deseja remover do carrinho')) -
      1,
    1
  )
}

/**
 * @param {Produto[]} carrinho
 */
let valorTotal = 0
export function show(carrinho) {
  // O código da opção 3 vai aqui

  console.log('seu carrinho contém' + carrinho)
  if (carrinho.length === 0) {
    return 'carrinho está vazio'
  } else if (carrinho.length === 1) {
    console.log('este é o valor total ' + valorTotal)
  } else {
    valorTotal += carrinho[0].price + carrinho[1].price
    carrinho.splice(0, 2)
    show(valorTotal)
  }
}

main()
