
import { USER_ROLES } from "../Models/User"

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export interface ISignupInputDTO {
   name: string,
   email: string,
   password: string

}

export interface ISignupOutputDTO {
    message: string,
    token: string
}

export interface ILoginInputDto {
    email: string,
    password: string
}