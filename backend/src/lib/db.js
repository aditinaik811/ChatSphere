import mongoose from "mongoose"
import {ENV} from "../lib/env.js"
export const connectDB = async()=>{
    const MONGO_URI = ENV.MONGO_URI;
    if(!MONGO_URI) throw new Error("MONGO_URI is not set");
    try{
        const conn = await  mongoose.connect(MONGO_URI)
        console.log("SUCCESSFULLY CONNECTED MONGODB:",conn.connection.host)
    }
    catch(error){
        console.error("ERROR CONNECTING TO MONGODB:",error)
    }
}