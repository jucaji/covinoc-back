const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Se crea el servidor
const app = express();

//Conectar a la BD
conectarDB();

app.use(express.static('public'));

app.use(cors());

app.use(express.json());

app.use('/api/tareas', require('./routes/tarea'));

app.listen(3000, () => {
    console.log("El servidor esta corriendo perfectamente");
})