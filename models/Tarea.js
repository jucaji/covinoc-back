const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
    tarea: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('tarea', TareaSchema);