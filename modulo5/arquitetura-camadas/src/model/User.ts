export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export interface CreateNewUser {
    name: string,
    email: string,
    password: string
}

export class User {
    // private id: string
    // private name: string
    // private email: string
    // private password: string
    // private role: USER_ROLES = USER_ROLES.NORMAL

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES = USER_ROLES.NORMAL
     )
    {
        // this.id = id,
        // this.name = name,
        // this.email = email,
        // this.password = password,
        // this.role = role
    }
    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getEmail = () => {
        return this.email
    }

    public getPassword = () => {
        return this.password
    }

    public getRole = () => {
        return this.role
    }
    public setName = (newName: string) => {
        this.name = newName
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }
    public setPassword = (newPassword: string) => {
        this.password = newPassword
    }

    public setRole = (newRole: USER_ROLES) => {
        this.role = newRole
    }



}