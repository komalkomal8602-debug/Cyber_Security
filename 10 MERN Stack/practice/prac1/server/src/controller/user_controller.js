import { user_model } from "../model/model.js"
import {error} from '../error/allErrorHandling.js'
import crypto from 'crypto'
export const create_user = async (req,res) => {
    try{
        const DB = req.body
        const data = await user_model.create(DB)
        res.status(200).send({status:true, msg: 'done', DB})
    }
    catch(err){
        res.status(400).send({status:true, msg:err.message})
    }
}
