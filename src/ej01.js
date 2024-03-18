let texto1 = "River";
let texto2 = "Boca";
let salida;

salida = concatInvert(texto1, texto2);
console.clear();
console.log(`Palabras enrada: "${texto1}" y "${texto2}"`);
console.log(`Palabra salida: "${salida}"`);

function concatInvert(texto1, texto2)
{
    let nuevoTExto = texto1  + texto2 ;
    let invertido = "";
    
    for (let i = nuevoTExto.length- 1; i >= 0 ; i--) {
        invertido = invertido + nuevoTExto[i];
        
    }
    return invertido;
}

