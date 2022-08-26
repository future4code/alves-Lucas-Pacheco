import { Request, Response } from "express";
import selectId from "../data/selectId";
import updateUser from "../data/updateUser";

const PutUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id 
        const {name, nickname, email } = req.body
        const user = await selectId(id)
                
        if(!id) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado");
            
        }

        if(!name || !nickname || !email) {
            res.statusCode = 404
            throw new Error("Você não inseriu seu nickname ou seu nome, em um dos parâmetros");
            
        }

        if(typeof name !== "string") {
            res.statusCode = 402
            throw new Error("Seu Nome não está em string");
            
        }

        if(typeof nickname !== "string") {
            res.statusCode = 402
            throw new Error("Seu nickname não está em string");
            
        }

        if(typeof email !== "string") {
            res.statusCode = 402
            throw new Error("Seu nickname não está uma string");
            
        }

        if(!user.length) {
            res.statusCode = 401
            throw new Error("Seu Usuário não foi encontrado no banco de dados");
            
        }
     
        await updateUser(
            id,
            name,
            nickname,
            email
        )

        res.send({message: "Seu Usuário foi atualizado"})

    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message || "Ocorreu algum erro no servidor"})
    }
}

export default PutUser