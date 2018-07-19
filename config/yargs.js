const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por actualizar.'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado una tarea.'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea por hacer.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}