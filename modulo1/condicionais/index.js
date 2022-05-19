//EXERCICIO 1 
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
//Reposta 1 A - Ele realiza se o numero dado pela pessoa é Par.
//Reposta 1 B - Para numeros pares, numeros que resto é 0.
//Resposta 1 C - Para todos os números impares.

//EXERCICIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//Resposta 2 A - Para falar o preço das frutas, baseado no que você escreveu.
//Resposta 2 B - O Preço da fruta maçã, é R$ 2.25
//Resposta 2 C - Não mostraria nada, pois código continuaria infinitamente.

//EXERCICIO 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//Resposta 3 A  - Esta perguntando um número para pessoa.
// Resposta 3 B - O Resultado seria false.
// Resposta 3 C - Bom como mensagem não foi retornado, ele é uma variável que só existe dentro do if.


//Exercícios de Escrita de código

// let idadeEx1 = Number(prompt("Me diga sua idade"))
// if (idadeEx1 >= 18) {
//     console.log("Você pode dirigir")

// } else {
//     console.log("Você não pode dirigir")
// }

//Ex2

// let turno = prompt("Me diga qual turno, sendo M matutino, V vespertino, N noturno").toUpperCase()

// function periodo(p) {
//     if (p === "M"){
//         console.log("Bom Dia!")
    
//     }else if (p === "V") {
//         console.log("Boa tarde")

//     }else if (p === "N") {
//         console.log("Boa Noite")

//     }else {
//         console.log("Você não colocou um periodo")
//     }
    

// } 


// periodo(turno)

//Ex3

// function periodoS(s) {
//     switch (s) {
//         case "M":
//             console.log("Bom Dia!")
//             break
//         case "V":
//             console.log("Boa Tarde!")
//             break
//         case "N":
//             console.log("Boa Noite!")
//             break
//         default:
//             console.log("Você não colocou um periodo")
//             break 
//     }
// }

// periodoS(turno)

//EX4 
// let genero = prompt("Me diga qual gênero de filme você quer ver").toLowerCase()
// let preço = Number(prompt("Me diga o valkor do ingresso"))
// let amigo = "fantasia"

// function cinema(g, ingresso, a) {
//     if (ingresso <= 15 && g === a) {
//         console.log("Bom filme!")

//     } else {
//         console.log("Escolha outro filme :(")
//     }
// }

// cinema(genero, preço, amigo)


// //Desafio1

// function cinemaD1(g, ingresso, a) {
//     if (ingresso <= 15 && g === a) {
//         let doce = prompt ("Qual Snack que você quer compra?")
//         console.log(`Bom filme! Aproveite seu ${doce}`)
        

//     } else {
//         console.log("Escolha outro filme :(")
//     }
// }
//Desafio2

// cinemaD1(genero, preço, amigo)

let nomeD2 = prompt("Me diga seu nome completo")
let tipoDeJogo = prompt("Me diga se É iN indica internacioal, DO indica doméstico").toUpperCase()
let etapaDoJogo = prompt("Me diga se é SF, DT, FI ").toUpperCase()
let categoria = +prompt("Me diga a categoria, 1,2, 3, 4")
let quantidade = +prompt("Quantidade de ingresso")
const categoria1 = Number([1320, 660, 1980])
const categoria2 = Number([880, 440, 1320])
const categoria3 = Number([550, 330, 880])
const categoria4 = Number([220, 170, 330])

function sistemaDeVendas(item1, item2, item3, item4, item5, item6, item7, item8, item9) {
    if (item2 === "IN" && item3 === "SF" && item4 === 1 ) {
        console.log("Nome do cliente:" + item1)
        console.log("Tipo do Jogo: Internacional")
        console.log("Etapa do Jogo: Semi-Final")
        console.log("Categoria: " + item4)
        console.log(`Quantidade de ingressos: ${item5}`)
        console.log("---------Valores-----------")
        console.log(`Valores do ingressos: ${item6[0]}`)
        console.log(`Valores total ${(item6[0] * 4,10) * item4} `)

    } else {
        console.log("FUncionou o teste")
    }

}

sistemaDeVendas(nomeD2, tipoDeJogo, etapaDoJogo, categoria, quantidade, categoria1, categoria2, categoria3, categoria4)
