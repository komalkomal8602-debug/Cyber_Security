import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {routes} from './routes/routes.js' 
dotenv.config()

mongoose.connect(process.env.MongodbUrl)
.then(()=>console.log('database is connected...'))
.catch(()=>console.log('database is not connected...'))

const app = express()
app.use(express.json())

const port = process.env.port


app.use('/', routes )

app.listen(port,()=>console.log(`server is running on port ${port}`))




