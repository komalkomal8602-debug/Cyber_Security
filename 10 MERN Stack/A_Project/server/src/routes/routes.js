import express from 'express'
import { register, verify_otp, resend_otp } from '../controller/user_controller.js'

const routes = express.Router()

routes.post('/user/register', register)
routes.post('/user/verify_otp', register)
routes.post('/user/resend_otp', register)

export default routes   