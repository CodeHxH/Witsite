const router = require('express').Router();

const {
	sendEmailBudget,
	sendEmailContact,
	renderIndex,
	renderAbout,
	renderBudget,
} = require('../controllers/index.controllers');

const {
	formContactIsAuthenticated,
	formBudgetIsAuthenticated,
} = require('../helpers/auth');

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/budget', renderBudget);

router.post('/send-email', formContactIsAuthenticated, sendEmailContact);

router.post('/send-budget', formBudgetIsAuthenticated, sendEmailBudget);

module.exports = router;
