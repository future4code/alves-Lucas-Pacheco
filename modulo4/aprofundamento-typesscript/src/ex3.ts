// const posts = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
//   ]

type HP = {
    autor: string,
    texto: string,
}

// const Alvo: HP = {
//     autor: "Alvo Dumbledore",
//     texto: "Não vale a pena viver sonhando e se esquecer de viver"

// }

// const Severo: HP = {
//     autor: "Severo Snape",
//     texto: "Menos 10 pontos para Grifinória!"

// }

// const Hermione: HP = {
//     autor: "Hermione Granger",
//     texto: "É levi-ô-sa, não levio-sá!"
// }

// const Dobby: HP = {
//     autor: "Dobby",
//     texto: "Dobby é um elfo livre!"
// }

// const Lord: HP = {
//     autor: "Lord Voldemort",
//     texto: "Avada Kedavra!"
// }

// const listaDePosts: HP[] = []

// listaDePosts.push(Alvo, Dobby, Hermione, Lord, Severo)

const listaDePosts: HP[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
]


const buscarPosts = (posts: HP[], autorInformado: string): HP[] => {
 return posts.filter((postinho) => {
   return postinho.autor === autorInformado 
 })

}

console.log(buscarPosts(listaDePosts, "Lord Voldemort"))
