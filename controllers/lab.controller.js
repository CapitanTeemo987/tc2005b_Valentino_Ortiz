exports.get_completo = (request, response, next) => {
    response.render('lab_completo', {
        titulo: "Laboratorio", 
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    });
};

exports.get_preguntas_html = (request, response, next) => {
    response.render('preguntashtml', {
        titulo: "Preguntass HTML", 
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    });
};

exports.get_preguntas_css = (request, response, next) => {
    response.render('preguntascss', {
        titulo: "Preguntass CSS", 
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    });
};