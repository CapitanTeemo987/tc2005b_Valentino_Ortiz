const express = require("express");
const router = express.Router();
const fs = require("fs")

const htmlHead = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 1 - Valentino</title>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    </head>`
;


const htmlValidador = `
        <section id="seccion-validador" class="font-sans max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 id="titulo-validador" class="text-xl text-center text-[#703d56] font-bold mb-4">Contraseña</h2>
            
            <form action="/auth/password" method="POST" class="max-w-xs mx-auto space-y-4">
                <div>
                    <label class="block text-sm font-semibold text-gray-700">Nueva Contraseña</label>
                    <input type="password" id="pass1" name="pass1" class="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-[#be12b6] outline-none">
                </div>
                <button type="submit" id="btn-validar" class="w-full bg-[#703d56] text-white py-2 rounded font-bold hover:bg-[#be12b6] transition">
                    Enviar y guardar
                </button>
            </form>
        </section>`
;

const htmlFooter = `
    </body>
</html>
`
;

router.get('/password', (request, response) => {
    response.send(htmlHead + htmlValidador + htmlFooter)
});

router.post('/password', (request, response) => {
    const password = request.body.pass1;
    fs.appendFileSync('contraseña.txt', `Password recibida: ${password}\n`);
    response.send("<h1>Password guardada correctamente</h1><a href='/auth/password'>Regresar</a>");
});

router.get('/status', (request, response) => {
    response.send("<h1>Servidor en línea</h1><p>Módulo de formularios activo.</p>");
});

module.exports = router;