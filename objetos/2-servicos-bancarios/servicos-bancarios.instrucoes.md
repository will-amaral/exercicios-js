## Serviços Bancários

### Instruções

Crie uma aplicação de conta bancária que armazena o saldo, cartão de crédito e as informações de um usuário. O construtor da conta deve receber como parâmetro os dados do usuário, a data de vencimento do cartão escolhida e seu saldo inicial. As propriedades da conta devem ser o saldo, limite do cartão disponível, limite do cartão utilizado, data de criação da conta, dia de vencimento do cartão, além de nome, cpf e endereço do usuário. Os métodos do objeto devem ser: saque, depósito, extrato, alterar dados do usuário, compra no cartão, solicitar aumento de limite do cartão, pagamento de fatura do cartão com saldo e pagamento de fatura do cartão por boleto. Todas as transações da conta devem ser armazenadas em um log do usuário com data para serem consultadas posteriormente utilizando a função de extrato, que recebe como parâmetro uma data inicial e opcionalmente uma data final. A utilização do sistema deve ser possível por meio de um menu de opções OU programaticamente.

A estrutura final do objeto deve ser:

```javascript
const conta = new BankAccount({ name: 'Will', cpf: '123', address: 'Rua Tal' }, 10, 1000)
// Deve gerar a estrutura:
 {
  // PROPRIEDADES
  //saldo
  balance: 1000,
  // limite total do cartão
  cardLimit: 300,
  // limite do cartão utilizado
  usedLimit: 0,
  // data de criação da conta (A data em questão não deve ser uma string, mas sim uma instância de Date)
  creationDate: '2024-02-02',
  // dia de vencimento do cartão
  cardDueDate: 10,
  // dados do usuário
  user: {
    name: 'Will',
    cpf: '123',
    address: 'Rua Tal'
  },
  // armazenamento de transações a serem exibidas pelo extrato
  log: []
  // MÉTODOS
  // Saque - recebe o valor a ser sacado subtraindo de balance
  withdraw(value) {}
  // Depósito - recebe o valor a ser depositado adicionando a balance
  deposit(value) {}
  // Extrato - Log de ações - Recebe uma data inicial e uma data final (data final opcional, por padrão deve ser a data de hoje)
  statement(startDate, endDate) {}
  // alterar dados do usuário - recebe os novos dados como parâmetro
  updateUser(newUser) {}
  // Compra no cartão - adiciona o valor ao limite utilizado. Não pode ser maior que o limite total
  purchase(value) {}
  // Solicitar aumento de limite - pode ser aprovado ou negado
  increaseLimit() {}
  // Pagar a fatura com o saldo - deve subtrair de balance e liberar o valor em limite utilizado. Pode ser parcial
  payWithBalance(value) {}
  // Pagar a fatura com boleto - libera o valor em limite utilizado mas não deve subtrair de balance. Pode ser parcial
  payWithSlip(value) {}
}
```

#### Regras de Negócio

- O limite do cartão deve seguir uma fórmula matemática com base no saldo do usuário e a data de criação da conta: O limite possível base deve ser de 30% do saldo. Esse valor aumenta em 2% para cada mês de distância entre a data atual e a data de criação da conta.
  Ou seja, para uma conta criada no mesmo dia, com um saldo de 1000 reais, o limite possível é de 300 reais. Entretanto, para uma conta criada há 5 meses atrás, o limite possível aumenta em 10%, sendo o total de 40%. Ou seja, o limite possível é de 400 reais. A alteração de um limite em comparação com a data de criação de uma conta só ocorre quando o usuário solicita o aumento (pela função `increaseLimit`).
- O log das transações a serem exibidos pelo extrato deve seguir o formato: `<Data> - <Transação>: <símbolo de operação> valor`. Ou seja, para um saque de 20 reais, o log que irá exibir no extrato para essa transação será: `"2022-02-02 - Saque: -20"`. Para armazenar a transação no array, é recomendado utilizar um objeto. Caso a operação não altere o saldo, ela deve ser armazenada no log, mas não deve ser exibida no extrato. Ao chamar a função `statement`, a primeira linha deve ser o saldo total da conta, seguido pela lista de transações que alteraram o saldo em ordem cronológica inversa.
- Todas as transações devem exibir no console informações do que foi alterado.
- Seu código deve evitar alterar manualmente o valor das propriedades. Utilize apenas os métodos.
- As datas devem ser uma instância de `Date` - [Veja a documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Fique atento às operações inválidas: Por exemplo, o saque de um valor maior que o saldo deve ser proibido.

### Testes

Este exercício contém testes. Utilize o comando `node --test` ou `npm run test` para executar os testes para sua solução
