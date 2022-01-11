//Declarativas
function miFuncion(){
    return 3;
}
miFuncion();

//Expresivas
var miFuncion = function(a,b){
    return a + b;
}

miFuncion();

/*En este caso llamo a la variable, y le pongo
parentesis como si fuera una funcion*/

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Diego");

//Devuelve un mensaje diciendo hola Diego

function sumar(a,b) {
    return a + b;
}

sumar(1,2);
//Duelve la suma de 1 + 2, que es 36 