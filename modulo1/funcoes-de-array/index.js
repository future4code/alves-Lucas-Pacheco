//Ex1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//Resposta 1 A - será imprimido
// inicialmente será imprimido a linha inteira, em seguida será empreso o numero dela no indice [0, 1, 2] e o array completo logo em seguida
// Vai ser um nome por linha mas o indice e o Array completo terão em todas.
//O que não entendi foi pq apelido foi impresso primeiro que nome.

//Ex2 

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })

//   console.log(novoArrayB)

//Resposta 2 A - Será apenas impresso apenas os nomes, sem os apelidos.

//Ex3

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })

//   console.log(novoArrayC)

//Resposta 3 A -  Será impresso os nomes com apelido menos, o da Laura chijo.

// EXERCICIOS DE ESCRITA DE CÓDIGO.

// const  pets = [
//     { nome: "Lobinho", raca: "Husk"},
//     { nome: "Joaozinha", raca: "salsicha"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "poodle"},
// ]

// const nomeDosDogs = pets.map((nomes) => {
//     return nomes.nome
// })

// console.log(nomeDosDogs)

// const cachorroSalsicha = pets.filter((salsicha) => {
//     return salsicha.raca.toLowerCase() === "salsicha"
// })

// console.log(cachorroSalsicha)

// const cachorroPoodle = pets.filter((poodle) => poodle.raca.toLowerCase() === "poodle").map((poodle) => {
//     return `Você ganhou um desconto de 10% para tosar o/a ${poodle.nome}`

// } )

// console.log(cachorroPoodle)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeProdutos = produtos.map((nome) => {
    return nome.nome
})

console.log(nomeProdutos)

//B


// const mostrandoDesconto = produtos.map((desconto) => {
//     let calculandoDesconto = {
//         calculandoDesconto: desconto.preco - (desconto.preco * 5/100)

//     }
// return calculandoDesconto
// })

// console.log(mostrandoDesconto)

// const bebidas = produtos.filter((bebida) => {
//     return bebida.categoria.toLowerCase() === "bebidas"
// })

// console.log(bebidas)

// const acharProdutosYpê = produtos.filter((produto) => {
//     return produto.nome.includes("Ypê")
// })

// console.log(acharProdutosYpê)

// const comprarProdutosYpê = acharProdutosYpê.map((produto) => {
//     return `compre ${produto.nome} por R$ ${produto.preco}`
// })

// console.log(comprarProdutosYpê)

//Desafio 1

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 let ordemAlfabetica = pokemons.map((pokemon) => {
     return pokemon.nome
 })

 ordemAlfabetica.sort()

 console.log(ordemAlfabetica)

 //Desafio 2 

let tipos = pokemons.filter((pokemon) => { 
    return pokemon.tipo
})

// console.log(tipos)

let tipos2 = tipos.map((pokemon) => {
    return pokemon.tipo

     
})

//console.log(tipos2)

let tipos3 = tipos2.filter((tipos, i) => {
    return tipos2.indexOf(tipos) === i
})

console.log(tipos3)

