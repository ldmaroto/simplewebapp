# simplewebapp
Aplicación WEB Simple, tomado del tutorial FaztWEB.com: https://www.youtube.com/watch?v=-bI0diefasA&t=302s

## Contenido
* Lista de módulos
* Creación del Backend
* Desarrollo de Vistas
* CRUD
* Funcionalidad: Register
* Funcionalidad: Login
* Funcionalidad: Nevigation
* Funcionalidad: Datos personales

## Lista de módulos
Para este proyecto, utilizaremos los siguientes módulos de **nodejs**, los cuales será útiles tanto para el "Frontend" como para el "Backend":

* express: es el framework de desarrollo de aplicaciones web minimalista y flexible para nodejs.
* express-handlebars: es un complemento de express, util para integrar un motor de plantillas dentro de express. 
* express-session: es un complemento de express, permite realizar sesiones dentro del servidor, para autenticar a los usuarios, guardando los datos del usuario temporalmente dentro de una sesión.
* method-override: este modulo es para extender la funcionalidad de los formularios.
* mongoose: es el módulo que nos permite unir express con una base de datos (mongodb), es el módulo de conexión.
* passport: es un módulo de autenticación de usuarios, desarrollado por http://www.passportjs.org/
* passport-local: es el módulo de passport para implementar la estrategia de autenticación local en esta aplicación web.
* bcryptjs: es un módulo de cifrado de contraseñas, para aplicar un algoritmo a un determinado texto y convertirlo en un hash.
* connect-flash: es un módulo para poder enviar mensajes entre multiples vistas, como: advertencias, errores, avisos, etc. 

### Pasos para crear la carpeta del proyecto

Crear en la terminal un directorio, en este caso se llamará simplewebapp
```bash
mkdir simplewebapp
cd simplewebapp
```

Seguidamente creamos el proyecto en nodejs
```bash
npm init --yes
```

Instalar los módulos para nodejs (recordar usar el archivo ".gitignore" si usa git):
```bash
npm i express express-handlebars express-session method-override mongoose passport passport-local bcryptjs connect-flash
```

Crear un directorio en la carpeta del proyecto llamado "src", el cual tendrá todo el código tanto las vistas del "Frontend", como el código del servidor ("Backend"):
```bash
mkdir src
cd src
```

A continuación creamos dos archivos de javascript: "index.js" y "database.js". "index.js" es el archivo principal de la aplicación web, necesario para poder correrla. "database.js" es pata tener una conección con la base de datos y será utilizado por "index.js".
```bash
touch index.js
touch database.js
```

Luego dentro de la carpeta "src", se crean las siguientes carpetas:
* config: esta carpeta puede almacenar distintos archivos que contengan variables de configuración.
* helpers: donde se almacenan funciones que el servidor podrá utilizar.
* models: donde se define como van a lucir los datos que deseamos almacenar dentro de la base de datos.
* public: donde se almacenan todos los archivos estáticos, por ejemplo: imágenes, fuentes, archivos .CSS, archivos .JS
* routes: donde se almacenan las "URLs" o rutas del servidor.
* views: donde se almacenan todas las vistas "HTML" de nuestro navegador.

``` bash
mkdir config helpers models public routes views
```

## Creación del Backend
Seguidamente comensamos editando el archivo: "index.js". Este codigo se divide en secciones para hacerlo más simple de leer:

* Initializations: donde se inicializa los módulos.
* Settings: acá estará todas las configuraciones.
* Middleware: acá estará todas las funciones que serán ejecutadas antes de pasarlas a las rutas.
* Global variables: se almacenará los datos que deseamos que estén accesibles desde toda la aplicación.
* Routes: para la definción de las rutas o direcciones "URLs".
* Static Files: para la definción de los archivos estáticos.
* Server is listenning: para la inicialización del servidor.


```javascript
const express = require('express'); // se convoca al modulo 'express' de nodejs.


// SEC: Initializations
const app = express(); // express es una función, que devuelve un objeto, el cual se almacena en una variable que se llama app.


// SEC: Settings
app.set('port', process.env.PORT || 3000);


// SEC: Middleware


// SEC: Global Variables


// SEC: Routes


// SEC: Static Files


// SEC: Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});
```

