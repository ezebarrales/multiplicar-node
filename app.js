const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

const { base, limite, _:comando } = argv;

switch(comando[0]) {
    case 'listar':
        let data = listarTabla(base, limite);
        console.log(data.green);
        break;
    
    case 'crear':
        crearArchivo(base, limite).then(archivo => console.log(`Archivo creado: ${archivo}`), (err) => console.log(err));
        break;

    default:
        console.log("Comando no reconocido");
        break;
}