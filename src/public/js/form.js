const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('.form input');

// Expresiones regulares
const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
	all: /^[0-9a-zA-ZÀ-ÿ\s]{1,}$/, // no debe estar vacio.
};

// Campos a confirmar
const fields = {
	name: false,
	lastname: false,
	email: false,
	phone: false,

	clientName: false,
	clientPhone: false,
	clientEmail: false,
	clientCountry: false,
	clientGoal: false,
};

// Validando campos
const validateField = (expression, input, field) => {
	if (expression.test(input.value)) {
		document.getElementById(`group__${field}`).classList.remove('error');
		document.getElementById(`group__${field}`).classList.add('succes');
		document
			.querySelector(`#group__${field} i`)
			.classList.add('bi-check-circle-fill');
		document
			.querySelector(`#group__${field} i`)
			.classList.remove('bi-x-circle-fill');
		document
			.querySelector(`#group__${field} .form__error`)
			.classList.remove('error');

		fields[field] = true;
	} else {
		document.getElementById(`group__${field}`).classList.remove('succes');
		document.getElementById(`group__${field}`).classList.add('error');
		document
			.getElementById(`group__${field}`)
			.classList.remove('input__success');
		document
			.querySelector(`#group__${field} i`)
			.classList.add('bi-x-circle-fill');
		document
			.querySelector(`#group__${field} i`)
			.classList.remove('bi-check-circle-fill');
		document
			.querySelector(`#group__${field} .form__error`)
			.classList.add('error');

		fields[field] = false;
	}
};

const validateForm = (input) => {
	switch (input.target.name) {
		case 'name':
			validateField(expressions.name, input.target, 'name');
			break;
		case 'lastname':
			validateField(expressions.name, input.target, 'lastname');
			break;
		case 'email':
			validateField(expressions.email, input.target, 'email');
			break;
		case 'phone':
			validateField(expressions.phone, input.target, 'phone');
			break;
		case 'clientName':
			validateField(expressions.name, input.target, 'clientName');
			break;
		case 'clientPhone':
			validateField(expressions.phone, input.target, 'clientPhone');
			break;
		case 'clientEmail':
			validateField(expressions.email, input.target, 'clientEmail');
			break;
		//
		case 'clientCountry':
			validateField(expressions.name, input.target, 'clientCountry');
			break;
		//
		case 'businessType':
			validateField(expressions.all, input.target, 'businessType');
			break;
		//
		case 'clientGoal':
			validateField(expressions.all, input.target, 'clientGoal');
			break;
	}
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
});
