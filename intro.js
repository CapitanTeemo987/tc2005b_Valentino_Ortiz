//Consola de js
console.log("Hola mundo!")
console.info("Creado en el 2009")
console.warn("Es adictivo")
console.error("Los tanques no deben ir atrás")
console.assert(1==true)

//Variables
//Antiguas tienen mayor alcance por lo que no se recomienda
var personaje_1 = "Gwen"

//Nuevas la variable solo vive dentro del ámbito donde es declarada
let personaje_2 = "Mordekaiser"

//Constantes
const precio_skin = 300

//Alcance de las variables
{
    var personaje_3 = "Jax"
    let personaje_4 = "Garen"
}

console.log(personaje_3)
//La siguiente linea genera un error porque personaje_4 murio hace 3 linea 
//console.log(personaje_4)

//Alert, prompt, confirm
alert("No jueges esto porfavor")

const personaje_favorito = prompt("¿Cuál es tu personaje favorito")
console.info("Personaje favorito " + personaje_favorito) 

const hoy_hay_juego = confirm("Hay juegito?")
if(hoy_hay_juego){
    descargar();
}else{
    console.info("Buen día")
}

//funciones tradicionales
function descargar() {
    window.location.href = "https://www.leagueoflegends.com/es-mx/"
}

//funciones modernas
() => {}

document.getElementById("boton_desinstalar").onclick = () => {
    alert("jojojo no se puede desinstalar")
}

const inicial_partida = () => {
    alert("Iniciar partida")
}

//arreglos 

const personajes = ["Fizz"]

const arreglo2 = new Array();
personajes.push = "Irelia"
personajes[10] = "Leona"
personajes["Hola"] = "Lux"

for(let per in personajes){
    console.log(per)
}

//Objetos

const eco_de_Luden = {
    nombre: "Eco de Luden",
    color: "morado",
    daño: 100
}