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
	res.render('message');
};

module.exports = indexCtrl;
