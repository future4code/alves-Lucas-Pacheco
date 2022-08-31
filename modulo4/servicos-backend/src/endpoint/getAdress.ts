import { Request, Response } from "express";
import connection from "../data/connection";
import getCep from "../service/getCep";

const getAdress = async (req: Request, res: Response) => {
try {
    const {numero, complemento, cep} = req.body

    if(!numero || !cep) {
        res.statusCode = 422
        throw new Error("Você não passou seu numero ou seu cep");
        
    }

    const endereço = await getCep(cep, numero, complemento)

    await connection("address_user").insert(endereço)


    

    res.status(201).send("Usuário criado")
} catch (error: any) {
   
    res.status(res.statusCode || 500).send({message: error.message || "Deu algum erro de servidor"})
}


}

export default getAdress