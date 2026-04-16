const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const app = express();

const Lab18Controller = require('./controllers/Lab18.controller');

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
app.use(express.json());

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});

const fileFilter = (request, file, callback) => {
    if (file.mimetype == 'image/png' || 
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg' ) {
            callback(null, true);
    } else {
            callback(null, false);
    }
};

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('archivo')); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const csrf = require('csurf');
const csrfProtection = csrf();

app.use(csrfProtection); 

const rutasLab = require('./routes/lab.routes');
const rutasForm = require('./routes/form.routes');
const usersLog = require('./routes/users.routes');
const rutasFiles = require('./routes/files.routes');


app.use('/lab', rutasLab);  
app.use('/auth', rutasForm);
app.use('/users', usersLog);
app.use('/files', rutasFiles);

app.get('/', Lab18Controller.get_main);

app.use((request, response) => {
    response.status(404).send('<h1>Error 404: Esta página no existe</h1>');
});

app.listen(3000);   