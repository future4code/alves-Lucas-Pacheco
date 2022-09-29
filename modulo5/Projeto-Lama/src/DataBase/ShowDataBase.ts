import { IShowDB, ITicketDB } from "../interface/Showinterface";
import { Show } from "../models/Show";
import BaseDataBase from "./BaseDataBase";



export default class ShowDataBase extends BaseDataBase {
   public static SHOWS_TABLE = "Lama_Shows"
   public static TICKETS_TABLE = "Lama_Tickets"

   public ShowDBModel = (show: Show): IShowDB => {
     const showDB: IShowDB = {
        id: show.getId(),
        band: show.getBand(),
        starts_at: show.getstartAt()
     }
     
     return showDB
   }

   

   public findById = async (id: string): Promise<IShowDB | undefined> => {
    const showDB: IShowDB[] = await this.getConnetion()
    .select()
    .into(ShowDataBase.SHOWS_TABLE)
    .where({id})
    
    return showDB[0]
   }

   public createShow = async (show: Show): Promise<void> => {
     const showDB  = this.ShowDBModel(show)

     await this.getConnetion()
     .into(ShowDataBase.SHOWS_TABLE)
     .insert(showDB)
   }

   public getShows = async (): Promise<IShowDB[] | undefined> => {
    const shows: IShowDB[] = await this.getConnetion()
    .select("*")
    .into(ShowDataBase.SHOWS_TABLE)

    return shows
   }

   public getTicketsShow = async (showId: string): Promise<number> => {
    const result: any = await this.getConnetion()
    .select()
    .count("id AS tickets")
    .from(ShowDataBase.TICKETS_TABLE)
    .where({show_id: showId})

    return result[0].tickets as number
    
   }

   public findShowByDate = async (starts_at: string): Promise<IShowDB | undefined> => {
    const showDB: IShowDB[] = await this.getConnetion()
    .select()
    .into(ShowDataBase.SHOWS_TABLE)
    .where({starts_at})
    
    return showDB[0]
   }

   public findReserveShow = async ( id: string, userId: string): Promise<ITicketDB | undefined>  => {
    const TicketDB: ITicketDB[] = await this.getConnetion()
    .into(ShowDataBase.TICKETS_TABLE)
    .select()
    .where({show_id: id})
    .andWhere({user_id: userId })

    return TicketDB[0]
   }

   public reserveShow = async (reserve: ITicketDB): Promise<void>  => {
    
    await this.getConnetion()
    .into(ShowDataBase.TICKETS_TABLE)
    .insert(reserve)
   }

   public removeReserve = async (id: string): Promise<void> => {
    await this.getConnetion()
    .from(ShowDataBase.TICKETS_TABLE)
    .delete()
    .where({show_id: id})
   }


}