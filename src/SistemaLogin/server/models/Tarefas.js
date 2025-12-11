const mongoose = require('mongoose');

const TarefasSchema = new mongoose.Schema({
    tarefa: { type: String, required: true },
    dia: { type: String, required: true }, 
    horario: { type: String, required: true },
    responsavel: { type: String, required: true },
    isDone: { type: Boolean, default: false } // Começa como não feita
});

module.exports = mongoose.model('Tarefas', TarefasSchema, 'tarefas');