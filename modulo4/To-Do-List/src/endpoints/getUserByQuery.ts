import { Response, Request } from "express";
import selectQuery from "../data/selectQuery";


const getUserByQuery = async (req: Request, res: Response) => {
    try {
        const nickname = req.query.nickname as string
        

        if(!nickname ) {
          res.statusCode = 404
          throw new Error("Você não enviou seu nickname ou seu email")
        }
    
      
        const user = await selectQuery(nickname)
            
      
        res.status(200).send(user)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message || "Ocorreu algum erro no servidor"})
    }
}

export default getUserByQuery