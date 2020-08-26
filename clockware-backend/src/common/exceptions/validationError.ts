import { HttpStatusCode } from './httpStatusCode';

export interface IValidationError {
  message: string;
  field: string | number;
}

export class ValidationError {
  public statusCode: number;
  public errors: IValidationError[];

  constructor(errors: IValidationError[]) {
    this.statusCode = HttpStatusCode.BAD_REQUEST;
    this.errors = errors;
  }
}
