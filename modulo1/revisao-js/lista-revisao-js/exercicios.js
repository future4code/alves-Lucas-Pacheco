// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let exercício4 = array.filter((item) => {
        return item % 2 === 0

    })

    return exercício4



}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let exercicio5 = array.filter((item) => {
        return item % 2 === 0

    })

    let exercicio5B = exercicio5.map((item) => {
        return item ** 2

    })

    return exercicio5B




}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let i = 0
    let maior = -Infinity
    while (i < array.length) {
        if (array[i] > maior) {
            maior = array[i]


        }
        i++

    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let verificarMaior = (num1, num2) => {
        if (num1 > num2) {
            return num1
        } else {
            return num2

        }
    
    }

    let verificaMenor = (num1, num2) => {
        if (num1 < num2)  {
            return num1
        } else {
            return num2
        }
    }
    let  maiorNumero1 = verificarMaior(num1, num2)
    let menorNumero1 = verificaMenor(num1, num2)
    
    let verificardivisao = (num1, num2) => {
        if(num1 % num2 ===0) {
            return (true)
        } else {
            return (false)
        }
        

    }

     let divisao = verificardivisao(maiorNumero1, menorNumero1)

    let diferenca = num1 - num2
    diferenca = Math.abs(diferenca)



 const objeto = {
    maiorNumero: maiorNumero1,
    maiorDivisivelPorMenor: divisao,
    diferenca: diferenca


     
}

return objeto




}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numeros = []
    for(let i = 0; numeros.length < n; i+= 2 ) {
        numeros.push(i)
    }

    return numeros
0
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB  && ladoB === ladoC && ladoA === ladoC ) {
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayOrdenado = array.sort((a,b) => a - b) 
    
    let segundoMenorValor = arrayOrdenado[1]
    let segundoMaiorValorv = arrayOrdenado[arrayOrdenado.length - 2]
    let arrayResultado = [segundoMaiorValorv, segundoMenorValor]
    return arrayResultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
     let frase =  `Venha assistir o filme ${filme.nome}, de ${filme.ano}, dirigindo por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}. `
   return frase

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
let novaPessoa = {
    ...pessoa,
    nome:"ANÔNIMO"
}

return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter((item) => {
        if(item.idade > 14 && item.idade < 60 && item.altura > 1.5) {
            return item
        }

    })

    return pessoasAutorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNãoAutorizadas = pessoas.filter((item) => {
        if(item.idade <= 14 || item.idade >= 60 || item.altura < 1.5)
        return item 
    })
    return pessoasNãoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let resultado = contas.map((conta) => {
        let soma = conta.compras.reduce((itemAnt, itemAtual) => itemAnt + itemAtual, 0)
        let saldo = conta.saldoTotal
        return{...conta, saldoTotal: saldo - soma, compras: [] }
    })
    return resultado

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let ordemAfalbetica = consultas.sort((a,b) => {
        return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)
    })
    return ordemAfalbetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

 }