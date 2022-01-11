//Coerciones implicitas
/*Ocurren automaticamente para que el codigo
"tenga sentido" y pueda ser ejecutado, por parte
del motor.*/

var a = 4 + "7";
typeof a; //String

/*Convierte el valor numerico a string*/

var b = 4 * "7";
typeof b; //Number

var a = 20;
var b = a + "";
typeof b; //String

/*Para volverl la variable a, un String, sin tener
que concatenar un String... */

var c = String(a);
typeof c; //String
console.log(c);

/*Y a un numero...? */

var d = Number(c);
typeof d; //Number

//Los viejos y queridos parseos o reforjas...