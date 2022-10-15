import { BaseError } from "./BaseError";

export class AuthorizationError extends BaseError {
    constructor() {
        super("Permissão insuficiente", 403)
    }
}