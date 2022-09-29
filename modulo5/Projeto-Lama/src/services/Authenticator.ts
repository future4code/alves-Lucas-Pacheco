
import jwt from 'jsonwebtoken'
import dotenv  from 'dotenv'
import { USER_ROLES } from '../models/User'

dotenv.config()

export interface ITokenPayload {
    id: string,
    role: USER_ROLES
}

class Authenticator {
     
    generateToken(id: ITokenPayload){
       const token = jwt.sign({
        id
       },
       process.env.JWT_KEY as string,
       
       {
        expiresIn: process.env.EXPIRES_IN 
       }
       )

       return token
    }

    verifyToken(token: string) {
        const verify: ITokenPayload = jwt.verify(token, process.env.JWT_KEY as string) as ITokenPayload

        return verify
    }
}

export default Authenticator