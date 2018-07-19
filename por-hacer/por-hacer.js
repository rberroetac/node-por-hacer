const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    // codigo para crear y guardar archivo.
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error(err);
    });
}

const cargarDB = () => {

    //verifica que el archivo esta con info. (parecido a un if.)
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

// funcion obtener listado.
const getListado = () => {

        let listado = listadoPorHacer = require('../db/data.json');
        return listado;

    }
    // otra forma de obtener listado.
    // const getListado = ( => {
    //     cargarDB();
    //     return listadoPorHacer;
    // }

const actualizar = (descripcion, completado) => {
    cargarDB(); // funcion resumida. 
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}