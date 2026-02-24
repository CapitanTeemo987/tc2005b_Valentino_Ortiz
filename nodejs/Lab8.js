const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];
for(let num of arreglo){
    console.log(num)
}
function promedio(arreglo){
    let suma = 0; 
    const tamaño = arreglo.length;
    for(i = 0; i < tamaño; i++){
        suma += arreglo[i];
    }
    return suma/tamaño;
}
console.log("El promedio es: " + promedio(arreglo));


const fs = require('fs');

const text = "Hola, esoty haciendo el laboratorio 6"
function archivo(nombre, texto){
    fs.writeFileSync(nombre, texto);
}
archivo("lab8.txt", text);

const textoLaboratorio = "Instala Node.js. Node.js es un ambiente de ejecución de JavaScript, el cual, a diferencia de js que se ejecuta en el navegador, permite tener acceso al sistema de archivos de la computadora, y ejecutar programas como servidores web.";

function analizarFrecuencia(texto) {
    const limpio = texto.toLowerCase().replace(/[.,!¡]/g, "");
    
    const palabras = limpio.split(/\s+/);
    console.log(palabras);

    const contador = {};

    for (const palabra of palabras) {
        contador[palabra] = (contador[palabra] || 0) + 1;
    }

    return contador; 
}

const resultado = analizarFrecuencia(textoLaboratorio);

console.log("Resultado del analisis");
console.table(resultado);

