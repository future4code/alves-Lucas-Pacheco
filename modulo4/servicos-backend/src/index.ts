import app from "./app";
import getAdress from "./endpoint/getAdress";
import getPoing from "./endpoint/getPoing";




app.get("/poing", getPoing)

app.post("/cep", getAdress)