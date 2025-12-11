const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Importe o seu Model corretamente
const User = require('../models/User.js');

// ROTA DE REGISTRO
router.post('/register', async (req, res) => {
    
    const { name, email, password, confirmPassword } = req.body;

    // 1. Validações
    if(!name || !email || !password || !confirmPassword){
        return res.status(422).json({msg: "Por favor, preencha todos os campos!"});
    }

    if(password !== confirmPassword){
        return res.status(422).json({msg: 'As senhas não coincidem!'});
    }

    try {
        // 2. Verificar se usuário já existe
        const userExists = await User.findOne({ email: email });
        
        if (userExists) {
            return res.status(422).json({msg: 'Email já cadastrado! Utilize outro e-mail.'});
        }

        // 3. Criar a senha segura (Hash)
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            password: passwordHash,
        });

        // 5. Salvar no Banco
        await user.save();

        res.status(201).json({ msg: "Usuário cadastrado com sucesso!" });

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Erro no servidor, tente novamente mais tarde!"});
    }
});

// ROTA DE LOGIN
router.post('/login', async (req, res) => {
    
    const { email, password } = req.body;

    // 1. Validação básica
    if(!email || !password){
        return res.status(422).json({msg: 'Por favor, preencha todos os campos!'});
    }

    try {
        // 2. Verificar se o usuário existe
        const user = await User.findOne({ email: email });

        if(!user){
            return res.status(404).json({msg: "Usuário não encontrado!"});
        }

        // 3. Verificar a senha
        const checkPassword = await bcrypt.compare(password, user.password);

        if(!checkPassword){
            return res.status(422).json({msg: "Senha inválida!"});
        }

        // 4. Gerar o Token
        const secret = process.env.SECRET;
        
        const token = jwt.sign(
            { 
                id: user._id, 
            },
            secret,
        );

        // 5. Retornar sucesso com o token
        res.status(200).json({ msg: "Autenticação realizada com sucesso", token, user_id: user._id });

    } catch(err){
        console.log(err);
        res.status(500).json({msg: "Erro no servidor!"});
    }
});

function checkToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Pega só o token, tira a palavra "Bearer"

    if (!token) {
        return res.status(401).json({ msg: "Acesso negado!" });
    }

    try {
        const secret = process.env.SECRET;
        jwt.verify(token, secret); // Verifica se o token é original
        next(); // Se estiver tudo ok, deixa passar para a rota
    } catch (error) {
        res.status(400).json({ msg: "Token inválido!" });
    }
}

router.get('/user/:id', checkToken, async (req, res) => {
    const id = req.params.id;

    // Busca o usuário pelo ID, mas remove a senha da resposta (-password)
    const user = await User.findById(id, '-password');

    if (!user) {
        return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    res.status(200).json({ user });
});

module.exports = router;