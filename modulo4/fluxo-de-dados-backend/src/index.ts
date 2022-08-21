import { list, Produtos } from "./data"
import express, { Request, Response } from 'express'
import cors from 'cors'


const app = express()

app.use(express.json())

app.use(cors())


app.listen(3003, () => {
    console.log("Server, is running in http://localhost:3003")

})

app.get("/test", (req: Request, res: Response) => {
    res.send("Funcionou!")
})

app.post("/product", (req: Request, res: Response) => {


    try {
        const { id, name, price } = req.body

        if (!name || !price) {
            res.statusCode === 404
            throw new Error("Você não colocou ou nome ou preço do seu produto")

        }

        const newList: Produtos = {
            id: Date.now().toString(),
            name,
            price,
        }

        list.push(newList)

        res.send(list)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})


app.get("/product/search", (req: Request, res: Response) => {
    const name = req.query.name as string 
    
    const newList = list.map((products) => {
        return products
    }).filter((product) => {
        return name ? product.name.includes(name) : true 
    })

    res.send(newList)
})

app.put("/products/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id as string
        const {price, name} = req.body

        if (!id) {
            res.statusCode = 404
            throw new Error("Você não passou Id do produto")
        }

        if (!price && !name) {
            res.statusCode = 404
            throw new Error("Preço não foi enviado para alteração")
        }

        if (price <= 0) {
            res.statusCode = 401
            throw new Error(` O ${price} sendo negativo é invalido`)
        }

        if(typeof(price) !== "number") {
          res.statusCode = 404
          throw new Error(`O seu preço não é um número!`)
        }

       

        const changePrice = list.filter((products) => {
         if(products.id === id) {
            return products
         }
        }).map((product) => {
            product.price = price ? price : product.price
            product.name = name ? name : product.name
            return product 
        })

        res.send(changePrice)


    } catch (error: any) {
       res.status(res.statusCode || 500).send({message: error.message})
    }

})

app.delete("/product/:id", (req: Request, res: Response) => {
    try {
    const id = String(req.params.id)

    const deleteProduct = list.findIndex((product) => {
        return product.id === id
    })

    if(deleteProduct === -1) {
        throw new Error("Seu Produto não foi encontrado")
      
    }

    list.splice(deleteProduct, 1)

    res.send({message: `Produto do ${id} foi deletado`})

    }catch(error: any) {
     res.status(res.statusCode || 500).send({message: error.message})
    }
})