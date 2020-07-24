import { BaseHttpError } from './baseHttpError';
import { HttpStatusCode } from './httpStatusCode';

export class NotFound extends BaseHttpError {
  constructor(error: any) {
    super(HttpStatusCode.NOT_FOUND, error);
  }
}
