const express = require('express');

const server = express();

const port = 3000;

const path = require('path');

const createError = require('http-errors');

const CurriculoController = require('./controllers/curriculo-controller');

server.use(express.static(path.join(__dirname, 'public')));

//Setup view engine
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.get('/', (req, res, next) => {
    res.render('index', {
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});

server.get('/curriculo', (req, res, next) => {
    const curriculoData = CurriculoController.getData();
    res.render('curriculo', curriculoData);
});

//404

server.use((req, res, next) => {
    next(createError(404));
});

//error handler

server.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.local.error = req.app.get('env') == 'development' ? err : {};

    res.status(err.status || 500);
    res.render(error);
});

server.listen(port, err => {
    console.log(`Server is listening on port ${port}`);
});







