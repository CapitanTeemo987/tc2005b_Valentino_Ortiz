exports.get_main = (request, response, next) => {
    response.render('index', {
        titulo: "Inicio - Lab 18", 
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    });
};


