import { Request, Response } from "express";
import RegisterUser from "../data/RegisterUser";

const PostCreateUser = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body
        
        if(!name || !email || !password) {
            
            res.statusCode = 422
            throw new Error("Um dos parâmetros de nome, email e senha não foram passados");
        } 

        if(typeof name !== "string") {
        res.statusCode = 401
        throw new Error("O Tipo do name não está em uma string");
        
        }

        if(typeof email !== "string") {
            res.statusCode = 401
            throw new Error("O tipo do seu email não é uma string");
            
        }

        if(typeof password !== "string") {
            res.statusCode = 401
            throw new Error("O Tipo da sua senha não é uma string");
            
        }

        await RegisterUser(name, email, password)

        res.status(201).send({message: "Seu Usuário foi criado"})

    } catch (error: any) {
        
        res.status(res.statusCode || 500).send({message: error.message} || "ocorreu algum erro no servidor")
        
    }
    
}

export default PostCreateUser