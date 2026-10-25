import express from "express"
import Sing_up_Joi from "../Joies/Sing_up_Joi.js"
import UserSchema from "../schemas/Sing_up.Scheme.js"
import SMSCodeSchema from "../schemas/CodeSMS.Scheme.js"
import { SendSms } from "../index.js"


const router = express.Router()

/**
 * @swagger
 * /api/user/sign_up:
 *   post:
 *     summary: Foydalanuvchini ro‘yxatdan o‘tkazish
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *             properties:
 *               ism:
 *                 type: string
 *                 example: Javohir Ma'murov
 *               email:
 *                 type: string
 *                 example: test@mail.com
 *               tel:
 *                 type: string
 *                 example: "+998901234567"
 *     responses:
 *       201:
 *         description: User yaratildi
 *       400:
 *         description: Validation xato
 */

router.post("/sign_up", async (req, res) => {
    console.log(req);

    const body = req.body
    
    
    const { value, error } = Sing_up_Joi.validate(body)
    if (error) return res.status(400).json({ message: "Ism Bo'lishi shart" })
    const user = await UserSchema.create(value)
    res.send({data:user})
})

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: ID orqali user olish
 *     description: Berilgan ID bo‘yicha bitta user maʼlumotini qaytaradi
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID (Mongo _id yoki custom userId)
 *         schema:
 *           type: string
 *           example: 66a1f0c2e4b0a91234567890
 *     responses:
 *       200:
 *         description: User topildi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/schemas/Sing_up.Schema.js'
 *       400:
 *         description: Noto‘g‘ri ID format
 *       404:
 *         description: User topilmadi
 */


router.get("/:id", async (req, res) => {
    const { id } = req.params
    const user = await UserSchema.findOne({ _id: id }).lean()
    console.log(user);
    if (user) {
        res.send({ message: "User mavjud", data: user })
    } else {
        res.status(404).json({ message: "User Topilmadi" })
    }

})

/**
 * @swagger
 * /api/user/send-sms:
 *   post:
 *     summary: Telefon raqamga SMS tasdiqlash kodi yuborish
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tel
 *             properties:
 *               tel:
 *                 type: string
 *                 example: "+998886658179"
 *     responses:
 *       200:
 *         description: SMS muvaffaqiyatli yuborildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: SMS yuborildi
 *       400:
 *         description: Noto‘g‘ri telefon raqam
 *       500:
 *         description: Server xatosi
 */


function generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

router.post('/send-sms', async (req, res) => {
    const { tel,type } = req.body;
    console.log(tel);
    
    const isuser=await UserSchema.findOne({tel})
    if(isuser && type=="sing_up"){
        return res.status(409).json("Bunday telefon nomer allaqachon ro'yhatdan o'tgan.")
    }
    const code = generateCode();
    const user = await SMSCodeSchema.findOne({ tel })
    console.log(user,"   " +code);
    
    if (user) {
        await SMSCodeSchema.findOneAndUpdate(
            { tel },
            {
                smsCode: code,
                smsCodeExpires: Date.now() + 60 * 1000 // 1 daqiqa
            },
            { upsert: true }
        );
    }
    else{
        await SMSCodeSchema.create(
            {
                tel:tel,
                smsCode: code,
                smsCodeExpires: Date.now() + 60 * 1000 // 1 daqiqa
            },
            { upsert: true }
        );
    }
    // if(tel==process.env.TWILIO_PHONE) return console.log("Bu nomerga sms yuborib bo'lmaydi");
    
    // const Sms = await SendSms(tel, `Uzchess tasdiqlash kodingiz: ${code}`);
    // console.log("Sms " + Sms);


    res.status(200).json({ message: 'SMS yuborildi',code:code });
});

/**
 * @swagger
 * /api/user/send-email:
 *   post:
 *     summary: Emailga tasdiqlash kodi yuborish
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: test123@gmail.com
 *     responses:
 *       200:
 *         description: habar muvaffaqiyatli yuborildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Habar yuborildi
 *       400:
 *         description: Noto‘g‘ri email
 *       500:
 *         description: Server xatosi
 */

router.post('/send-email', async (req, res) => {
    const { email,type } = req.body;
    console.log(email);
    
    const isuser=await UserSchema.findOne({email})
    if(isuser && type=="sing_up"){
        return res.status(409).json("Bunday email allaqachon ro'yhatdan o'tgan.")
    }
    const code = generateCode();
    const user = await SMSCodeSchema.findOne({ email })
    console.log(user,"   " +code);
    
    if (user) {
        await SMSCodeSchema.findOneAndUpdate(
            { email },
            {
                smsCode: code,
                smsCodeExpires: Date.now() + 60 * 1000 // 1 daqiqa
            },
            { upsert: true }
        );
    }
    else{
        await SMSCodeSchema.create(
            {
                email:email,
                smsCode: code,
                smsCodeExpires: Date.now() + 60 * 1000 // 1 daqiqa
            },
            { upsert: true }
        );
    }
    if(email==process.env.TWILIO_PHONE) return console.log("Bu nomerga sms yuborib bo'lmaydi");
    
    // const Sms = await SendSms(email, `Uzchess tasdiqlash kodingiz: ${code}`);
    // console.log("Sms " + Sms);


    res.status(200).json({ message: 'SMS yuborildi',code:code });
});

/**
 * @swagger
 * /api/user/verify-code:
 *   post:
 *     summary: SMS orqali yuborilgan kodni tekshirish
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tel
 *               - code
 *             properties:
 *               tel:
 *                 type: string
 *                 example: "+998901234567"
 *               code:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Telefon raqam muvaffaqiyatli tasdiqlandi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Telefon tasdiqlandi
 *       400:
 *         description: Kod noto‘g‘ri yoki eskirgan
 *       404:
 *         description: User topilmadi
 *       500:
 *         description: Server xatosi
 */


router.post('/verify-code', async (req, res) => {
    const { tel, code } = req.body;

    const user = await SMSCodeSchema.findOne({ tel });

    if (!user) {
        return res.status(404).json({ message: 'User topilmadi' });
    }

    if (
        user.smsCode !== code ||
        user.smsCodeExpires < Date.now()
    ) {
        return res.status(400).json({ message: 'Kod noto‘g‘ri yoki eskirgan' });
    }

    user.smsCode = null;
    user.smsCodeExpires = null;
    await user.save();

    res.json({ message: 'Telefon tasdiqlandi' });
});









export default router
