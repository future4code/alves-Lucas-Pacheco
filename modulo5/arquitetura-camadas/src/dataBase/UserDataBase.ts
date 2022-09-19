import { User, UserDB } from "../model/User";
import BaseDataBase from "./BaseDataBase";



class UserDataBase extends BaseDataBase {
    public static TABLE_USERS = "Arq_Users"

    public userDBModel = (user: User): UserDB => {
        const userDB: UserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
                
        }

        return userDB
    }

    public createUser = async (user: User) => {
        const userDB = this.userDBModel(user)

        await this.getConnetion()
        .insert(userDB)
        .into(UserDataBase.TABLE_USERS)
        
    }

    public getUserByEmail = async (email: string): Promise<UserDB | undefined> => {
        const result: UserDB[] = await this.getConnetion()
        .select("*")
        .where({email})
        .from(UserDataBase.TABLE_USERS)

        return result[0]
    }

    public getAllUsers = async () => {

        const result = await this.getConnetion()
        .select("id", "name", "email", "role")
        .into(UserDataBase.TABLE_USERS)

        return result
        
    }

    public getUserById = async (id: string): Promise<UserDB | undefined> => {
        const result: UserDB[] = await this.getConnetion()
        .select("*")
        .from(UserDataBase.TABLE_USERS)
        .where({id})

        return result[0]
    }

    public removeAccount = async (id: string) => {
        await this.getConnetion()
        .delete("*")
        .where({id})
        .from(UserDataBase.TABLE_USERS)
        
    }
}

export default UserDataBase