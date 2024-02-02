//@ts-check
import { prompt } from '../../utils.js'
import { produtos } from './data.js'

/**
 * @typedef Produto
 * @property {string} title - O nome do produto
 * @property {number} price - O preço do produto
 * @property {string} unit - A unidade de medida
 * @property {number} quantity - A quantidade do produto
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
  let additem = Number(
    await prompt(`Digite o numero do item que deseja adicionar:
1- Maçã R$0,50
2- Pão R$2,20
3- Leite R$3,00
4- Frango R$12,00 \n`)
  )

  let addquantidade = Number(
    await prompt('Digite a quantidade que deseja adicionar:')
  )
  if (produtos[additem - 1]) {
    produtos[additem - 1].quantity = +addquantidade
  } else {
    console.log('Item não encontrado')
  }
}
/**
 * @param {Produto[]} carrinho
 */
export async function remove(carrinho) {
  // O código da opção 2 vai aqui
  for (let indice = 0; indice < produtos.length; indice++) {
    if (produtos[indice].quantity > 0) {
      console.log(
        produtos[indice].quantity +
          ' ' +
          produtos[indice].title +
          ' Valor R$' +
          produtos[indice].quantity * produtos[indice].price
      )
    }
  }

  let removeitem = Number(
    await prompt(`Digite o numero do item que deseja remover:
1- Maçã
2- Pão
3- Leite
4- Frango\n`)
  )

  let removequantidade = Number(
    await prompt('Digite a quantidade que deseja remover:')
  )
  if (produtos[removeitem - 1].quantity === 0) {
    console.log('Este produto não está no seu carrinho\n')
  } else {
    produtos[removeitem - 1].quantity -= removequantidade
  }
}

/**
 * @param {Produto[]} carrinho
 */
export function show(carrinho) {
  // O código da opção 3 vai aqui
  for (let indice = 0; indice < produtos.length; indice++) {
    if (produtos[indice].quantity > 0) {
      console.log(
        produtos[indice].quantity +
          ' ' +
          produtos[indice].title +
          ' Valor R$' +
          produtos[indice].quantity * produtos[indice].price
      )
    }
  }
  const carrinhoTotal = produtos.map(
    (produto) => produto.quantity * produto.price
  )
  totalvalue()
  function totalvalue(carrinhoTotal) {
    if (carrinhoTotal.length === 0) {
      return 0
    } else {
      carrinhoTotal[0] = carrinhoTotal[0] + carrinhoTotal[1]
      carrinhoTotal.splice(1, 1)
      return totalvalue(carrinhoTotal)
    }
  }
}
main()
