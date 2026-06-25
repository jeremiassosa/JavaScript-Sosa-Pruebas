//Parte A — destructuring simple

const jugador = {
  nombre: "Haaland",
  pais: "Noruega",
  goles: 12,
};

const {nombre, goles} = jugador;
console.log(nombre, goles);