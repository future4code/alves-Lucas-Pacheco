// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  altura = Number(prompt("Me diga a altura do seu triangulo"))
  largura = Number(prompt("Me diga a largura do seu rentagulo"))
  area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  anoAtual = Number(prompt("Diga o Ano Atual: "))
  anoDeNascimento  = Number(prompt("Me diga seu ano de nascimento?"))
  idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  imc = peso / (altura * altura)
    return imc   

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt("Me diga seu nome: ")
  idade = Number(prompt("Me diga sua idade: "))
  email = prompt("Me diga seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Diga 1 cor")
  let cor2 = prompt("Diga sua segunda cor")
  let cor3 = prompt("Diga sua terceira cor")
  let array = [cor1, cor2, cor3]
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = prompt("Digite uma frase")
  console.log(string.toUpperCase())

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  sePaga = custo / valorIngresso
  return sePaga
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  função1 = string1.length === string2.length
  
  return função1
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  primeiro = array[0]
  return primeiro  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  ultimo = array.pop()
  return ultimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  p = array.shift()
  u = array.pop()
  array.push(p)
  array.unshift(u)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let passo1 = string1.toUpperCase()
  let passo2 = string2.toUpperCase()
  let passo3 = passo1 === passo2
  return passo3
}

// EXERCÍCIO 13

function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Me diga o ano atual"))
  let anoNascimento =  Number(prompt("Me diga seu ano de nascimento"))
  let anoCarteira = Number(prompt("Me diga o ano que sua carteira foi emitada"))
  if (anoAtual - anoNascimento > 20 && anoAtual - anoNascimento <= 50) {
     console.log(anoAtual - anoCarteira >= 10 )


   } else if (anoAtual - anoNascimento >= 50) {
    console.log(anoAtual - anoCarteira >= 15) 


   } else  (anoAtual - anoNascimento <= 20)
    console.log(anoAtual - anoCarteira >= 5)
   

} 



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 

 


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  idade = Number(prompt("Você tem mais de 18 anos"))
  ensino = prompt("Você terminou ensino médio?")
  disponibilidade = prompt("Você possui disponibilidade")
  if(idade && ensino && disponibilidade === sim){ 
    console.log(true)
  
} else(idade && ensino && disponibilidade === não)
console.log(false)



}