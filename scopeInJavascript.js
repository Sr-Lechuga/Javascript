var miNombre = "Diego"; //Global

function nombre(){
    var miApellido = "De Granda"; //Local
    console.log(miNombre + " " + miApellido);
}

nombre();//Tiene acceso al local y al global

miNombre;// Tiene acceso al global

miApellido; //No tiene acceso desde lo global al local de la funcion
