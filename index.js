//declarando constante express para usarla más adelante
const express = require('express'); 
const routes = require('./routes'); //acá indicamos que necesitamos lo cargado en las rutas
const path = require('path'); //acá llamamos la función path de la librería de node

//crear una app de express
const app = express();

//ubicacion de los archivos estáticos
app.use(express.static('public'));

//habilitar pug
app.set('view engine', 'pug');

//añadir el directorio de las vistas
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

app.listen(8080); //se configura el puerto de escucha del servidor, con el método .listen


