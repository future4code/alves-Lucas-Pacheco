import CompetitionDataBase from "../dataBase/CompetitionDataBase";
import { InvalidError } from "../Error/InvalidError";
import { MissingFields } from "../Error/MissingFields";
import { IAtualizationCompetitorOutputDTO, IAtualizationCompetitorValue, ICompetitionNameInputDTO, ICompetitionNameOutputDTO, ICompetitionStatusInputDBDTO, IFinalizationCompetitionInputDTO, IFinalizationCompetitionOutputDTO, IGetResultInputDTO, IRegistrationCompetitorInputDTO, IRegistrationCompetitorOutputDTO, IResultsInputDTODB, IResultsOutputDTO, IUpdateFinalizeCompetitionInputDTO } from "../interface/Competition";
import { Competitor } from "../models/Competitor";
import GenerateId from "../services/GenerateId";


export default class CompetitionBusiness {
    constructor(
        private competitionData =  new CompetitionDataBase,
        private generateId =  new GenerateId
    ){}

    public CreateCompetition =  async (input: ICompetitionNameInputDTO) => {
        const competition = input.competition


        if(!competition) {
            throw new MissingFields()
        }

        if(typeof competition !== "string") {
            throw new InvalidError("O Nome da sua competição não está em string")
            
        }

       

        const competitionDB = await this.competitionData.getCompetitionByName(competition)

        if(competitionDB) {
            throw new InvalidError("Competição já existe no banco de dados")
        }

  
        await this.competitionData.insertCompetition(competition)

        const status: string = "incomplete"

        const atualizationStatus: ICompetitionStatusInputDBDTO = {
            status,
            competition_name: competition
        }

        await this.competitionData.insertOlimpicStatus(atualizationStatus)
                
        const response: ICompetitionNameOutputDTO  = {
          message: "Competição cadastrada com sucesso"
        }
    

        return response
    }

    public registerCompetitor = async (input: IRegistrationCompetitorInputDTO) => {
     const { competition_name, atleta, value, unidade} = input

     if(!competition_name || !atleta || !value || !unidade) {
        throw new MissingFields()
     }

     if(typeof competition_name !== "string") {
        throw new InvalidError("Parametro competitionName, inválido")
     }

     if(typeof atleta !== "string") {
        throw new InvalidError("Parametro atleta, inválido")
     }

     if(typeof value !== "number") {
        throw new InvalidError("Parametro value, inválido")
     }

     if(typeof unidade !== "string") {
        throw new InvalidError("Parametro unidade, inválido")
     }

     const competitionDB = await this.competitionData.getCompetitionByName(competition_name)

     if(!competitionDB) {
        throw new InvalidError("Competição não encontrada")
     }

     const statusComplete = await this.competitionData.getStatusByCompetitionNameComplete(competition_name)

     if(statusComplete) {
         throw new InvalidError("Competição já foi terminada")
     }

     const id = this.generateId.generate()
        
     const competitor = new Competitor(
        id,
        competition_name,
        atleta,
        value,
        unidade
     )

     await this.competitionData.insertCompetitor(competitor)
            
     const response: IRegistrationCompetitorOutputDTO = {
        message: "Competidor cadastrado"

     }

     return response

    }

    public finalizationCompetition = async (input: IFinalizationCompetitionInputDTO) => {
        const competition_name = input.competition_name

        
     if(typeof competition_name !== "string") {
        throw new InvalidError("Parametro competitionName, inválido")
     }
           
     
     if(!competition_name) {
        throw new MissingFields()
     }

     const competitionDB = await this.competitionData.getCompetitionByName(competition_name)

     if(!competitionDB) {
        throw new InvalidError("Competição não encontrada")
     }

     const statusIncomplete = await this.competitionData.getStatusByCompetitionNameIncomplete(competition_name)

     if(!statusIncomplete) {
      throw new InvalidError("Sua competição já foi finalizada")
     }

     const status =  "Complete"

     const updateStatus: IUpdateFinalizeCompetitionInputDTO = {
        competition_name,
        status
     }

     await this.competitionData.finalizationCompetition(updateStatus)

     const response: IFinalizationCompetitionOutputDTO = {
        message: "Sua competição foi finalizada"
     }

     return response

        
    }

    public getAllResults = async (input: IGetResultInputDTO) => {
     const competition_name = input.competition_name
     const search = input.search || ""
     const order = input.order || "value"
     let sort = input.sort || "ASC"
     const limit = Number(input.limit) || 10
     const page = Number(input.page) || 1

     
     const offset = limit * (page - 1)   

     if(typeof search !== "string") {
        throw new InvalidError("Sua busca não está em formato de string")
    }

    if(typeof order !== "string") {
        throw new InvalidError("Sua ordenação está em formato errado")

    }

    if(typeof limit !== "number" ){
        throw new InvalidError("Parâmetro 'limit' inválido")
    }

    if(typeof page !== "number") {
        throw new InvalidError("Parâmetro 'page' inválido")
    }

     if(typeof competition_name !== "string") {
        throw new InvalidError("Parametro competitionName, inválido")
     }
           
     
     if(!competition_name) {
        throw new MissingFields()
     }

     const competitionDB = await this.competitionData.getCompetitionByName(competition_name)

     if(!competitionDB) {
        throw new InvalidError("Competição não encontrada")
     }

     const getStatusByCompetitionName = await this.competitionData.getStatus(competition_name)

     
     
     if(!getStatusByCompetitionName) {
        throw new InvalidError("Competição não encontrada seu status")
     }

     let compStatus = "Encerrada"

     console.log(getStatusByCompetitionName.status)

     if(getStatusByCompetitionName.status === "incomplete") {
        compStatus = "Competição em andamento"
     }

     const getCompAtletic = await this.competitionData.getCompetitorByCompetitionName(competition_name)

     if(!getCompAtletic) {
        throw new InvalidError("Competidores não encontrados")
     }

     const unity = getCompAtletic[0].unidade

     if(unity === "m") {
        sort = "DESC"
     }

     const newInput: IResultsInputDTODB = {
        competition_name,
        search,
        order,
        sort,
        limit,
        page,
        offset
     }

     const getAllCompsResults = await this.competitionData.getResults(newInput)


     if(!getAllCompsResults) {
        throw new InvalidError("Competidores não encontrados")
     }

     console.log(getAllCompsResults)

     const response: IResultsOutputDTO = {
        competitionStatus: compStatus,
        competitors: getAllCompsResults
     }

     return response
    }

    public atualizationResults = async (input: IAtualizationCompetitorValue) => {
      const {atleta, value} = input

      if(!atleta || !value) {
         throw new MissingFields()
      }
      
      
     if(typeof atleta !== "string") {
      throw new InvalidError("Parametro atleta, inválido")
   }

      if(typeof value !== "number") {
      throw new InvalidError("Parametro value, inválido")
   }

   const competitorDB = await this.competitionData.getCompetitorByAtleta(atleta)

   if(!competitorDB) {
      throw new InvalidError("Competidor não encontrado")
   }

   if(competitorDB.value > value) {
      throw new InvalidError("Lançamento anterior maior que o atual")
   }

   await this.competitionData.atualizationValue(input)

   const response: IAtualizationCompetitorOutputDTO = {
      message: "Colocação atualizada"
   }

   return response

}

}