Para facilitar el trabajo de desarrollo, sin necesidad de estar reiniciando nodejs, se instalará un modulo adicional, aunque no es necesario para el proyecto:

```
npm i nodemon -D
```

Por defecto, "nodejs" busca la carpeta de vistas ("views"), en el directorio del proyecto, no obstante como la carpeta de vistas está en el subdirectorio "/src", será necesario indicar a "nodejs" la ubicación del directorio. Para esta tarea se necesitan dos cosas dentro del archivo "index.js":

* Llamar un modulo de nodejs, llamado: PATH
* Definir la ubicación del directorio de vistas.

```javascript
const path = require('path'); // Modulo necesario para trabajar rutas de archivos y directorios.
```

```javascript
// SEC: Settings
app.set('views', path.join(__dirname, 'views')); // esta linea define la ubicación de la carpeta "views"
```

Porteriormente se debe configurar el motor de plantillas de express: "express-handlebars".
Para ello se necesita lo siguiente en el archivo "index.js":

* Llamar el módulo de express, llamado: express-handlebars
* Configurar el módulo "express-handlebars" en la sección de vistas. 

```javascript
const exphbs = require('express-handlebars');
```

```javascript
// SEC: Settings
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs'); // para utilizar el motor de vistas.
```

Cuando se ejecuta la función 'exphbs()', se le envía un objeto de configuración que tiene las siguientes propiedades:

* defaultLayout: es el nombre del archivo principal, que guarda los elementos comunes de las vistas.
* layoutsDir: define la ubicación de la carpeta "layout".
* partialsDir: son vistas reutilizables.
* extname: extension de los archivos hbs.

Dentro de la carpeta "views", se requiere crear la carpeta "layouts". Dentro de "layouts" se necesita crear el archivo "main.bhs"

```bash
cd views
mkdir layouts
cd layouts/
touch main.hbs
```

En la sección de "Middleware", se configurará algunas funciones del servidor que luego será de utilidad:

```javascript
const methodOverride = require('method-override'); // Modulo necesario para formularios.
const session = require('express-session'); // Modulo necesario para crear sesiones de usuarios.
```

```javascript
// SEC: Middleware
app.use(express.urlencoded({extended: false})); // esta linea es un metodo de express, que permite entender los datos que envía un determinado formulario.
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
```

Terminado las configuraciones básicas, nos enfocaremos en las rutas, que son las "URL's" que van en la carpeta "src/routes". En esta carpeta se creará 3 archivos básicos: 

* index.js: estan las URL's de la página principal
* notes.js: estan las URL's del servidor para que los usuarios puedan crear o manejar sus notas
* users.js: estan las URL's donde los usuarios puedan autenticarse.

```bash
touch index.js
touch notes.js
rouch users.js
```

En la sección de rutas del archivo index.js de la carpeta "./src", se necesita declarar las siguientes sentencias:

```javascript
// SEC: Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
```

En el archivo "package.json" cambiaremos el atributo "scripts" para utilizar nodemon.

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.js"
  }
```
De ahora en adelante, para ejecutar "nodemon src/index.js", basta con corre en siguiente comando en la terminal:

```bash
npm run dev
```

En cada uno de los archivos ".js" del directorio de rutas, será necesario incluir las siguientes sentencias:

```javascript
const express = require('express');
const router = express.Router();


module.exports = router;
```

En el archivo "index.js" de la carpeta rutas, incluya la respuesta a la ruta: "/" y "/about":

```javascript
router.get('/', (req, res) => {
    res.send('Index');
})

router.get('/about', (req, res) => {
    res.send('About');
})
```

En el archivo "users.js" de la carpeta rutas, incluya la respuesta a la ruta: "/users/singin" y "/users/singup":

```javascript
router.get('/users/singin', (req, res) => {
    res.send('Ingresando a la app');
})

router.get('/users/singup', (req, res) => {
    res.send('Formulario de autenticación');
})
```

Lo mismo hacemos hacemos para el archivo "notes.js", incluyendo la respuesta a la ruta: "/notes"

```javascript
router.get('/notes', (req, res) => {
    res.send('Notas de la base de datos');
})
```

