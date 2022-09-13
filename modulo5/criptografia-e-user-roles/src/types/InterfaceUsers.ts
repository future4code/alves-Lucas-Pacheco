export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface IsUserDB {
    id: string
    email: string
    password: string
    role: USER_ROLES
    
}