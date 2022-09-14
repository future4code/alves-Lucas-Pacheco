import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import Generateid from '../services/GenerateId'
import { MissingFields } from "../error/MissingFields";
import { InvalidError } from '../error/invalidError'
import { InvalidCredentiais } from "../error/invalidCredentiais";
import User from "../models/User";
import Authenticator from "../services/Authenticator";
import { AuthenticationData } from '../types/AuthenticationData'
import { HashManager } from "../services/HashManager";
import { USER_ROLES } from "../types/InterfaceUsers";
import { InsufficientAuthorization } from "../error/InsuficienceAuthorization";

class UserController {

    public userRegister = async (req: Request, res: Response): Promise<void> => {

        try {
            const { email, password, role } = req.body



            if (!email || !password || !role) {
                throw new MissingFields();

            }

            if (email.indexOf("@") === -1) {
                throw new InvalidError("Está faltando @ em sua Requisição")

            }

            if (password.length < 6) {
                throw new InvalidError("Sua Senha tem menos de 6 caracteres")
            }

            const id = new Generateid().createId()


            const userDataBase = new UserDataBase()

            const userDB = await userDataBase.getUserByEmail(email)

            if (userDB) {
                throw new InvalidError("Email já cadastrado")
            }

            const hashManager = new HashManager()
            const hash = await hashManager.hash(password)

            const newUser = new User(id, email, hash, role)

            await userDataBase.createUser(newUser)

            const payload: AuthenticationData = {
                id: id,
                role: role
            }

            const token = new Authenticator().generateToken(payload)

            res.status(201).send({ message: "Usuário Cadastrado com sucesso", token })


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
                throw new InvalidError("Está faltando @ em sua Requisição");

            }

            const userDataBase = new UserDataBase()

            const userDB = await userDataBase.getUserByEmail(email)
            // const correctPassword = await userDataBase.getUserByPassword(password)

            if (!userDB) {
                throw new InvalidCredentiais()
            }

            const hashManager = new HashManager()
            const correctPassword = await hashManager.compare(password, userDB.password)

            if (!correctPassword) {
                throw new InvalidCredentiais()
            }

            const payload: AuthenticationData = {
                id: userDB.id,
                role: userDB.role
            }

            const token = new Authenticator().generateToken(payload)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
        }
    }

    public userProfile = async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string

            if (!token) {
                throw new InvalidError("Seu Token não foi encontrado no banco de dados")
            }



            const userDataBase = new UserDataBase()

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            console.log(payload)

            if (payload.role !== USER_ROLES.NORMAL) {
                throw new InsufficientAuthorization()
            }


            const user = await userDataBase.getUserById(payload.id)


            res.status(200).send(user)



        } catch (error: any) {
            res.status(error.statusCode || 500)
                .send({ message: error.message || "Algum erro ocorreu no servidor" })
        }
    }

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id

            if (!id || !token) {
                throw new MissingFields()

            }
            const authentication = new Authenticator()

            const authenticationData = authentication.verifyToken(token)

            const userDataBase = new UserDataBase()


            if (authenticationData.role !== "ADMIN") {
                throw new InsufficientAuthorization()
            }

            await userDataBase.deleteUser(id)


            res.status(200).send("Usuário Deletado")



        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
        }
    }


    public userProfileById = async (req: Request, res: Response): Promise<any> => {
        try {
            const token = req.headers.authorization as string

            if(!token) {
                throw new MissingFields()
            }

            const authentication = new Authenticator()

            const authenticationData = authentication.verifyToken(token)

            const userDataBase = new UserDataBase()

            const user = await userDataBase.getUserById(authenticationData.id)

            console.log(user)

            res.status(200).send({
                id: user?.id,
                email: user?.email,
                role: user?.role
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || "Algum erro ocorreu no servidor" })
        }
    }
}

export default UserController