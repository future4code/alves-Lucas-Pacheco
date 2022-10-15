import { Request, Response } from "express";
import UserBusiness from "../Business/UserBusiness";
import { ILoginInputDTO, ISignupInputDTO } from "../interface/UserInterface";


export default class UserController {
    constructor (
        private userBusiness: UserBusiness
    ) {}

    public createUser = async (req: Request, res: Response)  => {
       try {
        const {name, email, password} = req.body // Quebra a estrutura que vem do Body para facilitar a passagem

        const input: ISignupInputDTO = {
        name: name,
        email: email,
        password: password
     } // Faz o usuário com uma tipagem válida.
            
        const response = await this.userBusiness.signup(input)

        res.status(201).send(response)

       } catch (error) {
        if(error instanceof Error) {
            return res.status(res.statusCode).send({message: error.message})
        } // Verificação para não ser necessário tipar o Erro como Any
        
        res.status(500).send("Erro inesperado") // Erro de servidor
       }
    }

    public login = async (req: Request, res: Response) => {
      try {
        const {email, password } = req.body

        const input: ILoginInputDTO = {
            email: email,
            password: password
        }

        const login = await this.userBusiness.login(input)

        res.status(200).send(login)
        
      } catch (error) {
        if(error instanceof Error) {
            return res.status(res.statusCode).send({message: error.message})
        } // Verificação para não ser necessário tipar o Erro como Any
        
        res.status(500).send("Erro inesperado") // Erro de servidor
      }
    }
}