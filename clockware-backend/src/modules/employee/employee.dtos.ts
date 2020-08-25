import * as Joi from '@hapi/joi';

export const createEmployeeDto = Joi.object().keys({
  firstName: Joi.string().min(1).max(25).required(),
  lastName: Joi.string().min(1).max(25).required(),
  cityId: Joi.number().positive().required(),
  rate: Joi.number().positive().max(5).required(),
});

export const updateEmployeeDto = Joi.object().keys({
  firstName: Joi.string().min(1).max(25),
  lastName: Joi.string().min(1).max(25),
  cityId: Joi.number().positive(),
  rate: Joi.number().positive().max(5),
});

export const getEmployeesDto = Joi.object().keys({
  page: Joi.number(),
  limit: Joi.number(),
  time: Joi.date(),
  cityId: Joi.number().positive(),
});

export const employeeIdDto = Joi.object().keys({
  id: Joi.number().positive(),
});
