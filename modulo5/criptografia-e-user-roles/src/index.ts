import app from "./app";

import UserController from './endpoints/UserController'


const userController = new UserController()  


app.post("/user/signup", userController.userRegister)

app.post("/user/login", userController.userLogin)

app.get("/user/profile", userController.userProfile)

app.get("/user", userController.userProfileById)

app.delete("/user/:id", userController.deleteUser)
