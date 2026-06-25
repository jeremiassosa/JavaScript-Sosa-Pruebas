//Parte C — valor por defecto

const jugador = {
  nombre: "Haaland",
  pais: "Noruega",
  goles: 12,
};
const { camiseta = 9 } = jugador;

console.log(camiseta);

