//Parte A — Con for e índices

const selecciones = ["Argentina", "Francia", "Brasil", "Alemania", "España"];

for (let i = 1; i < 6 ; i++){
    console.log(`${i}. ${selecciones[i-1]}`);
}

//Parte B — Con for...of

const selecciones = ["Argentina", "Francia", "Brasil", "Alemania", "España"];
let i = 1;
for (const seleccion of selecciones){
    console.log(`${i}. ${seleccion}`);
    i = i + 1;
}

