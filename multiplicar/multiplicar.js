const fs = require("fs");

const DEFAULT_LIMIT = 10;

const crearLista = (base, limite = DEFAULT_LIMIT) => {
    let data = "";

    for(let i = 1; i <= limite; i++) {

        let result = base * i;

        data += `${base} * ${i} = ${result}\n`;

    }

    return data;
}

const listarTabla = (base, limite = DEFAULT_LIMIT) => {
    let data = crearLista(base, limite);

    return data;
}

const crearArchivo = (base, limite = DEFAULT_LIMIT) => {

    return new Promise((resolve,reject) => {

        let data = crearLista(base, limite);

        fs.writeFile(`./tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err)
                reject('Error en la craeción del archivo ', err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });

};

module.exports = {
    crearArchivo,
    listarTabla
};