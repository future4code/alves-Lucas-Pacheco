import app from "./app"
import UserController from "./endpoints/UserController"


const userController = new UserController()

//POST
app.post("/signup", userController.createUser)
app.post("/login", userController.userLogin)

//GET
app.get("/profile", userController.userProfile)

//PUT


//DELETE
