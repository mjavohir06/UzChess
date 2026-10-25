import { Schema, model } from "mongoose"
const userSchema = new Schema({
    ism: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        sparse: true,  // XOR bo‘lganda unique constraint uchun
        trim: true,
        lowercase: true,
    },
    tel: {
        type: String,
        unique: true,
        sparse: true,
        trim: true
    },
    parol: {
        type: String,
        required: true
    },
    turi:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
}, { timestamps: true });

// XOR validation: email yoki phone bo‘lishi kerak, ikkalasi birga bo‘lmasin
userSchema.pre('validate', function () {
    if ((!this.email && !this.phone) || (this.email && this.phone)) {
        new Error('Faqat email yoki phone bo‘lishi kerak, ikkalasi bir vaqtda bo‘lishi mumkin emas')
    }
});

const UserSchema = model("User", userSchema)


export default UserSchema