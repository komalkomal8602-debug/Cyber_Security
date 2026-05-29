import {user_model} from '../model/model.js'



export const create_user = async(req,res) =>{
try{
    const data = req.body 
    const {fname} = data
    
    const db = await user_model.create(data)
    res.status(200).send({status:true, msg:"ok", db})
}
catch(e){
    res.status(500).send({status:false, msg: e.message})
}
}


export const verify_otp = (req,res) =>{
try{

}
catch(e){
    res.status(500).send({status:false, msg: e.message})
}
}


export const resend_otp = (req,res) =>{
try{

}
catch(e){
    res.status(500).send({status:false, msg: e.message})
}
}


export const forget_otp = (req,res) =>{
try{

}
catch(e){
    res.status(500).send({status:false, msg: e.message})
}
}


export const login = (req,res) =>{
try{

}
catch(e){
    res.status(500).send({status:false, msg: e.message})
}
}


export const login_google = (req,res) =>{
try{

}
catch(e){
    res.status(500).send({status:false, msg: e.message})
}
}


export const update_profile_img = (req,res) =>{
try{

}
catch(e){
    res.status(500).send({status:false, msg: e.message})
}
}


export const update_info = (req,res) =>{
try{

}
catch(e){
    res.status(500).send({status:false, msg: e.message})
}
}

export const delete_account = (req,res) =>{
try{

}
catch(e){
    res.status(500).send({status:false, msg: e.message})
}
}
