import { Request, Response } from "express";
import connection from "../data/connection";

const getAllUsers =async (req: Request, res: Response) => {
    
   try {
    const result =  await connection("labecommerce_users")
    .select({
        id: "id",
        name: "name",
        email: "email"
    })

    const id = result.filter((id) => {
        return id.id
    })

    console.log(id)

    // const connectionPrice = await connection("labecommerce_products")
    // .select("price")
    // .where("id", productId)

    // const newTotalPrice = connectionPrice.filter((price) => {
    //     return price.price
    // })

    // const totalPrice = newTotalPrice.find(element => element.price === element.price)


    // const result2 = await connection("labecommerce_purchases")
    // .select("id")
    // .where("user_id", id)

    // console.log(result2)
   

    const result3 = await connection("labecommerce_users")
    .select({
        id: "id",
        name: "name",
        email: "email",
      
    })

    if(!result.length) {
        res.statusCode = 404
        throw new Error("Não foi encontrado usuários em nosso banco de dados");
        
    }

    
   res.send(result3)
   } catch (error: any) {
    res.status(res.statusCode || 500).send({message: error.message} || "ocorreu algum erro no servidor")
   }
    
}


export default getAllUsers