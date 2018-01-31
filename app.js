const express = require('express');
const path = require('path');
const morgan = require('morgan');		// Logs HTTP Requests in the server console
const app = express();

const SERVER_PORT = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.send("Hello Worlds");
});

app.listen(SERVER_PORT, () => {
	console.log("Server Up! listening on ", SERVER_PORT);
});