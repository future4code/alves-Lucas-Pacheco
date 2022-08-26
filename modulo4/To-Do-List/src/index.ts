import app from "./app";
import getUsers from "./endpoints/getPoing";
import postUser from "./endpoints/postUser"
import getUserByid from "./endpoints/getUserById";
import PutUser from "./endpoints/PutUser";
import createNewTask from "./endpoints/CreateNewTask";
import getTaskId from "./endpoints/getTaskByid";
// Data Conversar com bancos de dados
// Endpoints conversar com os endpoints.

 // GET 
app.get("/poing", getUsers)

app.get("/user/:id", getUserByid)

app.get("/task/:id", getTaskId)

// POST
app.post("/user", postUser)

app.post("/task", createNewTask)


// put
app.put("/user/eddit/:id", PutUser)

