import UserDataBase from "../DataBase/UserDataBase";
import { AuthenticationError } from "../error/AuthenticationError";
import { InvalidError } from "../error/invalidError";
import { MissingFields } from "../error/Missingfields";
import { NotFoundError } from "../error/NotFoundError";
import { ILoginInputDTO, ILoginOutputDTO, ISignupInputDTO, ISignupOutupuDTO } from "../interface/UserInterface";
import { User } from "../Models/User";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";


export default class UserBusiness {
   constructor(
    private userData: UserDataBase,
    private generateId: GenerateId,
    private hashManager: HashManager,
    private authenticator: Authenticator
   ){}

   public signup = async (user: ISignupInputDTO) => {
    const name = user.name
    const email = user.email
    const password = user.password

    if(!name || !password || !email) {
        throw new MissingFields()
    }

    if(typeof name !== "string" || name.length < 3) {
        throw new InvalidError("Parâmetro 'name' inválido")
    }

    if(typeof email !== 'string') {
        throw new InvalidError("Parâmetro 'email' inválido")
    }

    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        throw new InvalidError("Email passado em formato inválido")
    }

    if(!password || password.length < 6) {
        throw new InvalidError("Parâmetro 'password' inválido")
    }

    const userDB  = await this.userData.findByEmail(email) // Busca usuário no banco de dados

    if(userDB) {
        throw new InvalidError("Email já cadastrado")
    }

    const id = this.generateId.generate()
    const hashedPassword = await this.hashManager.hash(password)

    const newUser = new User(
        id,
        name,
        email,
        hashedPassword
    )

    await this.userData.createNewUser(newUser)

    const payload: ITokenPayload= {
        id: newUser.getId(),
        role: newUser.getRole()
    }
     const token = this.authenticator.generateToken(payload)

     const response: ISignupOutupuDTO = {
        message: "Usuário criado com sucesso",
        token
     }

     return response
   }

   public login = async (input: ILoginInputDTO) => {
    const email = input.email
    const password = input.password
    
    if(!email || !password) {
        throw new MissingFields()
    }

    if(typeof email !== "string") {
        throw new InvalidError("Parâmetro 'email' inválido")
    }

    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        throw new InvalidError("Email passado em formato inválido")
    }

    if(!password || password.length < 6) {
        throw new InvalidError("Parâmetro 'password' inválido")
    }

    const userDB  = await this.userData.findByEmail(email)

    if(!userDB) {
        throw new NotFoundError()
    }

    const correctPassword = await this.hashManager.compare(password, userDB.password)

    if(!correctPassword) {
        throw new AuthenticationError()
    }

    const payload: ITokenPayload = {
        id: userDB.id,
        role: userDB.role
    }

    const token = this.authenticator.generateToken(payload)

    const response: ILoginOutputDTO = {
        message: "Login realizado com sucesso",
        access_token: token
    }

    return response
    
   }
}