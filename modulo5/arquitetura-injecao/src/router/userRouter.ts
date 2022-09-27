import { Router } from 'express'
import UserBusiness from '../business/UserBusiness'
import UserController from '../Controller/UserController'
import UserDataBase from '../dataBase/UserDataBase'
import Authenticator from '../service/Authenticator'
import GenerateId from '../service/GenerateId'
import { HashManager } from '../service/HashManager'


export const userRouter = Router()


const userController = new UserController(
    new UserBusiness(
        new UserDataBase(),
        new GenerateId(),
        new HashManager(),
        new Authenticator()
    )
)


userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.get("/", userController.getAllUsers)

userRouter.delete("/:id", userController.deleteUser)
userRouter.put("/:id", userController.editUser)