let conta
let primeiroDeposito

let menu = 10
while (menu !== 9) {
  menu = Number(
    await prompt(`Digite o número da operação que deseja realizar
0- Criar uma Conta
1- Saque
2- Depósito
3- Extrato
4- Alterar Dados
5- Compra no Crédito
6- Solicitar Limite
7- Pagar Fatura
8- Pagar Fatura com boleto
9- Sair
 `)
  )

  if (menu === 0) {
    await criarUsuario()
  } else if (menu === 1) {
    await saque()
  } else if (menu === 2) {
    await deposito()
  } else if (menu === 3) {
    await extrato(conta)
  } else if (menu === 4) {
    await trocarDados(conta)
  } else if (menu === 5) {
    await compraCredito()
  } else if (menu === 6) {
    await limiteCartao()
  } else if (menu === 7) {
    await pagarFatura()
  } else if (menu === 8) {
    await pagarBoleto()
  } else if (menu !== 9) {
    console.log('Opção inválida')
  }
}

async function criarUsuario() {
  let name = await prompt('Coloque sue nome completo:\n')
  let cpf = await prompt('Coloque seu cpf (apenas números)\n')
  let dataVencimento = Number(
    await prompt('Coloque o dia de vencimento do cartão\n')
  )
  if (dataVencimento > 30) {
    console.log('Data inválida, tente novamente')
    return
  }
  let address = await prompt('Digite seu endereço\n')
  let saldo = Number(await prompt('Digite o valor do primeiro deposito\n'))
  let user = { name, cpf, dataVencimento, address }

  primeiroDeposito = saldo
  conta = new BankAccount(user, dataVencimento, saldo, primeiroDeposito)
}

async function saque() {
  const valorSaque = Number(await prompt('Qual Valor deseja Sacar?\n'))
  conta.withdraw(valorSaque)
}

async function deposito() {
  const valorDeposito = Number(await prompt('Qual valor deseja depositar\n'))
  conta.deposit(valorDeposito)
}

async function extrato(conta) {
  conta.statement(conta)
}

async function trocarDados(conta) {
  console.log(
    `Nome: ` +
      conta.user.name +
      `
   CPF: ` +
      conta.user.cpf +
      `
  Endereço: ` +
      conta.user.address
  )

  let corrigirDados = Number(
    await prompt(`Selecione uma opção:
  1- Confirmar Dados
  2- Alterar Dados`)
  )

  if (corrigirDados === 2) {
    conta.user.name = await prompt('Digite seu nome Completo\n')
    conta.user.cpf = await prompt('Digite seu CPF\n')
    conta.user.address = await prompt('Digite seu endereço:\n')
    conta.user.dataVencimento = await prompt(
      'Digite a nova data de vencimento da fatura do cartão\n'
    )
    conta.logs.push(new Date().toUTCString() + ' Dados do usuário alterados')
    console.log(conta.user)
  } else {
    console.log('Dados confirmados')
  }
}

async function compraCredito() {
  console.log('Seu limite é R$' + (conta.cardLimit - conta.usedLimit))
  const valorCompra = Number(await prompt('Qual o Valor da compra?'))
  conta.purchase(valorCompra)
}

async function limiteCartao() {
  conta.increaseLimit()
}

async function pagarFatura() {
  console.log('O valor total da sua fatura é: R$' + conta.usedLimit)
  const valorFatura = Number(prompt('Digite o valor que deseja pagar:\n'))
  conta.payWithBalance(valorFatura)
}

async function pagarBoleto() {
  console.log('O valor total da sua fatura é: R$' + conta.usedLimit)
  const valorBoleto = Number(prompt('Digite o Valor que deseja pagar:\n'))
  conta.payWithSlip(valorBoleto)
}
