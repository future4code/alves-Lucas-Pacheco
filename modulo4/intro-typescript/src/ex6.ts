const compararNumeros = (num1: number, num2: number): number | boolean | string => {
const soma: number = num1 + num2
const sub: number = num1 - num2
const mult: number = num1 * num2
let maior: number = 0

if(num1 > num2) {
    maior = num1
} else {
    maior = num2
}

return `a soma dos numeros ${soma}, a subtração ${sub} a multiplicação ${mult} e seu maior número é ${maior}`
} 

console.log(compararNumeros(5, 4))