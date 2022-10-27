const express = require('express');

const app = express();

const routes = require('./routes.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('main', { title: 'Formulario' });
});

app.use('/productos', routes);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({ err, message: 'Error' });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Servidor corriendo en puerto ${PORT}`);
});

app.on('error', err => {
	console.log(`Algo salio mal: ${err}`);
});
