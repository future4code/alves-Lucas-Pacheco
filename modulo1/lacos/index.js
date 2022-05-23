//Ex1 

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//Resposta 1  -  Ele está repetindo um loop for até o indice, menor, enquanto Valor é indice + ele mesmo, pois valor aumenta junto com indice.
// O que seria identicado nesse caso é 10.

//EX2 

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//Resposta 2 A - Sera impresso todos os números acima do 18.
// Respoista 2 B -  você retira o iff e deixa apenas console.log(numeros)

//EX3 
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//Resposta Separando em partes.
//Inicialmente pedimos um numero de linhas para o usuário.
//depois escolher que a quantidade atual é = a 0.
// Utilizamos o While para mostrar que enquanto a quantidadeAtual for menor que a Quantidade Total, o loop vai ser executado.
// Definidos que Let é igual uma string vazia.
// Utilizamos o For para definir asterico = 0, enquanto astericos for menor que a quantidade atual de +1; asteriscos em cada uma reptição mais 1
//Transformamos então linha que era uma string vazia em += "*"
//O Código vai começar inicialmente fazendo 5 slops, para quantidade atual ser menor que 4, no entanto chegando em 4 ele vai passar pra linha de baixo.
//Sendo ela uma string não existe solução.
// Então ela se passou para o For, os Asteriscos igual a 0 vão começar fazer mesmo que o While no entanto com a quantidade atual de linhas, então a string vazia será convertida em "*"
//console.log(linha) vai converter os asteriscos em, dando 4 repetições desta maneira
//*
//** 
//*** 
//****
//quantidadeAtual++ vai fazer com que a quantidade atual que era 4 se torne 5, assim finalizando a função pois ela será false.


//Exercicios de Escrita de Código 

//Ex1 
// let bichinhosUsuarios = Number(prompt("Quantos Bichos se tem? "))
// let  array = []
// if(bichinhosUsuarios === 0) {
//     console.log("Pode adotar um bicho seu vagabundo")

// } else {

//     for(let indice = 0; indice<bichinhosUsuarios; indice++) {
//         let bicho = prompt("Nome dos seus bichos?")
//         array[indice] = bicho
//     }
//     for(let arrayEx1 of array ) {
//         console.log(arrayEx1)
//     }


// }

//Ex2

const numero = [15, 40, 50, 60, 55, 67]

function ex2A(array) {
    for (let ex2A of array) {
        console.log(ex2A)

    }

}


function ex2B(batata) {

for (let ex2B of batata) {
    console.log(ex2B / 10)
}

}
function ex2C(array) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            novoArray[i] = array[i]
        }

    }
    console.log(novoArray)
}

function ex2D(array) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        novoArray[i] = `O Elemento do index ${i} é ${array[i]}`

    }
    for (let teste of novoArray) {
        console.log(teste)
    }

}

function ex2E(array) {
    let maior = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]

        }

    }
    let menor = Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i]

        }
    }
    console.log(` meu maior número é ${maior} e meu menor número é ${menor}`)
}
ex2A(numero)
ex2B(numero)
ex2C(numero)
ex2D(numero)
ex2E(numero)

