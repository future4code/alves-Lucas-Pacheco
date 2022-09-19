import { Request, Response } from "express";
import FollowDataBase from "../data/FollowDataBase"
import UserDataBase from "../data/UserDataBase";
import RecipesDataBase from "../data/RecipesDataBase";
import { InvalidCredentiais } from "../error/invalidCredentiais";
import { InvalidError } from "../error/invalidError";
import { MissingFields } from "../error/MissingFields";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import moment from "moment";
import Recipes from "../models/Recipes";
import { Follow } from "../models/Follow";
import { profile } from "console";


class FollowController {

    public createFollow = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const userId = req.body.userId as string

        if (!userId) {
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

        const user = await userData.getUserById(userId)

        if(!user) {
            throw new InvalidError("Usuário não encontrado"); 
        }

        const id = new GenerateId().createId()

        const newFollow = new Follow(id, payload.id ,user.id)

        const followData = new FollowDataBase()

        await followData.insertFollow(newFollow)

        res.status(200).send({message: "Você está seguindo usuário"})

    } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
    }
    }

    public unFollow = async (req: Request, res: Response): Promise<void> => {
     try {
        const token = req.headers.authorization as string
        const userId = req.body.userId as string

        if (!userId) {
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

        const followData = new FollowDataBase()

        const profileFollow =  await followData.getFollowByProfile(payload.id)
            
        console.log(profileFollow)

         if(!profileFollow){
            throw new InvalidCredentiais()
         }
        if(profileFollow?.follow !== userId) {
            throw new InvalidError("O ID do usuário passado não corresponde aqueles que você está seguindo");
            
        }

        await followData.deleteFollow(profileFollow?.id)
        
        res.send("Você parou de seguí-lo com sucesso").status(200)

     } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
     }   
    }

    public getRecipesByFollows = async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string 

            if(!token){
                throw new InvalidCredentiais();
            }

            const authenticator = new Authenticator()

            const payload = authenticator.verifyToken(token)

            const followData = new FollowDataBase()

            const followId = await followData.selectFollowing(payload.id)

            let usersRecipes: any = [] 


            for (const UsersDB of followId) {
                try {
                    
                    const recipeData = new RecipesDataBase()

                    const recipes = await recipeData.selectFollowRecipes(UsersDB.follow)

                    if(recipes.length > 0) {
                        usersRecipes = [...usersRecipes,  ...recipes]
                    }


                } catch (error: any) {
                  usersRecipes = []
                }
            }

            const userRecipeFollows = usersRecipes.map((recipe: any) => {
                const newUsers = {
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    createAt: moment(recipe.create_Date, "YYYY-MM-DD").format("DD/MM/YYYY"),
                    userId: recipe.user_id,
                    userName: recipe.name
                }

                return newUsers
            })


            res.status(200).send({recipes: userRecipeFollows})

            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
        }
    }

}

export default FollowController