export const create_user = (req,res)=>{
try{
    res.status(200).send({status:true , msg:'ok'})
}
catch(e){
    res.send(e.message)
}
}