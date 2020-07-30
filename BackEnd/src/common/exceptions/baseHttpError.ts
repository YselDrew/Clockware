export class BaseHttpError {
  public statusCode: number;
  public error: any;

  constructor(statusCode: number, error: any) {
    this.statusCode = statusCode;
    this.error = error;
  }
}
