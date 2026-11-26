import { useState } from 'react';
import api from '../services/api'; 
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import '../base.css';
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
      const token = response.data.token;
      const userId = response.data.user_id;

      // 4. Guardando no LocalStorage
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
    <div className="min-h-screen bg-[linear-gradient(180deg,#f5f7ff,#e4e9ff)] font-['Jost',system-ui,sans-serif] text-[#10132e] antialiased">
        
        {/* Header Simples */}
        <Header/>
        <main className="flex flex-1 flex-col items-center gap-4 px-4 py-10">
          <section className="grid w-full max-w-[420px] gap-4 rounded-xl bg-white p-6 shadow-[0_8px_24px_rgb(0_4_113/0.16)]">
            <h1 class="font-['AbsolutHandwritten'] text-4xl leading-none text-[#000471]">Área do morador</h1>            
                <form onSubmit={handleSubmit} className="py-10 flex center flex-col">
            
                    <input 
                      type="email" 
                      placeholder="apelido@email.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      className="p-6 border-1 border-solid text-[16px] outline-none"
                    />

                    <input 
                      type="password" 
                      placeholder="Senha" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} 
                      className="p-6 border-1 border-solid"
                    />

                    <button type="submit" className="botao-entrar">Entrar</button>

                </form>
                
                <p className="sem-conta">
                    Não tem conta? <Link to="/register">Cadastre-se aqui</Link>
                </p>
          </section>
        </main>
      </div>
    
  );
};

export default Login;