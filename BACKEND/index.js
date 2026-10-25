import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"

dotenv.config()

import Sing_in_up from "./Routes/Sing_in_up.js"

const app=express()
app.use(express.json())
app.use(cors())


const env=process.env


const connectDB = async () => {
    const connection = await mongoose.connect(env.MONGO_URL)
    console.log(connection.connection.host);
}
connectDB()

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import twilio from 'twilio';
import axios from "axios"
import KurslarRouter from "./Routes/Kurslar.Router.js"


// Swagger Backend kodni chiroyli qib beruvchi paket
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'UzChess API',
            version: '1.0.0',
            description: 'UzChess backend API hujjatlari',
        },
        servers: [
            {
                url: 'http://localhost:'+env.PORT,
                description: 'Local server',
            },
        ],
    },
    apis: ['./Routes/*.js'], // commentlarni qayerdan o‘qisin
};

const SwaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(SwaggerSpec));


// Twilio sms jo'natish
// const client = twilio(
//   process.env.TWILIO_SID,
//   process.env.TWILIO_TOKEN
// );

export async function SendSms(to, text) {
//   return client.messages.create({
//     body: text,
//     from: env.TWILIO_PHONE,
//     to
//   });



const code=await axios.post("https://notify.eskiz.uz/api/auth/login",{
    "mobile_phone": String(to).split("+")[1],
  "message": text,
  "from": env.TWILIO_PHONE.split("+")[1]
})
console.log(code.data);

return code.data

}


app.use("/api/user",Sing_in_up)
app.use("/api/kurslar",KurslarRouter)










app.listen(env.PORT || 5000,()=>{
    console.log("ishga tushdi. Port : http://localhost:"+env.PORT);
    
})
export {SwaggerSpec}