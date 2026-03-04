const Form = require('../models/form.model')


exports.get_password = (request, response) => {
    const listaPasswords = Form.fetchAll();
    response.render('password_form', {titulo: "Validador de Password",  lista: listaPasswords, username: request.session.username || '',});
};

exports.post_password = (request, response) => {    
    const password = request.body.pass1;
    const miPassword = new Form(password);
    miPassword.save();
    response.setHeader('Set-Cookie', `ultima_password=${password}; HttpOnly; Max-Age=3600`);
    response.redirect('/auth/password');
};

exports.get_status = (request, response) => {
    console.log(request.get('Cookie'));    
    response.send("<h1>Servidor en línea</h1><p>Módulo de formularios activo.</p>");
};