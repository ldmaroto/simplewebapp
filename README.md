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