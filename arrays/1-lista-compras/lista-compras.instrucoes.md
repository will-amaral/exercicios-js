## Lista de Compras

### Instruções

Escreva um script que gerencie uma lista de compras utilizando um menu de opções. As opções do menu devem ser:

- adicionar item à lista,
- remover item da lista,
- exibir a lista de itens com a quantidade de itens adicionada.

Exemplo: se forem adicionados os itens "maçã" duas vezes seguida, a exibição da lista deve ter: "2 maçã". Não se preocupe com o plural das palavras. A exibição da lista deve ser na forma de bullet points, com cada item ocupando uma linha precedido de um bullet point. A remoção de itens múltiplos deve ser feita diminuindo a quantidade de itens um a um. Veja os exemplos abaixo da interação com a linha de comando.

###### Menu inicial

```bash
$:
Lista de compras
1. Adicionar item
2. Remover item
3. Exibir lista
4. Sair

Escolha uma opção: _
```

###### Exibir lista (lista vazia)

```bash
$: Escolha uma opção: 3
Não há itens na sua lista
```

###### Exibir (lista com itens)

```bash
$: Escolha uma opção: 3
Sua lista de compras contém:
* banana
* morango
```

###### Exibir (lista com itens agregados)

```bash
$: Escolha uma opção: 3
Sua lista de compras contém:
* 2 banana
* 3 morango
```

###### Remover item (lista vazia)

```bash
$: Escolha uma opção: 2
Não há itens para remover
```

###### Remover item (lista com itens)

```bash
$: Escolha uma opção: 2
Qual item você deseja remover?
1- banana
2- morango
2

Sua lista de compras contém:
* banana
```

###### Remover item (lista com itens agregados)

```bash
$: Escolha uma opção: 2
Qual item você deseja remover?
1- 2 banana
2- 3 morango
2

Sua lista de compras contém:
* 2 banana
* 2 morango
```

### Testes

Este exercício não contém testes unitários/automatizados. A funcionalidade deve ser testada manualmente ao executar o script.
