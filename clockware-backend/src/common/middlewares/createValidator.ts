import * as Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import { ValidationError, IValidationError } from '../exceptions';

export const createValidator = (schema: Joi.Schema, key: string = 'body') => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errorArr: Joi.ValidationError | undefined;
  switch (key) {
    case 'body': {
      const { error } = schema.validate(req.body, { abortEarly: false });
      errorArr = error;
      break;
    }
    case 'query': {
      const { error } = schema.validate(req.query, { abortEarly: false });
      errorArr = error;
      break;
    }
    case 'params': {
      const { error } = schema.validate(req.params, { abortEarly: false });
      errorArr = error;
      break;
    }
  }
  // const { error } = schema.validate(req[key], { abortEarly: false }); // req[key] doesnt work

  if (errorArr) {
    const errors: IValidationError[] = errorArr.details.map((details: Joi.ValidationErrorItem) => ({
      message: details.message,
      field: details.path[0],
    }));
    throw new ValidationError(errors);
  }

  next();
};
