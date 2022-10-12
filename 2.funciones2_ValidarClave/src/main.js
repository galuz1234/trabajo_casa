let NombreI = "Lucia";
let ApellidoI = "Penagos";
let UsuarioI = prompt("Digite su usuario, recuerde que no debe ser igual al nombre o apellido");
let ClaveI = "123";
let ClaveC = prompt("Repita su contraseña");
let proceso = comparar (NombreI,ApellidoI,UsuarioI,ClaveI,ClaveC);

function comparar (Nom,Ape,Usu,Cla,ClaC){
    if (Usu===Nom) {

        prompt("El usuario no puede ser igual al nombre");

    } else if (Usu===Ape) {

        prompt("El usuario no puede ser igual al apellido");

    } else if (Usu===Cla) {

        prompt("El usuario no puede ser igual a la clave");

    }

    else

        ClaC = prompt("Usuario correcto, digite nuevamente la clave");

        if (Cla==ClaC) {
            alert("Clave correcta, acceso concedido");
        } else {
            alert("Contraseña errada");
        }
      
        
}
