## Conversor de Temperaturas

### Instruções

Escreva a função `convertTemps` que aceita um array de objetos com duas propriedades: `value` - o valor da temperatura e `unit` - a unidade de medida em Celsius ou Fahrenheit, representado pelas letras C e F. A função deve converter cada temperatura para a unidade oposta.

### Exemplo

```javascript
const temps = [
  { value: 32, unit: 'C' },
  { value: 0, unit: 'F' },
]

const output = convertTemps(temps)
// [{ value: 89.6, unit: 'F' }, { value: -17.78, unit: 'C' }]
console.log(output)
```

### Testes

Este exercício contém testes. Utilize o comando `node --test` ou `npm run test` para executar os testes para sua solução
