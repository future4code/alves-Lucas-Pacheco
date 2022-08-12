const checarValidacaointegral = (idade: number, ensino: string, horas: number, curso: string ): boolean => {
    if(idade >= 18 && ensino === "sim" && horas >= 40 && curso === "integral") {
        return true
    } else {
        return false
    }
}

const checarValidacaoNoturno = (idade: number, ensino: string, horas: number, curso: string ): boolean => {
    if(idade >= 18 && ensino === "sim" && horas >= 20 && curso === "noturno") {
        return true
    } else {
        return false
    }
}

console.log( "Validação Integral igual: ", checarValidacaointegral(18, "sim", 40, "integral"))

console.log( "Validação Noturna igual: ", checarValidacaoNoturno(18, "sim", 20, "noturno"))