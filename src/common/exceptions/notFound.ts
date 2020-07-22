import { BaseHttpError } from './baseHttpError';
import { HttpStatusCode } from './httpStatusCode';

class NotFound extends BaseHttpError {
  constructor(error: any) {
    super(HttpStatusCode.NOT_FOUND, error);
  }
}

export default NotFound;
