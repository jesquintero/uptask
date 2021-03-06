//declarando constante express para usarla más adelante
const express = require('express'); 
const routes = require('./routes'); //acá indicamos que necesitamos lo cargado en las rutas
const path = require('path'); //acá llamamos la función path de la librería de node
const bodyParser = require('body-parser');

//helpers con algunas funciones
 const helpers = require('./helpers');

//conectar con la BD
const db = require('./config/db');

//importar el modelo
require('./models/Proyectos')

//sincronizar en lugar de autenticar, para que crear los modelos en caso de no existir
db.sync()
    .then(() => console.log('Conexion establecida'))
    .catch( error => console.log(error))

//crear una app de express
const app = express();

//ubicacion de los archivos estáticos
app.use(express.static('public'));

//habilitar pug
app.set('view engine', 'pug');

//añadir el directorio de las vistas
app.set('views', path.join(__dirname, './views'));

//pasando vardump helper a la aplicación
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
});

//habilitar bodyParser para acceder a los datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

app.listen(8080); //se configura el puerto de escucha del servidor, con el método .listen


