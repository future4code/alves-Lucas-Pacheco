import { Request, Response } from "express";
import connection from "../data/connection";

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const search = req.query.search || ""
        let order = req.query.order as string
        let sort = req.query.sort

        if (!(!order || order.toUpperCase() === "ASC" || order.toUpperCase() === "DESC")) {
            order = ""
        }

        if(!(sort === "price" || sort === "name")) {
            sort = "price"
         }

        // Função de Await Connection, com banco de dados.
        const result = await connection("labecommerce_products")
            .select("id", "name", "price", "image_url")
            .where("name", "LIKE", `%${search}%`)
            .orderBy(sort, order)

        if (!result.length) {
            res.statusCode = 404
            throw new Error("Não foi encontrado usuários em nosso banco de dados");

        }

        res.status(200).send(result)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message } || "ocorreu algum erro no servidor")
    }
}

export default getAllProducts