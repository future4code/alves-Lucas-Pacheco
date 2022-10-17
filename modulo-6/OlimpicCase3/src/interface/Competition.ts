export interface ICompetitionNameInputDTO {
 competition: string
}

export interface ICompetitionNameOutputDTO {
    message: string
} 

export interface ICompetitorDBModelDTO  {
    id: string,
    competition_name: string,
    atleta: string,
    value: number,
    unidade: string
}

export interface ICompetitionNameCompDBDTO {
    competition: string
}

export interface IRegistrationCompetitorInputDTO {
    competition_name: string,
    atleta: string,
    value: number,
    unidade: string
}


// private id: string,
// private competition_name: string,
// private atleta: string,
// private value: number,
// private unidade: string