import mongoose from "mongoose"
import { ValidName, ValidEmail, ValidGender, ValidMobile, ValidPassword, ValidPincode } from '../validation/allValidation.js'


const user_schema = new mongoose.Schema({
    userImg: { type: Object },
    avatar: { type: Object, default: 'https:/' },
    fname: { type: String, required: [true, 'first name is require'], validate:[validname, 'Invalid first name'], trim: true },
    lname: { type: String, required: [true, 'last name is require'], validate:[validname, 'Invalid last name' ], trim: true },
    gender: { type: String, required: [true, 'gender is require'], enum: ['male', 'female', 'others'], trim: true },
    mobile: { type: Number, required: [true, 'mobile no. is require'], trim: true, unique: true },
    email: { type: String, required: [true, 'email is require'], validate:[validemail, 'Invalid Email'], trim: true, unique: true, lowercase: true },
    password: { type: String, required: [true, 'password is require'], trim: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }, 
    addresslist: [
        {
            pincode: { type: Number, default: null },
            city: { type: String, default: null },
            state: { type: String, enum: ['Kaithal'], default: 'Kaithal' },
            landmark: { type: String, default: null }
        }
    ],
    isaddress: { type: Boolean, default: false },
    verification: {
        user: {
            loginInfo:[{type:Object, default:[]}],
            otp:{type:String, default:null},
            otpExpireTime:{type:Number, default:null},
            isVerify:{type:Boolean, default:false},
            isDelete:{type:Boolean, default: false},
            otpAtm:{type:Number, default: 3},
            otpBlockTime:{type:Number, default: null},
            otpBlockStatus:{type:String, enum:['1m', '5m', '10m', '1h', '24h', '1w', '1m', '1y', '10y']},
            blockAcc:{type:Boolean, default:false},
            blockReason:{type:String, default:null}
        },
        admin: {
            loginInfo:[{type:Object, default:{} }],
        }
    }
},

{timestamps:true}

)

export const user_model = mongoose.model('user', user_schema)
