export class BaseHttpError {
    public statusCode: number;
    public error: any;

    constructor(statusCode, error) {
        this.statusCode = statusCode;
        this.error = error;
    }
}
