//Ex1
//a
// const minhaString: string = 123
// //B
// const meuNumero: number = "adasdasd"

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string,
}

enum ArcoIris {
  VERMELHA = "Vermelha",
  LARANJA = "Laranja",
  AMARELO = "amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta"
}

 type pessoaCompleta = Pessoa & {corFavorita: ArcoIris}


 const pessoa1: pessoaCompleta = {
    nome: "Joao",
    idade: 12,
    corFavorita: ArcoIris.AMARELO
 }

 const pessoa2: pessoaCompleta = {
    nome: "Joaozinho",
    idade: 15,
    corFavorita: ArcoIris.ANIL
 }

 const pessoa3: pessoaCompleta = {
    nome: "Leornado",
    idade: 19,
    corFavorita: ArcoIris.VERMELHA
 }