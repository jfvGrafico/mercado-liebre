const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
	console.log(__dirname);
	res.sendFile(path.resolve(__dirname,'./src/views/home.html'));
});

app.get('/login', (req, res) => {
	console.log(__dirname);
	res.sendFile(path.resolve(__dirname,'./src/views/login.html'));
});

app.get('/register', (req, res) => {
	console.log(__dirname);
	res.sendFile(path.resolve(__dirname,'./src/views/register.html'));
});

// app.listen(3030, () => console.log('Servidor corriendo en puerto 3030'));

app.listen(process.env.PORT || 3030, () => console.log('Servidor corriendo en puerto 3030'));