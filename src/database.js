const mongoose = require('mongoose');

const WITSITE_URI = process.env.MONGODB_URI;

mongoose
	.connect(WITSITE_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})

	.then((db) => console.log('Database is connected'))
	.catch((err) => console.log(err));
