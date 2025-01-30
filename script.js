//Conceptos Básicos de JavaScript

//Variables y tipos de datos

//Datos que se pueden cambiar
let yoCambio = "mis datos se pueden cambiar durante el programa";

//Datos que no se pueden cambiar
const yoNoCambio = "mis datos no se modifican durante el programa";


console.log(yoCambio);


//Operaciones básicas

let suma = 10 + 5;

let resta = 10 - 5;

let multiplicacion = 10 * 5;

let division = 10 / 5;

console.log(division);

//Condicionales 

//IF: ejecuta el código si la condición es verdadera

if(suma > 20){

    console.log("la suma es mayor que 20");

}

//ELSE: Se ejecuta si la condición de if no se cumple

else{

    console.log("la suma es menor que 20")

};


//Bucles 

//FOR: Ejecuta un bucle de código un número de veces

for(let i = 1; i <= 5; i++){

    console.log(i);

};

//WHILE:Ejecuta un bloque de código mientras la condición sea verdadera

let i = 1;

while (i <= 5){

    console.log(i);
    i++;

};

