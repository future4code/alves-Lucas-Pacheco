import { BaseError } from "./BaseError";

export class MissingFields extends BaseError {
    constructor(){
        super("Parâmetros não foram enviados, ou estão faltando", 400)
    }

}