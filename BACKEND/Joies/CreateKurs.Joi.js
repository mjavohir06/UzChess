import Joi from "joi";

const CreateKurs_Joi=Joi.object({
    img:Joi.string().required(),
    title:Joi.string().required(),
    muallif:Joi.string().required(),
    price_old:Joi.number(),
    price_new:Joi.string().required(),
    language_id:Joi.string().required(),
    bolim_soni:Joi.number().required(),
    daraja_id:Joi.string().required(),
    categore_id:Joi.string().required(),
    darslar_soni:Joi.number().required(),
})

export default CreateKurs_Joi