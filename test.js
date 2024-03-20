// test nodemailer
require('dotenv').config(); 
const nodemailer = require("nodemailer");

console.log(process.env.SMTP_PASSWORD)

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "reyesleeyh@gmail.com",
    pass: process.env.SMTP_PASSWORD,
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM, // sender address
    to: "reyesleeyh2@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
