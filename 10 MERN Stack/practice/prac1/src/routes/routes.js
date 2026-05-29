import express from 'express'
import {create_user} from '../controller/user_controller.js'

 export const routes = express.Router()

routes.post('/user/create_user', create_user)