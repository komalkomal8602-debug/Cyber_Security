import { validName, validEmail, validPassword, validgender } from '../validation/validation.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
name:{type:String, required: [true, 'name is required'], validate:[validName, 'Invalid name'], trim: true},
email:{type:String, required: [true, 'email is required'], validate:[validEmail, 'Invalid email'],  unique: true, lowercase: true, trim: true },
password:{type: String, required: [true, 'password is required'], validate:[validPassword, 'Invalid password'], trim: true},
gender:{type:String, enum:['female', 'male', 'others'], validate:[validgender, 'Invalid gender'], trim: true, required: [true, 'gender is required']},
verification:{
    user:{
        isverify:{type: Boolean, default: false},
        otpexpiretime:{type: Number, default: null},
        otp:{type: Number, default: null},
        block:{type: Boolean, default: false},
        blockstatus:{type: String, default : null, enum :[]},
        isdelete:{type: Boolean, default:false},

    },
    admin:{
        otp:{type : Number, default: null},
        isverify:{type: Boolean, default: false}
    }
}
})


export const user_model = mongoose.model('A1', userSchema)
