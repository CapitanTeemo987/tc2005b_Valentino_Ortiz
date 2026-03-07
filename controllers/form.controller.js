const Form = require('../models/form.model')

exports.get_password = (request, response, next) => {
    Form.fetchAll().then(([rows, fieldData]) => {
        response.render('password_form', {
            titulo: "Validador de Password",
            lista: rows, 
            username: request.session.username || ''
        });
    }).catch((error) => {next(error)});
};

exports.post_password = (request, response, next) => {    
    const password = request.body.pass1;
    const miPassword = new Form(password);

    miPassword.save().then(() => {
        response.setHeader('Set-Cookie', `ultima_password=${password}; HttpOnly; Max-Age=3600`);
        response.redirect('/auth/password');
    }).catch((error) => {next(error)});
    
};

exports.get_status = (request, response, next) => {
    console.log(request.get('Cookie'));    
    response.send("<h1>Servidor en línea</h1><p>Módulo de formularios activo.</p>");
};