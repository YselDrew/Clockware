import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { ValidationError, IValidationError } from '../exceptions/validationError';

export const createValidator = (schema: Joi.Schema, key: string = 'body') => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = Joi.validate(req[key], schema, { abortEarly: false });

  if (error) {
    const errors: IValidationError[] = error.details.map((details) => ({
      message: details.message,
      field: details.path[0],
    }));
    throw new ValidationError(errors);
  }

  next();
};
