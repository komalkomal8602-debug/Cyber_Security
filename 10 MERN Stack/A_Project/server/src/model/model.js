import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    profilImg:{type:Object, required: false},
    name:{type:String, required: [true, 'name is required'], trim:true},
    email:{type:String, required: [true, 'name is required'], trim:true, lowercase: true, unique:true},
    password:{type:String, required: [true, 'name is required'], trim:true,},
    gender:{type:String, required: [true, 'gender is required'], enum:['male', 'female', 'other'],trim:true,},
    verfication:{
        user:{
            isverify:{type:Boolean, default:false},
            otpexpiretime:{type:Number, default:null},
            otp:{type:Number, default:null},
            block:{type:Boolean, default:false},
            blockstatus:{type:String, default:null, enum:[]},
            isdelete:{type:Boolean, default:false}
        },
        admin:{
            otp:{type:Number, default:null},
            isverify:{type:Boolean, default:false},
        }
    }
})

export default mongoose.model('Mern_Stack_project_A', UserSchema)