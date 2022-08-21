import express, {Request, Response} from 'express'
import cors from 'cors'
import { users, User, Type  } from './data'


const app = express()

app.use(express.json())

app.use(cors())


app.listen(3003, () => { 
    console.log("Server, is running in http://localhost:3003")
   
   })
app.get("/Users/Search", (req: Request, res: Response) => {
  try {

    const name = req.query.name as string 

    if(!users) {
        res.statusCode = 404
        throw new Error("Não existe uma lista de usuário")
    }

    if(!name) {
        res.statusCode = 401
        throw new Error("Não foi encontrado o usuário em questão")
    }

    const list = users.map((usuarios) => {
        return usuarios
    }).filter((usuarios) => {
        return name ? usuarios.name.includes(name) : true
    })

    res.status(200).send(list)

  } catch(error: any) {
    res.status(res.statusCode || 500).send({message: error.message})
  }
})

app.post("/Users", (req: Request, res: Response) => {
   try {
    const {name, email, type, age} = req.body

    if(!name || !email || !type ||!age) {
        res.statusCode == 404
        throw new Error("Você não colocou nome, email, o tipo de pessoa e idade")
    }

    if(typeof name !== "string" || typeof email !== "string" || type.toUpperCase() !== Type.NORMAL && type.toUpperCase() !== Type.ADMIN || typeof age !== "number") {
        res.statusCode = 401
        throw new Error("Provavelmente seu nome não está em texto, provavelmente em números, seu Email está em apenas números, sua idade está em palavras e seu tipo não está em ADMIN, ou NORMAL")
    }

    const NewUsers: User = {
        id: Date.now(),
        name,
        email,
        type,
        age,

    }

    users.push(NewUsers)

    res.status(201).send({message: "seu Usuário foi criado"})

   } catch(error: any) {
    res.status(res.statusCode || 500).send({message: error.message})

   }
})



