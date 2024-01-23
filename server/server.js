import { config } from 'dotenv';
import express from 'express';
import router from './router/auth-router.js';
import {connectDB} from './utils/db.js'
const app = express()

app.use(express.json())
config()
const PORT = process.env.PORT || 5000;

app.use("/api/auth",router)

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is Running At port ${PORT}`)
    })
})
