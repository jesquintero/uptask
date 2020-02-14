const sequelize = require('sequelize'); //importamos sequelize para poder usar sus funciones
const db = require('../config/db'); //definimos la ubicación de la base de datos
const slug = require('slug'); //importamos slug para poder usarlo
const shotrid = require('shortid');

const Proyectos = db.define('proyectos', { //definición del modelo
    id:{
        type: sequelize.INTEGER, //definición del tipo de valor para el campo
        primaryKey: true, //se indica que es clave primaria
        autoincrement: true //se establece como autoincremental
    },
    nombre: sequelize.STRING, //se define como tipo string
    url: sequelize.STRING //se define como tipo string
}, {
    hooks:{
        beforeCreate(proyecto){ //antes de crear en la BD (lo que se va acrear, se pasa com oun objeto)
            const url = slug(proyecto.nombre).toLocaleLowerCase();

            proyecto.url = `${url}-${shotrid.generate()}`; //asignamos el valor resultado del slug a la url
        },
        beforeUpdate(proyecto){ //antes de actualizar en la BD (lo que se va acrear, se pasa com oun objeto)
            const url = slug(proyecto.nombre).toLocaleLowerCase();
            
            proyecto.url = `${url}-${shotrid.generate()}`; //asignamos el valor resultado del slug a la url
        }
    }
})
module.exports = Proyectos;