const htmlHead = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 1 - Valentino</title>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    </head>`

const htmlLab = `
    <body>
        <header class="font-sans text-center">
            <h1 class="text-3xl font-bold">Este es el Laboratorio 1</h1>
            <h4 class="text-gray-600">Manuel Valentino Ortiz Sánchez - A01712296 - A01712296@tec.mx</h4>
        </header>
        <hr class="my-4">
        <main class="font-sans max-w-4xl mx-auto">
            <a class="block mx-auto w-fit text-[#be12b6] font-bold hover:text-gray-500 hover:text-lg" href="https://www.w3schools.com/html/html_basic.asp" target="_blank"> Esto es un enlace</a>
            <br>
            <img id="imagenPresentacion" class="cursor-pointer mx-auto border-black rounded-lg my-[10px]" src="https://preview.redd.it/old-league-of-legends-art-as-posters-v0-0iw2kxwp1fee1.jpg?width=1080&crop=smart&auto=webp&s=076db3427c43651c6367ebfee566cb1b734a4734" alt="imagen de lol" height="420" width="640">
            <p>Una de mis principales aficiones es jugar League of Legends, actualmente llevo jugando 6 años, me gusta que el juego dependa mucho de estrategias y no solo de habilidad, se necesita mucha comunicación en equipo para lograr ganar</p>
            <hr class="my-4">
            <h2 class="text-xl text-center text-[#703d56]">Preguntas HTML</h2>
            <dl>
                <dt>¿Cuál es la diferencia entre Internet y la World Wide Web?</dt>
                <dd>- Internet es la infraestructura, y la World Wide Web es un servicio que corre en internet</dd><br>
                <dt>¿Cuáles son las partes de un URL?</dt>
                <dd>- Protocolo: "HTTPS://"</dd>
                <dd>- Dominio: "google.com"</dd>
                <dd>- Path: "search"</dd>
                <dd>- Parametros</dd><br>
                <dt>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</dt>
                <dd>- GET solicita datos de un recurso específico</dd>
                <dd>- HEAD igual que GET, pero solo pide los encabezados</dd>
                <dd>- POST envía datos para que el servidor los procese</dd>
                <dd>- PUT reemplaza un recurso existente por completo con los nuevos datos</dd>
                <dd>- PATCH modifica parte de un recurso</dd>
                <dd>- DELETE elimina el recurso especificado</dd><br>
                <dt>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</dt>   
                <dd>- Método POST, ya que este nos sirve para enviar datos al servidor</dd><br>
                <dt>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</dt>
                <dd>- El método GET</dd><br>
                <dt>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</dt>
                <dd>Significa que todo salio bien</dd><br>
                <dt>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</dt>
                <dd>- Sí, ya que si se encuentra en esa situación significa que el desarrollador borró o cambió algun archivo</dd><br>
                <dt>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</dt>
                <dd>- Sí, ya que es un error interno del servidor, osea que algo del backend falló</dd><br>
                <dt>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</dt>
                <dd>- Significa que el atributo aun funciona pero en el futuro tal vez ya no. Ejemplos de HTML4 son center o font</dd><br>
                <dt>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</dt>
                <dd>- En HTML5 se introdujeron nuevas etiquetas como header o footer y soporte para audio y video nativo</dd><br>
                <dt>¿Qué componentes de estructura y estilo tiene una tabla?</dt>
                <dd>- Estructura: table, thead, tbofy, tfoot</dd>
                <dd>- Estilo: padding, cellspacing, border-collapse</dd><br>
                <dt>¿Cuáles son los principales controles de una forma HTML5?</dt>
                <dd>- input de tipo text, email, password, color</dd><br>
                <dt>¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo: http://html5test.com/ (Al responder la pregunta recuerda poner el navegador que utilizas)</dt>
                <dd>- Uso Brave, y tiene 519 puntos de 555, lo cual es considerado que tiene buen soporte</dd><br>
                <dt>Sobre el ciclo de vida y desarrollo de los sistemas de información: ¿Cuál es el ciclo de vida de los sistemas de información? ¿Cuál es el ciclo de desarrollo de sistemas de información?</dt>
                <dd>- Ciclo de vida de los sistemas de información: planificación, analisis, diseño, implementacion, pruebas, despliege y mantenimiento </dd>
                <dd>- Ciclo de desarrollo de sistemas de información: requerimientos, diseño, codificación, pruebas y despliege </dd><br>
            </dl>
            <h2 class="text-xl text-center text-[#703d56]">Preguntas CSS</h2>
            <dl>
                <dt>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS? </dt>
                <dd>- Mi recomendación es tratar de no usarlo, ya que en un futuro cuando se hagan mas implementaciones en el código puede llegar a generar problemas</dd><br>
                <dt>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</dt>
                <dd>- Puede estorbar la vista para la información relevante, si es una imagen pesada puede afectar el rendimiento de la pagina y problemas de compatibilidad entre distintos dispositivos</dd><br>
                <dt>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</dt>
                <dd>- El % lo usaría para controlar lo visual para distintos dispositivos, el px para cosas que no quiero que cambien y el pt por lo investigado no es recomendable usarlos</dd><br>
                <dt>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</dt>
                <dd>- Porque se eliminan espacios, comentarios y salto de linea, por lo que el archivo se vuelve mas pequeño y consume menos ancho de banda</dd>
            </dl>  
            <h2 class="text-xl text-center text-[#703d56]">Preguntas JavaScript</h2>
            <dl>
                <dt>¿Qué diferencias y semejanzas hay entre Java y JavaScript?</dt>
                <dd><strong>Semejanzas:</strong></dd>
                <dd>- Ambos usan llaves y puntos y coma, permiten crear objeto, cuentan con una gran variedad de librerías</dd>
                <dd><strong>Diferencias:</strong></dd>
                <dd>- Java es un lenguaje tipado, mientras que JavaScript es dinámico; mientras que java tiene un uso más robusto para crear aplicaciones o sistemas, JavaScript se usa para darle interactividad a paginas web</dd><br>
                <dt>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)</dt>
                <dd>- getDate(), getFullYear(), getMonth(), getTime(), toISOString()</dd><br>
                <dt>¿Qué métodos tienen los arreglos? (Menciona al menos 5*)</dt>
                <dd>- push(), pop(), map(), filter(), forEach()</dd><br>
                <dt>¿Cómo se declara una variable con alcance local dentro de una función?</dt>
                <dd>- Se usa la palabra "let"</dd><br>
                <dt>¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</dt>
                <dd>- Una funcion puede cambiar el valor de la variable, se puede confundir si se intenta usa con otra funcion que no sea la establecida, si la variable cambia, es dificil saber que funcion fue la que la cambio</dd>
            </dl>
            <h2 class="text-xl text-center text-[#703d56]">Preguntas Lab 6</h2>
            <dl>
                <dt>¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</dt>
                <dd>- Porque evita enviar peticiones innecesarias al servidor, si los datos estan mal, JavaScript detiene el envío</dd><br>
                <dt>¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?</dt>
                <dd>- Desactivando JavaScript desde el navegador, modificando las variables desde la consola</dd><br>
                <dt>Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</dt>
                <dd>- Porque la validación de JavaScript es simplemente para el usuario, la validacion del servidor es para la seguridad</dd>
            </dl>
          
            <div id="js-document-write-output" class="font-sans max-w-4xl mx-auto"></div>

            <section id="seccion-pruebas" class="font-sans max-w-4xl mx-auto">
                <h2 class="text-xl text-center text-[#703d56]">Resultados de Funciones</h2>
                <div id="output-pruebas"></div>
            </section>
            <hr class="my-4">
        </main>
        <hr class="my-4">
        <footer class="font-sans">
            <h2 class="text-xl text-center text-[#703d56]">Referencias</h2>
            <p>freeCodeCamp. (2022, 26 enero). HTTP Request Methods  Get vs Put vs Post Explained with Code Examples. freeCodeCamp.org. https://www.freecodecamp.org/news/http-request-methods-explained/</p>
            <p>W3Schools.com. (s.f.). https://www.w3schools.com/html/</p>
            <p>Guerrero, A. C., & Guerrero, A. C. (2015, 20 julio). Ciclo de vida de un sistema de información. Gestiopolis. https://www.gestiopolis.com/ciclo-de-vida-de-un-sistema-de-informacion/</p>
            <p>W3Schools.com. (s.f.-b). https://www.w3schools.com/html/html_tables.asp</p>
            <p>Gemini. (2026). Asistente de Inteligencia Artificial de Google. Basado en el modelo Gemini 3 Flash.</p>
            <p>Installing with Vite - Installation. (s. f.). Tailwind CSS. https://tailwindcss.com/docs/installation/using-vite</p>
            <h2 class="text-xl text-center text-[#703d56]">Editor utilizado</h2>
            <a class="text-[#be12b6] font-bold hover:text-gray-500 hover:text-lg" href="https://code.visualstudio.com/" target="_blank">Visual studio code</a>
        </footer>
        <hr class="my-4">
        <script src="JS.js"></script>
    </body>
