exports.get_completo = (request, response) => {
    response.render('lab_completo', {titulo: "Laboratorio" });
};

exports.get_preguntas_html = (request, response) => {
    response.render('preguntashtml', {titulo: "Preguntass HTML" });
};

exports.get_preguntas_css = (request, response) => {
    response.render('preguntascss', {titulo: "Preguntass CSS" });
};