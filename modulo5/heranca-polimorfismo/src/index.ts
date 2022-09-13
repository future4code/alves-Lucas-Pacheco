import User from "./class/user";
import Customer from "./class/customer";
import { Client } from "./interface/client";
import { Place } from "./interface/place";
import Employee from "./class/Employee";
// 1 A - Seria apenas possível caso a gente fizesse no próprio usuário uma classe, getPassword.
// 1 B - Uma vez.
// const jorge: User = new User("2312312", "@jorge", "Jorge", "JOrgeJorge")

const jorgeConsumidor: Customer = new Customer("2312312", "@jorge", "Jorge", "JOrgeJorge", "Cartão do Jorge")

//2 - A uma vez apenas.

// 2 - B uma, afinal ela passar pelo user e depois vai pro consumer, ai aparece duas vezes a mensagem.

console.log(jorgeConsumidor.getName())
console.log(jorgeConsumidor.getCreditCard())
console.log(jorgeConsumidor.getId())
console.log(jorgeConsumidor.getPassword())
console.log(jorgeConsumidor.purchaseTotal)


//3 - A - Seria possível fazendo um getPassword na instância User, assim ela seria passada para sua filha.

console.log(jorgeConsumidor.interoduceYourself())


// ------------------------- POLIMORFISMO ------------------------------

const clienteJorge: Client = {
    name: "Jorge",
    registrationNumber: 1,
    consumedEnergy: 100, 


    calculateBill: () => {
        return 2
    },
}


console.log(clienteJorge.name)

console.log(clienteJorge.registrationNumber)

console.log(clienteJorge.consumedEnergy)

console.log(clienteJorge.calculateBill())

// 1 A - Imprimiu todos sem dificuldade.

// const testeErrado = new Place("asdasdasdasd")

// Erro gerado foi não é possível criar uma instância de uma classe abstrata

// 2 B - Criar uma função para setar o cpf?

//4 - A as propriedades que ela possui são as públicas, apenas tendo cpf privado ela sendo então a combinação da classe residência com os complementos do Client.

//5 A e B - Elas tem quase tudo de semelhante mas o que muda que comercial tem um cnpj, ele usar uma Floors quantity da classe commerce,e sua multiplicação é diferente.

//6 - A ela deve ser filha da Classe Industry que tem o necessário para uma industria.

// B - Ela implementa o industryNumber que seria como cpf das outras aplicações e no seu CalculateBill ele muda seu consumo de energia baseado na machines Quantity da industry que é pela quantidade de máquinas.

// C - Pois eles são as únicas coisas que mudam comparado com as outras aplicações.

// const usuarioJorge: Employee = {
//    "123123",
//    "sadhasdhahsdhas@gmail.com",
//   "Jorge",
// "João123",
//    1888-09-09,
//     1234
// }