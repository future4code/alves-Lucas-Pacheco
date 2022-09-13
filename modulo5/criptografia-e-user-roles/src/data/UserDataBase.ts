import { userInfo } from "os";
import User from "../models/User"
import BaseDataBase from "./BaseDataBase";
import {IsUserDB} from '../types/InterfaceUsers'


class UserDataBase extends BaseDataBase {


    public  createUser = async (User: User): Promise<void> => {

        const userDB: IsUserDB = {
            id: User.getId(),
            email: User.getEmail(),
            password: User.getPassword(),
            role: User.getRole()
        }
        await this.getConnetion()
        .insert(userDB)
        .into("User_12_09_2022")

    }

    public async getUserByEmail(email: string): Promise<IsUserDB | undefined> {
       const result: IsUserDB[] = await this.getConnetion()
        .select("*")
        .where({email})
        .from("User_12_09_2022")

        return result[0]
    }

    public getUserByPassword = async  (password: string): Promise<any>  => {
        const result = await this.getConnetion()
        .select("*")
        .where({password: password})
        .from("User_12_09_2022")

        return result
    }

    public  getUserById = async (id: string): Promise<any> => {
        const result = await this.getConnetion()
        .select("*")
        .where({id: id})
        .from("User_12_09_2022")


        return result[0]
    }

    public deleteUser = async (id: string): Promise<any> => {
        await this.getConnetion()
        .delete()
        .from("User_12_09_2022")
        .where({id})
        
    }
}


export default UserDataBase