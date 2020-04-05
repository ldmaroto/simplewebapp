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