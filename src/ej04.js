import fs from'fs'; 
//const fs = require('fs');

const original = "./archivo-entrada.txt";
const nuevo = "./archivo-Nuevo.txt";

console.clear();
copiar(original, nuevo);

function copiar(original, nuevo) {
    fs.copyFile(original, nuevo, (err) => {
        if (err) throw err;
        console.log(`El archivo ${original} se ha copiado como ${nuevo}`);
    });
}