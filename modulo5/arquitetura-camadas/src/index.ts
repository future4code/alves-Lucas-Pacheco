import app from "./app";
import UserController from "./Controller/UserController";


const userController = new UserController()


app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)
app.get("/user", userController.getAllUsers)
app.delete("/user/:id", userController.deleteUser)