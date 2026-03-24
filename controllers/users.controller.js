const User = require("../models/users.model");
const bcrypt = require('bcrypt');

exports.get_login = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        titulo: "Login", 
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        error: error,
    });
};

exports.post_login = (request, response, next) => {
    User.fetchOne(request.body.username).then(([rows, fieldData]) => {
        if(rows.length > 0){
            bcrypt.compare(request.body.password, rows[0].password).then((doMatch) => {
                if(doMatch){
                    request.session.isLoggedIn = true;
                    request.session.username = request.body.username;
                    return User.getPrivilegios(request.body.username).then(([privilegios, fieldData]) => {
                        request.session.permisos = privilegios[0];
                        console.log(request.session.permisos);
                        return request.session.save(() => {
                            return response.redirect('/');
                        }); 
                    }).catch((error) => {
                        console.log(error);
                        next(error);
                    });
                } else {
                    request.session.error = "Usario y/o contraseña no coinciden";
                    return response.redirect('/users/login');
                }
            }).catch((error) => {
                console.log(error);
                next(error);
            });
        } else{
            request.session.error = "Usario y/o contraseña no coinciden";
            return response.redirect('/users/login');
        }
     }).catch((error) => {
        console.log(error);
        next(error);
    });
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); 
    });
};

exports.get_signup = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('signup', {
        titulo: 'Sign up',
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        error: error,
    })
};

exports.post_signup = (request, response, next) =>{
    if(request.body.password != request.body.password_confirm){
        request.session.error = 'Las contraseñas no coinciden';
        return response.redirect('/users/signup');
    } else {
        const user = new User(
            request.body.username, request.body.nombre, request.body.password);
        user.save().then(() => {
            return response.redirect('/users/login');   
        }).catch((error) => {
            console.log(error);
            next(error); 
        });
    }
};

