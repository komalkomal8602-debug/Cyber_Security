import express from 'express'
import {create_user} from '../controller/user_controller.js'
export const route = express.Router()

route.post('/user/create_user', create_user)
