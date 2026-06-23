//Actividad 2

//----------------------------------------
// Parte B — Arreglarlo con let
//----------------------------------------

for (let i = 0; i < 3; i++) {
  console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i);
//y el let tira error al no declararlo

//----------------------------------------
// Parte A — El bucle roto
//----------------------------------------

for (var i = 0; i < 3; i++) {
  console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i);
//el cucle que deberia estar roto a mi me funciona bien ...

//----------------------------------------
// Parte C — const para lo que no cambia
//----------------------------------------

const saludo = "Hola";
const nombre = "Valentina";
let intentos = 0;

intentos = intentos + 1;
intentos = intentos + 1;

console.log(saludo + ", " + nombre + ". Intentos: " + intentos);
