//Ex 1
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//Resposta 1 vai multiplicar o numero por 5, 
// B - O Numero ia multiplicar mas não ia aparecer no console, ou só ia aparecer a função completa sua sintaxe


// Ex 2
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
// R A - Ela passar todas as letras para minusculos, e procura no texto a palavra cenoura.
/* R B -
i - eu gosto de cenoura true.
ii - cenoura é bom pra vista true
ii cenouras crescem na terra, false.*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

 function ex1A(apresentação) {
return  console.log("Olá meu nome é lucas, tenho 20 anos, moro em osasco e sou estudante da labenu")
 
}
console.log(ex1A())

let nomeEx1 = prompt("Me diga seu nome")
let idadeEx1 = Number(prompt("Me diga sua idade"))
let moraEx1 = prompt("Me diga aonde mora")
let profissaoEx1 = prompt(" Me diga o que você faz")

function ex1B(nome, numero, moradia, profissao) {
 return  console.log(`Eu sou ${nome}, tenho ${numero} anos, moro em ${moradia}, e minha profissão é ${profissao}`)

}

console.log(ex1B(nomeEx1, idadeEx1, moraEx1, profissaoEx1)) 

// // EX 2

let somar = (numero1, numero2) => {
    soma = numero1 + numero2
    return soma
}

console.log(somar(2, 5))

// B

let booleano = (num1, num2) =>{
    bole = num1 >= num2
    return bole
}

console.log(`Seu Numero é maior ou igual ao segundo: ${booleano(3, 5)}`)


// //C

let parImpar = (num1) =>{
par = num1 % 2
resposta = par === 0
return resposta
}

console.log(`Se seu número for par, resultado será true, se for impar será falso ${parImpar(5)}`)

// D'



let exD = "Rubem Alves"
function formatar(nome1)  {
 return `Seu nome em maisculo é ${nome1.toUpperCase()} e sua quantidade de letras é ${nome1.length}`
 }

 console.log(formatar(exD))

// Ex 3

primeiroNumero = +prompt("Digite seu primeiro número")
segundoNumero = +prompt("Me diga um segundo número")

let soma = (num1, num2) =>{
    soma = num1 + num2
    return soma 
}

let sub = (num1, num2) =>{
    sub = num1 - num2
    return sub 
}

let multi  = (num1, num2) =>{
    mult  = num1 * num2
    return mult 
}

let divisão = (num1, num2) =>{
    divisão  = num1 / num2
    return divisão
}

// console.log(`Os numeros inseridos foram ${primeiroNumero} e ${segundoNumero}\n a soma é ${soma(primeiroNumero, segundoNumero)}\n a diferença é ${sub(primeiroNumero, segundoNumero)}\n a multiplicação é ${multi(primeiroNumero, segundoNumero)}\n e a divisão ${divisão(primeiroNumero, segundoNumero)}`)
console.log(`Os numeros inseridos foram ${primeiroNumero} e ${segundoNumero}`)
console.log(`A Soma é: ${soma(primeiroNumero, segundoNumero)} `)
console.log(`A Diferença é: ${sub(primeiroNumero, segundoNumero)}`)
console.log(`A Multiplicação: ${multi(primeiroNumero, segundoNumero)}`)
console.log(`A Divisão é: ${divisão(primeiroNumero, segundoNumero)}`)


//Desafio 1


let Desafio1B = Number(prompt("Me Diga 1 número"))
let Segundo = Number(prompt("Me diga um segundo número"))

let d1A = (num1) => {console.log(num1)}

let d1B = (num2, num3) => {
    let soma = num2 + num3
    d1A(soma)

}
d1B(Desafio1B, Segundo)

//Desafio 2
function Desafio2(ladoA, ladoB) {
    hipo = Math.hypot(ladoA, ladoB)
    return hipo
    
}

console.log(`Sua Hipotenusa é: ${Desafio2(10, 5)}`)







