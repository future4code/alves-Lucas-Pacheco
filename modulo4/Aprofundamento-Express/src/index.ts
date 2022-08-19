import express, {Request, Response} from 'express'
import cors from 'cors'


const app = express()

app.use(express.json())

app.use(cors())


app.listen(3003, () => { 
    console.log("Server, is running in http://localhost:3003")
   
   })

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong! 🏓")
})
   

type Afazeres = {
    userId: number,
    id:number,
    title: string,
    completed: boolean | string
}

let list: Afazeres[] = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: true
      },
      {
        userId: 2,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      },
      {
        userId: 2,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      },
      {
        userId: 4,
        id: 4,
        title: "et porro tempora",
        completed: true
      },
      {
        userId: 3,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
      },
      {
        userId: 6,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
      },
     
]

app.get("/list/done", (req: Request, res: Response) => {
 const filtrandoLista = list.filter((task)  => {
    return task.completed === true
 })

 res.send(filtrandoLista)
})

app.get("/list/undone", (req: Request, res: Response) => {
    const filtrandoLista = list.filter((task)  => {
        return task.completed === false
     })
    
     res.send(filtrandoLista)
})

app.post("/list", (req: Request, res: Response) => {
    const {userId, id, title, completed} = req.body

  if(list) {
      list.push({
        userId,
        id,
        title,
        completed,
      })
      res.send(list)
  } else {
    res.status(404).send("Não foi possível criar a tarefa, veja se cumpriu todos requisitos")

  }
    
    
})

app.delete('/list/:taskId', (req: Request, res: Response) => {
    const taksId = req.params.taskId
   
  const deleteTask = list.filter((task) => {
    return task.id !== Number(taksId)
  })

  list = deleteTask

  res.end()
})

app.get('/list/searchTask', (req: Request, res: Response) => {
    const id = Number(req.query.id) 

    

    const allTask = list.map((tasks) => {
        return tasks
    })

    const result = allTask.filter((tasks) => {
        return tasks.userId === id
    })

    res.send(result)
})

app.put("/list/change/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    const changeTask =  list.filter((tarefa) => {
        if(tarefa.id === id) {
            return tarefa
        }
    }).map((tarefa) => {
        if(tarefa.completed === false) {
            return tarefa.completed = true
        } else {
            return tarefa.completed = false 
        }
    })

    res.send(changeTask)
})