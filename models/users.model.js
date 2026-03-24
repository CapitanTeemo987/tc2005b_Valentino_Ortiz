const db = require('../util/database');
const bcrypt = require('bcrypt');

module.exports = class User {

    constructor(mi_username, mi_nombre, mi_password) {
        this.username = mi_username;
        this.nombre = mi_nombre;
        this.password = mi_password;
    }

    save() {
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(
               "CALL registrarUsuarioConRol(?, ?, ?, ?)", 
                [this.username, this.nombre, password_cifrado, 3]
            );
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }
    
    static fetchOne(username) {
        return db.execute("SELECT * FROM usuario WHERE username = ?", [username]);
    }

    static getPrivilegios(username) {
    return db.execute(
        "CALL obtenerPrivilegiosUsuario(?)",
        [username]
    );
}
}