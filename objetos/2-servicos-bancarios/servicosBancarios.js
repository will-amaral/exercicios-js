import { prompt } from '../../utils.js'
/**
 * @class
 */
class BankAccount {
  constructor(user, cardDueDate, balance) {
    //PROPRIEDADES
    this.user = user
    this.cardDueDate = cardDueDate
    this.balance = balance
    this.cardLimit = balance * 0.25
    this.usedLimit = 0
    this.creationDate = new Date()
    this.logs = []
    this.extrato = []
  }
  //METODOS
  withdraw(valorSaque) {
    if (valorSaque > this.balance) {
      console.log('Saldo Insuficiente')
      this.logs.push({
        type: 'withdrawError',
        data: { amount: valorSaque, error: 'Não há fundos suficientes' },
        currentBalance: this.balance,
        date: new Date().toUTCString(),
      })
      return
    }
    this.balance -= valorSaque
    this.logs.push({
      type: 'withdraw',
      data: { amount: valorSaque },
      currentBalance: this.balance,
      date: new Date().toUTCString(),
    })
    this.extrato.push(new Date().toUTCString() + ' Saque: -R$' + valorSaque)
  }

  deposit(valorDeposito) {
    this.balance += valorDeposito
    this.logs.push({
      type: 'deposit',
      data: { amount: valorDeposito },
      currentBalance: this.balance,
      date: new Date().toUTCString(),
    })
    this.extrato.push(
      new Date().toUTCString() + ' Deposito: +R$' + valorDeposito
    )
  }

  statement() {
    console.log('Seu Saldo atual : R$' + this.balance + '\n')
    console.log(this.extrato)
  }

  updateUser(newUser) {
    Object.assign(this.user, newUser)
  }

  purchase(valorCompra) {
    if (valorCompra > this.cardLimit - this.usedLimit) {
      console.log('Compra negada - Limite do cartão indisponivel')
      this.logs.push({
        type: 'purchaseError',
        data: { amount: valorCompra, error: 'Não há limite suficiente' },
        currentBalance: this.balance,
        date: new Date().toUTCString(),
      })
      return
    }
    this.usedLimit += valorCompra
    console.log('Compra Aprovada')
    this.logs.push({
      type: 'purchase',
      data: { amount: valorCompra },
      currentBalance: this.balance,
      date: new Date().toUTCString(),
    })
  }

  increaseLimit() {
    let year1 = this.creationDate.getFullYear()
    let year2 = new Date().getFullYear()
    let month1 = this.creationDate.getMonth()
    let month2 = new Date().getMonth()

    let mesesDeConta = (year2 - year1) * 12 + (month2 - month1)
    if (mesesDeConta <= 0) {
      console.log('Não é possivel aumentar o limite')
      this.logs.push({
        type: 'increaseLimitError',
        data: {
          percentageIncrease: 0,
          error: 'Não é possível aumentar o limite',
          currentLimit: this.cardLimit,
        },
        currentBalance: this.balance,
        date: new Date(),
      })
    } else {
      let porcentagemDeAumento = mesesDeConta * 0.12
      let valorDoAumento = porcentagemDeAumento * this.cardLimit
      this.cardLimit += valorDoAumento
      console.log(
        'Seu limite aumentou em R$' +
          valorDoAumento +
          'Seu limite Atual é R$' +
          this.cardLimit
      )
      this.logs.push({
        type: 'increaseLimit',
        data: {
          percentageIncrease: porcentagemDeAumento * 100,
          currentLimit: this.cardLimit,
        },
        currentBalance: this.balance,
        date: new Date(),
      })
    }
  }

  payWithBalance(valorFatura) {
    if (valorFatura > this.usedLimit) {
      console.log('ERRO: Valor a ser pago é maior que o valor da fatura')
    } else if (valorFatura > this.balance) {
      console.log('Não há fundos suficientes')
      this.logs.push({
        type: 'payWithBalanceError',
        data: { amount: valorFatura, error: 'Não há fundos suficientes' },
        currentBalance: this.balance,
        date: new Date().toUTCString(),
      })
    } else {
      this.usedLimit -= valorFatura
      this.balance -= valorFatura
      this.logs.push({
        type: 'payWithBalance',
        data: { amount: valorFatura },
        currentBalance: this.balance,
        date: new Date().toUTCString(),
      })
      this.extrato.push(
        new Date().toUTCString() + 'Pagamento da Fatura: -R$' + valorFatura
      )
    }
  }
  payWithSlip(valorBoleto) {
    if (valorBoleto > this.usedLimit) {
      console.log('ERRO: Valor a ser pago é maior que o valor da fatura')
    } else {
      this.usedLimit -= valorBoleto
      this.logs.push({
        type: 'payWithSlip',
        data: { amount: valorBoleto },
        currentBalance: this.balance,
        date: new Date().toUTCString(),
      })
      this.extrato.push(
        new Date().toUTCString() +
          'Pagamento da Fatura no boleto: -R$' +
          valorBoleto
      )
    }
  }
}

export default BankAccount
