const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const rutasLab = require('./routes/lab.routes');
const rutasForm = require('./routes/form.routes');

app.use('/lab', rutasLab);  
app.use('/auth', rutasForm);

app.get('/', (request, response) => {
    response.render('index', {titulo: "Inicio - Lab 12"});
});

app.use((request, response) => {
    response.status(404).send('<h1>Error 404: Esta página no existe</h1>');
});

app.listen(3000);   