import mongoose from "mongoose";
import { ValidName, ValidEmail, ValidGender, ValidPassword, ValidMobile, ValidPincode } from '../validation/validation.js'

const user_schema = new mongoose.Schema({
    proImg: { type: Object },
    avatar: { type: Object, default: 'https://' },
    fname: { type: String, required: [true, 'first name is required'], validate: [ValidName, 'Invalid First Name'], trim: true },
    lname: { type: String, required: [true, 'last name is required'], validate: [ValidName, 'Invalid Last Name'], trim: true },
    gender: { type: String, required: [true, 'gender is required'], enum: ['female', 'male', 'others'], validate: [ValidGender, 'Invalid Gender Name'], trim: true },
    mobile: { type: Number, required: [true, 'mobile Number is required'], unique: true, validate: [ValidMobile, 'Invalid Mobile Number'] },
    email: { type: String, required: [true, 'email is required'], trim: true, lowercase: true, unique: true, validate: [ValidEmail, 'Invalid Email'] },
    password: { type: String, required: [true, 'password is required'], trim: true,  validate: [ValidPassword, 'Invalid Password'] },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    addresslist: [
        {
            pincode: { type: Number, required: [true, 'Pincode is required'], validate: [ValidPincode, 'Invalid Pincode'] },
            state: { type: String, enum: ['Haryana', 'Delhi', 'Chandigarh'], default: 'Haryana' },
            city: { type: String, enum: ['Kaithal', 'Karnal', 'Gurugram', 'Ambala'], default: 'Kaithal' },
            landmark: { type: String, default: null },
        },
    ],
    isaddress: { type: Boolean, default: null },
    verification: {
        user: {
            logininfo: [{ info: Object, default: {} }],
            otp: { type: String, default: null },
            expiretime: { type: Number, default: null },
            isDelete: { type: Boolean, default: false },
            isverify: { type: Boolean, default: false },
            otpAtm: { type: Number, default: 3 },
            otpBlocktime: { type: Number, default: null },
            otpblockStatus: { type: String, enum: ['1m', '5m', '10', '1h', '24h', '1w', '1m', '1y', '10y'] },
            blockAcc: { type: Boolean, default: false },
            blockreason: { type: String, default: null }
        },
        admin: {
            logininfo: [{ info: Object, default: {} }],
        }
    }
},
    { timestamps: true }
)
export const user_model = mongoose.model('test', user_schema)