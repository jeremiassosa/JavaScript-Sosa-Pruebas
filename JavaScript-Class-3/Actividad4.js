//Actividad 4

//----------------------------------------
// Parte A — Predecir antes de ejecutar
//----------------------------------------

console.log(0 == false)             //rta:true
console.log(0 === false)            //rta:false
console.log("" == false)            //rta:true
console.log(null == undefined)      //rta:true
console.log(null === undefined)     //rta:false
console.log("5" == 5)               //rta:flase
console.log("5" === 5)              //rta:true


//----------------------------------------
// Parte B — ¿Cuándo usarías ==?
//----------------------------------------

//No pero en muy algunas situaciones siento que puede ser 
//util para comparar string con algun numero


//----------------------------------------
// Parte C — Arreglar código roto
//----------------------------------------

//Fragmento 1
// El usuario escribe su nombre en un formulario
let nombreUsuario = "               "; // espacios en blanco

nombreUsuario = nombreUsuario.trim();

if (nombreUsuario === "") {

  console.log("El nombre no puede estar vacío");

} else {

  console.log("Bienvenido, " + nombreUsuario);

}

//Fragmento 2
// Una función que busca un jugador en una lista
// Si no lo encuentra, devuelve null
const jugador = null;
if (jugador === null) {
  console.log("Jugador no encontrado");
}

//Fragmento 3.   
// El usuario ingresó su edad en un input HTML (siempre llega como string)
const edadTexto = "17";
const edadMinima = 16;
const edad = number(edadTexto);
if (edadTexto === edadMinima) {
  console.log("Edad válida");
} else {
  console.log("Muy joven");
}