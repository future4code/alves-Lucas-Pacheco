import { type } from "os";
import UserDataBase from "../dataBase/UserDataBase";
import { InsufficientAuthorization } from "../error/InsufficientAuthorization";
import { InvalidCredentiais } from "../error/InvalidCredentiais";
import { InvalidError } from "../error/invalidError";
import { MissingFields } from "../error/MissingFields";
import { GetUserModelInputDTO, GetUsersInputDBDTO, IDeleteInputDTO, IEditUserDTO, IGetUsersInputDTO, ISignupAndLoginOutpuDTO, loginInputDTO, SignupInputDTO, User, UserDB, USER_ROLES } from "../model/User";
import Authenticator, { TokenPayload } from "../service/Authenticator";
import GenerateId from "../service/GenerateId";
import { HashManager } from "../service/HashManager";



class UserBusiness {
    constructor(
        private userData: UserDataBase,
        private generateId: GenerateId,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ){}
    
    public signup = async (user: SignupInputDTO) => {

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

       

        const userDB =  await this.userData.getUserByEmail(email)

        if(userDB) {
         throw new InvalidError("Email já cadastrado")
        }

        
        const id = this.generateId.createId()

       
        const hashPassword = await this.hashManager.hash(password)
        
        const newUser = new User(
          id,
          name, 
          email, 
          hashPassword
        )

        await this.userData.createUser(newUser)

        const payload: TokenPayload = {
            id: newUser.getId(),
            role: newUser.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response: ISignupAndLoginOutpuDTO = {
            message: "Seu usuário foi criado",
            token
        }

    return response
        
    }

    public login = async (user: loginInputDTO) => {
        const email = user.email
        const password = user.password

        if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) || typeof email !== "string"){
          throw new InvalidError("O Seu Email está em formato inválido")
        }

        if(password.length < 6) {
            throw new InvalidError("Sua senha deve possuir mais de 6 caracteres")
        }

        

        const userDB = await this.userData.getUserByEmail(email)

        if(!userDB) {
            throw new InvalidCredentiais()
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
            acess_Token: token
        }


        return response

        
    }

    public selectAllUsers = async (users: IGetUsersInputDTO) => {
        const token = users.token
        const search = users.search || ""
        const order = users.order || "name"
        const sort = users.sort || "ASC"
        const limit = Number(users.limit) || 10
        const page = Number(users.page) || 1

        const offset = limit * (page - 1)

        if(typeof token !== "string") {
            throw new InvalidError("Seu Token não está em formato correto")
        } 

        if(typeof search !== "string") {
            throw new InvalidError("Sua busca não está em formato de string")
        }

        if(typeof order !== "string" || order !== "ASC" && order !== "DESC") {
            throw new InvalidError("Sua ordenação está em formato errado")

        }

        if(typeof limit !== "number" ){
            throw new InvalidError("Seu Limite não está em parâmetro number")
        }

        if(typeof page !== "number") {
            throw new InvalidError("O Limite passado não está em Number")
        }

        const getUsersDB: GetUsersInputDBDTO = {
            search,
            order,
            sort,
            limit, 
            offset
        }


        
        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidCredentiais()
        }

        const user = await this.userData.getAllUsers(getUsersDB)

        if(!user) {
            throw new InvalidError("Não existe usuários")
        }

        const totalUsers = user.map((userDB) => {
            const user =  new User(
                userDB.id,
                userDB.name,
                userDB.email,
                userDB.password,
                userDB.role

            )

            const userResponse: GetUserModelInputDTO = {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail()
            }

            return userResponse

        })

        const response = {
            totalUsers
        }

        return response
        
    }
    
    public deleteUser = async (user: IDeleteInputDTO) => {
        const token = user.token
        const id = user.id

        
        const payload = this.authenticator.verifyToken(token)

        if(payload.role !== USER_ROLES.ADMIN) {
            throw new InsufficientAuthorization();
            
        }

      
        const userDB  = await this.userData.getUserById(id)

        if(!userDB) {
            throw new InvalidError("O Perfil não foi encontrado")
        }

        if(userDB.id === payload.id) {
            throw new InvalidError("Você não pode apagar seu perfil estando logado nele")
        }

        await this.userData.removeAccount(id)

        const response = {
            message: "A Conta foi apagada com sucesso"
        }

        return response
    }

    public editUser = async (user: IEditUserDTO) => {
        const { token, id, email, name, password } = user

        if(!token) {
            throw new InvalidError("Token não foi enviado")
        }

        if(!id) {
            throw new InvalidError("Seu Id não foi informado")
        }

       
        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidCredentiais()
        }

        if(email && typeof email !== "string" || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new InvalidError("Parâmetro 'email' inválido")
        }

        if(name && typeof name !== "string" || name.length < 3) {
            throw new InvalidError("Parâmetro name invalido")
        }
        
        if(password && typeof password !== "string" || password.length < 6) {
            throw new InvalidError("Parâmetro 'password' inválido")
        }

       
        const userDB  = await this.userData.getUserById(id)

        if(!userDB) {
            throw new InvalidError("Usuário não existe")
        }

        const Edituser = new User (
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

         name && Edituser.setName(name)
         email && Edituser.setEmail(email)
         password && Edituser.setPassword(password)

        await this.userData.editUsers(Edituser)

        const response = {
            message: "Edição realizada"
        }

        return response
    }

}


export default UserBusiness