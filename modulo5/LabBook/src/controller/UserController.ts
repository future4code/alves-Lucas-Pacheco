import UserBusiness from "../business/UserBusiness";
import { ILoginInputDto, ISignupInputDTO } from "../interfaces/UserInterface";
import {Request, Response} from 'express'




class UserController {
    constructor (
         private userBusiness: UserBusiness
    ) {}

    public createNewUser = async (req: Request, res: Response): Promise<void> => {
        try {
            
            const {name, email, password} = req.body

            const newUser: ISignupInputDTO = {
                name: name,
                email: email,
                password: password
            }

            const response = await this.userBusiness.signup(newUser)

            res.status(201).send(response)
        } catch (error) {
            if(error instanceof Error) {
                res.status(res.statusCode).send({message: error.message})
                return
            }

            res.status(500).send("Erro inesperado")
        }
    }

    public login = async (req: Request, res: Response): Promise<void> => {
      try {
        const {email, password} = req.body

        const userLogin: ILoginInputDto = {
            email: email,
            password: password
        }

        const login = await this.userBusiness.login(userLogin)

        res.status(200).send(login)

      } catch (error) {
        if(error instanceof Error) {
            res.status(res.statusCode).send({message: error.message})
            return
        }

        res.status(500).send("Erro inesperado")
      }
    }
}

export default UserController