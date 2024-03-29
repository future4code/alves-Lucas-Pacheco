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


export interface SignupInputDTO {
    name: string,
    email: string,
    password: string
}

export interface loginInputDTO {
    email: string,
    password: string
    
}

export interface ISignupAndLoginOutpuDTO {
    message: string,
    token: string
}

export interface IGetUsersInputDTO {
    token: string,
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface GetUsersInputDBDTO {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number
}

export interface GetUserModelInputDTO {
    id: string,
    name: string,
    email: string
}

export interface IDeleteInputDTO {
    token: string, 
    id: string
}

export interface IEditUserDTO {
  token: string
  id: string
  name: string
  email: string
  password: string
}