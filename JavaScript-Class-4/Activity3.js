//Activity 3

let penal = 0;
let gol = 0;
let golaso = 0;


for (let i = 1; i < 31 ; i++){
    if (gol == i % 3){
        if(golaso == i % 5){
            console.log("Golaso")
        }
        console.log("Gol");
    }
    else if (penal == i % 5){
        console.log("Penal");
    }
    else{
        console.log(i);
    }
}
