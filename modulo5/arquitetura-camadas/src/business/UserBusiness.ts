import { type } from "os";
import UserDataBase from "../dataBase/UserDataBase";
import { InsufficientAuthorization } from "../error/InsufficientAuthorization";
import { InvalidCredentiais } from "../error/InvalidCredentiais";
import { InvalidError } from "../error/invalidError";
import { CreateNewUser, User, UserDB, USER_ROLES } from "../model/User";
import Authenticator, { TokenPayload } from "../service/Authenticator";
import GenerateId from "../service/GenerateId";
import { HashManager } from "../service/HashManager";



class UserBusiness {
    public signup = async (user: CreateNewUser) => {

        const {name, email, password} = user


        if(!name || typeof name !== "string" || name.length < 3) {
            throw new InvalidError("Parâmetro 'name'' inválido")
        }

        if(!email || typeof email !== "string") {
            throw new InvalidError("Parâmetro 'email' inválido")
        }

        if(email.indexOf("@") == -1) {
            throw new InvalidError("Seu email deve possuir um @ em sua composição")
        }

        if(!password || typeof password !== "string" || password.length < 6) {
            throw new InvalidError("Parâmetro 'password' inválido")
        }

        const UserData = new UserDataBase()

        const userDB =  await UserData.getUserByEmail(email)

        if(userDB) {
         throw new InvalidError("Email já cadastrado")
        }

        const idGenerator = new GenerateId()
        const id = idGenerator.createId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)
        
        const newUser = new User(
          id,
          name, 
          email, 
          hashPassword
        )

        await UserData.createUser(newUser)

        const payload: TokenPayload = {
            id: newUser.getId(),
            role: newUser.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            message: "Seu usuário foi criado",
            token
        }

    return response
        
    }

    public login = async (email: string, password: string) => {

        if(email.indexOf("@") === -1 || typeof email !== "string"){
          throw new InvalidError("O Seu Email está em formato inválido")
        }

        if(password.length < 6) {
            throw new InvalidError("Sua senha deve possuir mais de 6 caracteres")
        }

        const userData = new UserDataBase()

        const userDB = await userData.getUserByEmail(email)

        if(!userDB) {
            throw new InvalidCredentiais()
        }

        const hashManager = new HashManager()

        const correctPassword = await hashManager.compare(password, userDB.password)

        if(!correctPassword) {
            throw new InvalidCredentiais()
        }

        const payload: TokenPayload = {
            id: userDB.id,
            role: userDB.role
        }

        const token = new Authenticator().generateToken(payload)

        const response = {
            acess_Token: token
        }


        return response

        
    }

    public selectAllUsers = async (token: string) => {

        const userData = new UserDataBase()

        const authenticator = new Authenticator()
        const payload = authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidCredentiais()
        }

        const users = await userData.getAllUsers()

        if(!users) {
            throw new InvalidError("Não existe usuários")
        }

       

        return users
        
    }
    
    public deleteUser = async (token: string, id: string) => {
        const authenticator = new Authenticator()
        const payload = authenticator.verifyToken(token)

        if(payload.role !== USER_ROLES.ADMIN) {
            throw new InsufficientAuthorization();
            
        }

        const userData = new UserDataBase()
        const userDB  = await userData.getUserById(id)

        if(!userDB) {
            throw new InvalidError("O Perfil não foi encontrado")
        }

        if(userDB.id === payload.id) {
            throw new InvalidError("Você não pode apagar seu perfil estando logado nele")
        }

        await userData.removeAccount(id)

        const response = {
            message: "A Conta foi apagada com sucesso"
        }

        return response
    }

}


export default UserBusiness