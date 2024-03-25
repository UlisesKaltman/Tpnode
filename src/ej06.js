let miUrl = new URL ("aaaaaasasacampud.ort.edu.ar/");
let miObjeto=null;
miObjeto=parsearUrl(miUrl);
console.log (miObjeto);
function parsearUrl(miUrl) {
    let Obj;

    try {
        Obj = {
            host: miUrl.host,
            pathname: miUrl.pathname,
            parametros: miUrl.searchParams
        };
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Se produjo un error de tipo:', error.message);
        } else if (error instanceof URIError) {
            console.error('Error de sintaxis:', error.message);
        } else {
            console.error('Se produjo un error:', error);
        }
        // Si ocurre un error, asignamos un valor por defecto a Obj para evitar problemas de referencia
        Obj = null;
    }

    return Obj;
}

    
    
