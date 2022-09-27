import UserDataBase from "../dataBase/UserDataBase";
import { InvalidCredentiais } from "../error/InvalidCredentiais";
import { InvalidError } from "../error/invalidError";
import { MissingFields } from "../error/MissingFields";
import { ILoginInputDto, ISignupInputDTO, ISignupOutputDTO } from "../interfaces/UserInterface";
import { User } from "../Models/User";
import Authenticator, { TokenPayload } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export default class UserBusiness {
 constructor(
    private userData: UserDataBase,
    private idGenerator: GenerateId,
    private hashManager: HashManager,
    private authenticator: Authenticator
 ) {}

 public signup = async (user: ISignupInputDTO): Promise<ISignupOutputDTO> => {
    const name = user.name
    const email = user.email
    const password = user.password

    if(!name || !email || !password) {
        throw new MissingFields()
    }

    if(typeof name !== "string" || name.length < 3) {
        throw new InvalidError("Parâmetro name inválido")
    }

    if(typeof email !== "string" || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        throw new InvalidError("Parâmetro Email inválido")
    }

    if(typeof password !== "string" || password.length < 6) {
        throw new InvalidError("Parâmetro password invalido")
    }

    const userDB = await this.userData.findByEmail(email)

    if(userDB) {
        throw new InvalidError("Email já cadastrado")
    }


    const id = this.idGenerator.createId()
    const hashedPassword = await this.hashManager.hash(password)

    const newUser = new User (
        id,
        name,
        email,
        hashedPassword
    )
    
    await this.userData.createUser(newUser)
    
    const payload: TokenPayload = {
        id: newUser.getId(),
        role: newUser.getRole()
    }

    const token = this.authenticator.generateToken(payload)

    const response: ISignupOutputDTO = {
        message: "Usuário criado com sucesso",
        token
    }

    return response

 }

 public login = async (user: ILoginInputDto) => {
    const {email, password} = user

    if(!email || !password) {
        throw new MissingFields()
    }

    if(typeof email !== "string" || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        throw new InvalidError("Parâmetro Email inválido")
    }

    if(typeof password !== "string" || password.length < 6) {
        throw new InvalidError("Parâmetro password invalido")
    }

    const userDB = await this.userData.findByEmail(email)

    if(!userDB) {
        throw new InvalidError("E-mail não cadastrado")
    }

    const correctPassword = await this.hashManager.compare(password, userDB.password)

    if(!correctPassword) {
        throw new InvalidCredentiais()
    }

    const payload: TokenPayload = {
        id: userDB.id,
        role: userDB.role
    }

    const token = this.authenticator.generateToken(payload)

   const response = {
    acess_token: token
   }

   return response
 }
}