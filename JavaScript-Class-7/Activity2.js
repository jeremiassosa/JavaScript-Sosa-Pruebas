//Activity 2

//Parte A — reproducí el bug

const original = { nombre: "Mbappé", goles: 5 };
const copia = original;

copia.goles = 99;

console.log(original.goles);
console.log(copia.goles);

// En ambos casos dio 99 goles ya que el "copia.goles = 99" esta modificando directamente al 
// array, por que usan el mismo y si se llega a modoficar en alguno se modifican en los 2


