import app from "./app";
import { postRouter } from "./Router/PostRouter";
import { userRouter } from "./Router/UserRouter";




app.use("/user", userRouter)
app.use("/post", postRouter)