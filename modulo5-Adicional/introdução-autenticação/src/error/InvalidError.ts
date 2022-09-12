import { BaseError } from "./BaseError";

// export class invalidEmail extends BaseError {
//     constructor(){
//         super("Email invalido deve está faltando um @", 404)
//     }
// }


// export class invalidPassword extends BaseError{
//     constructor(){
//         super("Sua senha deve ter ao menos de 6 caracteres", 404)
//     }
// }

export class InvalidCredentiais extends BaseError{
    constructor(){
        super("Suas credencias estão invalidas", 401)
    }
}

export class InvalidError extends BaseError {
    constructor(message: string){
        super(message, 400)
    }
}
