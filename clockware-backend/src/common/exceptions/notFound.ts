import { BaseHttpError } from './baseHttpError';
import { HttpStatusCode } from './httpStatusCode';

export class NotFound extends BaseHttpError {
  constructor(error: string) {
    super(HttpStatusCode.NOT_FOUND, error);
  }
}
