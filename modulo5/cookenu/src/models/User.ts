import { USER_ROLES } from "../types/interfaceUsers"

export interface UserDB {
    id: string
    name: string
    email: string
    password: string,
    role: USER_ROLES 
}


class User {
    private id: string
    private name: string
    private email: string
    private password: string
    private role: USER_ROLES = USER_ROLES.NORMAL

    constructor(
     id: string,
     name: string, 
     email: string,
     password: string,
     role: USER_ROLES

    ){
        this.id = id
        this.email = email
        this.name = name
        this.password = password
        this.role = role
                 
    }
    public getId(){
        return this.id
    }

    public getEmail(){
        return this.email
    }
    public getPassword(){
        return this.password
    }
    public getName(){
        return this.name
    }

    public getRole(){
        return this.role
    }
}

export default User