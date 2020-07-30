import * as Joi from '@hapi/joi';

export const createReservationDto = Joi.object().keys({
  clientId: Joi.number().positive().required(),
  employeeId: Joi.number().positive().required(),
  cityId: Joi.number().positive().required(),
  clockSizeId: Joi.number().positive().required(),
  date: Joi.date().required(),
});

export const updateReservationDto = Joi.object().keys({
  clientId: Joi.number().positive(),
  employeeId: Joi.number().positive(),
  cityId: Joi.number().positive(),
  clockSizeId: Joi.number().positive(),
  date: Joi.date(),
});
