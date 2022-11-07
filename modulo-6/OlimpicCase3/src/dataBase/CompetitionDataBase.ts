
import { IAtualizationCompetitorValue, ICompetitionNameCompDBDTO,  ICompetitionStatusInputDBDTO, ICompetitorDBDTO, ICompetitorDBModelDTO, IGetStatusOutputDBDTO, IResultsInputDTODB, IUpdateFinalizeCompetitionInputDTO } from "../interface/Competition";
import { Competitor } from "../models/Competitor";
import BaseDataBase from "./BaseDataBase";

class CompetitionDataBase extends BaseDataBase {
    public static COMPETITION_TABLE_NAME = "Olimpic_Name_Comp"
    public static COMPETITOR_TABLE_ATLETA = "Olimpic_Competitor"
    public static OLIMPIC_STATUS_TABLE = "Olimpic_Status"

    public CompetitiorDBModel = (competitior: Competitor): ICompetitorDBModelDTO => {
        const competitorDB: ICompetitorDBModelDTO = {
            id: competitior.getId(),
            competition_name: competitior.getCompetitionName(),
            atleta: competitior.getAtleta(),
            value: competitior.getValue(),
            unidade: competitior.getUnidade()
        }
      return competitorDB
        
    }

    public getCompetitionByName = async (competition: string): Promise<ICompetitionNameCompDBDTO | undefined> => {
        const response: ICompetitionNameCompDBDTO[] = await this.getConnetion()
        .select()
        .from(CompetitionDataBase.COMPETITION_TABLE_NAME)
        .where({competition})
        
        return response[0]
    }

    public getCompetitorByCompetitionName = async (competition_name: string): Promise<ICompetitorDBModelDTO[] | undefined> => {
        const response: ICompetitorDBModelDTO[] = await this.getConnetion()
        .select("*")
        .from(CompetitionDataBase.COMPETITOR_TABLE_ATLETA)
        .where({competition_name})

        return response
    }

    public getStatusByCompetitionNameComplete = async (competition_name: string): Promise<ICompetitionStatusInputDBDTO | undefined> => {
        const response: ICompetitionStatusInputDBDTO[] = await this.getConnetion()
        .select()
        .from(CompetitionDataBase.OLIMPIC_STATUS_TABLE)
        .where({competition_name})
        .andWhere({status: "Complete"})

        return response[0]
    }

    public getStatusByCompetitionNameIncomplete = async (competition_name: string): Promise<ICompetitionStatusInputDBDTO | undefined> => {
        const response: ICompetitionStatusInputDBDTO[] = await this.getConnetion()
        .select()
        .from(CompetitionDataBase.OLIMPIC_STATUS_TABLE)
        .where({competition_name})
        .andWhere({status: "incomplete"})

        return response[0]
    }

    public insertCompetition = async (competition: string): Promise<void> => {
        await this.getConnetion()
        .into(CompetitionDataBase.COMPETITION_TABLE_NAME)
        .insert({competition: competition}) 
    }

    public insertCompetitor = async (competitor: Competitor): Promise<void> => {
         const competitorDB = this.CompetitiorDBModel(competitor)
         await this.getConnetion()
         .into(CompetitionDataBase.COMPETITOR_TABLE_ATLETA)
         .insert(competitorDB)     
    }

    public insertOlimpicStatus = async (competition: ICompetitionStatusInputDBDTO): Promise<void> => {
        await this.getConnetion()
        .into(CompetitionDataBase.OLIMPIC_STATUS_TABLE)
        .insert(competition)
    }

    public finalizationCompetition = async (input: IUpdateFinalizeCompetitionInputDTO): Promise<void> => {
        const {competition_name, status} = input
        await this.getConnetion()
        .into(CompetitionDataBase.OLIMPIC_STATUS_TABLE)
        .where({competition_name})
        .update({status: status})
    }

    public getStatus = async (competition_name: string): Promise<IGetStatusOutputDBDTO | undefined> => {
        const response: IGetStatusOutputDBDTO[] =  await this.getConnetion()
        .from(CompetitionDataBase.OLIMPIC_STATUS_TABLE)
        .where({competition_name})
        .select("*")

        return response[0]
    }

    public getResults = async (input: IResultsInputDTODB): Promise<ICompetitorDBDTO[] | undefined> => {
        const search = input.search
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset
        const competition_name = input.competition_name

        const results: ICompetitorDBDTO[] = await this.getConnetion()
        .where("atleta", "LIKE", `%${search}%`)
        .andWhere({competition_name})
        .orderBy(order, sort)
        .limit(limit)
        .offset(offset)
        .select("*")
        .from(CompetitionDataBase.COMPETITOR_TABLE_ATLETA)

        return results

    }

    public getCompetitorByAtleta = async (atleta: string): Promise<ICompetitorDBModelDTO | undefined> => {
        const response: ICompetitorDBModelDTO[] = await this.getConnetion()
        .select("*")
        .from(CompetitionDataBase.COMPETITOR_TABLE_ATLETA)
        .where({atleta})

        return response[0]
    }

   public atualizationValue = async (input: IAtualizationCompetitorValue ): Promise<void> => {
      const {atleta, value} = input
      await this.getConnetion()
      .into(CompetitionDataBase.COMPETITOR_TABLE_ATLETA)
      .where({atleta})
      .update({
        value: value
      })
   }


}

export default CompetitionDataBase