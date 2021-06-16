const helpers = {};

helpers.formContactIsAuthenticated = (req, res, next) => {
	// Verificando que los datos del formulario fueron introducidos correctamente

	// Expresiones regulares
	const expressions = {
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		phone: /^\d{7,14}$/, // 7 a 14 numeros.
	};

	// Campos a confirmar
	const fields = {
		name: false,
		lastname: false,
		email: false,
		phone: false,
		message: false,
	};

	// Validando campos
	const validateField = (expression, fieldValue, field) => {
		if (expression.test(fieldValue)) {
			fields[field] = true;
		}
	};

	if (req.body.message) {
		fields['message'] = true;
	}

	validateField(expressions.name, req.body.name, 'name');
	validateField(expressions.name, req.body.lastname, 'lastname');
	validateField(expressions.email, req.body.email, 'email');
	validateField(expressions.phone, req.body.phone, 'phone');

	// Validando formulario
	if (
		fields.name &&
		fields.lastname &&
		fields.email &&
		fields.phone &&
		fields.message
	) {
		req.flash('success_msg', 'Su mensaje ha sido enviado');
		return next();
	} else {
		req.flash('error_msg', 'Su mensaje no se ha podido enviar');
		res.redirect('/about');
	}
};

helpers.formBudgetIsAuthenticated = (req, res, next) => {
	// Verificando que los datos del formulario fueron introducidos correctamente

	// Expresiones regulares
	const expressions = {
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		phone: /^\d{7,14}$/, // 7 a 14 numeros.
	};

	// Campos a confirmar
	const fields = {
		clientName: false,
		clientPhone: false,
		clientEmail: false,
		clientCountry: false,

		clientGoal: false,
		businessType: false,
		proyectType: false,
		usersNumber: false,
	};

	// Validando campos
	const validateField = (expression, fieldValue, field) => {
		if (expression.test(fieldValue)) {
			fields[field] = true;
		}
	};

	if (req.body.clientGoal) {
		fields['clientGoal'] = true;
	}
	if (req.body.businessType) {
		fields['businessType'] = true;
	}
	if (req.body.proyectType) {
		fields['proyectType'] = true;
	}
	if (req.body.usersNumber) {
		fields['usersNumber'] = true;
	}

	validateField(expressions.name, req.body.clientName, 'clientName');
	validateField(expressions.phone, req.body.clientPhone, 'clientPhone');
	validateField(expressions.email, req.body.clientEmail, 'clientEmail');
	validateField(expressions.name, req.body.clientCountry, 'clientCountry');

	// Validando formulario
	if (
		fields.clientName &&
		fields.clientPhone &&
		fields.clientEmail &&
		fields.clientCountry
		// fields.clientGoal &&
		// fields.businessType &&
		// fields.usersNumber &&
		// fields.proyectType
	) {
		req.flash('success_msg', 'Su formulario ha sido enviado');
		return next();
	} else {
		req.flash('error_msg', 'Su formulario no se ha podido enviar');
		res.redirect('/budget');
	}
};

module.exports = helpers;
