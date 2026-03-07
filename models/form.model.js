const db = require('../util/database')
const passwordsRecibidas = [];

module.exports = class form {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nueva_password) {
        this.password = nueva_password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO passwords (valor) VALUES (?)', 
            [this.password]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM passwords ORDER BY fecha DESC');   
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM passwords WHERE id = ?', [id]);
    }
}