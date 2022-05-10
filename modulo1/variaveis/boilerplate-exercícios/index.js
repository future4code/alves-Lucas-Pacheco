/*let a = 10
let b = 10
console.log(b)*/

//Nesse caso o Código irá mostrar o número 10.

/*b = 5
console.log(a, b)*/

//Nesse caso o código vai mostrar o número 10 E 5

//Exercicio 2

/*let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)*/

//Resposta -  20, 10, 10 ou no caso não teria o c, afinal não teve let antes então seria 20, 10.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

//Resposta - Nesse caso ele perguntou as horas trabalha e o que recebe por dia, usou os conchetes e o simbolo de real para saber a divisão e o valor total que ele recebe por hora trabalhada, utilizou do Alert para mostrar na tela.

let nome = undefined
let idade = undefined
console.log("tipo do seu nome é", typeof nome, "tipo da sua idade é", typeof idade) 

//Resposta - Como Undefined é indefinido independente do seu typeof também será indefinido, até que uma variável seja colocada como valor

 nome = prompt("Qual é seu nome")
idade = prompt("Qual é sua idade")
console.log("Tipo do seu nome é", typeof nome, "tipo da sua idade é", typeof idade)

//Resposta - Acabei por notar que se deixasse o nome em cons ele não mudaria quando troquei a variável, nome então tive que trocar para let.

/* console.log("Qual é seu nome? ", nome, "Qual é sua idade? ", idade) */

 let almoço = prompt('Você almoço hoje? ')
let Café = prompt("Você tomou café da tarde hoje? ")
let janta = prompt("Você jantou hoje? ")
console.log("Sua resposta para o Almoço foi", almoço)
console.log("Sua resposta para o lanche da tarde foi:", Café)
console.log("Sua resposta para o jantar foi:", janta) 

let a = prompt("O Valor de A é: ")
let b = prompt("O Valor de B é: ")
let c = a 
a = b 
console.log("O novo valor de A é: ", a, "E o novo valor de B é: ", c ) 

let num1 = Number(prompt("Me diga um número: "))
let num2 = Number(prompt("Me diga outro número: "))
let x = num1 + num2 
let y = num1 * num2
console.log("A Soma dos números é igual: ", x, "E sua multiplicação é igual: ", y)


