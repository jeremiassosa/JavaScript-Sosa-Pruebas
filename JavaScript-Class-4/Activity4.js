//Parte A — El while que para cuando adivina

const numeroSecreto = 42;
const intentos = [3, 9, 1, 50, 5, 42, 2, 31]; 
let i = 0;
let acertaste = false;
let lejania = "";

// while (acertaste == false){
//Programa hecho con while para la consigna


//     if (numeroSecreto == intentos[i]){
//         console.log(`Intento ${i+1}: ${intentos[i]} → Adivinaste en ${i} intentos!`);
//         acertaste = true;
//     }
//     else{  
//            if (intentos[i] > numeroSecreto){
//               lejania = "alto";
//             } else {
//               lejania = "bajo";
//             }
//         console.log(`Intento ${i+1}: ${intentos[i]} → demasiado ${lejania}`);
//         i++;
//     }   
     
// }


//Programa usando for que termina cuando el numero no esta dentro del panorama
//lo comento el programa con "command + k + c"

for (const basta of intentos){
    if (numeroSecreto == intentos[i]){
        console.log(`Intento ${i+1}: ${intentos[i]} → ¡Adivinaste en ${i} intentos!`);
        acertaste = true;
    } else {  
           if (intentos[i] > numeroSecreto){
              lejania = "alto";
            } else {
              lejania = "bajo";
            }
        console.log(`Intento ${i+1}: ${intentos[i]} → demasiado ${lejania}`);
        i++;
    }
}