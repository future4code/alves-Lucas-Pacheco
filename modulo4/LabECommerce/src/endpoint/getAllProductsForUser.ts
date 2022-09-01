import { Request, Response } from "express";
import getProductsUser from "../data/getProductsUser";


const getUsersPurchases =async (req: Request, res: Response) => {
 try {
    const user_id =  req.params.user_id


   if(!user_id) {
    res.statusCode = 404
    throw new Error("Você não passou");
    
   }

   const result = await getProductsUser(user_id)

   res.status(200).send(result)

 } catch (error: any) {
      res.status(res.statusCode || 500).send({message: error.message} || "ocorreu algum erro no servidor")
 }
}

export default getUsersPurchases