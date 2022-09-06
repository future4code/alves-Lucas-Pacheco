import axios from "axios";
import { baseURL } from "./Base_URL";
import { Adress } from "../type/Adress";

const getCep =async (cep: string, numero: number, complemento: string | null): Promise<any> => {
    try {

        if(typeof cep !== "string") {
            throw new Error("Informe um CEP válido")
        }

        const res = await  axios.get(`${baseURL}/${cep}/json`)
        
        const {logradouro,bairro, localidade, uf, gia  } = res.data

        const adress: Adress = {
           CEP: cep,
           logradouro: logradouro,
           numero: numero,
           complemento: complemento,
           bairro: bairro,
           cidade: localidade,
           estado: uf
           
        }
        
        return adress
    } catch (error: any) {
        
    }
}

export default getCep