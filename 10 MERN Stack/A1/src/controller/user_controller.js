import {user_model} from '../model/model.js'

export const register = async(req, res) =>{
try{
    const data = req.body
    console.log(data)
    const {name, email, password, gender} = data

const db = await user_model.create(data)
    
    res.status(200).send({status:true, msg:'user is created', db})
}
catch(e){
   res.status(500).send({status: false, msg: e.message})
}
}


export const verify_otp = (req, res) =>{
try{
    res.status(200).send({status:true, msg:'ok'})
}
catch(e){
   res.send(e.message)
}
}

export const resend_otp = (req, res) =>{
try{
    res.status(200).send({status:true, msg:'ok'})
}
catch(e){
   res.send(e.message)
}
}

export const log_In = (req, res) =>{
try{
    res.status(200).send({status:true, msg:'ok'})
}
catch(e){
   res.send(e.message)
}
}
