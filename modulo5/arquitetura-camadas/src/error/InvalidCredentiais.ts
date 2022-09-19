import { BaseError } from "./BaseError"

export class InvalidCredentiais extends BaseError{
    constructor(){
        super("Suas credencias estão invalidas", 401)
    }
}