import { Request, Response } from "express";
import connection from "../data/connection";

const getAllUsers = async (req: Request, res: Response) => {
    try {

        const result = await connection("ToDoList_Users")
            .select("id", "nickname")

        res.status(200).send(result)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message || "Ocorreu algum erro no servidor" })
    }
}

export default getAllUsers