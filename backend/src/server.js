import express from "express"
const app = express();
import dotenv from "dotenv"
dotenv.config()
import path from "path";
const PORT = process.env.PORT || 3000
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

const __dirname = path.resolve();



app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
    });
}

app.listen(PORT,()=>{
    console.log("Server is listening on port: "+PORT)
})

