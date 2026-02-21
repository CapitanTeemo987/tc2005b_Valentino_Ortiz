const container = document.getElementById("js-document-write-output");
let tableHtml = '<br><h2 class="text-xl text-center text-[#703d56]">JavaScript</h2>';

const num = prompt("Ingresa un número para generar la tabla de cuadrados y cubos:");
tableHtml += "<h4>Ejercicio 1: Tabla de potencias</h4>";
tableHtml += "<table border='1' class=' mx-auto mb-4'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";

for (let i = 1; i <= num; i++) {
    tableHtml += `<tr><td>${i}</td><td>${i ** 2}</td><td>${i ** 3}</td></tr>`;
}
tableHtml += "</table>";
container.innerHTML = tableHtml;

const n1 = Math.floor(Math.random() * 100);
const n2 = Math.floor(Math.random() * 100);
const inicio = Date.now();

const respuesta = parseInt(prompt(`Ejercicio 2: ¿Cuánto es ${n1} + ${n2}?`));
const fin = Date.now();
const tiempo = (fin - inicio) / 1000;
if (respuesta === (n1 + n2)) {
    alert(`Correcto, tardaste ${tiempo} segundos`);
} else {
    alert(`Incorrecto, la respuesta era ${n1 + n2}. Tardaste ${tiempo} segundos`);
}

function contador(arreglo) {
    let negativos = 0;
    let ceros = 0; 
    let positivos = 0;
    for(let num of arreglo){
        if (num < 0) negativos++;
        else if(num == 0) ceros++;
        else positivos++;
    }
    return {negativos, ceros, positivos};
}

function promedios(matriz) {
    let resultados = []; 
    for (let i = 0; i < matriz.length; i++) {
        let filaActual = matriz[i];
        let sumaFila = 0;
        for (let j = 0; j < filaActual.length; j++) {
            sumaFila += filaActual[j];
        }
        let promedio = sumaFila / filaActual.length;
        resultados.push(promedio);
    }

    return resultados; 
}

function inverso(numero){
    let numeroPrueba = numero; 
    let nuevo = 0; 
    while(numeroPrueba > 0){
        nuevo = (nuevo*10)+(numeroPrueba%10);
        numeroPrueba = Math.floor(numeroPrueba/10);
    }
    return nuevo < 0 ? -nuevo :nuevo;
}

class Campeon {
    constructor(nombre, rol, dpsBase) {
        this.nombre = nombre;
        this.rol = rol;
        this.dpsBase = dpsBase;
    }
    calcularDaño(itemsCount) {
        return this.dpsBase + (itemsCount * 15);
    }
    obtenerInfo() {
        return `El campeón ${this.nombre} es un ${this.rol} con daño base de ${this.dpsBase}.`;
    }
}

function ejecutarPruebas() {
    console.log("Pruebas");
    const output = document.getElementById("output-pruebas");
    let htmlContent = "";

    const arrayTest = [-2, 0, 5, 10, 0, -8]; 
    const res3 = contador(arrayTest);
    
    console.assert(res3.negativos === 2, "Error Ej 3: Negativos incorrectos");
    console.assert(res3.ceros === 2, "Error Ej 3: Ceros incorrectos");
    console.assert(res3.positivos === 2, "Error Ej 3: Positivos incorrectos");
    
    htmlContent += `<p><strong>Ej 3:</strong> Negativos: ${res3.negativos}, Ceros: ${res3.ceros}, Positivos: ${res3.positivos}</p>`;

    const matrizTest = [[10, 8, 9], [10, 10], [0, 6]];
    const res4 = promedios(matrizTest);
    
    console.assert(res4[0] === 9, "Error Ej 4: Promedio fila 0 incorrecto");
    console.assert(res4[1] === 10, "Error Ej 4: Promedio fila 1 incorrecto");
    console.assert(res4[2] === 3, "Error Ej 4: Promedio fila 2 incorrecto");
    
    htmlContent += `<p><strong>Ej 4:</strong> Resultados: [${res4.join(", ")}]</p>`;

    const res5 = inverso(1234);
    console.assert(res5 === 4321, "Error Ej 5: Inverso de 1234 incorrecto");
    
    htmlContent += `<p><strong>Ej 5:</strong> El inverso de 1234 es ${res5}</p>`;

    const miCampeon = new Campeon("Jhin", "Tirador", 100);
    const daño = miCampeon.calcularDaño(4); 
    
    console.assert(miCampeon.nombre === "Jhin", "Error Ej 6: Nombre incorrecto");
    console.assert(daño === 160, "Error Ej 6: Cálculo de daño incorrecto");
    
    htmlContent += `<h4>Ej 6: Objeto Personalizado</h4>`;
    htmlContent += `<p>${miCampeon.obtenerInfo()}</p>`;
    htmlContent += `<p>Daño total con 4 ítems: <strong>${daño}</strong></p>`;

    output.innerHTML = htmlContent;
    console.log("Pruebas finalizadas");
}

