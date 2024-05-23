import express from "express"
import mongoose from "mongoose"
import dontenv from 'dotenv'
import userRoutes from './routes/user.js'
import cors from 'cors';
import bodyParser from "body-parser";


dontenv.config()

const app = express()
app.use(cors())

app.get('/', (req, res)=>{
    res.send("hello")
})
app.use(bodyParser.json())

app.use('/user', userRoutes)
const PORT = process.env.PORT
app.listen(PORT ,()=>{
    console.log(`server running on the port ${PORT}`)
})

const db_url = process.env.CONNECTION_URL
mongoose.connect(db_url,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("mongo database connected")
}).catch((error)=>{
    console.log(error)
})