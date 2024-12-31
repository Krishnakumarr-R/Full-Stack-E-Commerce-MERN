const express= require('express')
const cors = require('cors') 
require('dotenv').config()
const connestDB = require('./config/db')
const router = require('./routes/index')
const cookieParser = require('cookie-parser')

const app=express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(cookieParser())
app.use(express.json())

app.use("/api",router)


const PORT= 8080||process.env.PORT

connestDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('connected to db')
        console.log("server is running")
    })
    
})

