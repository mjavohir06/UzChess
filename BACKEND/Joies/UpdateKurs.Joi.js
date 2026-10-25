import Joi from "joi";

const Update_Kurs=Joi.object({
    img:Joi.string(),
    title:Joi.string(),
    muallif:Joi.string(),
    price_old:Joi.number(),
    price_new:Joi.string(),
    language_id:Joi.string(),
    bolim_soni:Joi.number(),
    daraja_id:Joi.string(),
    categore_id:Joi.string(),
    darslar_soni:Joi.number(),
})

export default Update_Kurs