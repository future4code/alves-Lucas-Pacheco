import { Request, Response } from "express";

import selectId from "../data/selectId";

const getUserByid = async (req: Request, res: Response) => {
 try {
    
    const id = req.params.id 
  

    if(!id) {
      res.statusCode = 404
      throw new Error("Você não enviou seu id")
    }

    //Tenho dúvida pq esse if não funciona só entra no abaixo
    const user = await selectId(id)
        
    if(!user.length) {
      res.statusCode = 401
      throw new Error("Não encontramos o Id do usuário no banco de dados");
      
    }

    res.status(200).send({user})
  
 } catch (error: any) {
    res.status(res.statusCode || 500).send({message: error.message || "Ocorreu algum erro no servidor"})
 }
  
}

export default getUserByid