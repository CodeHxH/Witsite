const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
  res.render("index.html");
});

router.post('/send-email', async(req, res) => {
  const { name, email, phone, message } = req.body;

  contentHTML = `
  <h1>Información de Usuario</h1>
  <ul>
      <li>Nombre: ${name}</li>
      <li>Email: ${email}</li>
      <li>Teléfono: ${phone}</li>
  </ul>
  <p>${message}</p>
  `;
  
  const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
      user:"rodriguezjoseagustin31@gmail.com",
      pass:"yunslvtttcdppfre",
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const info = await transporter.sendMail({
    from:'"Witsite user" <rodriguezjoseagustin31@gmail.com>',
    to:"rodriguezjoseagustin30@gmail.com",
    subject:"Witsite user",
    html: contentHTML
  });

  console.log("Mensaje enviado", info.messageId);

  res.redirect("/");
});

module.exports = router;