</html>`;

const htmlValidador = `
            <section id="seccion-validador" class="font-sans max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h2 id="titulo-validador" class="text-xl text-center text-[#703d56] font-bold mb-4">Validador de contraseña</h2>
                
                <div class="max-w-xs mx-auto space-y-4">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700">Nueva Contraseña</label>
                        <input type="password" id="pass1" class="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-[#be12b6] outline-none">
                        <p id="ayuda-dinamica" class="text-[10px] text-blue-600 font-medium mt-1 h-4 transition-opacity duration-300 opacity-0"></p>
                        <p id="fuerza-texto" class="text-xs mt-1 text-gray-500 italic text-right">Fuerza: Muy débil</p>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-gray-700">Confirmar Contraseña</label>
                        <input type="password" id="pass2" class="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-[#be12b6] outline-none">
                    </div>

                    <p id="mensaje-coincidencia" class="text-sm font-bold text-center h-5"></p>

                    <button id="btn-validar" class="w-full bg-[#703d56] text-white py-2 rounded font-bold hover:bg-[#be12b6] transition">
                        Validar Seguridad
                    </button>
                </div>
            </section>`

const http = require('http')

const server = http.createServer((request, response) => {
    console.log(request);
    console.log(request.url);
    console.log(response);
    response.setHeader('Content-Type', 'text/html');
    if (request.url === "/") {
        response.write("<h1>Bienvenido a mi servidor de Node</h1><p>Ve a /lab para ver el laboratorio.</p>");
    } else if (request.url === "/lab") {
        response.write(htmlHead + htmlLab); 
    } else if (request.url === "/validador"){
        response.write(htmlHead + htmlValidador);
    }else {
        response.statusCode = 404;
        response.write("<h1>404: Not Found</h1><p>Esta pagina no existe.</p>");
    }
    response.end();

}) 

server.listen(3000)