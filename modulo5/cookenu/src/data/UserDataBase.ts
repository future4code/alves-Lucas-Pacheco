import User, { UserDB } from "../models/User";
import BaseDataBase from "./BaseDataBase";


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
        .into("Cookenu_User")
        
    }

    public getUserByEmail = async (email: string): Promise<UserDB | undefined> => {
        const result: UserDB[] = await this.getConnetion()
        .select("*")
        .where({email})
        .from("Cookenu_User")

        return result[0]
    }


    public getUserById =async (id: string): Promise<UserDB | undefined> => {
        const result: UserDB[] = await this.getConnetion()
        .select("*")
        .where({id})
        .from("Cookenu_User")

        return result[0]
    }
}

export default UserDataBase