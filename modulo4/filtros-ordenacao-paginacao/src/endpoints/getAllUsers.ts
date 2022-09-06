import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"

const getAllUsers = async (req: Request,res: Response): Promise<void> =>{
    try {
        const name = req.query.name || "" as any
        let sort = req.query.sort
        let order = req.query.order as string 
        let page = Number(req.query.page)

        if(page < 1 || isNaN(page)) {
            page = 1
        } 
                   
         if(!(sort === "name" || sort === "email")) {
            sort = "email"
         }

         if(!(!order || order.toUpperCase() === "ASC" || order.toUpperCase() === "DESC")) {
            order = "ASC"
         }
        
         const size = 5

         const offset = size * (page -1)

        const users = await selectAllUsers(name, sort, order, size, offset)
       
       
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

 export default getAllUsers