import { Request, Response } from "express";
import createTask from "../data/createTask";
import selectId from "../data/selectId";


const createNewTask = async (req: Request, res: Response) => {
    try {
        const {title, description, limitDate, creatorUserId} = req.body
        const idInicial = Date.now() % 1000000
        const id = idInicial.toString()
        // const user = selectId(creatorUserId)

        if(!title || !description || !limitDate || !creatorUserId) {
            res.statusCode = 404
            throw new Error("Alguns dos parâmetros não foram enviado na requisição");
            
        }

        if(typeof title !== "string" || typeof description !== "string" || typeof limitDate !== "string" ||  typeof creatorUserId !== "string") {
            res.statusCode = 402
            throw new Error("Um dos seus parâmetros não está como string, confira por favor");
            
        }
         
        // Como eu faço a verificação se é possível atribuir tarefa ao usuário do banco de dados? 

        await createTask(
            id,
            title,
            description,
            limitDate,
            creatorUserId
        )

        res.status(201).send({message: "Sua tarefa foi criada e atribuída com sucesso"})

    } catch (error : any) {
        res.status(res.statusCode || 500).send({message: error.message || "Ocorreu algum erro no servidor"})
    }
}

export default createNewTask