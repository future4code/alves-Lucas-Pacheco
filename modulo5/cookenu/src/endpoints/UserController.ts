
import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import { InvalidCredentiais } from "../error/invalidCredentiais";
import { InvalidError } from "../error/invalidError";
import { MissingFields } from "../error/MissingFields";
import User from "../models/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { AuthenticatorData } from "../types/AuthenticationData";
import { USER_ROLES } from "../types/interfaceUsers";
import moment from "moment";
import { InsufficientAuthorization } from "../error/insufficientAuthorization";

class UserController {
    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {

            let { name, email, password, role } = req.body

            if (!email || !password || !name) {
                throw new MissingFields();
            }

            if (email.indexOf("@") == -1) {
                throw new InvalidError("Seu email tem que possuir um @ em sua composição")
            }

            if (password.length < 6) {
                throw new InvalidError("Sua tenha tem que possuir ao menos 6 caracteres")
            }

            const userData = new UserDataBase()

            const id = new GenerateId().createId()

            const userDB = await userData.getUserByEmail(email)

            if (userDB) {
                throw new InvalidError("Email já cadastrado")
            }

            if (!role) {
                role = USER_ROLES.NORMAL
            }

            const hashManager = new HashManager();

            const hash = await hashManager.hash(password)

            const newUser = new User(id, name, email, hash, role)

            await userData.createUser(newUser)

            const payload: AuthenticatorData = {
                id: id,
                role: role
            }

            const token = new Authenticator().generateToken(payload)

            res.status(201).send({ acess_token: token })



        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
        }

    }

    public userLogin = async (req: Request, res: Response): Promise<void> => {
        try {

            const { email, password } = req.body

            if (!email || !password) {
                throw new MissingFields()
            }


            if (email.indexOf("@") === -1) {
                throw new InvalidError("Está faltando um @ em seu email")
            }

            const userData = new UserDataBase()

            const userDB = await userData.getUserByEmail(email)

            if (!userDB) {
                throw new InvalidCredentiais()
            }


            const hashManager = new HashManager()

            const correctPassword = await hashManager.compare(password, userDB.password)

            if (!correctPassword) {
                throw new InvalidCredentiais();

            }

            const payload: AuthenticatorData = {
                id: userDB.id,
                role: userDB.role
            }

            const token = new Authenticator().generateToken(payload)

            res.status(200).send({ acess_token: token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
        }
    }

    public userProfile = async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string

            if (!token) {
                throw new InvalidError("Seu token não foi encontrado no banco de dados")
            }


            const userData = new UserDataBase()

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            if (!payload) {
                throw new InvalidCredentiais()
            }

            const user = await userData.getUserById(payload.id)

            if (!user) {
                throw new InvalidError("Usuário não foi encontrado");
            }

            res.status(200).send({
                id: user?.id,
                name: user?.name,
                email: user?.email,
            })


        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })

        }

    }

    public searchProfile = async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id

            if (!token) {
                throw new InvalidError("Seu Token não foi encontrado no banco de dados")
            }

            const authenticator = new Authenticator();
            const payload = authenticator.verifyToken(token)

            if (!payload) {
                throw new InvalidCredentiais()
            }

            const userData = new UserDataBase()
            const user = await userData.getUserById(id)

            if (!user) {
                throw new InvalidError("Usuário não foi encontrado");
            }

            res.status(200).send({
                id: user.id,
                name: user.name,
                email: user.email

            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
        }
    }

    public deleteAccount =async (req: Request, res: Response) => {
       try {
        const token = req.headers.authorization as string 
        const id = req.body.id 

        if(!token){
            throw new InvalidCredentiais()
        }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            const userData = new UserDataBase()
            const userDB = await userData.getUserById(id)

            if(!userDB){
                throw new InvalidError("O Perfil não foi encontrado")
            }

            if(payload.role !== USER_ROLES.ADMIN) {
                throw new InsufficientAuthorization()
            }

            await userData.removeAccount(id)

            res.status(200).send({message: "Conta Deletada pela Adminstração com sucesso"})


       } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
       }

    }



    
}

export default UserController