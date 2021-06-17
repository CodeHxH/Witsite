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
    <li>Nombre: ${clientName}</li>
    <li>Teléfono: ${clientPhone}</li>
    <li>Email: ${clientEmail}</li>
    <li>País: ${clientCountry}</li>
    <li>Tipo de negocio: ${businessType}</li>
    <li>Nombre del negocio: ${businessName}</li>
    <li>Branding: ${graphicElements}</li>
    <li>Tipo de proyecto: ${proyectType}</li>
    <li>Meta esperada: ${clientGoal}</li>
    <li>Usuarios esperados: ${usersNumber}</li>
    <li>Redes sociales: ${socialNetwork}</li>
    <li>Deadline: ${deadline}</li>
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
