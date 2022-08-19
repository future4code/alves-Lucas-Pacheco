const nome: string = "Lucas"
const date: string = "24/04/1993"

const NomeData = (nome:string, data:string): string => {
const separadorDeData = data.split("/", 3);

return `chamo ${nome}, nasci no dia ${separadorDeData[0]} do mês de ${separadorDeData[1]} do ano de ${separadorDeData[2]}" `
}

console.log(NomeData(nome, date))