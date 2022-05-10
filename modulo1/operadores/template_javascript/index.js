// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

// Resposta 1  - a. true  b. false, c. false, d. boleans

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// Resposta 2 - Sera impresso os dois números juntos mas não somados.

//Resposta 3 - Para transformar em número é utilizado o comando Number(Prompt("Digite um número"))

//1 

let suaIdade = Number(prompt("Me diga sua idade"))
let amigoIdade = Number25(prompt("Me diga a idade do seu melhor amigo"))
let resultado = suaIdade > amigoIdade
console.log("Sua idade é maior que de seu amigo:", resultado)
let diferença = suaIdade - amigoIdade
console.log("A Diferença de idade de vocês é", diferença)

 let numeroPar = Number(prompt("Me diga um numero par"))
let resultado1 = numeroPar % 2
console.log("O Resto da sua divisão é:", resultado1) 

// Bem quando número é par o resto da divisão é sempre 0, quando número é Impar como 2 é o primeiro número par o resto da divisão sempre será 1

let idade = Number(prompt("Me Diga sua idade: "))
let  meses = idade * 12
let dias = idade * 365
let horas = idade * 8766
console.log("Sua idade é: ", idade, "Anos")
console.log(" Em meses sua idade é:  ", meses, "Meses")
console.log("Em dias sua idade é:", dias, "Dias" )
console.log("Em Horas sua idade é: ", horas, "Horas") 

 let primeiroNumero = Number(prompt("Me diga 1 Número"))
let segundoNumero = Number(prompt("Me diga um segundo número"))
let maior = primeiroNumero > segundoNumero
let igual = primeiroNumero === segundoNumero
let divisãoPrimeiro = (primeiroNumero % segundoNumero) === 0
let divisãoSegundo = (segundoNumero % primeiroNumero) === 0
console.log("Primeiro número é maior que o segundo:", maior)
console.log("Primeiro número é igual o segundo número:", igual)
console.log("Primeiro número é divisível pelo segundo: ", divisãoPrimeiro)
console.log("Segundo Número é divisível pelo primeiro: ", divisãoSegundo)


//Desafio - LIBERE UM DESAFIO DE CADA VEZ ASSIM VOCÊ VAI CONSEGUIR VISUALIZAR O FUNCIONAMENTO SEM DIFICULDADES

/* let calculeA = (77 - 32) * (5/9) + 273.15
console.log("Os Graus em Kelvin são equivalentes: ", calculeA, "K")
let calculeB = (80)*(9/5) + 32
console.log("Os Graus em Fahrenheit são equivalente: ", calculeB, "°F")
let calculeC = (30)*(9/5) + 32
let caculeC2 = (calculeC - 32) * (5/9) + 273.15
console.log("O Valor em F é igual:", calculeC, "E o Valor em K é", caculeC2)
let d = Number(prompt("Me Diga uma temperatura em Celsius"))
let calculed = (d)*(9/5) + 32
let caculed2 = (calculed - 32) * (5/9) + 273.15
console.log("O Valor em F é igual:", calculed, "E o Valor em K é", caculed2) 

let a = 280 
let calculeA = a * 0.05
console.log("O Valor consumido pela casa foi:", calculeA)
let calculeB = ((calculeA * 15 ) / 100 )
console.log("O Valor do desconto da família é", calculeB) 
 
let a = 20
let calculeA = a / 2.2046
console.log("20 libras equivalente a ", calculeA, "Kg")
let b = 10.5
let calculeB = b * 0.0283495
console.log("10.5oz equivalem a: ", calculeB, "Kg")
let c = 100
let calculeC = c * 1609.344
console.log("100mi equivalem a: ", calculeC, "m")
let d = 50
let calculeD = d * 0.3048
console.log("50ft equivalem a", calculeD, "m")
let e = 103.56
let calculeE = e * 3.785411784
console.log("103.56gal equivalem a:", e, "l")
let f = 450
let calculeF = f * 0.24
console.log("450 xic equivalem", calculeF, "l")
let g = Number(prompt("Me diga um Número em libras"))
let calculeG = g / 2.2046
console.log("Seu Número em Libras", g, "É Igual", calculeG, "Em KG") */
