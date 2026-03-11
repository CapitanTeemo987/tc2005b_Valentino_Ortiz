module.exports = (request, response, next) => {
    console.log(request.session.permisos);
    let puedeEntrar = false;
    for (let permiso of request.session.permisos) {
        if (permiso.descripcion_privilegios == 'usar_ruta_auth') {
            puedeEntrar = true;
            break;
        }
    }

    if (puedeEntrar) {
        next(); 
    } else {
        request.session.error = "No tienes permiso de administrador";
        return response.redirect('/'); 
    }
};