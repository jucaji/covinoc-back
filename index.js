const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Se crea el servidor
const app = express();

//Conectar a la BD
conectarDB();
var port_number = server.listen(process.env.PORT || 3000);

app.use(express.static('public'));

app.use(cors());

app.use(express.json());

app.use('/api/tareas', require('./routes/tarea'));

app.listen(port_number, () => {
    console.log("El servidor esta corriendo perfectamente");
})