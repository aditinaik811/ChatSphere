import { createWelcomeTemplate } from "../emails/emailTemplates.js"
import { resendClient,sender } from "../lib/resend.js"
export const sendWelcomeEmail = async (email,name,clientURL)=>{
    const {data,error}= await resendClient.emails.send({
        from:`${sender.email} <${sender.email}>`,
        to:email,
        subject:"Welcome to ChatSphere!!",
        html:createWelcomeTemplate(name,clientURL)
    })
    if(error){
        console.error("Error sending Welcome Email",error)
        throw new Error("Failed to send welcome email")
    }
    console.log("Welcome email sent successfully !!!",data);
};