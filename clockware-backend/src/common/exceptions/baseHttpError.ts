export class BaseHttpError {
  public statusCode: number;
  public errorMessage: string;

  constructor(statusCode: number, errorMessage: string) {
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;
  }
}
