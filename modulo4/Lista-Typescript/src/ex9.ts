const verFatorial = (numero: string): number => 
{
let fatorial = numero.length
let resultado = fatorial

for(let i = 1; i < fatorial; i++){
    resultado *= i
}

return resultado
}

console.log(verFatorial("mesa"))

