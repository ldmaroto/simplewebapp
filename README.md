# simplewebapp
Aplicación WEB Simple, tomado del tutorial FaztWEB.com. Versión: En Desarrollo.

* [Youtube: Nodejs y Mongodb Aplicación completa](https://www.youtube.com/watch?v=-bI0diefasA&t=302s)
* [Youtube: MongoDB instalación en Windows 10](https://www.youtube.com/watch?v=2KMQdqDk9e8)
* [Youtube: MongoDB Curso, Introducción Practica a NoSQL](https://www.youtube.com/watch?v=lWMemPN9t6Q&t=2626s)
* [Bootstrap](https://getbootstrap.com/)

## Contenido
* [I. Lista de módulos.](https://github.com/ldmaroto/simplewebapp#i-lista-de-m%C3%B3dulos)
* [II. Pasos para crear la carpeta del proyecto](https://github.com/ldmaroto/simplewebapp#ii-pasos-para-crear-la-carpeta-del-proyecto)
* [III. Creación del Backend.](https://github.com/ldmaroto/simplewebapp#iii-creaci%C3%B3n-del-backend)
* IV. Desarrollo de Vistas
* CRUD
* Funcionalidad: Register
* Funcionalidad: Login
* Funcionalidad: Nevigation
* Funcionalidad: Datos personales

## I. Lista de módulos.
Para este proyecto, utilizaremos los siguientes módulos de **"nodejs"**, los cuales serán útiles tanto para el **"Frontend"** como para el **"Backend"**:

* **express:** es el framework de desarrollo de aplicaciones web para nodejs.
* **express-handlebars:** es un complemento de express, util para integrar un motor de plantillas dentro de express. 
* **express-session:** es un complemento de express, permite realizar sesiones dentro del servidor, para autenticar a los usuarios, guardando los datos del usuario temporalmente dentro de una sesión.
* **method-override:** este modulo es para extender la funcionalidad de los formularios.
* **mongoose:** es el módulo que nos permite unir express con una base de datos (mongodb), es el módulo de conexión.
* **passport:** es un módulo de autenticación de usuarios, desarrollado por http://www.passportjs.org/
* **passport-local:** es el módulo de passport para implementar la estrategia de autenticación local en esta aplicación web.
* **bcryptjs:** es un módulo de cifrado de contraseñas, para aplicar un algoritmo a un determinado texto y convertirlo en un hash.
* **connect-flash:** es un módulo para poder enviar mensajes entre multiples vistas, como: advertencias, errores, avisos, etc. 

## II. Pasos para crear la carpeta del proyecto

### 1. Crear carpeta del proyecto
Crear en la terminal un directorio, en este caso se llamará **"simplewebapp"**:
```bash
$ mkdir simplewebapp
$ cd simplewebapp
```

### 2. Inicializar "npm" en la carpeta del proyecto
Seguidamente creamos el proyecto en nodejs en la misma carpeta creada, deberá tener instalado **"nodejs"** y **"npm"**:
```bash
$ npm init --yes
```
### 3. Instalar los módulos en el proyecto.
Instalar los módulos necesarios del proyecto para **"nodejs"** (recordar usar el archivo **".gitignore"** si usa git):
```bash
$ npm i express express-handlebars express-session method-override mongoose passport passport-local bcryptjs connect-flash
```
### 4. Crear una carpeta "src/" en el proyecto
Crear un directorio en la carpeta del proyecto llamado **"src/"**, el cual tendrá todo el código tanto las vistas del "Frontend", como el código del servidor ("Backend"):
```bash
$ mkdir src
$ cd src
```
### 5. Crear "index.js" y "database.js"
A continuación creamos dos archivos de javascript: **"index.js"** y **"database.js"**. "index.js" es el archivo principal de la aplicación web, necesario para poder correr la aplicación web. "database.js" es para configurar la conección entre la aplicación web con la base de datos, este archivo será utilizado por "index.js":
```bash
$ touch index.js
$ touch database.js
```

### 6. Crear estructura de directorios del proyecto.
Luego dentro de la carpeta "src/", se crean las siguientes carpetas:
* **config:** esta carpeta puede almacenar distintos archivos que contengan variables de configuración.
* **helpers:** donde se almacenan funciones que el servidor podrá utilizar.
* **models:** donde se define como van a lucir los datos que deseamos almacenar dentro de la base de datos.
* **public:** donde se almacenan todos los archivos estáticos, por ejemplo: imágenes, fuentes, archivos .CSS, archivos .JS
* **routes:** donde se almacenan las "URLs" o rutas del servidor.
* **views:** donde se almacenan todas las vistas "HTML" de nuestro navegador.

``` bash
$ mkdir config helpers models public routes views
```

## III. Creación del Backend
Comensamos editando el archivo: **"index.js"**. Este archivo se dividirá en secciones para hacerlo más simple de leer:

* **SEC-I: REQUIRE:** donde se cargan los módulos.
* **SEC-II: INIT:** donde se inicializa los módulos.
* **SEC-III: SETTINGS:** acá estará todas las configuraciones.
* **SEC-IV: MIDDLEWARE:** acá estará todas las funciones que serán ejecutadas antes de pasarlas a las rutas.
* **SEC-V: GLOBAL-VAR:** se almacenará los datos que deseamos que estén accesibles desde toda la aplicación.
* **SEC-VI: ROUTES:** para la definción de las rutas o direcciones "URLs".
* **SEC-VII: STATIC-FILES:** para la definción de los archivos estáticos.
* **SEC-VIII: SERV-LISTENNING:** para la inicialización del servidor.

### 1. Convocar "Express"
Crear la sentencia que convoca **"index.js"** al módulo **"express"**:

```javascript
////////////////////////////////////////////////////
// SEC-I: REQUIRE
////////////////////////////////////////////////////

const express = require('express'); // carga al módulo 'express' de nodejs.


////////////////////////////////////////////////////
// SEC-II: INIT
////////////////////////////////////////////////////

const app = express(); // 'express' es una función, que devuelve un objeto, el cual se almacena en una variable que se llama app.


////////////////////////////////////////////////////
// SEC-III: SETTINGS
////////////////////////////////////////////////////

app.set('port', process.env.PORT || 3000); // define en cual puerto trabajará el servidor web de node.js


////////////////////////////////////////////////////
// SEC-IV: MIDDLEWARE
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// SEC-V: GLOBAL-VAR
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// SEC-VI: ROUTES
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// SEC-VII: STATIC-FILES
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// SEC: SERV-LISTENNING
////////////////////////////////////////////////////

app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
}); // pone a corre el servidor web de 'node.js'
```

### 2. Instalar "nodemon"
Para facilitar el trabajo de desarrollo, sin necesidad de estar reiniciando nodejs, se instalará un modulo adicional, aunque no es necesario para el proyecto:

```bash
$ npm i nodemon -D
```

### 3. Convocar "path"
Por defecto, "nodejs" busca la carpeta de vistas ("views"), en el directorio del proyecto, no obstante como la carpeta de vistas está en el subdirectorio "/src", será necesario indicar a "nodejs" la ubicación del directorio. Para esta tarea se necesitan dos cosas dentro del archivo "index.js":

* Llamar un modulo de nodejs, llamado: PATH
* Definir la ubicación del directorio de vistas.

```javascript
////////////////////////////////////////////////////
// SEC-I: REQUIRE
////////////////////////////////////////////////////

const path = require('path'); // carga un módulo necesario para trabajar rutas de archivos y directorios.
```

```javascript
////////////////////////////////////////////////////
// SEC-III: SETTINGS
////////////////////////////////////////////////////

app.set('views', path.join(__dirname, 'views')); // define la ubicación de la carpeta "views"
```

### 4. Convocar "express-handlebars"
Porteriormente se debe configurar el motor de plantillas de express: **"express-handlebars"**.
Para ello se necesita lo siguiente en el archivo "index.js":

* Llamar el módulo de express, llamado: express-handlebars
* Configurar el módulo "express-handlebars" en la sección de vistas. 

```javascript
////////////////////////////////////////////////////
// SEC-I: REQUIRE
////////////////////////////////////////////////////

const exphbs = require('express-handlebars'); // carga el módulo para trabajar el motor de plantillas de 'express'
```

```javascript
////////////////////////////////////////////////////
// SEC-III: SETTINGS
////////////////////////////////////////////////////

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs'); // para utilizar el motor de vistas.
```

Cuando se ejecuta la función 'exphbs()', se le envía un objeto de configuración que tiene las siguientes propiedades:

* **defaultLayout:** es el nombre del archivo principal, que guarda los elementos comunes de las vistas.
* **layoutsDir:** define la ubicación de la carpeta "layout".
* **partialsDir:** son vistas reutilizables.
* **extname:** extension de los archivos hbs.


### 5. Crear la carpeta "views"
Dentro de la carpeta "views/", se requiere crear la carpeta "layouts/". Dentro de "layouts/" se necesita crear el archivo "main.bhs"

```bash
$ cd views
$ mkdir layouts
$ cd layouts/
$ touch main.hbs
```

### 6. Convocar "method-override" y "express-session"
En la sección de "Middleware", se configurará algunas funciones del servidor que luego será de utilidad:

```javascript
////////////////////////////////////////////////////
// SEC-I: REQUIRE
////////////////////////////////////////////////////

const methodOverride = require('method-override'); // carga el módulo para trabajar formularios.
const session = require('express-session'); // carga el módulo necesario para crear sesiones de usuarios.
```

```javascript
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
```

### 7. Definir la rutas
Terminado las configuraciones básicas, nos enfocaremos en las rutas, que son las "URL's" que van en la carpeta "src/routes/". En esta carpeta se creará 3 archivos básicos: 

* **index.js:** estan las URL's de la página principal
* **notes.js:** estan las URL's del servidor para que los usuarios puedan crear o manejar sus notas
* **users.js:** estan las URL's donde los usuarios puedan autenticarse.

```bash
$ touch index.js
$ touch notes.js
$ touch users.js
```

En la sección de rutas del archivo index.js de la carpeta "src/", se necesita declarar las siguientes sentencias:

```javascript
////////////////////////////////////////////////////
// SEC-VI: ROUTES
////////////////////////////////////////////////////

app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
```

### 8. Configurar "nodemon" para correrlo desde la terminal
En el archivo "package.json" cambiaremos el atributo "scripts" para utilizar nodemon.

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.js"
  }
```
De ahora en adelante, para ejecutar "nodemon src/index.js", basta con correr el siguiente comando en la terminal:

```bash
$ npm run dev
```

### 9. Definir contenido de los archivos ".js" para las rutas
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
router.get('/users/sing-in', (req, res) => {
    res.send('Ingresando a la app');
})

router.get('/users/sing-up', (req, res) => {
    res.send('Formulario de autenticación');
})
```

Lo mismo hacemos hacemos para el archivo "notes.js", incluyendo la respuesta a la ruta: "/notes"

```javascript
router.get('/notes', (req, res) => {
    res.send('Notas de la base de datos');
})
```

### 10. Definir la ubicación de la carpeta para contenido estático
En la sección "Static Files" del archivo "index.js" de la carpete "src/", se define la ubicación de la carpeta pública con la siguiente sentencia:

```javascript
////////////////////////////////////////////////////
// SEC-VII: STATIC-FILES
////////////////////////////////////////////////////

app.use(express.static(path.join(__dirname, 'public')));
```

### 11. Conectar "express" con la base de datos de "mongodb"
Antes de finalizar la configuración del "Backend", seguidamente se prepara la conección entre la aplicación web con la base de datos. Recordar que "mongoose" no es la base de datos, es el módulo que nos permite unir express con una base de datos de "MongoBD". Es necesario instalar el servidor "MongoDB". Puede seguir este tutorial: https://www.youtube.com/watch?v=2KMQdqDk9e8. 

En el archivo "database.js" debe crear las siguientes sentencias:

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notesdb', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
```

En el archivo "index.js", en la sección de inicialización, se requiere inicializar la basa de datos:

```javascript
////////////////////////////////////////////////////
// SEC-II: INIT
////////////////////////////////////////////////////

require('./database');
```

## IV. Desarrollo de Vistas

### 1. Crear los archivos "handlebars" de las vistas
Los archivos ".hbs" son el equivalente a los archivos ".html". 

> Ruta (URL)     | Archivo ".hbs" | Ubicación 
> ---------------|----------------|-----------------
> /              | index.hbs      | usr/views/
> /about         | about.hbs      | usr/views/
> /users/sing-in | sing-in.hbs    | usr/views/users
> /users/sing-up | sing-up.hbs    | usr/views/users

En el terminal, dentro de la carpeta "views/" vamos a crear los archivos ".hbs"

```bash
touch index.hbs
touch about.hbs
mkdir users
cd users/
touch sing-in.hbs
touch sing-up.hbs
```

Con el editor de su preferencia, agregue por ahora el siguiente contenido a cada uno de los archivos ".hbs" (recuerde que los archivos "handlebars" son archivos ".html"):

```html
<h1></h1>
```

En medio de las etiquetas, coloque el nombre del archivo, por ejemplo para el archivo index.hbs, el contenido será:

```html
<h1>index.hbs</h1>
```

### 2. Preparar la plantilla del "express-handlebars"

Modificaremos la plantilla de "express-handlebars", que anteriormente llamamos: "main.hbs", el cual se encuentra en el directorio "usr/views/layout/", agregando el siguiente contenido:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SimpleWebApp</title>
    <!-- Enlace CSS desde la CDN de BOOTSTRAP 4 -->

</head>

<body>
    <p>Barra de Navegación</p>

    <!-- {{{ body }}} Sintaxis de "express-handlebars", contenido de los archivos ".hbs" -->
    {{{ body }}}

    <p>Footer</p>
</body>

</html>
```


### 3. Rederizado de los archivos "handlebars" desde la definición de rutas.
En la carpeta "src/routes/" están definidas las rutas de la aplicación web, mediante los archivos ".js". Por el momento tenemos solo 3 archivos:

* index.js
* notes.js
* users.js

En lugar que "express" responda en cada ruta con un texto, modificaremos los archivos ".js" para que "express" devuelva el un ".hbs". Por ejemplo el archivo "index.js" de la carpeta "src/routes/" se modificará así:

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Index');
    res.render('index');
})

router.get('/about', (req, res) => {
    // res.send('About');
    res.render('about')
})

module.exports = router;
```

De esta forma, a la hora que el navegador solicite el contenido de una dererminada ruta, "express" devolverá el contenido de un ".hbs".

### 4. Cargando Bootstrap

Para cargar el CSS desde en CDN de Bootstrap, inserte el enlace de referencia en el archivo "main.hbs":

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SimpleWebApp</title>
    <!-- Enlace CSS desde la CDN de BOOTSTRAP 4 -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

</head>

<body>
    <p>Barra de Navegación</p>

    <!-- {{{ body }}} Sintaxis de "express-handlebars", contenido de los archivos ".hbs" -->
    {{{ body }}}

    <p>Footer</p>
</body>

</html>
```
