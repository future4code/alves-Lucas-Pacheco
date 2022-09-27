import { BaseError } from "./BaseError";

export class InvalidCredentiais  extends BaseError {
 constructor(){
    super("Credencias inválidas", 401)
 }
}