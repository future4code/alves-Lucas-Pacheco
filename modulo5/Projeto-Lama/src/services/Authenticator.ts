
import jwt from 'jsonwebtoken'
import dotenv  from 'dotenv'
import { USER_ROLES } from '../models/User'

dotenv.config()

export interface ITokenPayload {
    id: string,
    role: USER_ROLES
}

class Authenticator {
     
    generateToken = (payload: ITokenPayload) => {
       const token = jwt.sign(
        payload
       ,
       process.env.JWT_KEY as string,
       
       {
        expiresIn: process.env.EXPIRES_IN 
       }
       )

       return token
    }

    verifyToken = (token: string): ITokenPayload | null => {
       try {
        const verify: ITokenPayload = jwt.verify(token, process.env.JWT_KEY as string) as ITokenPayload

        return verify
       } catch (error) {
        return null
       }
    }
}

export default Authenticator