const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const rutasLab = require('./routes/lab.routes');
const rutasForm = require('./routes/form.routes');

app.use('/lab', rutasLab);  
app.use('/auth', rutasForm);

app.get('/', (request, response) => {
    response.send('<h1>Lab 11</h1><p>Usa /lab/completo - /lab/preguntas-html /lab/preguntas-css o /auth/password - /auth/status</p>');
});

app.use((request, response) => {
    response.status(404).send('<h1>Error 404: Esta página no existe</h1>');
});

app.listen(3000);   