import { Client } from "../interface/client";

class ClientManager {
    constructor(
        private clients: Client[] = []
    ) { }
    public getClientsQuantity(): number {
        return this.clients.length;
      }
    public registerClient(client: Client): void {
        this.clients.push(client)
    }

    public calculateBillOfClient(registrationNumber: number) {
        const foundClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber
        })

        if(foundClient){
            return foundClient.calculateBill()
        }

        return 0;
    }

    public calculateTotalIcome(): number {
       let total: number = 0; 
       this.clients.forEach((client) => {
        total += client.calculateBill()
       })
       return total;
    }
    
    public deleteUser(registrationNumber: number): void {
        let registrationIndex = undefined

        for (let i = 0; i < this.clients.length; i++) {
        if(this.clients[i].registrationNumber === registrationNumber) {
            registrationIndex = i;
        }
        }

        if (registrationIndex !== undefined){
            this.clients.splice(registrationIndex, 1)
        }
    }

   

}

export default ClientManager