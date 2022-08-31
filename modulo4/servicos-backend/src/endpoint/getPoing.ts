import { Request, Response } from "express";

const getPoing = async (req: Request, res: Response) => {
    res.send("Servidor Rodando")
}

export default getPoing 