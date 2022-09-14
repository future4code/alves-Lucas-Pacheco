import User, { UserDB } from "../models/User";
import BaseDataBase from "./BaseDataBase";

const userTable: string = "Cookenu_User"
class UserDataBase extends BaseDataBase {

    public createUser = async (user: User): Promise<void> => {

        const UserDB: UserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()

        }

        await this.getConnetion()
        .insert(UserDB)
        .into(userTable)
        
    }

    public getUserByEmail = async (email: string): Promise<UserDB | undefined> => {
        const result: UserDB[] = await this.getConnetion()
        .select("*")
        .where({email})
        .from(userTable)

        return result[0]
    }


    public getUserById = async (id: string): Promise<UserDB | undefined> => {
        const result: UserDB[] = await this.getConnetion()
        .select("*")
        .from(userTable)
        .where({id})

        return result[0]
    }
}

export default UserDataBase