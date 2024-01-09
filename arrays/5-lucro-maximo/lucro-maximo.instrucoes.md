## Lucro Máximo em períodos

### Instruções

Escreva uma função que recebe dois arrays como parâmetro. O primeiro array representa os valores de compra de ações em determinado momento do tempo, e o segundo representa os valores de venda das mesmas ações em uma data posterior. A posição no array representa a ação comprada. A função deve retornar o valor máximo de lucro obtido em cada transação, bem como a posição do array que a ação se encontra. Atenção no tratamento de casos de erro (Verifique os requisitos adicionais analisando os casos de teste).

### Exemplos

```javascript
const purchases = [7, 1, 5]
const sales = [3, 6, 4]
const output = maxProfit(purchases, sales)
// "Posição 1 - Lucro: 5"
console.log(output)
```

### Testes

Este exercício contém testes. Utilize o comando `node --test` ou `npm run test` para executar os testes para sua solução
