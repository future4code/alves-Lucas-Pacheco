import { Request, Response } from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";
import { BaseError } from "../Error/BaseError";
import { IAtualizationCompetitorValue, ICompetitionNameInputDTO,  IFinalizationCompetitionInputDTO,  IGetResultInputDTO,  IRegistrationCompetitorInputDTO } from "../interface/Competition"

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

            const response = await this.competitionBusiness.registerCompetitor(input)
            
            res.status(201).send(response)
        } catch (error) {
            if(error instanceof BaseError) {
                return res.status(error.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any
    
            res.status(500).send("Erro inesperado") //  
        }
    }

    public finalizationCompetition = async (req: Request, res: Response) => {
        try {
           const competitionName = req.params.competitionName

           const input: IFinalizationCompetitionInputDTO = {
            competition_name: competitionName
           }

           const response = await this.competitionBusiness.finalizationCompetition(input)
           
           res.status(201).send(response)


        } catch (error) {
            if(error instanceof BaseError) {
                return res.status(error.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any
    
            res.status(500).send("Erro inesperado") //  
        }
    }

    public getAllResults = async (req: Request, res: Response) => {
        try {

            const search = req.query.search as string
            const order = req.query.order as string
            const sort = req.query.sort as string
            const limit = req.query.limit as string
            const page =  req.query.page as string


            const input: IGetResultInputDTO = {
                competition_name: req.body.competitionName,
                search,
                order,
                sort,
                limit,
                page
            } 

            const response = await this.competitionBusiness.getAllResults(input)

            res.status(200).send(response)
        } catch (error) {
            if(error instanceof BaseError) {
                return res.status(error.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any
    
            res.status(500).send("Erro inesperado") //  
        }
    }

    public atualizationResults = async (req: Request, res: Response) => {
        try {
            const {atleta, value} = req.body


            const input: IAtualizationCompetitorValue = {
                atleta,
                value
            }

            const response = await this.competitionBusiness.atualizationResults(input)

            res.status(201).send(response)
        } catch (error) {
            if(error instanceof BaseError) {
                return res.status(error.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any
    
            res.status(500).send("Erro inesperado") //  
        }
    }
}