type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//B - Usaria o comando tsc.


//C - Caso fosse feito na página SRC, ele seria convertido em um código JS que poderia ser executado.

//D existe o comando tsc e nome do arquivo ele só iria fazer tsc de um arquivo, caso você use tsc sozinho ele vai compilar todos os arquivos na pastar em questão.

console.log(pokemon2)