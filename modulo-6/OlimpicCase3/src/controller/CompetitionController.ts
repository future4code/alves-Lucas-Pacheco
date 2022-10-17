import { Request, Response } from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";
import { BaseError } from "../Error/BaseError";
import { ICompetitionNameInputDTO, IRegistrationCompetitorInputDTO } from "../interface/Competition"

export class CompetitionController {
    constructor(
        private competitionBusiness =  new CompetitionBusiness
    ){}

    public CreateCompetition = async (req: Request, res: Response) => {
        try {
            const input: ICompetitionNameInputDTO = {
                competition: req.body.competition
            }

            const response = await this.competitionBusiness.CreateCompetition(input)

            res.status(201).send(response)
            
        } catch (error) {
            if(error instanceof BaseError) {
                return res.status(error.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any
    
            res.status(500).send("Erro inesperado") //  
        }
    }

    public registrationCompetetitor = async (req: Request, res: Response) => {
        try {
            const {competitionName, atleta, value, unidade} = req.body
           
            const input: IRegistrationCompetitorInputDTO = {
                competition_name: competitionName,
                atleta: atleta,
                value: value,
                unidade: unidade 
            }

            

        } catch (error) {
            
        }
    }
}