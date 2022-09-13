import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import Generateid from "../service/GenerateToken";
import { MissingFields } from "../error/MissingFields";
// import { invalidCredentiais, invalidEmail, invalidPassword } from "../error/invalidEmailAndPassword";
import { InvalidError, InvalidCredentiais } from "../error/InvalidError";
import User from "../models/User";
import Authenticator from "../service/Authenticator";
import { AuthenticationData } from '../types/AuthenticationData'

class UserController {

    public async userRegister(req: Request, res: Response): Promise<void> {

       try {
        const {email, password} = req.body

        if(!email || !password) {
         throw new MissingFields();
         
        }

        if(email.indexOf("@") === -1){
         throw new InvalidError("Está faltando @ em sua Requisição")
         
        }

        if(password.length < 6){
          throw new InvalidError("Sua Senha tem menos de 6 caracteres")
        }

        const id = new Generateid().createId()

        const newUser = new User(id, email, password)

        const userDataBase = new UserDataBase()

        await userDataBase.createUser(newUser)
        
        const payload: AuthenticationData = {
            id: id
        }
        
        const token = new Authenticator().generateToken(payload)

        res.status(201).send({message: "Usuário Cadastrado com sucesso", token}) 
        

       } catch (error: any) {
        res.status(error.statusCode || 500).send({message: error.message || "Algum erro ocorreu no servidor"})
       }


    }

    public async userLogin(req: Request, res: Response): Promise<void> {
      try {
        
        const {email, password} = req.body

        if(!email || !password) {
          throw new MissingFields()
        }

        if(email.indexOf("@") === -1){
          throw new InvalidError("Está faltando @ em sua Requisição");
          
        }

        const userDataBase = new UserDataBase()

        const emailExist = await userDataBase.getUserByEmail(email)
        const correctPassword = await userDataBase.getUserByPassword(password)

        if(!correctPassword.length && !emailExist.length){
          throw new InvalidCredentiais()
        }


        const token = new Authenticator().generateToken(correctPassword[0].id)

        res.status(200).send({token})

      } catch (error: any) {
        res.status(error.statusCode || 500).send({message: error.message || "Algum erro ocorreu no servidor"})
      }
    }

    public async userProfile(req: Request, res: Response): Promise<any> {
     try {
      const token = req.headers.authorization as string

      if(!token) {
        throw new InvalidError("Seu Token não foi encontrado no banco de dados")
      }

      const userDataBase = new UserDataBase()

      const AuthenticationData = new Authenticator().verifyToken(token)

      console.log(AuthenticationData)

      const user = await userDataBase.getUserById(AuthenticationData)


      res.status(200).send(user)
          


     } catch (error: any) {
      res.status(error.statusCode || 500)
      .send({message: error.message || "Algum erro ocorreu no servidor"})
     }
    }
}

export default UserController