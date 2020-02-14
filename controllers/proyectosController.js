const Proyectos = require('../models/Proyectos')

exports.proyectosHome = async (req, res) => {
    const proyectos = await Proyectos.findAll();

    res.render('index', {
        nombrePagina : "Proyectos",
        proyectos
    });
}

exports.formularioProyecto = async (req, res) => {
    const proyectos = await Proyectos.findAll();
    res.render('nuevoProyecto', {
        nombrePagina : "Nuevo Proyecto",
        proyectos
    });
}

exports.nuevoProyecto = async (req, res) => { // exportando este controlador para las vistas y el modelo
    const proyectos = await Proyectos.findAll();
    //Enviar a la consola de node el contenido del campo del formulario
    //console.log(req.body);

    //validar que hay un valor en el input
    const { nombre } = req.body;

    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un nombre al proyecto'});
    }

    //si hay errores
    if(errores.length > 0 ){
        res.render('nuevoProyecto', {
            nombrePagina : 'Nuevo Proyecto',
            errores,
            proyectos
        })
    } else {
        //para cuando no hay errores ejecutar esto
        await Proyectos.create({ nombre });
        res.redirect('/');
    }
}

exports.proyectoPorUrl = async (req, res, next) => { //al hacer click sobre el proyecto
    const proyectos = await Proyectos.findAll();
    const proyecto = await Proyectos.findOne({
        where: {
            url: req.params.url
        }
    });

    if(!proyecto) return next(); //como escape por si no hay resultados y no seguir ejecutando el código

    //render de la vista
    res.render('tareas',{
        nombrePagina: 'Tareas del Proyecto',
        proyecto,
        proyectos
    })
}

exports.proyectoEditar = async (req,res) => { //para llegar aquí al hacer click sobre el boton editar proyecto
    const proyectosPromise =  Proyectos.findAll();

    const proyectoPromise =  Proyectos.findOne({
        where: {
            id: req.params.id
        }
    });

    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise])

    res.render('nuevoProyecto',{
        nombrePagina: 'Editar Proyecto',
        proyectos,
        proyecto
    })
}

exports.actualizarProyecto = async (req, res) => { // exportando este controlador para las vistas y el modelo
    const proyectos = await Proyectos.findAll();
    //Enviar a la consola de node el contenido del campo del formulario
    //console.log(req.body);

    //validar que hay un valor en el input
    const { nombre } = req.body;

    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un nombre al proyecto'});
    }

    //si hay errores
    if(errores.length > 0 ){
        res.render('nuevoProyecto', {
            nombrePagina : 'Nuevo Proyecto',
            errores,
            proyectos
        })
    } else {
        //para cuando no hay errores ejecutar esto
        await Proyectos.update(
            { nombre: nombre },
            {where: {id: req.params.id }}
        );
        res.redirect('/');
    }
}