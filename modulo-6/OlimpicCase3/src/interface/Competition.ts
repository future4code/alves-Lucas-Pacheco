export interface ICompetitionNameInputDTO {
 competition: string
}

export interface ICompetitionStatusInputDBDTO {
    status: string
    competition_name: string
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

export interface IRegistrationCompetitorOutputDTO {
    message: string
}

export interface IFinalizationCompetitionInputDTO {
    competition_name: string
}

export interface IUpdateFinalizeCompetitionInputDTO {
    competition_name: string,
    status: string
}

export interface IGetStatusOutputDBDTO {
    competition_name: string,
    status: string
}

export interface IFinalizationCompetitionOutputDTO {
    message: string
}

export interface IGetResultInputDTO {
    competition_name: string
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface IResultsInputDTODB {
    competition_name: string
    search: string,
    order: string,
    sort: string,
    limit: number,
    page: number,
    offset: number
}

export interface IGetStatusOutputDBDTO {
    competition_name: string
    status: string
}

export interface ICompetitorDBDTO {
    id:String
    competition_name: string,
    atleta: string,
    value: number,
    unidade: string
}

export interface IResultsOutputDTO {
    competitionStatus: string,
    competitors: ICompetitorDBDTO[]
}

export interface IAtualizationCompetitorValue {
    atleta: string,
    value: number
}

export interface IAtualizationCompetitorOutputDTO {
    message: string
}