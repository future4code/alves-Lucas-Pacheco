// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i+1] = 19
// console.log('e. ', array)

// const valor = array[i+6]
// console.log('f. ', valor)

//Resposta 1 - a - undefined, b - null, c. 10, d - 0, e - 19, f. - 6

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Resposta - primeiramente a frase deixara tudo em MAISCULO, em seguida trocara todas as letras A pela letra I, em seguida contara os numeros de letras na frase e os espaços.
// Resposta 2 - SUBI NUM ÔNIBUS EM MIRROCOS, tendo ele 27 carateres.

let nomeEx1 = prompt("Me diga seu nome: ")
let emailDoUsuário = prompt("Me diga seu email")
console.log(`O e-mail ${emailDoUsuário} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeEx1}`) 

 let comidasFavoritas = ["estrogonofe", "carne", "frango", "ovo", "feijão"]
console.log(comidasFavoritas)
console.log(`Essas são minhas comidas favoritas \n ${comidasFavoritas[0]}\n${comidasFavoritas[1]}\n${comidasFavoritas[2]}\n${comidasFavoritas[3]}\n${comidasFavoritas[4]}`)
let nomeEx2 = prompt("Me diga uma de suas comidas favoritas?")
comidasFavoritas.splice(1, 1, nomeEx2)
console.log(comidasFavoritas) 

let array = []
let listaDeTarefas = array
let i = 0
let dados = prompt("Me diga uma de suas tarefas")
array [i] = dados
dados = prompt("Me diga uma segunda tarefa")
array [i += + 1] = dados
dados = prompt("Me diga uma terceira tarefa")
array [i += + 1] = dados
console.log(listaDeTarefas)
let tarefas1 = prompt("Me diga uma de suas tarefas concluidas, 0, 1, 2")
array.splice(tarefas1, 1)
console.log(listaDeTarefas)


 let fraseD1 = prompt("Me Diga uma frase")
let array = fraseD1.split(' ')
console.log(array)

let arreyD2 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(`Na Arrey em questão o Abacaxi está em ${arreyD2.indexOf("Abacaxi")}, de uma arrey de ${arreyD2.length}`)

