import BaseDataBase from "../../src/dataBase/BaseDataBase";
import CompetitionDataBase from "../../src/dataBase/CompetitionDataBase";
import { IAtualizationCompetitorValue, ICompetitionNameCompDBDTO, ICompetitionStatusInputDBDTO, ICompetitorDBDTO, ICompetitorDBModelDTO, IGetStatusOutputDBDTO, IResultsInputDTODB, IUpdateFinalizeCompetitionInputDTO } from "../../src/interface/Competition";
import { Competitor } from "../../src/models/Competitor";


export class CompetitionDataBaseMock extends BaseDataBase {
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
       switch(competition) {
         case "Dardo semifinal": 
         return {
            competition: "Dardo semifinal"
         }
         case "Corrida de 100 metros":
            return {
                competition: "Corrida de 100 metros"
            }
       }
    }

    public getCompetitorByCompetitionName = async (competition_name: string): Promise<ICompetitorDBModelDTO[] | undefined> => {
        switch(competition_name) {
            case "Dardo semifinal":
                return [{
                    id: "id-mock",
                    competition_name: "Dardo semifinal",
                    atleta: "Carlos",
                    value: 50.00,
                    unidade: "m",

                },
                {
                    id: "id-mock",
                    competition_name: "Dardo semifinal",
                    atleta: "João",
                    value: 60.00,
                    unidade: "m",

                },
            ]

        }
        
    }

    public getStatusByCompetitionNameComplete = async (competition_name: string): Promise<ICompetitionStatusInputDBDTO | undefined> => {
        switch(competition_name) {
            case "Dardo semifinal":
               return {
                competition_name: "Dardo semifinal",
                status: "Complete"
               }
        }
    }

    public getStatusByCompetitionNameIncomplete = async (competition_name: string): Promise<ICompetitionStatusInputDBDTO | undefined> => {
        switch(competition_name) {
            case "Corrida de 100 metros":
               return {
                competition_name: "Corrida de 100 metros",
                status: "incomplete"
               }
        }
    }

    public insertCompetition = async (competition: string): Promise<void> => {
    }

    public insertCompetitor = async (competitor: Competitor): Promise<void> => {
    }

    public insertOlimpicStatus = async (competition: ICompetitionStatusInputDBDTO): Promise<void> => {
    }

    public finalizationCompetition = async (input: IUpdateFinalizeCompetitionInputDTO): Promise<void> => {
    }

    public getStatus = async (competition_name: string): Promise<IGetStatusOutputDBDTO | undefined> => {
        switch(competition_name) {
            case "Dardo semifinal":
                return {
                    competition_name: "Dardo semifinal",
                    status: "Complete"
                }
            case "Corrida de 100 metros":
                return {
                    competition_name: "Corrida de 100 metros",
                    status: "incomplete"
                }
        }
    }

    public getResults = async (input: IResultsInputDTODB): Promise<ICompetitorDBDTO[] | undefined> => {
        const competition_name = input.competition_name

        switch(competition_name) {
            case "Dardo semifinal": 
                return [{
                    id: "id-mock",
                    competition_name: "Dardo semifinal",
                    atleta: "Carlos",
                    value: 50.00,
                    unidade: "m",

                },
                {
                    id: "id-mock",
                    competition_name: "Dardo semifinal",
                    atleta: "João",
                    value: 60.00,
                    unidade: "m",

                },
            ]
            
        }

    }

    public getCompetitorByAtleta = async (atleta: string): Promise<ICompetitorDBModelDTO | undefined> => {
        switch(atleta) {
            case "Carlos": 
            return {
                id: "id-mock",
                competition_name: "Dardo semifinal",
                atleta: "Carlos",
                value: 50.00,
                unidade: "m",

            }
            
        }
    }

   public atualizationValue = async (input: IAtualizationCompetitorValue ): Promise<void> => {
   }
}