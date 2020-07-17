import * as Joi from 'joi';

export const createClientDto = Joi.object().keys({
    name: Joi.string().min(1).max(25).required(),
    email: Joi.string().email().required(),
    city: Joi.string().min(1).max(25).required(),
});

export const updateClientDto = Joi.object().keys({
    name: Joi.string().min(1).max(25),
    email: Joi.string().email(),
    city: Joi.string().min(1).max(25),
});
