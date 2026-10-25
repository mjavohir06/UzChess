import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {type: String,unique: true,sparse: true},
    tel: { type: String, unique: true, sparse: true },
    smsCode: String,
    smsCodeExpires: Date
});

const SMSCodeSchema = model("SMSCode", userSchema)

export default SMSCodeSchema