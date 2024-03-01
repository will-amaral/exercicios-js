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
  logs: []
  // MÉTODOS (Todos os métodos podem receber uma data opcional. Caso ela não seja passada, a data utilizada será o padrão de new Date())
  // Saque - recebe o valor a ser sacado subtraindo de balance
  withdraw(value, date?) {}
  // Depósito - recebe o valor a ser depositado adicionando a balance
  deposit(value, date?) {}
  // Extrato - Mostra o extrato das transações que alteraram o saldo da conta
  statement(date?) {}
  // alterar dados do usuário - recebe os novos dados como parâmetro
  updateUser(newUser, date?) {}
  // Compra no cartão - adiciona o valor ao limite utilizado. Não pode ser maior que o limite total
  purchase(value, date?) {}
  // Solicitar aumento de limite - pode ser aprovado ou negado
  increaseLimit(date?) {}
  // Pagar a fatura com o saldo - deve subtrair de balance e liberar o valor em limite utilizado. Pode ser parcial
  payWithBalance(value, date?) {}
  // Pagar a fatura com boleto - libera o valor em limite utilizado mas não deve subtrair de balance. Pode ser parcial
  payWithSlip(value, date?) {}
}
```

#### Regras de Negócio e Dicas

- O limite do cartão deve seguir uma fórmula matemática com base no saldo do usuário e a data de criação da conta: O limite inicial deve ser de 25% do saldo inicial. Posteriormente, o limite aumenta em 12% para cada mês de distância entre a data atual e a data de criação da conta.
  Ou seja, para uma conta criada no mesmo mês, com um saldo de 1000 reais, o limite possível é de 250 reais. Entretanto, para uma conta criada há 5 meses atrás com o mesmo saldo, o limite possível aumenta em 60% sobre os 250 reais, sendo o total de 5 \* 12%. O total do limite possível neste exemplo é de 400 reais. A alteração de um limite em comparação com a data de criação de uma conta só ocorre quando o usuário solicita o aumento (pela função `increaseLimit`).
- O log das transações a serem exibidos pelo extrato deve iniciar sempre com o saldo atual na primeira linha seguido pelas transações em ordem cronológica reversa (do mais recente ao mais antigo), cada uma em uma linha.
  As transações devem seguir o formato: `<Data da transação> - <Operação>: <Sinal da operação><Valor>`. Por exemplo, para um saldo inicial de 1000 reais, seguido de um depósito de 200, o pagamento de uma fatura de cartão de 100, um saque de 50 e outro depósito de 1000 reais, o log que deve exibir: no extrato para essa transação será:

```
Saldo Atual: 2050
--------------------
Sat, 03 Feb 2024 10:00:00 GMT - Depósito: +1000,
--------------------
Sat, 03 Feb 2024 01:00:00 GMT - Saque: -50,
--------------------
Fri, 02 Feb 2024 22:00:00 GMT - Pagamento de Fatura: -100,
--------------------
Fri, 02 Feb 2024 16:00:00 GMT - Depósito: +200
```

- Para armazenar a transação no array de logs, utilize um objeto com o seguinte formato:

```javascript
const log = {
  // O tipo da operação
  type: 'withdraw',
  // Os dados da operação. Cada operação possui um conjunto de dados específicos.
  // Verifique o caso de teste marcado como it('logs each transaction')
  // para entender os dados esperados para cada tipo de transação
  data: {},
  // O saldo atual no momento da transação
  currentBalance: 2000,
  // A data no momento da transação
  date: new Date(),
}
```

- Caso a operação não altere o saldo, ela deve ser armazenada no log, mas não deve ser exibida no extrato. Ao chamar a função `statement`, a primeira linha deve ser o saldo total da conta, seguido pela lista de transações que alteraram o saldo em ordem cronológica inversa. As operações que alteram o saldo são: `deposit`, `withdraw` e `payWithBalance`. A chamada da função `statement` também deve ser armazenada no log de transações.
- Todas as transações devem exibir no console informações do que foi alterado.
- Seu código deve evitar alterar manualmente o valor das propriedades, exceto quando estiver testando algum comportamento. Utilize apenas os métodos. Verifique os testes para entender como você deve utilizar a função construtora.
- As datas devem ser uma instância de `Date` - [Veja a documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Fique atento às operações inválidas: Por exemplo, o saque de um valor maior que o saldo deve ser proibido.

### Testes

Este exercício contém testes. Utilize o comando `node --test` ou `npm run test` para executar os testes para sua solução
