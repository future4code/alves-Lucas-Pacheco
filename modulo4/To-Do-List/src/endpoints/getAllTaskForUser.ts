import { Request, Response } from "express";
import moment from "moment";
import selectTaskForId from "../data/selectTask";

const getAllTaskForUser = async (req: Request, res: Response) => {
try {
    const creatorUserId = req.query.creatorUserId as string

    const tasks = await selectTaskForId(creatorUserId)
  
    if(!creatorUserId){
      res.statusCode = 404
      throw new Error("Você não enviou o parâmetro id");
      
  }
  
  
  if(!tasks.length) {
  res.statusCode = 401
  throw new Error("O Seu Id não foi criado no nosso banco de dados, talvez a tarefa não exista.");
  }
  
  
  res.status(200).send(tasks)
} catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message || "Ocorreu algum erro no servidor" })
}

}


export default getAllTaskForUser