//Variables con hoisting
console.log(miNombre);
var miNombre = "Lechuga";

//---------------------------------------------
//Genera esta ejecucion en runtime
var miNombre = undefined;
console.log(miNombre + " Aca se hace el hoisting");
miNombre = "Lechuga";

//Funciones con hoisting
hey();

function hey() {
    console.log("Hola " + miNombre);
}

var miNombre = "Lechuga";

/*En el caso de las funciones, aunque esten
declaradas luego de su llamado funcionan igual.
Mientras que en el caso de las variables,
va a quedar una variable undefined. Ya que 
el motor creara una variable sin definir
para poder usar el codigo. */

/*Como buena practica, las varibles y funciones
deben ser declaradas antes de ser utilizadas. 
Para evitar problemas de hoisting */