import { Request, Response } from "express";
import allocationProducts from "../data/allocationProduct";

const PostAttribution = async (req: Request, res: Response) => {
try {
    const {userId, productId, quantity} = req.body

    if(!userId || !productId || !quantity) {
            
        res.statusCode = 422
        throw new Error("Um dos parâmetros de id de usuário, id do produto e quantidade não foram passados");
    } 

    if(typeof userId !== "string") {
        res.statusCode = 404
        throw new Error("Seu parâmetro userId não é uma string");
        
    }

    if(typeof quantity !== "number") {
      res.statusCode = 402
      throw new Error("Seu parâmetro quantidade não é um Number");
      
    }

    if(typeof productId !== "string") {
        res.statusCode = 404
        throw new Error("Seu parâmetro productId não é uma string");
        
    }

    await allocationProducts(userId, productId, quantity)

    res.status(201).send({message: "Seu produto foi colocado no histórico de vendas"})
} catch (error: any) {
    res.status(res.statusCode || 500).send({message: error.message} || "ocorreu algum erro no servidor")
}
}

export default PostAttribution