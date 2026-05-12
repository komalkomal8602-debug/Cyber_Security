export const register =(req,res)=>{
    try{
        const data = req.body
        const {name, email, gender, password}=data
        res.status(200).send({status:true, msg:"hii"})
    }
    catch(err){
       res.send(err.message)
    }
}
export const verify_otp =(req,res)=>{
    try{
        res.status(200).send({status:true, msg:"hii"})
    }
    catch(err){
       res.send(err.message)
    }
}
export const resend_otp =(req,res)=>{
    try{
        res.status(200).send({status:true, msg:"hii"})
    }
    catch(err){
       res.send(err.message)
    }
}