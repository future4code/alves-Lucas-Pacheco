import { runInThisContext } from "vm";
import { ICompetitionNameCompDBDTO, ICompetitionNameInputDTO, ICompetitorDBModelDTO } from "../interface/Competition";
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
        console.log("DB", competition)
        const response: ICompetitionNameCompDBDTO[] = await this.getConnetion()
        .select()
        .from(CompetitionDataBase.COMPETITION_TABLE_NAME)
        .where({competition})

        console.log(response[0], "resposta")
        
        return response[0]
    }

    public insertCompetition = async (competition: string): Promise<void> => {
        await this.getConnetion()
        .into(CompetitionDataBase.COMPETITION_TABLE_NAME)
        .insert({competition: competition}) 
    }


}

export default CompetitionDataBase