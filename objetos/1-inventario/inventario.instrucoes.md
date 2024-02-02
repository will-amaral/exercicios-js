## Inventario

### Instruções

Cria uma aplicação de inventário que armazena os itens do inventário como chaves de um objeto com a quantidade de itens como valor. Seu inventário deve iniciar como um objeto vazio, e conter os métodos `add` para adição e `remove` para remoção de itens. Se o item já existe como propriedade, a quantidade deve ser incrementada ao usar o método de adição. Senão, a chave deve ser criada.

### Exemplos

```javascript
const inventario = new Inventario()
// Exibe undefined - Nenhum item foi adicionado ainda
console.log(inventario.banana)
// Adiciona o item banana
inventario.add('banana', 1)
// Exibe 1 na tela
console.log(inventario.banana)
// Adiciona mais 4 itens à quantidade do item
inventario.add('banana', 4)
// Exibe 5 na tela
console.log(inventario.banana)
// Remove 2 itens
inventario.remove('banana', 2)
// Exibe 3 na tela
console.log(inventario.banana)
```

### Testes

Este exercício contém testes. Utilize o comando `node --test` ou `npm run test` para executar os testes para sua solução
