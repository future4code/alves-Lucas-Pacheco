import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import RecipesDataBase from "../data/RecipesDataBase";
import { InvalidCredentiais } from "../error/invalidCredentiais";
import { InvalidError } from "../error/invalidError";
import { MissingFields } from "../error/MissingFields";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { AuthenticatorData } from "../types/AuthenticationData";
import moment from "moment";
import Recipes from "../models/Recipes";

class RecipesController {

    public createRecipes = async (req: Request, res: Response): Promise<void> => {
        try {
            const { title, description } = req.body
            const token = req.headers.authorization as string
            if (!title || !description) {
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

            const newCreateDate = moment().format("L").split("/").join("-") as string


            const newDate = moment(newCreateDate, "MM-DD-YYYY").format("YYYY-MM-DD")

            const recipesData = new RecipesDataBase();

            const id = new GenerateId().createId()

            const newRecipes = new Recipes(id, title, description, newDate, payload.id)

            await recipesData.createRecipes(newRecipes)

            res.status(200).send("Receita Criada")

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
        }

    }

    public getRecipesById = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id as string

            if (!id) {
                throw new InvalidError("Não foi passado um ID para ser procurado")
            }

            if (!token) {
                throw new MissingFields()
            }

            const authenticator = new Authenticator()

            const AuthenticationData = authenticator.verifyToken(token)

            if (!AuthenticationData) {
                throw new InvalidCredentiais();
            }

            const recipesData = new RecipesDataBase()

            const recipe = await recipesData.getRecipesById(id)

            if (!recipe) {
                throw new InvalidError("Não foi encontrado a receita")
            }

            res.status(201).send({
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                createAt: moment(recipe.create_Date, "YYYY-MM-DD").format("DD/MM/YYYY")
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
        }
    }
}

export default RecipesController