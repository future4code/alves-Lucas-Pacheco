´´´function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let recebeNumero = 0

for(let i =0; i<arrayDeNumeros.length; i++) {
  if(numeroEscolhido == arrayDeNumeros[i]) {
    recebeNumero++

  
  }

}
  
if(recebeNumero > 0) {
  return `O número ${numeroEscolhido} aparece ${recebeNumero}x`
} else {
   return "Número não encontrado"´´