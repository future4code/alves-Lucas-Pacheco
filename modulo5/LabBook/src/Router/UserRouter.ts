import { Router } from 'express'
import UserBusiness from '../business/UserBusiness'
import UserController from '../controller/UserController'
import UserDataBase from '../dataBase/UserDataBase'
import Authenticator from '../services/Authenticator'
import GenerateId from '../services/GenerateId'
import { HashManager } from '../services/HashManager'


export const userRouter = Router()


const userController = new UserController(
    new UserBusiness(
        new UserDataBase,
        new GenerateId,
        new HashManager,
        new Authenticator

    )
)

userRouter.post("/signup", userController.createNewUser)
userRouter.post("/login", userController.login)