import { Request, Response } from "express"
import selectAllUsersParams from "../data/selectAllUsersParams"

const getAllUsersParams = async (req: Request,res: Response): Promise<void> =>{
    try {
      const type = req.params.type || "" as any
       const users = await selectAllUsersParams(type)
       
       
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 export default getAllUsersParams