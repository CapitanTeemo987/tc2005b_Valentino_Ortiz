exports.get_completo = (request, response) => {
    response.render('lab_completo', {titulo: "Laboratorio", username: request.session.username || '',});
};

exports.get_preguntas_html = (request, response) => {
    response.render('preguntashtml', {titulo: "Preguntass HTML", username: request.session.username || '',});
};

exports.get_preguntas_css = (request, response) => {
    response.render('preguntascss', {titulo: "Preguntass CSS", username: request.session.username || '',});
};