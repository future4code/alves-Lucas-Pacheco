import { validate } from "gerador-validador-cpf";


const cpf = (numeros: string) => {
 const verifica = validate(numeros)

 return verifica
}

console.log(cpf("222.444.666-67"))

