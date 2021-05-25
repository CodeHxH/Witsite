const router = require('express').Router();

const {
	sendEmailBudget,
	sendEmailContact,
	renderIndex,
	renderMessage,
	renderAbout,
	renderBudget,
} = require('../controllers/index.controllers');

const { formIsAuthenticated } = require('../helpers/auth');

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/budget', renderBudget);

router.get('/message', renderMessage);

router.post('/send-email', formIsAuthenticated, sendEmailContact);

router.post('/send-budget', sendEmailBudget);

module.exports = router;
