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
