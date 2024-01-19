## Carrinho de compras

### Instruções

Escreva um programa que permite a adição e remoção de uma lista de produtos predefinidos à um carrinho de compras, bem como a exibição do total da compra, contando com a soma de todos os itens atualmente no carrinho. Para a soma de itens, utilize o conceito de recursividade em sua solução. Para cada possível ação, considere os estados possíveis do carrinho: vazio e com itens.
Atente-se a exibição dos itens com a formatação correta de quantidade e preço, e considere a adição de múltiplos itens. As funções para manipulação dos itens do carrinho recebem a lista de produtos e o carrinho atual como parâmetros. Verifique a assinatura das funções para sua implementação.

### Exemplos

#### Menu inicial

```bash
$:
Mercado Digital
1. Adicionar item ao carrinho
2. Remover item do carrinho
3. Exibir total
4. Sair

Escolha uma opção: _
```

#### Adicionar item ao carrinho

```bash
$:
Escolha uma opção: 1

Qual item você deseja adicionar?
1. Maçã - R$ 0.50 / unidade
2. Pão - R$ 2.20 / kg
3. Leite - R$ 3.00 / litro
4. Frango - R$ 12.00 / kg

1
Qual quantidade deseja adicionar? (escolha um número inteiro maior que 1)
4
4 unidades do item maçã foi adicionado ao seu carrinho!
```

#### Remover item do carrinho

```bash
$:
Escolha uma opção: 2

Qual item você deseja remover?
1. Maçã - Quantidade: 4, Subtotal: R$ 2.00
2. Pão - Quantidade: 2, Subtotal: R$ 4.40

1
Qual quantidade deseja remover?
1

Seu carrinho contém no momento:
1. Maçã - Quantidade: 3, Subtotal: R$ 1.50
2. Pão - Quantidade: 2, Subtotal: R$ 4.40

Total no carrinho: R$ 5.90
```

#### Exibir total

```bash
$:
Escolha uma opção: 3

Seu carrinho contém no momento:
1. Maçã - Quantidade: 4, Subtotal: R$ 2.00
2. Pão - Quantidade: 2, Subtotal: R$ 4.40

Total no carrinho: R$ 6.40
```

### Testes

Este exercício não contém testes automatizados.
