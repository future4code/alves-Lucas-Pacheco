import { Request, Response } from "express";
import FollowDataBase from "../data/followDataBase";
import UserDataBase from "../data/UserDataBase";
import RecipesDataBase from "../data/RecipesDataBase";
import { InvalidCredentiais } from "../error/invalidCredentiais";
import { InvalidError } from "../error/invalidError";
import { MissingFields } from "../error/MissingFields";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import moment from "moment";
import Recipes from "../models/Recipes";
import { Follow } from "../models/follow";


class FollowController {

    public createFollow = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const id = req.body as string

        if (!id) {
            throw new MissingFields()
        }


        if (!token) {
            throw new InvalidError("Seu Token não foi enviado")
        }

        const authenticator = new Authenticator()
        const payload = authenticator.verifyToken(token)

        if (!payload) {
            throw new InvalidCredentiais()
        }

        const userData =  new UserDataBase()

        const user = await userData.getUserById(id)

        console.log(user)

        if(!user) {
            throw new InvalidError("Usuário não encontrado"); 
        }

        const newid = new GenerateId().createId()

        // const newFollow = new Follow(newid, , payload.id)

        // const followData = new FollowDataBase()

        // await followData.insertFollow(newFollow)

        res.status(200).send({message: "Você está seguindo usuário"})

    } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
    }
    }
}

export default FollowController