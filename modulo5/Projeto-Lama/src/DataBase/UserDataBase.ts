import { IUserDB } from "../interface/UserInterface"
import { User } from "../Models/User"
import BaseDataBase from "./BaseDataBase"

export default class UserDataBase extends BaseDataBase {
    public static USERS_TABLE = "Lama_Users"

    public UserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        const usersDB: IUserDB[] = await this.getConnetion()
        .select("*")
        .where({email})
        .into(UserDataBase.USERS_TABLE)

        return usersDB[0]
    }

    public createNewUser = async (user: User): Promise<void> => {
     const userDB = this.UserDBModel(user)
     
     await this.getConnetion()
     .insert(userDB)
     .into(UserDataBase.USERS_TABLE)
    }
}