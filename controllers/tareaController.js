const Tarea = require('../models/Tarea');

exports.crearTarea = (req, res) => {

    try {
        let tarea;
        //creamos nuestra tarea
        tarea = new Tarea(req.body)

        tarea.save();
        res.send(tarea);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

exports.obtenerTarea = async(req, res) => {

    try {
        const tarea = await Tarea.find();

        res.json(tarea)

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

exports.eliminarTarea = async(req, res) => {

    try {
        let tarea = await Tarea.findById(req.params.id);
        if (!tarea) {
            res.status(404).json({ msg: 'no existe la tarea' })
        }
        await Tarea.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Tarea eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

exports.obtenerTareas = async(req, res) => {

    try {
        let tarea = await Tarea.findById(req.params.id);
        if (!tarea) {
            res.status(404).json({ msg: 'no existe la tarea' })
        }

        res.json(tarea);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}