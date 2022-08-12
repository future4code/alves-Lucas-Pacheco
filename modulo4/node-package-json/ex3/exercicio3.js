const fs = require('fs');

const tarefa = process.argv[2]

const ListaDeTarefas = [
    "Lavar Louça",
    "Comprar Leite",
    tarefa
]



const tarefasString = JSON.stringify(ListaDeTarefas)

console.log(ListaDeTarefas)

fs.writeFileSync(__dirname + "/save.json", tarefasString)

const dados = fs.readFileSync(__dirname + "/save.json")

const dadosMockados = JSON.parse(dados)

console.log(dadosMockados)

