import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { AuthenticationData } from '../types/AuthenticationData'
dotenv.config();


class Authenticator {

    generateToken = (payload: AuthenticationData) => {

        const token = jwt.sign(
                payload
            ,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN
            }
        );

        return token
    }

    verifyToken = (token: string) => {

        const payload: AuthenticationData = jwt.verify(token, process.env.JWT_KEY as string) as any

        return payload 
    }
}

export default Authenticator
