import { useState } from 'react';
import api from '../services/api'; // Seu arquivo de configuração do Axios
import { useNavigate, Link } from 'react-router-dom';
import '../base.css'; // Seu CSS (certifique-se que o caminho está certo)

const Login = () => {
  // 1. Estados para guardar o que é digitado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); // Hook para mudar de página

  const handleSubmit = async (e) => {
    e.preventDefault(); // Não deixa a página recarregar

    try {
      // 2. O Pedido para o Backend
      const response = await api.post('/auth/login', {
        email: email,
        password: password
      });

      // 3. A Resposta (O Token)
      // O backend respondeu: { msg: "...", token: "eyJ...", user_id: "..." }
      const token = response.data.token;
      const userId = response.data.user_id;

      // 4. Guardando no Bolso (LocalStorage)
      // Isso mantém o usuário logado mesmo se fechar o navegador
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      // 5. Redirecionar para a área logada
      alert("Login realizado com sucesso!");
      navigate('/morador'); // Manda para a página dos moradores

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.msg || "Erro ao fazer login. Verifique seus dados.");
    }
  };

  return (
    <div className="fundo-login">
        
        {/* Header Simples */}
        <header className="barra_cima">
          <div className="logo-row">
             {/* Ajuste o caminho da imagem se necessário */}
            <img className="logo" src="/images/Logos/LOGO_DEMORO_SITE.png" alt="Logo Demorô" />
          </div>
        </header>

        <div className="hero-section">
            <h2 className="titulo-login">Faça o Login</h2>
        
            <form onSubmit={handleSubmit} className="formulario-login">
        
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  className="input-padrao"
                />

                <input 
                  type="password" 
                  placeholder="Senha" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  className="input-padrao"
                />

                <button type="submit" className="botao-entrar">Entrar</button>

            </form>
            
            <p className="sem-conta">
                Não tem conta? <Link to="/register">Cadastre-se aqui</Link>
            </p>
        </div>
    </div>
  );
};

export default Login;