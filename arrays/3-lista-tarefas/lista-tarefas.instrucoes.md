## Lista de Tarefas

### Instruções

Crie uma aplicação de Tarefas. A aplicação deve exibir um menu de opções para adicionar uma tarefa, remover uma tarefa, completar uma tarefa e listar todas as tarefas, incluindo o status de cada tarefa: (feita ou pendente). As tarefas devem ser armazenadas em um array e devem ser objetos com uma descrição e um status de propriedades. O código inicial já contém o boilerplate para exibição do menu, bem como anotações de tipos para os dados. Você deve implementar as funções respectivas as funcionalidades da aplicação. Todas as tarefas adicionadas começam pendentes.

### Exemplos

###### Menu inicial

```bash
$:
Lista de tarefas
1. Adicionar tarefa
2. Remover tarefa
3. Marcar tarefa como concluída
4. Exibir tarefas
5. Sair

Escolha uma opção: _
```

###### Adicionar tarefa

```bash
$: Escolha uma opção: 1

Descreva a tarefa: _
```

###### Remover tarefa (lista vazia)

```bash
$: Escolha uma opção: 2
Não há tarefas para remover
```

###### Remover tarefa (lista com tarefas)

```bash
$: Escolha uma opção: 2
Qual tarefa você deseja remover?
1- Fazer compras - pendente
2- Limpar a casa - concluída
3- Comprar material - concluída
4- Estudar para a prova - pendente
2

Minhas tarefas:
* Fazer compras - pendente
* Comprar material - concluída
* Estudar para a prova - pendente
```

###### Concluir tarefa (lista vazia)

```bash
$: Escolha uma opção: 3
Não há tarefas
```

##### Concluir tarefa (lista com tarefas - tarefa pendente)

```bash
$: Escolha uma opção: 3
Qual tarefa você deseja concluir?
1- Fazer compras - pendente
2- Limpar a casa - concluída
3- Comprar material - concluída
4- Estudar para a prova - pendente
1

Minhas tarefas:
* Fazer compras - concluída
* Limpar a casa - concluída
* Comprar material - concluída
* Estudar para a prova - pendente
```

##### Concluir tarefa (lista com tarefas - tarefa concluída)

```bash
$: Escolha uma opção: 3
Qual tarefa você deseja concluir?
1- Fazer compras - pendente
2- Limpar a casa - concluída
3- Comprar material - concluída
4- Estudar para a prova - pendente
2

Esta tarefa já foi concluída
```

###### Exibir lista (lista vazia)

```bash
$: Escolha uma opção: 4
Não há itens na sua lista
```

###### Exibir (lista com tarefas)

```bash
$: Escolha uma opção: 4
Minhas tarefas:
* Fazer compras - pendente
* Limpar a casa - concluída
* Comprar material - concluída
* Estudar para a prova - pendente
```

### Testes

Este exercício não contém testes unitários/automatizados. A funcionalidade deve ser testada manualmente ao executar o script.
