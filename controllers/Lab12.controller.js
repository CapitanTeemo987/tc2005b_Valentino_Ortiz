exports.get_main = (request, response) => {
    response.render('index', {titulo: "Inicio - Lab 12"});
};