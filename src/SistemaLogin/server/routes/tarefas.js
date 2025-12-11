const express = require('express');
const router = express.Router();
const Tarefas = require('../models/Tarefas'); // O Modelo (A Classe)

// 1. Pegar todas as tarefas (GET)
router.get('/', async (req, res) => {
    try {
        const lista = await Tarefas.find();
        res.json(lista);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Mudar o status - Marcar checkbox (PATCH)
router.patch('/:id', async (req, res) => {
    try {
        const tarefaEncontrada = await Tarefas.findById(req.params.id);
        
        if (!tarefaEncontrada) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }

        tarefaEncontrada.isDone = !tarefaEncontrada.isDone;
        
        const updatedTarefa = await tarefaEncontrada.save();
        res.json(updatedTarefa);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 3. Criar tarefa (POST)
router.post('/', async (req, res) => {
    const novaTarefa = new Tarefas({
        tarefa: req.body.tarefa,
        dia: req.body.dia,
        horario: req.body.horario,
        responsavel: req.body.responsavel
    });

    try {
        const tarefaSalva = await novaTarefa.save();
        res.status(201).json(tarefaSalva);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 4. Deletar tarefa (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        await Tarefas.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tarefa deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;