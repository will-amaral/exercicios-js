## Palíndromo

### Instruções

Você sabe o que é um palíndromo?

> Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para diante. Por extensão, palíndromo é qualquer série de elementos com simetria linear, ou seja, que apresenta a mesma sequência de unidades nos dois sentidos

A palavra _radar_ por exemplo é um palíndromo. A frase _Roma é amor_ também. Neste exercício, você deve implementar uma função recursiva `isPalindrome` que recebe uma string como parâmetro e informa se aquela string é um palíndromo ou não. Fique atento às frases e cuide para ignorar os espaços e apenas comparar as letras.

### Exemplos

```javascript
// true
isPalindrome('radar')

//false
isPalindrome('carro')
```

### Testes

Este exercício contém testes. Utilize o comando `node --test` ou `npm run test` para executar os testes para sua solução
