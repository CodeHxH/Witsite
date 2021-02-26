require('dotenv').config();

const app = require('./server');
require('./database');

// listening the Server
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});
