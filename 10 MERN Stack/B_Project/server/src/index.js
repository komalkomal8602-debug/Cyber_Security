import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MongoDBUrl)
.then(()=>console.log('database is connected....'))
.catch(()=>console.log('database is not connected...'))


const app = express()
const port = process.env.port || 5000

app.listen(port,()=>console.log(`server is running on port- http://localhost: ${port}`))