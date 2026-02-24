const express = require('express');
const app = express(); //constructor, crean el servidor web

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/new', (request, response, next) => {
    response.send('Aquí se ba a crear un nuevo personaje')
})

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);
                        