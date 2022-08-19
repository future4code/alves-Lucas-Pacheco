import express, {Request, Response} from "express"
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/", (req: Request, res: Response) => {
    res.send("Olá Foi Executado")
})

type BodyExer2 = {
    id: number | string,
    name: string,
    phone: number,
    email: string,
    website: string,

}

type BodyExer5 = {
    userId: string | number,
    id: number,
    title: string, 
    body: string,

}

let ex3: BodyExer2[] = [
    {
        id: 1,
        name: "Lucas",
        phone: 99999-9999,
        email: "aaaaaaaaaaa@gmail.com",
        website: "aaaaaaaaaaaaaaa",
        
    },
    {
        id: 2,
        name: "Raquel",
        phone:  88888-88888,
        email: "bbbbbbbbbbbbbbbb@gmail.com",
        website: "bbbbbbbbbbbb",
    },
    {
        id: 3,
        name: "Nicole",
        phone: 77777-777777,
        email: "ccccccccccccc@gmail.com",
        website: "ccccccccccccccc"
    },
    {
        id: 4,
        name: "Ilena",
        phone: 66666-666666,
        email: "dddddddddddddd@gmail.com",
        website: "dddddddddddd"
    },
    
]

let ex6: BodyExer5[] = [
    {
        userId: 1,
        id: 1,
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla",
        body: "odio ut maximus sollicitudin. Morbi dapibus bibendum nunc sed rhoncus. Ut ut sapien id dui vulputate ultrices malesuada in dolor. In ipsum ex, pulvinar ac aliquet at, pharetra nec mauris. Donec et hendrerit quam. Nunc volutpat tellus ut sapien consequat dapibus. Aenean tempus arcu aliquam lacus luctus faucibus. Etiam tortor",
    
    },

    {
        userId: 2,
        id: 2,
        title:"Lorem ipsum elit. Donec fringilla",
        body: "odio ut maximus sollicitudin. Morbi dapibus bibendum nunc sed rhoncus. Ut ut sapien id dui vulputate ultrices malesuada in dolor. In ipsum ex, pulvinar ac aliquet at, pharetra nec mauris. Donec et hendrerit quam. Nunc volutpat tellus ut sapien consequat dapibus. Aenean tempus arcu aliquam lacus luctus faucibus. Etiam tortor",
    
    },
    {
        userId: 3,
        id: 3,
        title:"Lorem ipsum dsectetur adipiscing elit. Donec fringilla",
        body: "odio ut maximus sollicitudin. Morbi dapibus bibendum nunc sed rhoncus. Ut ut sapien id dui vulputate ultrices malesuada in dolor. In ipsum euam lacus luctus faucibus. Etiam tortor",
    
    },
    {
        userId: 4,
        id: 4,
        title:"Lorem a",
        body: "odio ut maximus sollicitudin. Morbi dapibus bibendum nunc sed rhoncus. Ut ut sapien id dui vulputate ultrices malesuada in dolor. In ipsum ex, pulvin Nunc volutpat tellus ut sapien consequat dapibus. Aenean tempus arcu aliquam lacus luctus faucibus. Etiam tortor",
    
    },

]
//Bem eu não sabia como fazer de outra forma.

app.get("/allusers", (req: Request, res: Response) => {
    const users = ex3.map((users) => {
        return users
    })
    
    res.send(users)
})

app.get("/posts", (req: Request, res: Response) => {
    const posts = ex6.map((posts) => {
        return posts
    })

    res.send(posts)
})

//Ex8

app.get("/posts/:id", (req: Request, res: Response) => {
    const id = req.params.id
    
    const post: BodyExer5[] = ex6.filter((post) => {
        return post.userId === Number(id)
    })

    res.send(post)

})


app.delete("/allusers/:id", (req: Request, res: Response) => {
    const userId = req.params.id




    const deleteUser = ex3.filter((user) => {
         return user.id !== Number(userId)
    })

   ex3 = deleteUser
   

    res.end()

})

app.delete("/posts/:id", (req: Request, res: Response) => {
    const postId = req.params.id


    const deletePost = ex6.filter((post) => {
        return post.id !== Number(postId)
    })

    ex6 = deletePost

    res.end()
})
