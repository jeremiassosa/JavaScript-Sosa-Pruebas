//Parte A - La Trampa

// const edades = [9, 15, 11, 8, 21, 17, 100];
// console.log(edades.sort());

// El resultado que deberia dar es de menos a mayor pero basandose en los primeros 
// numeros que vea el el sort, ya que esto lo toma como string y no como numero
// el codigo ya lo corrimos durante la clase [100, 11, 15, 17, 21, 8, 9]


//Parte B — arreglalo

const edades = [9, 15, 11, 8, 21, 17, 100];
console.log(edades.sort((a, b) => a - b));

// Resultado = [8, 9, 11, 15, 17, 21, 100] 
