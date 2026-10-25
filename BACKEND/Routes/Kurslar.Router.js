import express from 'express'
import CreateKurs_Joi from '../Joies/CreateKurs.Joi.js'
import KurslarSchema from '../schemas/Kurslar.Schema.js'
import Update_Kurs from '../Joies/UpdateKurs.Joi.js'

const router=express.Router()


/**
 * @swagger
 * /api/kurslar/create:
 *   post:
 *     summary: Kursni yaratish
 *     tags: [Kurslar]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *             properties:
 *               img:
 *                 type: string
 *                 example: ./public/kurs1.png
 *               title:
 *                 type: string
 *                 example: Shaxmat donalari bilan tanishuv
 *               muallif:
 *                 type: string
 *                 example: Robert Fisher
 *               price_old:
 *                 type: number
 *                 example: 205000
 *               price_new:
 *                 type: string
 *                 example: "96000"
 *               bolim_soni:
 *                 type: number
 *                 example: 4
 *               darslar_soni:
 *                 type: number
 *                 example: 20
 *               daraja_id:
 *                 type: string
 *                 example: "ahbsfsbhyfd33gf3"
 *               categore_id:
 *                 type: string
 *                 example: "wgwb3v45y45v5yk5"
 *               language_id:
 *                 type: string
 *                 example: "wgwb3v45y45v5yk5"
 *               
 *     responses:
 *       201:
 *         description: Kurs yaratildi
 *       400:
 *         description: Xatolik
 */


router.post('/create',async (req,res)=>{

    const data=req.body
    const {value,error}=CreateKurs_Joi.validate(data)
    if(error) return res.status(400).json({message:"Ma'lumot to'liq to'ldirilmagan",error:error})
    const kurs = await KurslarSchema.create(value)
    res.send({message:"Kurs yaratildi",data:kurs})

})

/**
 * @swagger
 * /api/kurslar/allkurs:
 *   get:
 *     summary: Barcha kurslarni olish
 *     description: Barcha kurslarni olish
 *     tags:
 *       - Kurslar
 *     
 *     responses:
 *       200:
 *         description: User topildi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/schemas/Kurslar.Schema.js'
 *       400:
 *         description: Noto‘g‘ri ID format
 *       404:
 *         description: User topilmadi
 */

router.get("/allkurs", async (req,res)=>{
    const data = await KurslarSchema.find()
    if(data.length!=0){
        res.send({message:"Barcha kurslar olindi",data:data})
    }else{
        res.status(404).json({message:"Kurs mavjud emas"})
    }
})

/**
 * @swagger
 * /api/kurslar/{id}:
 *   delete:
 *     summary: ID orqali kurs o'chirish
 *     description: Berilgan ID bo‘yicha bitta kursni topadi va o'chiradi
 *     tags:
 *       - Kurslar
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
 *               $ref: '#/schemas/Kurslar.Schema.js'
 *       400:
 *         description: Noto‘g‘ri ID format
 *       404:
 *         description: User topilmadi
 */

router.delete('/:id',async (req,res)=>{
    const {id}=req.params
    const data=await KurslarSchema.findOneAndDelete({_id:id})
    if(data) return res.send({message:"Kurs topildi va o'chirildi",data:data})
    res.status(404).json({message:"Kurs shundoq ham mavjud emas"})
})

/**
 * @swagger
 * /api/kurslar/{id}:
 *   patch:
 *     summary: Kursni yangilash
 *     tags: [Kurslar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID (Mongo _id yoki custom userId)
 *         schema:
 *           type: string
 *           example: 66a1f0c2e4b0a91234567890
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *             properties:
 *               img:
 *                 type: string
 *                 example: ./public/kurs1.png
 *               title:
 *                 type: string
 *                 example: Shaxmat donalari bilan tanishuv
 *               muallif:
 *                 type: string
 *                 example: Robert Fisher
 *               price_old:
 *                 type: number
 *                 example: 205000
 *               price_new:
 *                 type: string
 *                 example: "96000"
 *               bolim_soni:
 *                 type: number
 *                 example: 4
 *               darslar_soni:
 *                 type: number
 *                 example: 20
 *               daraja_id:
 *                 type: string
 *                 example: "ahbsfsbhyfd33gf3"
 *               categore_id:
 *                 type: string
 *                 example: "wgwb3v45y45v5yk5"
 *               language_id:
 *                 type: string
 *                 example: "wgwb3v45y45v5yk5"
 *               
 *     responses:
 *       201:
 *         description: Kurs yaratildi
 *       400:
 *         description: Xatolik
 */

router.patch("/:id",async(req,res)=>{
    const {id}=req.params
    const body =req.body
    const {value,error}=Update_Kurs.validate(body)
    if(error) res.status(400).json({message:"Type error",error:error})
    const data=await KurslarSchema.findOneAndUpdate({_id:id},value)
    if(data) return res.send({message:"Malumotlar yangilandi",data:data})
    res.status(404).json({message:"Update qilish uchun kurs yo'q"})
})














export default router