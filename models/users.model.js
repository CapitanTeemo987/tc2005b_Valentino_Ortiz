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
                "INSERT INTO usuario(username, nombre, password) VALUES (?, ?, ?)" ,
                [this.username, this.nombre, password_cifrado]
            ).then(() => {
                return db.execute("INSERT INTO tiene(id_usuario, id_rol) VALUES (?, ?)",
                [this.username, 3]
            );
            });
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
        `SELECT p.descripcion_privilegios 
         FROM usuario u, tiene t, roles r, posee po, privilegios p
         WHERE u.username = t.id_usuario 
         AND t.id_rol = r.id_rol 
         AND r.id_rol = po.id_rol 
         AND po.id_privilegio = p.id_privilegios 
         AND u.username = ?`, 
        [username]
    );
}
}