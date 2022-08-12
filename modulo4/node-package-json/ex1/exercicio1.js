const nome = process.argv[2]

const idade = Number(process.argv[3])

const valor = Number(idade + 7)

const funcao1 = (par1, par2, par3) => {
 if (process.argv[2] === undefined  || process.argv[3] === undefined) {
    return console.log( "\u001b[37;1m \u001b[44;1m Eu esperava dois parâmetros \u001b[m")
    

 } else {
    return console.log(`\u001b[97m \u001b[104m Olá, ${par1}! Você tem ${par2} anos. Em sete anos você terá ${par3} \u001b[m`)
 }

}

funcao1(nome, idade, valor)

