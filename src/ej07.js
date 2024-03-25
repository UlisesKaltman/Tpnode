import { getCurrencyAbbreviation } from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais='Argentina';
obtenerMoneda(codigoPais);
monedaDelPais=obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

//codigoPais='UZA'; 
//monedaDelPais=obtenerMoneda(codigoPais);
//console.log(`La moneda del país${codigoPais}es:${monedaDelPais}`);

function obtenerMoneda(codigoPais)
{
    let resultado = getCurrencyAbbreviation(codigoPais);
    
    return  resultado;
}