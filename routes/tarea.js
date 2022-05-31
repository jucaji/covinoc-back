//rutas para producto

const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

//api/tareas

router.post('/', tareaController.crearTarea);
router.get('/', tareaController.obtenerTarea);
router.delete('/:id', tareaController.eliminarTarea);

module.exports = router;