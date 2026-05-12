import express from 'express'
import mongoose from 'mongoose'
import router from './routes/routes.js'
import dotenv from 'dotenv'
dotenv.config()


const app = express()
app.use(express.json())

mongoose.connect(process.env.MongoDBUrl)
.then(console.log('Database is connected......'))
.catch((err)=>console.log('Database is not connected......',err.message))

const port = process.env.port

app.use('/', router)

app.listen(port,()=>{console.log(`server is running on port - http://localhost: ${port}`)})


