import app from "./app";
import getUsers from "./endpoints/getPoing";
import postUser from "./endpoints/postUser"
import getUserByid from "./endpoints/getUserById";
import PutUser from "./endpoints/PutUser";
import createNewTask from "./endpoints/CreateNewTask";
import getTaskId from "./endpoints/getTaskByid";
import getAllUsers from "./endpoints/getAllUsers";
import getAllTaskForUser from "./endpoints/getAllTaskForUser";
import getUserByQuery from "./endpoints/getUserByQuery";

// Data Conversar com bancos de dados
// Endpoints conversar com os endpoints.

 // GET 
app.get("/poing", getUsers)

app.get("/user", getUserByQuery)

app.get("/user/all", getAllUsers)

app.get("/user/:id", getUserByid)

app.get("/task", getAllTaskForUser)

app.get("/task/:id", getTaskId)

// POST
app.post("/user", postUser)

app.post("/task", createNewTask)


// put
app.put("/user/eddit/:id", PutUser)

