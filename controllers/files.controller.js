exports.getArchivo = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = null;

    const rutaImagen = request.query.imagen || null;

    response.render('files', { 
        rutaImagen: rutaImagen, 
        error: error,
        csrfToken: request.csrfToken(),
        username: request.session.username || '',
        titulo: "Subir archivos",
    });
};

exports.postArchivo = (request, response, next) => {
    if (!request.file) {
        request.session.error = "Imagen no subida correctamente";
        return response.redirect('/files/archivo');
    }
    const rutaImagen = request.file.path;
    console.log(rutaImagen);
    response.redirect('/files/archivo?imagen=' + encodeURIComponent(rutaImagen));
};              