import ShowDataBase from "../DataBase/ShowDataBase";
import { AuthenticationError } from "../error/AuthenticationError";
import { AuthorizationError } from "../error/AuthorizationError";
import { InvalidError } from "../error/invalidError";
import { MissingFields } from "../error/Missingfields";
import { NotFoundError } from "../error/NotFoundError";
import { ICreateShowInputDTO, ICreateShowOutpuDTO, IDeleteReservationShowInputDTO, IDeleteReservationShowOutpuDTO, IGetShowsInputDTO, IGetShowsOutputDTO, IReservationShowInputDTO, IReservationShowOutputDTO, ITicketDB } from "../interface/Showinterface";
import { Show } from "../models/Show";
import { USER_ROLES } from "../models/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";


export default class ShowBusiness {
    constructor(
        private showData: ShowDataBase,
        private generateId: GenerateId,
        private authenticator: Authenticator
    ) {}

    public createShow = async (show: ICreateShowInputDTO) => {
        const token = show.token
        const band = show.band
        const starts_at = show.starts_at

        if (!token || !band || !starts_at) {
            throw new MissingFields()
        }

        const payload = this.authenticator.verifyToken(token)

        if (!payload) {
            throw new AuthenticationError()
        }



        if (payload.role !== USER_ROLES.ADMIN) {
            throw new AuthorizationError()
        }

        if (typeof band !== "string") {
            throw new InvalidError("Parâmentro 'band' inválido")
        }

        if (typeof starts_at !== "string") {
            throw new InvalidError("Parâmetro 'startsAt' inválido")
        }
        
        const dateFormated = new Date(starts_at)

        const dateEvent = new Date("05/12/2022")

        if (dateFormated < dateEvent) {
         throw new InvalidError("Data do show não pode-se anterior ao dia do festival")
        }

        const id = this.generateId.generate()

        const date = starts_at.split("/").reverse().join("-")

        const showDB = await this.showData.findShowByDate(date)

        if(showDB) {
         throw new InvalidError("Já tem um Show criado nes mesmo dia")
        }

        const newShow = new Show(
            id,
            band,
            date
        )

        await this.showData.createShow(newShow)

        const responseShow = new Show(
            newShow.getId(),
            newShow.getBand(),
            newShow.getstartAt().split("-").reverse().join("/")
        )

        const response: ICreateShowOutpuDTO = {
            message: "Show criado com sucesso",
            show: responseShow
        }

        return response
    }

    public getAllShows = async (input: IGetShowsInputDTO) => {
        const token = input.token

        if (!token) {
            throw new MissingFields()
        }

        const payload = this.authenticator.verifyToken(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        const showsDB = await this.showData.getShows()

        if (!showsDB) {
            throw new NotFoundError()
        }
        
        
        const shows = showsDB.map((showDB) => {
            const date = new Date(showDB.starts_at)
            const formatedDate = date.toLocaleDateString() 

            return new Show(
                showDB.id,
                showDB.band,
                formatedDate
            )
        })

        for (let show of shows) {
            const showId = show.getId()
            const tickets = await this.showData.getTicketsShow(showId)
            show.setTickets(5000 - tickets)
        }

        const response: IGetShowsOutputDTO = {
            shows
        }

        return response
    }

    public reserveTicket = async (input: IReservationShowInputDTO ) => {
        const {id, token} = input
        
        if(!id || !token) {
            throw new MissingFields()
        }

        const payload = this.authenticator.verifyToken(token)

      if(!payload) {
        throw new AuthenticationError()
      }

      const showDB = await this.showData.findById(id)

      if(!showDB) {
        throw new InvalidError("Post não encontrado")
      }

      const reserveShow = await this.showData.findReserveShow(id, payload.id)

      if(reserveShow) {
        throw new InvalidError("Você já reservou para este show")
      }
      
      const idTicket = this.generateId.generate()

      const newReserve: ITicketDB = {
       id: idTicket,
       show_id: id,
       user_id: payload.id  
      }

      await this.showData.reserveShow(newReserve)

      const response: IReservationShowOutputDTO = {
        message: "Ticket foi comprado com sucesso"
      }

      return response
    }

    public deleteReserve = async (input: IDeleteReservationShowInputDTO) => {
    const {id, token} = input
        
    if(!id || !token) {
            throw new MissingFields()
        }

    const payload = this.authenticator.verifyToken(token)

    if(!payload) {
        throw new AuthenticationError()
      }

      const showDB = await this.showData.findById(id)

      if(!showDB) {
        throw new InvalidError("Post não encontrado")
      }

      const reserveShow = await this.showData.findReserveShow(id, payload.id)

      if(!reserveShow) {
        throw new InvalidError("Você não reservou esse show")
      }

      await this.showData.removeReserve(id)

      const response: IDeleteReservationShowOutpuDTO = {
        message: "Você retirou sua reserva"
      }

      return response
    }
}