import { Router } from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";
import { CompetitionController } from "../controller/CompetitionController";
import CompetitionDataBase from "../dataBase/CompetitionDataBase";
import GenerateId from "../services/GenerateId";


export const competitionRouter = Router()

const competitionController = new CompetitionController(
    new CompetitionBusiness(
        new CompetitionDataBase,
        new GenerateId
    )
)

competitionRouter.post("/", competitionController.CreateCompetition)