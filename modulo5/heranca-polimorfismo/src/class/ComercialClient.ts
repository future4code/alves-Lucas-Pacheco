
import { Commerce } from "./commerce";
import { Client } from "../interface/client";

class ComercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ){
       super(floorsQuantity, cep)
    }

    public getCnpj(): string {
        return this.cnpj
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }


}
export default ComercialClient