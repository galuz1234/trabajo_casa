/* const expresion = 18;

switch (Number.isInteger(expresion)){
    case expresion === 18 :
        document.write("El usuario tiene 18");
        break;
    
    case expresion > 18 :
        document.write("El usuario es mayor de edad");
        break;

    case expresion < 18 :
        document.write("El usuario es menor de edad");
        break;

    default :
    document.write("No es un numero");
    break;
}

hacer una lista de mercado mostrando el precio del producto */
/* 












Pregunta Profe: Porque me sale error con el console.log y si lo cambio a alert si ejecuta sin problema?

let producto = console.log("Digite el nombre del producto");


switch (producto) {
    case "zanahoria" :
        console.log("La zanahora cuesta $500");
        break;
    
    case "papa" :
        console.log("La papa cuesta $600");
        break;
    
    case "carne" :
        console.log("La carne cuesta $1000");
        break;

    case "tomate" :
        console.log("El tomate cuesta $400");
        break;

    case "frijol" :
        console.log("El frijol cuesta $700");
        break; */
    
    /* default :
        console.log("Producto no existe"); */

    


    let producto = prompt("Digite el nombre del producto");


    switch (producto) {

    case "zanahoria" :
        alert("La zanahora cuesta $500");
        break;
    
    case "papa" :
        alert("La papa cuesta $600");
        break;
    
    case "carne" :
        alert("La carne cuesta $1000");
        break;

    case "tomate" :
        alert("El tomate cuesta $400");
        break;

    case "frijol" :
        alert("El frijol cuesta $700");
        break;
    
    default :
        alert("Producto no existe");
}


