const express = require('express'); //importamos nuevamente express
const router = express.Router(); //llamamos a la funcion router de express

//importamos el controlador
const proyectosController = require('../controllers/proyectosController')

module.exports = function(){
    //ruta para el home
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    return router;
}

