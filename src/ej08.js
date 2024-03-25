import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js'

let resultado = await OMDBSearchByPage("cars", 8)
console.log('resultado', resultado);

let ID = await OMDBGetByImdbID('tt6782580')
console.log('Id', ID);


