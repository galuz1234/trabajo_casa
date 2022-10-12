const UsuarioG = prompt("Ingrese un usuario para crear");
var UsuarioC = prompt("Repita el usuario");
var menu=("");

/* aqui inicio con el condicional if a validar si los datos ingresados para el usuario son correctos */
if (UsuarioC==UsuarioG){

    alert("Usuario creado satisfactoriamente");
    
        var ClaveG =prompt("Ingrese su contraseña");/*   aqui se valida si la contraseña se creo correctamente */

        var ClaveC = prompt("Repita la contraseña");

    } if ( ClaveC==ClaveG){

        alert("Contraseña creada correctamente");

        menu = parseInt(prompt("digite el nro. que va a seleccionar: 1. crear usuario; 2. cambiar contraseña; 3. asignar nombre usuario"));

        /* profe pregunta: aqui no me esta entrando al ciclo switch porque no lee el menu */
        
        switch (menu){

            case '1' :
                    const UsuarioN = prompt("Ingrese un usuario para crear");
                    if (UsuarioN==UsuarioC){
                        alert("Usuario ya existe");

                    } else {
                        alert("Usuario Creado");
                    }
            break;

            case '2' :
                    const ClaveN = prompt("Digite la nueva contraseña");

                    if (ClaveN==ClaveC){
                        alert("Contraseña ya existe");

                                        
                    } else if (ClaveN!=ClaveC){
                        const ClaveN = prompt("Digite la nueva contraseña");
                        const ClaveG = prompt("Repita la contraseña");

                            if (ClaveG==ClaveN){

                                alert("Contraseña cambiada con exito");

                            } else {
                                alert("la contraseña no coindice");
                            }
                            
                    }
            break;

            case '3' :

                    UsuarioG = prompt("Digite el usuario al que le va acambiar el nombre");
                    UsuarioN = prompt("Digite el nombre que le va a asignar al usuario " + UsuarioG);

                    if (UsuarioN=UsuarioG){

                        alert("Digito el mismo usuario, debe cambiarlo");

                    } else {
                        
                        UsuarioC = promopt("Repita el nombre que le va a asignar al usuario");
                            if (UsuarioC==UsuarioN){

                                alert("Nombre asignado con exito");

                            } else {
                                alert("El nombre no coincide");
                            }
                    }



        }


        } else {
            alert ("Usuario Errado");
        }
    





