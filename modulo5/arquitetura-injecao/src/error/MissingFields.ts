import { BaseError } from "./BaseError";


export class MissingFields extends BaseError {
    constructor(){
        super("Valores do seu Body devem ser passados", 404)
    }
}