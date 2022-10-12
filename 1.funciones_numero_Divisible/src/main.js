console.log("Este es un ejercicio para saber si un numero es divisible por si mismo");

let Num = parseInt(prompt(console.log("Digite el numero")));
let proceso = divisible(Num);

/* console.log("el numero digitado es " + Num); */

function divisible (a){
    if (a/a === 1){
       console.log("El número " + a + " que digitaste es divisible por si mismo");        

        }else if (a === 0){
            console.log("El numero cero (0) no es un numero valido");
        }
        else
    console.log("No digitaste ningun numero");
}

