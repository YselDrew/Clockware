import * as Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../exceptions';

export const createValidator = (schema: Joi.Schema) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = schema.validate(req.body, { abortEarly: false});

  if (error) {
    const errors: any = error.details.map((details) => ({
      message: details.message,
      field: details.path[0],
    }));
    throw new ValidationError(errors);
  }

  next();
};
