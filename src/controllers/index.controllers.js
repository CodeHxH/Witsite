const nodemailer = require('nodemailer');

const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
	res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
	res.render('about');
};

indexCtrl.renderBudget = (req, res) => {
	res.render('budget');
};

indexCtrl.renderMessage = (req, res) => {
	res.render('answer');
};

indexCtrl.sendEmailContact = async (req, res) => {
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

	res.redirect('/');
};

indexCtrl.sendEmailBudget = async (req, res) => {
	const {
		clientName,
		clientPhone,
		clientEmail,
		clientCountry,
		businessType,
		businessName,
		graphicElements,
		proyectType,
		clientGoal,
		usersNumber,
		socialNetwork,
		deadline,
		message,
	} = req.body;

	contentHTML = `
	<h1>Información de Usuario</h1>
	<ul>
    <li>clientName: ${clientName}</li>
    <li>clientPhone: ${clientPhone}</li>
    <li>clientEmail: ${clientEmail}</li>
    <li>clientCountry: ${clientCountry}</li>
    <li>businessType: ${businessType}</li>
    <li>businessName: ${businessName}</li>
    <li>graphicElements: ${graphicElements}</li>
    <li>proyectType: ${proyectType}</li>
    <li>clientGoal: ${clientGoal}</li>
    <li>usersNumber: ${usersNumber}</li>
    <li>socialNetwork: ${socialNetwork}</li>
    <li>deadline: ${deadline}</li>
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

	res.redirect('/');
};

module.exports = indexCtrl;
