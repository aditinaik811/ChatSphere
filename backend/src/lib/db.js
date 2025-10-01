import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const connectDB = async()=>{
    const {MONGO_URI} = process.env;
    if(!MONGO_URI) throw new Error("MONGO_URI is not set");
    try{
        const conn = await  mongoose.connect(MONGO_URI)
        console.log("SUCCESSFULLY CONNECTED MONGODB:",conn.connection.host)
    }
    catch(error){
        console.error("ERROR CONNECTING TO MONGODB:",error)
    }
}