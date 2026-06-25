

const jugadores = [
  { nombre: "Messi",    goles: 8,  pais: "Argentina" },
  { nombre: "Mbappé",   goles: 5,  pais: "Francia"   },
  { nombre: "Haaland",  goles: 12, pais: "Noruega"   },
  { nombre: "Benzema",  goles: 0,  pais: "Francia"   },
  { nombre: "Lewandowski", goles: 3, pais: "Polonia" },
  { nombre: "Kane",     goles: 2,  pais: "Inglaterra"},
  { nombre: "Neymar",   goles: 1,  pais: "Brasil"    },
  { nombre: "Müller",   goles: 0,  pais: "Alemania"  },
];

//Parte A — filter

// const goleadores = jugadores.filter(j => j.goles > 2);
// console.log(goleadores);

// los jugadores que se muestras son [Messi: 8 goles, Mbappe: 5 goles, Haaland: 12, Lewandowski: 3 goles]
// 4 jugadores los cuales metieron mas de 2 goles cada uno, y los demas como [Benzema, Kayne, Neymar, Muller]
// los cuales convirtieron menos de 2 tantos.

//Parte B — map

// const nombres = jugadores.map(j => j.nombre)
// console.log(nombres);

// Dice los nombres de todos los jugadores


//Parte C — filter + map combinados

const goleadores = jugadores.filter(j => j.goles > 2);
const nombres = goleadores.map(j => j.nombre)
console.log(nombres);

// hago un .map de los goleadores