ejecutarPruebas();

const p1 = document.getElementById('pass1');
const p2 = document.getElementById('pass2');
const textoFuerza = document.getElementById('fuerza-texto');
const mensaje = document.getElementById('mensaje-coincidencia');

p1.oninput = () => {
    let v = p1.value;
    let f = 0;

    if (v.length >= 8) f += 25;           
    if (/[A-Z]/.test(v)) f += 25;         
    if (/[0-9]/.test(v)) f += 25;         
    if (/[^A-Za-z0-9]/.test(v)) f += 25;  

    if (f <= 25) {
        textoFuerza.innerText = "Fuerza: Débil";
        textoFuerza.className = "text-xs mt-1 text-red-500 italic text-right";
    } else if (f <= 75) {
        textoFuerza.innerText = "Fuerza: Media";
        textoFuerza.className = "text-xs mt-1 text-yellow-600 italic text-right";
    } else {
        textoFuerza.innerText = "Fuerza: Segura";
        textoFuerza.className = "text-xs mt-1 text-green-600 italic text-right";
    }
    revisarIguales();
};

function revisarIguales() {
    if (p1.value === p2.value && p1.value !== "") {
        mensaje.innerText = "Coinciden";
        mensaje.className = "text-sm font-bold text-center text-green-600";
    } else if (p2.value !== "") {
        mensaje.innerText = "No coinciden";
        mensaje.className = "text-sm font-bold text-center text-red-600";
    } else {
        mensaje.innerText = "";
    }
}

p2.oninput = revisarIguales;

document.getElementById('btn-validar').onclick = () => {
    if (p1.value === p2.value && p1.value.length >= 8) {
        alert("Password validado correctamente.");
    } else {
        alert("Por favor, verifica que las contraseñas coincidan y tengan al menos 8 caracteres.");
    }
};

const titulo = document.getElementById('titulo-validador');

titulo.onmouseenter = () => {
    titulo.style.color = "#be12b6";      
    titulo.style.letterSpacing = "4px";  
    titulo.style.transform = "scale(1.1)"; 
    titulo.style.fontStyle = "italic";   
};

titulo.onmouseleave = () => {
    titulo.style.color = "#703d56";      
    titulo.style.letterSpacing = "normal";
    titulo.style.transform = "scale(1)";
    titulo.style.fontStyle = "normal";
};

const imagenLoL = document.getElementById('imagenPresentacion');

imagenLoL.onclick = () => {
    if (imagenLoL.width === 640) {
        imagenLoL.style.width = "800px";
        imagenLoL.style.border = "5px solid #be12b6"; 
    } else {
        imagenLoL.style.width = "640px";
        imagenLoL.style.border = "none";
    }
};

const campoPass = document.getElementById('pass1');
const ayudaTexto = document.getElementById('ayuda-dinamica');

const consejos = [
    "Tip: Usa una combinación de letras y símbolos.",
    "Dato: Las contraseñas largas son más difíciles de hackear.",
    "Recuerda: No uses fechas de nacimiento.",
    "Tip: ¡Mezclar mayúsculas ayuda mucho!",
    "Seguridad: Evita usar la misma clave en varios sitios."
];

campoPass.onfocus = () => {
    const indiceAleatorio = Math.floor(Math.random() * consejos.length);
    ayudaTexto.innerText = consejos[indiceAleatorio];
    ayudaTexto.style.opacity = "1"; 
};

campoPass.onblur = () => {
    ayudaTexto.style.opacity = "0"; 
};

console.log(Math.random());