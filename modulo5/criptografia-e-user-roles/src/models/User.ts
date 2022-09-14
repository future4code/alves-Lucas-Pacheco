import { USER_ROLES } from "../types/InterfaceUsers"

export interface IsUserDB {
    id: string
    email: string
    password: string
    role: USER_ROLES
    
}

class User {
    private id: string 
    private email: string 
    private password: string
    private role: USER_ROLES = USER_ROLES.NORMAL

    constructor(
      id: string,
      email: string,
      password: string,
      role: USER_ROLES 
    ) 
    {
        this.id = id,
        this.email = email
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

    public getRole = () => {
        return this.role
    }

}

export default User