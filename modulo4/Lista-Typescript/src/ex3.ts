enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filmes = {
    nome: string,
    anoLancamento: number,
    genero: string,
    pontuacao?: number,
    
}

type FilmeFinal = Filmes & {genero: GENERO}

const filmes =  (name: string , lancamento: number, pontuacao1?: number): FilmeFinal => {
    const seuFilme: FilmeFinal = {
         nome: name,
         anoLancamento: lancamento,
         genero: GENERO.DRAMA,
         pontuacao: pontuacao1

    }

    return seuFilme
}

console.log(filmes("Lucas", 2022, 74))
