import mongoose from 'mongoose'


export const connectDB=async()=>{
    try {
        await mongoose.connect(process.ev.DB)
        console.log("Database Connection successful!!")
    } catch (error) {
        console.log("Databse Connection failed")
        process.exit(0)
    }
}
