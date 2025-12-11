import { useState } from 'react';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import '../base.css'; // Importando o CSS

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não conferem!");
      return;
    }

    try {
      await api.post('/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword // O backend ignora, mas usamos pra validar antes
      });

      alert("Cadastro realizado com sucesso!");
      navigate('/'); 

    } catch (error) {
      alert(error.response?.data?.msg || "Erro ao cadastrar");
    }
  };

  return (
    <div className="fundo-login">
      {/* Header opcional se quiser a barra em cima */}
      <header className="barra_cima">
          <div className="logo-row">
            <img className="logo" src="images/Logos/LOGO_DEMORO_SITE.png" alt="Logo Demorô" />
          </div>
      </header>

      <div className="hero-section">
          <span className="titulo-login">Crie sua conta</span>
          
          <form onSubmit={handleSubmit} className="formulario-login">
            
            <input 
              type="text" 
              name="name" 
              placeholder="Apelido" 
              value={formData.name}
              onChange={handleChange} 
              className="input-padrao"
            />
            
            <input 
              type="email" 
              name="email" 
              placeholder="Seu e-mail" 
              value={formData.email}
              onChange={handleChange} 
              className="input-padrao"
            />
            
            <input 
              type="password" 
              name="password" 
              placeholder="Senha" 
              value={formData.password}
              onChange={handleChange} 
              className="input-padrao"
            />

            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirme a senha" 
              value={formData.confirmPassword}
              onChange={handleChange} 
              className="input-padrao"
            />

            <button type="submit" className="botao-entrar">CADASTRAR</button>
          </form>

          <p className="sem-conta">
            Já tem conta? <Link to="/">Faça Login</Link>
          </p>
      </div>
    </div>
  );
};

export default Register;