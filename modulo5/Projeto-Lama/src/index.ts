import app from "./app";
import { userRouter } from "./Router/UserRouter";



app.use("/user", userRouter)