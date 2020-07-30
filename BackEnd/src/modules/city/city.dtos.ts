import * as Joi from '@hapi/joi';

export const createCityDto = Joi.object().keys({
  name: Joi.string().min(2).max(25).required(),
});

export const updateCityDto = Joi.object().keys({
  name: Joi.string().min(2).max(25),
});
