const router = require('express').Router();
const nodemailer = require('nodemailer');

const {
	renderIndex,
	renderMessage,
	renderAbout,
	renderBudget,
} = require('../controllers/index.controllers');

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/budget', renderBudget);

router.get('/message', renderMessage);

router.post('/send-email', async (req, res) => {
	const { name, lastname, email, phone, message } = req.body;

	contentHTML = `
	<h1>Información de Usuario</h1>
	<ul>
    <li>Nombre: ${name}</li>
    <li>Apellido: ${lastname}</li>
    <li>Email: ${email}</li>
    <li>Teléfono: ${phone}</li>
	</ul>
	<p>${message}</p>
	`;

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'onthewitsite@gmail.com',
			pass: process.env.GMAIL_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const info = await transporter.sendMail({
		from: '"Witsite user" <onthewitsite@gmail.com>',
		to: 'rodriguezjoseagustin31@gmail.com',
		subject: 'Witsite user',
		html: contentHTML,
	});

	console.log('Message sent: %s', info.messageId);

	res.redirect('/');
});

router.post('/send-budget', async (req, res) => {
	const {
		input1,
		input2,
		input3,
		input4,
		input5,
		input6,
		input7,
		input8,
		input9,
		input10,
		input11,
		input12,
		input13,
		input14,
		input16,
		input17,
	} = req.body;

	contentHTML = `
    <h1>Solicitud de presupuesto</h1>
    <ul>
    <li>Nombre del usuario: ${input9}</li>
    <li>Nombre del proyecto: ${input2}</li>
    <li>Redes Sociales: ${input5}</li>
    <li>Empleados: ${input8}</li>
    <li>Email: ${input10}</li>
    <li>País: ${input14}</li>
    <li>Fecha límite: ${input16}</li>
    </ul>
    <br>
    <h3>¿Tu proyecto tiene un logo?</h3>
    <p>${input3}</p>
    <br>
    <h3>¿De qué se trata tu proyecto?</h3>
    <p>${input1}</p>
    <br>
    <h3>¿Tu proyecto tiene una identidad visual?</h3>
    <p>${input4}</p>
    <br>
    <h3>¿Qué es lo que quieres lograr con tu sitio web?</h3>
    <p>${input6}</p>
    <br>
    <h3>¿Cual es el objetivo principal de tu sitio web?</h3>
    <p>${input7}</p>
    <br>
    <h3>¿Tu negocio o empresa tiene algún tipo de filosofía o valores que quieras recalcar?</h3>
    <p>${input11}</p>
    <br>
    <h3>¿Qué diferencia a tu proyecto, negocio y/o servicio de los demás?</h3>
    <p>${input12}</p>
    <br>
    <h3>¿Como nos has conocido?</h3>
    <p>${input13}</p>
    <br>      
    <h3>¿Hay algo más que quieras decirnos?</h3>
    <p>${input17}</p>
    <br>
	`;

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'onthewitsite@gmail.com',
			pass: process.env.GMAIL_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const info = await transporter.sendMail({
		from: '"Witsite user" <onthewitsite@gmail.com>',
		to: 'rodriguezjoseagustin31@gmail.com',
		subject: 'Witsite user',
		html: contentHTML,
	});

	console.log('Message sent: %s', info.messageId);

	res.redirect('/message');
});

module.exports = router;
