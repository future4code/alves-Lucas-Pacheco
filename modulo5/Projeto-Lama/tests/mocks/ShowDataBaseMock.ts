import BaseDataBase from "../../src/DataBase/BaseDataBase";
import ShowDataBase from "../../src/DataBase/ShowDataBase";
import { IShowDB, ITicketDB } from "../../src/interface/Showinterface";
import { Show } from "../../src/models/Show";


export class ShowDataBaseMock extends BaseDataBase {
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

   

   public findById = async (showId: string): Promise<IShowDB | undefined> => {
    switch(showId) {
        case "205":
            return {
                id: "205",
                band: "Link-Park-Mock",
                starts_at: "06/12/2022"
            }
        case "206":
            return {
                id: "206",
                band: "System-of-Down-Mock",
                starts_at: "16/12/2022"
            }
        case "207":
            return {
                id: "207",
                band: "Banana com pijamas",
                starts_at: "20/12/2022"
            }
     }
   }

   public createShow = async (show: Show): Promise<void> => {}

   public getShows = async (): Promise<IShowDB[]> => {
     const showsDB: IShowDB[] = [
        {
            id: "205",
            band: "Link-Park-Mock",
            starts_at: "06/12/2022"
        },
        {
            id: "206",
            band: "System-of-Down-Mock",
            starts_at: "16/12/2022"
        },
        {
            id: "207",
            band: "Banana com pijamas",
            starts_at: "20/12/2022"
        }
     ]
    
     return showsDB
   }

   public getTicketsShow = async (showId: string): Promise<number> => {
     if(showId == "205") {
      return 1
     }

     if(showId == "206") {
        return 2
     }

     if(showId == "207") {
        return 7
     }

    return 0
    
   }

   public findShowByDate = async (starts_at: string): Promise<IShowDB | undefined> => {
     switch(starts_at) {
        case "06/12/2022":
            return {
                id: "205",
                band: "Link-Park-Mock",
                starts_at: "06/12/2022"
            }
        case "16/12/2022":
            return {
                id: "206",
                band: "System-of-Down-Mock",
                starts_at: "16/12/2022"
            }
        case "20/12/2022":
            return {
                id: "207",
                band: "Banana com pijamas",
                starts_at: "20/12/2022"
            }
        default:
            return undefined
     }
   }

   public findReserveShow = async (showId: string, userId: string): Promise<ITicketDB | undefined>  => {
    if(showId == "205" && userId == "id-mock") {
        return {
            id: "301",
            show_id: "205",
            user_id: "id-mock"
        }
    } else if (showId == "206" && userId == "id-mock") {
        return {
            id: "302",
            show_id: "206",
            user_id: "id-mock"
        }
    } else {
        return undefined
    }
   }

   public reserveShow = async (reserve: ITicketDB): Promise<void>  => {}

   public removeReserve = async (id: string): Promise<void> => {}

}