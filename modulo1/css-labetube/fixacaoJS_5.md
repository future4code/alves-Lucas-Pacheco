´´´function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 let animaisNomes = animais.filter((nomes) => {
     return nomes.nome

})

let animaisNomesArray = animais.map((nome) => {
  return nome.nome
})

return animaisNomesArray


}´´´