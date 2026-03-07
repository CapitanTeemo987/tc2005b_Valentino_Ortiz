exports.get_main = (request, response, next) => {
    response.render('index', {titulo: "Inicio - Lab 14", username: request.session.username || '',});
};


