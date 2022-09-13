import app from "./app";
import UserController from './endpoints/UserController'


const User = new UserController()  


app.post("/user/signup", User.userRegister)

app.post("/user/login", User.userLogin)

app.get("/user/profile", User.userProfile)