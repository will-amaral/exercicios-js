import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import BankAccount from './servicosBancarios.js'

const user = { name: 'John', cpf: '123', address: '123, Second Av' }

describe('BankAccount', () => {
  it('creates a new account', () => {
    const account = new BankAccount(user, 10, 1000)

    assert.deepEqual(account.balance, 1000)
    assert.deepEqual(account.cardLimit, 250)
    assert.deepEqual(account.usedLimit, 0)
    assert(account.creationDate instanceof Date)
    assert.deepEqual(account.cardDueDate, 10)
    assert.deepEqual(account.user, user)
    assert.deepEqual(account.logs, [])
  })

  it('deposits a new amount', () => {
    const account = new BankAccount(user, 10, 1000)
    account.deposit(500)

    assert.deepEqual(account.balance, 1500)
  })

  it('withdraws some amount', () => {
    const account = new BankAccount(user, 10, 1000)

    account.withdraw(200)

    assert.deepEqual(account.balance, 800)
  })

  it('disallows withdrawing more than balance', () => {
    const account = new BankAccount(user, 10, 1000)

    account.withdraw(2000)

    assert.deepEqual(account.balance, 1000)
  })

  it('updates user data', () => {
    const account = new BankAccount(user, 10, 1000)

    account.updateUser({ cpf: '567' })

    assert.deepEqual(account.user, {
      name: user.name,
      address: user.address,
      cpf: '567',
    })
  })

  it('makes a credit purchase', () => {
    const account = new BankAccount(user, 10, 1000)

    account.purchase(200)

    assert.deepEqual(account.usedLimit, 200)
  })

  it('disallows purchases bigger than the remaining limit', () => {
    const account = new BankAccount(user, 10, 1000)

    account.purchase(400)

    assert.deepEqual(account.usedLimit, 0)

    account.purchase(200)

    assert.deepEqual(account.usedLimit, 200)

    account.purchase(200)

    assert.deepEqual(account.usedLimit, 200)
  })

  it('disallows increasing limit', () => {
    const account = new BankAccount(user, 10, 1000)

    assert.deepEqual(account.cardLimit, 250)

    account.increaseLimit()

    assert.deepEqual(account.cardLimit, 250)
  })

  it('allows increasing limit', () => {
    const account = new BankAccount(user, 10, 1000)

    const date = new Date()
    date.setMonth(date.getMonth() - 5)
    account.creationDate = date

    assert.deepEqual(account.cardLimit, 250)
    assert.deepEqual(account.creationDate, date)

    account.increaseLimit()

    assert.deepEqual(account.cardLimit, 400)
  })

  it('pays card invoice with balance', () => {
    const account = new BankAccount(user, 10, 1000)

    account.purchase(200)

    assert.deepEqual(account.usedLimit, 200)

    account.payWithBalance(100)

    assert.deepEqual(account.usedLimit, 100)
    assert.deepEqual(account.balance, 900)
  })

  it('disallows paying with balance when there are no funds', () => {
    const account = new BankAccount(user, 10, 1000)

    account.withdraw(950)

    account.purchase(200)

    assert.deepEqual(account.usedLimit, 200)

    account.payWithBalance(100)

    assert.deepEqual(account.usedLimit, 200)
    assert.deepEqual(account.balance, 50)
  })

  it('pays with slip', () => {
    const account = new BankAccount(user, 10, 1000)

    account.purchase(200)

    assert.deepEqual(account.usedLimit, 200)

    account.payWithSlip(100)

    assert.deepEqual(account.usedLimit, 100)
    assert.deepEqual(account.balance, 1000)
  })

  it('logs each transaction', () => {
    const account = new BankAccount(user, 10, 1000)

    account.deposit(200)

    assert.deepEqual(account.logs[0], {
      type: 'deposit',
      data: { amount: 200 },
      currentBalance: 1200,
      date: new Date(),
    })

    account.withdraw(400)

    assert.deepEqual(account.logs[1], {
      type: 'withdraw',
      data: { amount: 400 },
      currentBalance: 800,
      date: new Date(),
    })

    account.withdraw(2000)

    assert.deepEqual(account.logs[2], {
      type: 'withdrawError',
      data: { amount: 2000, error: 'Não há fundos suficientes' },
      currentBalance: 800,
      date: new Date(),
    })

    const newUserData = { name: 'Jane' }
    account.updateUser(newUserData)

    assert.deepEqual(account.logs[3], {
      type: 'updateUser',
      data: { newUser: newUserData },
      currentBalance: 800,
      date: new Date(),
    })

    account.purchase(200)

    assert.deepEqual(account.logs[4], {
      type: 'purchase',
      data: { amount: 200 },
      currentBalance: 800,
      date: new Date(),
    })

    account.purchase(200)

    assert.deepEqual(account.logs[5], {
      type: 'purchaseError',
      data: { amount: 200, error: 'Não há limite suficiente' },
      currentBalance: 800,
      date: new Date(),
    })

    account.payWithBalance(100)

    assert.deepEqual(account.logs[6], {
      type: 'payWithBalance',
      data: { amount: 100 },
      currentBalance: 700,
      date: new Date(),
    })

    account.withdraw(700)

    account.payWithBalance(100)

    assert.deepEqual(account.logs[8], {
      type: 'payWithBalanceError',
      data: { amount: 100, error: 'Não há fundos suficientes' },
      currentBalance: 0,
      date: new Date(),
    })

    account.payWithSlip(100)

    assert.deepEqual(account.logs[9], {
      type: 'payWithSlip',
      data: { amount: 100 },
      currentBalance: 0,
      date: new Date(),
    })

    account.increaseLimit()

    assert.deepEqual(account.logs[10], {
      type: 'increaseLimitError',
      data: {
        percentageIncrease: 0,
        error: 'Não é possível aumentar o limite',
        currentLimit: 250,
      },
      currentBalance: 0,
      date: new Date(),
    })

    const date = new Date()
    date.setMonth(date.getMonth() - 5)
    account.creationDate = date

    account.increaseLimit()

    assert.deepEqual(account.logs[11], {
      type: 'increaseLimit',
      data: {
        percentageIncrease: '60%',
        currentLimit: 400,
      },
      currentBalance: 0,
      date: new Date(),
    })
  })

  it('generates a statement', () => {
    const account = new BankAccount(user, 10, 1000)
    const baseDate = new Date('2024-02-03T10:00:00Z')
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(baseDate)
      date.setHours(baseDate.getHours() - 3 * i)
      return date
    })

    account.deposit(200, dates[6])

    account.purchase(200, dates[5])

    account.payWithBalance(100, dates[4])

    account.withdraw(50, dates[3])

    account.payWithSlip(60, dates[2])

    account.updateUser({ name: 'Jane' }, dates[1])

    account.deposit(1000, dates[0])

    const initialDate = new Date()
    initialDate.setDate(initialDate.getDate() - 1)

    const statement = account.statement()

    const expected = `Saldo Atual: 2050
--------------------
Sat, 03 Feb 2024 10:00:00 GMT - Depósito: +1000,
--------------------
Sat, 03 Feb 2024 01:00:00 GMT - Saque: -50,
--------------------
Fri, 02 Feb 2024 22:00:00 GMT - Pagamento de Fatura: -100,
--------------------
Fri, 02 Feb 2024 16:00:00 GMT - Depósito: +200`

    assert.deepEqual(statement, expected)
    assert.deepEqual(account.logs.at(-1), {
      type: 'statement',
      data: { statement: expected },
      currentBalance: 2050,
      date: new Date(),
    })
  })
})
