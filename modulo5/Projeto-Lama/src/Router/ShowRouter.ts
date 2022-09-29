import { Router } from "express";
import ShowBusiness from "../Business/ShowBusiness";
import ShowController from "../controller/ShowController";
import ShowDataBase from "../DataBase/ShowDataBase";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";


export const showRouter = Router()

const showController = new ShowController(
    new ShowBusiness(
        new ShowDataBase,
        new GenerateId,
        new Authenticator
    )
)

showRouter.post("/", showController.createShow)
showRouter.post("/reserve/:id", showController.reservationTickets)
showRouter.get("/all", showController.getAllShows)

showRouter.delete("/reserve/:id", showController.deleteReserve)