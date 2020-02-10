const express = require('express'); //importamos nuevamente express
const router = express.Router(); //llamamos a la funcion router de express

//importar express validator para el body
const { body } = require('express-validator');

//importamos el controlador
const proyectosController = require('../controllers/proyectosController')

module.exports = function(){
    //ruta para el home
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', 
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.nuevoProyecto
    );

    //listar los proyectos
    router.get('/proyectos/:url', proyectosController.proyectoPorUrl)
    return router;
}

