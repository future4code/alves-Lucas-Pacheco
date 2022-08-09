// pelo process.agrv[ numero da string]

const nome = process.argv[2]

const idade = Number(process.argv[3])

const valor = Number(idade + 7)

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${valor}`)

