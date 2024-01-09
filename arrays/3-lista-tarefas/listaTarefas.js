//@ts-check
import { prompt } from '../../utils.js'

/**
 * @typedef Tarefa
 * @property {string} description - A descrição da tarefa
 * @property {boolean} isComplete - Status da tarefa se foi feita ou não
 */

/**
 * @type {Tarefa[]}
 */
let tarefas = []
export default async function main() {
  let shouldDisplay = true
  const options = {
    1: add,
    2: remove,
    3: update,
    4: show,
    5: () => {
      console.log('Encerrando o programa')
      shouldDisplay = false
    },
  }

  while (shouldDisplay) {
    const input = await prompt(`
Lista de tarefas
1. Adicionar tarefa
2. Remover tarefa
3. Marcar tarefa como concluída
4. Exibir tarefas
5. Sair

Escolha uma opção: `)
    const option = Number(input)
    if (![1, 2, 3, 4, 5].includes(option)) throw Error('Opção inválida')
    await options[option]?.()
  }
}

async function add() {
  // O código da opção 1 vai aqui
}

async function remove() {
  // O código da opção 2 vai aqui
}

async function update() {
  // O código da opção 3 vai aqui
}

function show() {
  // O código da opção 4 vai aqui
}

main()
