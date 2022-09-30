import BaseDataBase from "../../src/DataBase/BaseDataBase";
import { IUserDB } from "../../src/interface/UserInterface";
import { User, USER_ROLES } from "../../src/models/User";

export class UserDataBaseMock extends BaseDataBase {
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
       switch(email) {
        case "usermock@gmail.com":
            const normalUser: IUserDB = {
                id: "id-mock",
                name: "Usuário-De-Teste",
                email: "usermock@gmail.com",
                password: "hash-mock",
                role: USER_ROLES.NORMAL
            }
            return normalUser
        case "astrodev@gmail.com": 
          const adminUser: IUserDB = {
            id: "id-mock",
            name: "Astrodev",
            email: "astrodev@gmail.com",
            password: "hash-batatinha",
            role: USER_ROLES.ADMIN
          }
          return adminUser

          default:
            return undefined
       }
    
    }

    public createNewUser = async (user: User): Promise<void> => {}
}