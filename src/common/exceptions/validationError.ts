import { HttpStatusCode } from './httpStatusCode';

export interface IValidationError {
    message: string;
    field: string;
}

export class ValidationError {
    public statusCode: number;
    public errors: IValidationError[];

    constructor(errors) {
        this.statusCode = HttpStatusCode.BAD_REQUEST;
        this.errors = errors;
    }
}
