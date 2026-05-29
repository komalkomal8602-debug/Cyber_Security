import express from 'express'
import {create_user} from '../controller/user_controller.js'

const router = express.Router()

router.get('/', create_user )