´´´function calculaNota(ex, p1, p2) {
 let media = ex + p1 + p2 
 media = media / 3 
 let resultado = ""
 if(media >= 9) {
   resultado = "A"
 } else if (media < 9 && media >= 7.5 ) {
   resultado ="B"

 } else if (media < 7.5 && media >= 6) {
  resultado ="C" 
 ´´´´