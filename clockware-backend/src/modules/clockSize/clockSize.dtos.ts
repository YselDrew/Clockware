import * as Joi from '@hapi/joi';

export const clockSizeIdDto = Joi.object().keys({
  id: Joi.number().positive(),
});
