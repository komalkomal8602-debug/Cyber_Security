   import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {router} from './routes/routes.js'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MongoDBUrl)
.then(()=>console.log("Database is connected..."))
.catch((e)=>console.log("Database is not  connected...", e.message))

const app = express()
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())

app.use('/', router)

app.listen(port,()=>console.log(`server is running on port http://localhost: ${port}`))
