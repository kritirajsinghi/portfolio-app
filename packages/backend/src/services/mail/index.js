const nodemailer=require('nodemailer');
const EmailTemplate=require('email-templates')
const path=require('path')
require('dotenv').config();

const config=require('../../../config')

const createTransporter=()=>(nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          type: 'OAuth2',
          user: 'kritiraj.fullstack@gmail.com',
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: process.env.ACCESS_TOKEN
           }
       })
    );
    
const getMailOptions =(to,subject,html)=>({
    from: config.mailOptions.adminMail,
    to: to,
    subject: subject,
    html: html
  }); 
const loadTemplate=async(templateName,context)=>{
    const template=new EmailTemplate()
    const mail=await template.render(path.join(__dirname,'../../emailTemplate',templateName),{...context});    
    return mail;
}

const sendMail=async(mailOptions)=>{
    const transporter=createTransporter();
    await transporter.sendMail(mailOptions)
} 

const mail=async(data,next)=>{
  try{
    const clientHtmlMail=await loadTemplate('client',data);
    const clientMailOptions=getMailOptions(data.email,config.mailOptions.clientSubject,clientHtmlMail);
    const adminHtmlMail=await loadTemplate('admin',{...data,admin:config.mailOptions.adminName});
    const adminMailOptions=getMailOptions(config.mailOptions.adminMail,`${config.mailOptions.adminSubject} from ${data.name}`,adminHtmlMail);
    await sendMail(clientMailOptions);
    await sendMail(adminMailOptions)
  }
  catch(err){
    console.log(err)
   throw new Error("Node Mailer Service Failed")
  }
}
module.exports=mail;