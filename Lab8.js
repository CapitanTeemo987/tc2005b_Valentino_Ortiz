const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const rutasLab = require('./routes/lab.routes');
const rutasForm = require('./routes/form.routes');

app.use('/lab', rutasLab);  
app.use('/auth', rutasForm);

app.get('/', (request, response) => {
    response.send('<h1>Lab 11</h1><p>Usa /lab/ejercicios o /auth/password</p>');
});

app.use((request, response) => {
    response.status(404).send('<h1>Error 404: Esta página no existe</h1>');
});

app.listen(3000);