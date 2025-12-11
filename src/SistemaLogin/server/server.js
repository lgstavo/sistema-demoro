require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const tarefasRoutes= require('./routes/tarefas');

const app = express();
const port = 3000;

const username = process.env.DB_USER;
const password = process.env.DB_PASS;

const dbURI = `mongodb+srv://${username}:${password}@cluster0.5pzblig.mongodb.net/DemoroDB?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/tarefas', tarefasRoutes);

app.get('/', (req, res) => {
    res.send("APi do Sistema de Login funcionando");
});

mongoose.connect(dbURI)
    .then(() => {
        console.log("Conectado ao MongoDB");
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.log("Erro ao conectar ao banco de dados:", err);
    });