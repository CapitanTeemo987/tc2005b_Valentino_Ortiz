const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const Lab12Controller = require('./controllers/Lab12.controller');

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const rutasLab = require('./routes/lab.routes');
const rutasForm = require('./routes/form.routes');
const usersLog = require('./routes/users.routes')

app.use('/lab', rutasLab);  
app.use('/auth', rutasForm);
app.use('/users', usersLog);

app.get('/', Lab12Controller.get_main);

app.use((request, response) => {
    response.status(404).send('<h1>Error 404: Esta página no existe</h1>');
});

app.listen(3000);   