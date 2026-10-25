import { Schema,model } from "mongoose";

const Kurslar= new Schema({
    status:{
        type:String,
        enum:["active","deleted"],
        default:'active'
    },
    img:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    muallif:{
        type:String,
        required:true
    },
    price_old:{
        type:Number
    },
    price_new:{
        type:String,
        required:true
    },
    language_id:{
        type:String,
        required:true
    },
    bolim_soni:{
        type:Number,
        required:true
    },
    daraja_id:{
        type:String,
        required:true
    },
    categore_id:{
        type:String,
        required:true
    },
    darslar_soni:{
        type:Number,
        required:true
    },
})

const KurslarSchema=model("Kurslar",Kurslar)

export default KurslarSchema