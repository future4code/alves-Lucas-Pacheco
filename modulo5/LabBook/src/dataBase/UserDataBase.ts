import { IUserDB } from "../interfaces/UserInterface";
import { User, USER_ROLES } from "../Models/User";
import BaseDataBase from "./BaseDataBase";



export default class UserDataBase extends BaseDataBase {
    public static TABLE_USERS = "Labook_Users"

    public UserDBModel = (user: User) => {
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
        .into(UserDataBase.TABLE_USERS)     
        return usersDB[0]
    
   }

   public createUser = async (user: User): Promise<void> => {
     const userDB = this.UserDBModel(user)
     
     await this.getConnetion()
     .insert(userDB)
     .into(UserDataBase.TABLE_USERS)
   }


}