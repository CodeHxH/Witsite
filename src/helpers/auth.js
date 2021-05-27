const helpers = {};

helpers.formIsAuthenticated = (req, res, next) => {
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

module.exports = helpers;
