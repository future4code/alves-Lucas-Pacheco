import { Request, Response } from "express";
import RegisterProduct from "../data/RegisterProduct";


const PostCreateProducts = async (req: Request, res: Response) => {
   try {
    const {name, price, imageUrl} = req.body
      
    if(!name || !price || !imageUrl) {
            
        res.statusCode = 422
        throw new Error("Um dos parâmetros de nome, email e senha não foram passados");
    } 

    if(typeof name !== "string") {
        res.statusCode = 404
        throw new Error("Seu parâmetro name não é uma string");
        
    }

    if(typeof price !== "number") {
      res.statusCode = 402
      throw new Error("Seu parâmetro price não é um Number");
      
    }

    if(typeof imageUrl !== "string") {
        res.statusCode = 404
        throw new Error("Seu parâmetro imageUrl não é uma string");
        
    }

    await RegisterProduct(name, price, imageUrl)

    res.status(201).send("Seu Produto foi cadastrado")
          

   } catch (error: any) {
    res.status(res.statusCode || 500).send({message: error.message} || "ocorreu algum erro no servidor")
   }

}

export default PostCreateProducts