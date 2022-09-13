import { Request, Response } from "express";
import connection from "../data/connection";
import selectProductsUserById from "../data/selectProductsUserById";

import selectUsers from "../data/selectUsers";


const getAllUsers =async (req: Request, res: Response) => {
    
   try {

    const result =  await selectUsers()

    for(const user of result){
      
          const purchases = await selectProductsUserById(user.id)

          user.purchases = purchases
    }


    if(!result.length) {
        res.statusCode = 404
        throw new Error("Não foi encontrado usuários em nosso banco de dados");
        
    }
       
    res.status(200).send(result)
    
   } catch (error: any) {
    
    res.status(res.statusCode || 500).send({message: error.message} || "ocorreu algum erro no servidor")
   }
    
}


export default getAllUsers