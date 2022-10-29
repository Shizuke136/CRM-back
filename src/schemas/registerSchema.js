import joi from 'joi';

const registerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    phone: joi.string().required(),
    birthDate: joi.string().required()
})

export { registerSchema }