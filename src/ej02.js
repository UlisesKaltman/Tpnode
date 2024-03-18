import {PI, sumar, multiplicar, restar, dividir,numeros} from './modules/matematica.js';
let total;
let numero1= 2;
let numero2= 3;
console.clear();
console.log(`La constante PI vale '${PI}'`);
total = sumar(numero1, numero2);
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);
console.log(`Multiplicar ${multiplicar(numero1,numero2)}`);
console.log(`restar ${restar(numero1,numero2)}`)
console.log(`dividir ${dividir(numero1,numero2)}`)
console.log(numeros[0] +" es menor a "+ numeros[3]);
