import { prompt } from '../../utils.js'

let compras = []
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
Lista de compras
1. Adicionar item
2. Remover item
3. Exibir lista
4. Sair

Escolha uma opção: `)
    const option = Number(input)
    if (![1, 2, 3, 4].includes(option)) throw Error('Opção inválida')
    await options[option]?.()
  }
}

async function add() {
  const item = await prompt('Adicione seu item na lista de compras: ')
  compras.push(item)
  console.log(`Você adicionou ${item} na sua lista de compras`)
}

async function remove() {
  if (compras.length === 0) return console.log('Não há itens para remover')
  let message = 'Qual item você deseja remover?\n'

  for (let index = 0; index < compras.length; index++) {
    message += `${index + 1}- ${compras[index]}\n`
  }
  const input = await prompt(message)
  const itemIndex = Number(input) - 1
  compras = compras.filter((_, index) => index !== itemIndex)
  show()
}

function show() {
  if (compras.length === 0) return console.log('Não há itens na sua lista')

  let message = 'Sua lista de compras contém: \n'
  for (const item of compras) message += `* ${item} \n`
  console.log(message)
}

main()
