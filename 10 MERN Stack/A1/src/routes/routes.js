import express from 'express'
import {register, verify_otp, resend_otp, log_In} from '../controller/user_controller.js'

export const router = express.Router()

router.post('/user/register', register)
router.post('/user/verify_otp', verify_otp)
router.post('/user/resend_otp', resend_otp)
router.post('/user/log_In', log_In)


