import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'
import cors from 'cors';
import bodyParser from "body-parser";

dotenv.config();

const app = express()

app.use(cors())

app.get('/', (req, res)=>{
    res.send("hello")
})
app.use(bodyParser.json())

app.use('/user', userRoutes)

const port = process.env.PORT || 5500;

app.listen( port , ()=>{
    console.log(`server running on the port ${port}`)
});
const db_url = process.env.CONNECTION_URL;
//console.log(db_url);
mongoose.connect(db_url, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("mongo database connected")
}).catch((error)=>{
    console.log(error)
})