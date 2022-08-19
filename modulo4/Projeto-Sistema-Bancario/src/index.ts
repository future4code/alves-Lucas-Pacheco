import express, { Request, Response } from 'express'
import cors from 'cors'
import { clientes, Extrato, Conta } from './data'
import * as moment from 'moment'


const app = express()

app.use(express.json())

app.use(cors())


app.listen(3003, () => {
    console.log("Server, is running in http://localhost:3003")

})

app.post("/users", (req: Request, res: Response) => {
    try {
        const { nome, cpf, nascimento } = req.body

        if (!nome || !cpf || !nascimento) {
            res.statusCode = 404
            throw new Error("Por favor confira se enviou, nome, cpf, ou nascimento")
        }

        if (typeof nome !== "string" || typeof cpf !== "string" || typeof nascimento !== "string" && typeof nascimento !== "string") {
            res.statusCode = 401
            throw new Error("Provavelmente um dos seus parâmetros está tipado de forma errada")
        }

        clientes.map(user => {
            if (user.cpf === cpf) {
                res.statusCode = 404
                throw new Error("O CPF já foi cadastrado")
            }
        })

        const pegarAnoNascimento = nascimento.split("/")[2]
        const idade = new Date().getFullYear() - Number(pegarAnoNascimento)

        if (idade < 18) {
            res.statusCode = 401
            throw new Error("Você ainda não possui 18 anos, tente novamente daqui alguns anos")
        }


        const NewUser: Conta = {
            nome,
            cpf,
            nascimento,
            saldo: 0,
            extrato: []

        }



        clientes.push(NewUser)

        res.status(201).send({ message: "Sua conta foi criada" })


    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })

    }

})

app.post("/users/:cpf", (req: Request, res: Response) => {
    try {
        const cpf = req.params.cpf
        const {valor, descricao} = req.body
        let {data} = req.body

        // const [dia, mês, ano] = data.split('/')
        // const dataFormatada = new Date(`${ano}-${mês}-${dia}`)

        if(!data) {
            data = Date.now()
        }
           
            const [dia, mês, ano] = data.split('/')
        const dataFormatada = new Date(`${ano}-${mês}-${dia}`)
        

        if(!valor || !descricao) {
            res.statusCode = 404
            throw new Error("Não foi possível adicionar dependência, o senhor está sem saldo ou algum dado não foi preenchido")
        }

        const clienteIndice = clientes.findIndex(cliente => cliente.cpf === cpf)

        if(clienteIndice < 0 ){
            res.statusCode = 404
            throw new Error("Cliente não encontrado")
        }

        const cliente = clientes[clienteIndice]

        const novaTransação: Extrato = {
            valor,
            descricao,
            data,
          
        }

        if(Math.abs(valor) > cliente.saldo) {
            res.statusCode = 406
            throw new Error("Saldo insuficiente")
        }

        cliente.extrato.push(novaTransação)

        res.status(201).send("Pagamento realizado com sucesso")

        console.log(cliente)

    }catch(error: any) {
     res.status(res.statusCode || 500).send({message: error.message})
    }
})

app.get("/users", (req: Request, res: Response) => {
    try {
        const Usuarios = clientes.map((usuarios) => {
            return usuarios
        })

        if (!Usuarios || !clientes) {
            res.statusCode = 404
            throw new Error("Não existe Clientes salvos no Banco de dados")

        }

        res.send(Usuarios)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }

})

app.get("/users/search", (req: Request, res: Response) => {
    try {
        const cpf = req.query.cpf as string

        if (!cpf) {
            res.statusCode = 404
            throw new Error("Não existe este CPF na lista de usuarios.")
        }

        if(typeof cpf !== "string") {
            res.statusCode = 401
            throw new Error("Informe um CPF válido")
        }

        const cliente = clientes.find(cliente => cliente.cpf === cpf)

        if(!cliente) {
            res.statusCode = 404
            throw new Error("Cliente não encontrado")
        }

        res.status(200).send({saldo: cliente.saldo})
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.put("/users/:nome/:cpf", (req: Request, res: Response) => {
    try {
        const novoSaldo = Number(req.body.valor)
        const {nome, cpf} = req.params
        const {descricao} = req.body
        let {data} = req.body 


        

        // if(!nome || !cpf || !novoSaldo || !descricao || !data) {
        //     res.statusCode = 404
        //     throw new Error("Por favor, informe ou seu CPF ou seu nome")
        // }

        const cliente = clientes.find((client) =>  client.nome === nome && client.cpf === cpf)
         
        cliente?.extrato.push({
            valor: novoSaldo,
            data,
            descricao: "Depósito de Dinheiro",
        })
     

        if(cliente) {
            if(nome && cpf) {
                if(typeof nome !== "string" || typeof cpf !== "string" || typeof novoSaldo !== "number") {
                res.statusCode = 404
                throw new Error("O Campo nome e CPF precisam ser um texto(string) e o saldo um Number")

                } else {
                    cliente.saldo = cliente.saldo + novoSaldo
                res.status(200).send({message: `Valor adicionado com sucesso seu valor foi de ${novoSaldo}`, saldo: cliente.saldo, })
                console.log(cliente)
                }
            }
         } else {
            res.statusCode = 404
            throw new Error("Cliente não encontrado")
         }

        

    } catch (error: any) {
     res.status(res.statusCode || 500).send({message: error.message})
    }
})

app.put("/users/:cpf", (req: Request, res: Response ) => {
    try {
    const cpf = String(req.params.cpf)

    const pegarCliente = clientes.find((user) => {
        return user.cpf === cpf
    })

    if(!pegarCliente) {
        res.statusCode = 404
        throw new Error("Cliente não encontrado!");

        
    } else {
        pegarCliente.extrato.map((extrato) => {
            if(Date.now() < Date.parse(extrato.data)) {
            const resultado: number = pegarCliente.saldo - extrato.valor
           return pegarCliente.saldo = resultado
            }
        })
       return res.status(200).send(pegarCliente)
    }


    }catch(error: any){
    res.status(res.statusCode || 500).send({message: error.message})
    }
})