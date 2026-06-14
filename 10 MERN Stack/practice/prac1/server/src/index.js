import express from 'express'
import mongoose from 'mongoose'
import {route} from './routes/routes.js'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MongoDBUrl)
.then(()=>console.log('database is connected...'))
.catch(()=>console.log('database is not connected...'))

const app = express()
const Port = process.env.Port

app.use(express.json())

app.use('/', route)

app.listen(Port,()=>console.log(`server is running on port https://localhost: ${Port}`))