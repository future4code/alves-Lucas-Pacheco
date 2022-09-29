import { Request, Response } from "express";
import ShowBusiness from "../Business/ShowBusiness";
import { ICreateShowInputDTO, IDeleteReservationShowInputDTO, IGetShowsInputDTO, IReservationShowInputDTO } from "../interface/Showinterface";


export default class ShowController {
    constructor(
     private showBusiness: ShowBusiness
    ) {}

    public createShow = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const {band, startsAt} = req.body
            
            const input: ICreateShowInputDTO = {
                token: token,
                band: band,
                starts_at: startsAt
            }

            const response = await this.showBusiness.createShow(input)

            res.status(201).send(response)

        } catch (error) {
            if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any
            
            res.status(500).send("Erro inesperado") // Erro de servidor
        }
    }

    public getAllShows = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const input: IGetShowsInputDTO = {
                token
            }

            const response = await this.showBusiness.getAllShows(input)

            res.status(200).send(response)

        } catch (error) {
             if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any
            
            res.status(500).send("Erro inesperado") // Erro de servidor
        }
    }

    public reservationTickets = async (req: Request, res: Response) => {
      try {
        const token = req.headers.authorization as string 
        const id = req.params.id
                
        const input: IReservationShowInputDTO = {
            token,
            id
        }

        const response = await this.showBusiness.reserveTicket(input)
        
        res.status(201).send(response)

      } catch (error) {
        if(error instanceof Error) {
            return res.status(res.statusCode).send({message: error.message})
        } // Verificação para não ser necessário tipar o Erro como Any
        
        res.status(500).send("Erro inesperado") // Erro de servidor
    
      }
    }

    public deleteReserve = async (req: Request, res: Response) => {
           try {
            const token = req.headers.authorization as string
            const id = req.params.id

            const input: IDeleteReservationShowInputDTO = {
                token: token,
                id: id
            }

            const response = await this.showBusiness.deleteReserve(input)

            res.status(200).send(response)
           } catch (error) {
            if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any
            
            res.status(500).send("Erro inesperado") // Erro de servidor
           }
    }
}