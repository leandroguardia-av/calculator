let express = require('express');
let app = express();

const SERVER_PORT = 3000;

app.get('/', (req, res) => {
	res.send("Hello Worlds");
});

app.listen(SERVER_PORT, () => {
	console.log("Server Up! listening on ", SERVER_PORT);
});