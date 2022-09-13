import User from "../models/User";
import BaseDataBase from "./BaseDataBase";

class UserDataBase extends BaseDataBase {


    public async createUser(User: User): Promise<void> {
        await this.getConnetion()
        .insert(User)
        .into("User_12_09_2022")
        
    }

    public async getUserByEmail(email: string): Promise<any> {
       const result = await this.getConnetion()
        .select("*")
        .where({email: email})
        .from("User_12_09_2022")

        return result
    }

    public async getUserByPassword(password: string): Promise<any> {
        const result = await this.getConnetion()
        .select("*")
        .where({password: password})
        .from("User_12_09_2022")

        return result
    }

    public async getUserById(id: string): Promise<any> {
        const result = await this.getConnetion()
        .select("*")
        .where({id: id})
        .from("User_12_09_2022")


        console.log(id)

        return result
    }
}


export default UserDataBase