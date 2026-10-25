import Joi from "joi";

const Sing_up_Joi=Joi.object({
    ism:Joi.string().required(),
    tel:Joi.string(),
    email:Joi.string().email(),
    parol:Joi.string().required()
}).xor("tel","email")

export default Sing_up_Joi