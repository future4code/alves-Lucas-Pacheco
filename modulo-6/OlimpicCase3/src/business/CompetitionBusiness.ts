import CompetitionDataBase from "../dataBase/CompetitionDataBase";
import { InvalidError } from "../Error/InvalidError";
import { MissingFields } from "../Error/MissingFields";
import { ICompetitionNameInputDTO, ICompetitionNameOutputDTO } from "../interface/Competition";
import GenerateId from "../services/GenerateId";


export default class CompetitionBusiness {
    constructor(
        private competitionData =  new CompetitionDataBase,
        private generateId =  new GenerateId
    ){}

    public CreateCompetition =  async (input: ICompetitionNameInputDTO) => {
        const competition = input.competition

        console.log(competition)

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
                
        const response: ICompetitionNameOutputDTO  = {
          message: "Competição cadastrada com sucesso"
        }
    

        return response
    }
}