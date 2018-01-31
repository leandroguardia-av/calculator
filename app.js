const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');		// Logs HTTP Requests in the server console
const app = express();

const add = require('../app/calculator');

/* ============== SETUP ============== */

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

/* ============== ROUTING =========== */

app.get('/', (req, res) => {
	res.render('index')
});

app.post('/add', (req, res) => {
	body = req.body;
	let a = Number(body.a);
	let b = Number(body.b);
	sum = "The result is: " + add(a, b);
	res.render('index', { result: sum });
})

/* ============= SERVER CONF ============ */

const SERVER_PORT = 3000;

app.listen(SERVER_PORT, () => {
	console.log("Server Up! listening on port", SERVER_PORT);
});