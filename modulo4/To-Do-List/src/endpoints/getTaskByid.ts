import selectTask from "../data/selectTaskId";
import { Request, Response } from "express";
import moment from "moment";

const getTaskId = async (req: Request, res: Response) => {
   try {
    const id = req.params.id
    const user =  await selectTask(id)

    


    if(!id){
        res.statusCode = 404
        throw new Error("Você não enviou o parâmetro id");
        
    }
    
    

   if(!user.length) {
    res.statusCode = 401
    throw new Error("O Seu Id não foi criado no nosso banco de dados, talvez a tarefa não exista.");
   }

  

 

   res.status(200).send({
    title: user[0].title,
    description: user[0].description,
    limit_date: moment(user[0].limit_date, "YYY-MM-DD").format("DD/MM/YYYY"),
    status: user[0].status,
    creator_user_id: user[0].creator_user_id,
    nickname: user[0].nickname
   })

   } catch (error: any) {
    res.status(res.statusCode || 500).send({message: error.message || "Ocorreu algum erro no servidor"})
   }
}

export default getTaskId