////////////////////////////////////////////////////
// SEC-I: REQUIRE
////////////////////////////////////////////////////

const express = require('express'); // carga al módulo 'express' de nodejs.
const path = require('path'); // carga un módulo necesario para trabajar rutas de archivos y directorios.
const exphbs = require('express-handlebars'); // carga el módulo para trabajar el motor de plantillas de 'express'
const methodOverride = require('method-override'); // carga el módulo para trabajar formularios.
const session = require('express-session'); // carga el módulo necesario para crear sesiones de usuarios.


////////////////////////////////////////////////////
// SEC-II: INIT
////////////////////////////////////////////////////

const app = express(); // 'express' es una función, que devuelve un objeto, el cual se almacena en una variable que se llama app.
require('./database');


////////////////////////////////////////////////////
// SEC-III: SETTINGS
////////////////////////////////////////////////////

app.set('port', process.env.PORT || 3000); // define en cual puerto trabajará el servidor web de node.js
app.set('views', path.join(__dirname, 'views')); // define la ubicación de la carpeta "views"
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs'); // para utilizar el motor de vistas.


////////////////////////////////////////////////////
// SEC-IV: MIDDLEWARE
////////////////////////////////////////////////////

app.use(express.urlencoded({extended: false})); // esta linea es un metodo de express, que permite entender los datos que envía un determinado formulario.
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));


////////////////////////////////////////////////////
// SEC-V: GLOBAL-VAR
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// SEC-VI: ROUTES
////////////////////////////////////////////////////

app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));


////////////////////////////////////////////////////
// SEC-VII: STATIC-FILES
////////////////////////////////////////////////////

app.use(express.static(path.join(__dirname, 'public')));


////////////////////////////////////////////////////
// SEC: SERV-LISTENNING
////////////////////////////////////////////////////

app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
}); // pone a corre el servidor web de 'node.js'