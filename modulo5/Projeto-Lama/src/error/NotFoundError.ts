import { BaseError } from "./BaseError";


export class NotFoundError extends BaseError {
    constructor(){
        super("Recurso não encontrado", 404)
    }
}