// jsx
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//Resposta -  Matheus Nachtergaele, Virginia Cavendish, canal: "Canal Brasil", horario: "19h"

// Ex 2 

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// Resposta - 
// nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// Gato - Ia muda Juca por Juba,  e no caso da tartaruga Jubo e mostraria as mesmas informações que o cachorro

// Resposta b - Essa diz a respeito ela está copia do objeto anterior.

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//Resposta A - Irá retornar false, e a altura do objeto.
// B - No caso na função ta pedindo para retornar o objeto entre conchetes isso faz retornar pontos especificos do objeto, com base em uma string ou uma variável string.

// Exercícios de escrita de código.

//1

const pessoa = {
    nome: "Lucas",
    apelidos: ["Hipnos", "Gordão", "Magrão"]
    // Meus apelidos na rua ahsahshasa.
}
console.log(`Meu nome é ${pessoa.nome} e meus apelidos são ${pessoa.apelidos} `)

function pessoa2 () {
    const pessoa2 =  {
        ...pessoa,
        nome: "Matheus",
        apelidos: ["Ther", "Therzin", "Therzão"],

    }
    console.log(`Meu nome é ${pessoa2.nome}, meus apelidos são ${pessoa2.apelidos}`)

}

console.log(pessoa2())

const pessoaEx2 = {
    nome: "João Pedro",
    idade: 20,
    profissao: "Pedreiro",


}

const novapessoa = {
    ...pessoaEx2,
    idade: 24,
    profissao: "Jornalista",

}


function minhaFuncao (objeto1, objeto2) {
    let array = [objeto1.nome, objeto1.nome.length , objeto1.idade, objeto1.profissao, objeto1.profissao.length]
    let array2 = [objeto2.nome,  objeto2.nome.length , objeto2.idade, objeto2.profissao, objeto2.profissao.length]
    return (`Primeiro objeto igual: ${array}\n seu segundo ${array2}`) 
}

console.log(minhaFuncao(pessoaEx2, novapessoa))

let array = []
let carrinho = array

let lista = {
    nome: "Maçã", disponibilidade: true,
}

let lista2 = {
    nome: "Lima", disponibilidade: true,
}

let lista3 = {
    nome: "Abacate", disponibilidade: true

}

function conta(item1, item2, item3) {
    carrinho.push(item1)
    carrinho.push(item2)
    carrinho.push(item3)
    return carrinho
}

console.log(conta(lista, lista2, lista3))

//Desafio1

let desafio1 = {
    nome: prompt("Me diga seu nome"),
    idade: +prompt("Me diga sua idade"),
    profissao: prompt("Me diga sua profissão")


}

console.log(desafio1, typeof desafio1)

//Desafio 2

let filme1 = {
    nome: "Batman",
    ano: 2012,
}

let filme2 = {
    nome: "Homem de aço",
    ano: 2012
}

function datas(objeto1, objeto2) {
    antes =  objeto1.idade < objeto2.idade
    igual = objeto2.idade === objeto1.idade
    resposta = (`O Filme 1 foi lançado antes do filme 2? ${antes}\n os filmes foram lançados no mesmo ano? ${igual}`)
    return resposta
}

console.log(datas(filme1, filme2))

//Desafio 3 

function disponibilidade(item3) {
    const disponibilidadeNova = {
        ...item3,
        disponibilidade: false
    
    }
    carrinho.push(disponibilidadeNova)
    return carrinho
    

}

console.log(disponibilidade(lista3))