import { BaseHttpError } from "./baseHttpError";
import { HttpStatusCode } from "./httpStatusCode";

class NotFound extends BaseHttpError {
    constructor(error) {
        super(HttpStatusCode.NOT_FOUND, error);
    }
}

export default NotFound;
