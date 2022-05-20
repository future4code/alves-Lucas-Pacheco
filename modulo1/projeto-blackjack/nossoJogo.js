/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Boas Vindas campeão ao Jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada? ")) {

   const jogo = () => {
      const primeiraCarta = comprarCarta()
      const segundaCarta = comprarCarta()
      const valorUsuario = primeiraCarta.valor + segundaCarta.valor
      console.log(`Sua primeira carta é ${primeiraCarta.texto} e seu valor é ${primeiraCarta.valor} \n sua segunda carta é ${segundaCarta.texto} e seu valor é ${segundaCarta.valor} `)
      console.log(" /////////////////////////////////////////////////^^//////////////////////////////////////// ")

      const pcPrimeiraCarta = comprarCarta()
      const pcSegundaCarta = comprarCarta()
      const valorDoPc = pcPrimeiraCarta.valor + pcSegundaCarta.valor
      console.log(`Sua primeira carta é ${pcPrimeiraCarta.texto} e seu valor é ${pcPrimeiraCarta.valor} \n sua segunda carta é ${pcSegundaCarta.texto} e seu valor é ${pcSegundaCarta.valor} `)
      console.log(" /////////////////////////////////////////////////^^//////////////////////////////////////// ")

      console.log(`Seu valor total é \n${valorUsuario}`)
      console.log(`E o Valor do computador é \n${valorDoPc} `)

     
      if (valorUsuario === valorDoPc) {
         console.log("Empatou")
      } else if (valorUsuario > valorDoPc) {
         console.log("Você venceu!")

      } else {
         console.log("Computador Venceu")
      }


   }

jogo()

} else {
   console.log("Jogo finalizou")


}

