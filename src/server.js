const express = require('express');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const flash = require('connect-flash');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');

// initialization
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	exphbs({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
		handlebars: handlebars,
	})
);
app.set('view engine', '.hbs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
	session({
		secret: 'secret',
		resave: true,
		saveUninitialized: true,
	})
);
app.use(flash());

// Global Variables
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	next();
});

// routes
app.use(require('./routes/index.routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
