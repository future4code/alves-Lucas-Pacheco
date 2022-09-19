import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { AuthenticatorData } from "../types/AuthenticationData";

dotenv.config();


class Authenticator {

    generateToken = (payload: AuthenticatorData) => {

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

        const payload: AuthenticatorData = jwt.verify(token, process.env.JWT_KEY as string) as any

        return payload 
    }
}

export default Authenticator