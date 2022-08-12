const checaAnoBissexto = (ano: number):boolean => {
   const cond1: number | boolean = ano % 100 == 0
   const cond2: number | boolean = (ano % 4 == 0) && (ano % 100 !== 0)
   return cond1 || cond2  
}

console.log(checaAnoBissexto(2024))