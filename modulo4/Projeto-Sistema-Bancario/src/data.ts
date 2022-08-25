export type Conta = {
    nome: string,
    cpf: string,
    nascimento: string 
    saldo: number,
    extrato: Extrato[]

}

export type Extrato = {
    valor: number,
    data: string 
    descricao: string,
}

export const clientes: Conta[] = [{
    nome: "Theodoro",
    cpf: "111111111-11",
    nascimento: "21/11/2000",
    saldo: 300,
    extrato:[
        {
            valor:100,
            descricao:"agro baito",
            data:"02/08/2022"
        }
    ]
},
{
    nome: "Milka",
    cpf: "222222222-11",
    nascimento: "15/09/1990",
    saldo: 400,
    extrato:[
        {
            valor:200,
            descricao:"Roupas",
            data:"2022/01/18"
        }
    ]
   
},
{
    nome: "Oreo",
    cpf: "333.333.333-11",
    nascimento: "13/05/1994",
    saldo: 500,
    extrato:[
        {
            valor: 300,
            descricao:"Pagode",
            data:"20/05/2022"
        }
    ]
}]