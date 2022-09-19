import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { InvalidError } from "../error/invalidError";
import { MissingFields } from "../error/MissingFields";
import { CreateNewUser, User } from "../model/User";


class UserController {
    
    public signup = async (req: Request, res: Response) => {

        try {
            const {name, email, password} = req.body

            if(!name || !email || !password) {
                throw new MissingFields()
            }
            
            const newUser: CreateNewUser = {
                name: name,
                email: email,
                password: password
            }

            const userBusiness = new UserBusiness()
            const user = await userBusiness.signup(newUser)

            res.status(201).send(user)

        } catch (error) {
            if(error instanceof Error) {
                return res.status(400).send({message: error.message})
            }

            res.status(500).send({message: "Erro inesperado"})
        }
        
    }
    
    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            const {email, password} = req.body

            if(!email || !password) {
               throw new MissingFields()
            }

            const userBusiness = new UserBusiness();

            const loginUser = await userBusiness.login(email, password)

            res.status(200).send(loginUser)
            
        } catch (error: any) {
            res.status(error.statusCode || 500)
            .send({ message: error.message || "Erro inesperado" })
    
        }
    }

    public getAllUsers = async (req: Request, res: Response) => {
        try {

          const token = req.headers.authorization as string

          if(!token) {
            throw new InvalidError("Token não foi enviado")
          }

          const userBusiness = new UserBusiness()
          
          const allUsers = await userBusiness.selectAllUsers(token)

          res.status(200).send(allUsers)
            
        } catch (error) {
            if(error instanceof Error) {
                return res.status(400).send({message: error.message})
            }

            res.status(500).send({message: "Erro inesperado"})
            
        }
    }

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id

            if(!token) {
                throw new InvalidError("Token não foi enviado")
            }

            if(!id) {
                throw new InvalidError("Seu Id não foi informado")
            }

            const userBusiness = new UserBusiness()

            const deleteUser = await userBusiness.deleteUser(token, id)

            res.status(200).send(deleteUser)
            
        } catch (error: any) {
            res.status(error.statusCode || 500)
            .send({ message: error.message || "Erro inesperado" })
        }

        
    }
}





export default UserController