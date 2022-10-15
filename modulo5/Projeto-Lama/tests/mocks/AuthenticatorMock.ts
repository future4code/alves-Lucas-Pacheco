import { USER_ROLES } from "../../src/models/User";
import { ITokenPayload } from "../../src/services/Authenticator";

export class AuthenticatorMock {
    public generateToken = (payload: ITokenPayload): string => {
        switch(payload.role) {
            case USER_ROLES.ADMIN:
                return "token-mock-admin"
            default:
                return "token-mock-normal"
        }
    }

    public verifyToken = (token: string): ITokenPayload | null => {
        switch(token) {
            case "token-mock-admin":
                const adminPayload: ITokenPayload = {
                    id: "id-mock",
                    role: USER_ROLES.ADMIN
                }
                return adminPayload

            case "token-mock-normal":
                const normalPayload: ITokenPayload = {
                    id: "id-mock",
                    role: USER_ROLES.NORMAL
                }
                return normalPayload
            
            default:
                return null
        }
    }
}


// generateToken = (payload: ITokenPayload) => {
//     const token = jwt.sign(
//      payload
//     ,
//     process.env.JWT_KEY as string,
    
//     {
//      expiresIn: process.env.EXPIRES_IN 
//     }
//     )

//     return token
//  }

//  verifyToken = (token: string): ITokenPayload | null => {
//     try {
//      const verify: ITokenPayload = jwt.verify(token, process.env.JWT_KEY as string) as ITokenPayload

//      return verify
//     } catch (error) {
//      return null
//     }
//  }