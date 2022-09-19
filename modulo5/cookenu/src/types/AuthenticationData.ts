import { USER_ROLES } from "./interfaceUsers"

export interface AuthenticatorData {
    id: string
    role: USER_ROLES
}