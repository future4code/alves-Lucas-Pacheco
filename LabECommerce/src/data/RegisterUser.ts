import { User } from "../types/User";
import connection from "./connection";

const  RegisterUser = async (name: string, email: string, password: string): Promise<void> => {

    const id = Date.now() % 10000
    const newId = id.toString()
         
    const response: User = {
        id: newId,
        name: name,
        email: email,
        password: password
    } 

    await connection("labecommerce_users")
    .insert(response)
    .into("labecommerce_users")


}

export default RegisterUser