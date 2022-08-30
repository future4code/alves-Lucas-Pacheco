import app from "./app";
import getAllUsers from "./endpoints/getAllUsers";
import getAllUsersParams from "./endpoints/getAllUsersParams";
import getPoing from "./endpoints/getPoing";


app.get("/poing", getPoing)

app.get("/users", getAllUsers)


app.get("/users/:type", getAllUsersParams)