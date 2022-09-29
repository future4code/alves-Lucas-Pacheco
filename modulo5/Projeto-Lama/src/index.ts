import app from "./app";
import { showRouter } from "./Router/ShowRouter";
import { userRouter } from "./Router/UserRouter";



app.use("/user", userRouter)
app.use("/show", showRouter)