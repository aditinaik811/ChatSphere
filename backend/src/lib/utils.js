import jwt from "jsonwebtoken"

export const generateToken = (userId,res)=>{
    const {JWT_SECRET} = process.env;
    if(!JWT_SECRET){
        throw new Error("JWT Secret is not configured");
    }
    const token = jwt.sign({userId},JWT_SECRET,{
        expiresIn:"7d",
    });
    res.cookie("jwt",token,{
        maxAge:7*32*6060*1000, //MS
        httpOnly:true,          //prevent XSS attacks : CRS
        sameSite:"strict",      //CSRF attack
        secure: process.env.NODE_ENV ==="development"?false:true,
    });
    return token
};