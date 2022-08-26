import { Request, Response } from "express";
import CreateUser from "../data/createUser";


const postUser = async (req: Request, res: Response) => {
 try {
  const { name , nickname, email} = req.body
  const idInicial = Date.now() % 100000
  const id = idInicial.toString() 

  if(!name || !nickname || !email ) {
    res.statusCode = 404
    throw new Error("Um dos parâmetros não foi passado")
  }

  if(typeof name !== "string") {
    res.statusCode = 401
    throw new Error("O Tipo do seu nome não está em string")
  }

  if (typeof nickname !== "string") {
    res.statusCode = 401
    throw new Error("O Tipo do seu nickname não é uma string ");
    
  }

  if(typeof email !== "string") {
    res.statusCode = 401
    throw new Error("O Tipo do seu email não é uma string");
    
  }

  await CreateUser(
    id,
    name,
    nickname,
    email,
  )

  res.status(201).send({message: "Seu Usuário foi criado"})
  
 } catch (error: any) {
    res.status(res.statusCode || 500).send({message: error.message} || "ocorreu algum erro no servidor")
 }
}

export default postUser