import { Request, Response } from "express";

const getUsers = async (req: Request, res: Response) => {
  res.send("Iniciou o projeto")

}

export default getUsers
