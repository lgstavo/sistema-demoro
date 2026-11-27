import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api.js';
import Header from '../components/Header.jsx';
import '../base.css';

const Login = () => {
  // 1. Estados para guardar o que é digitado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estados da interface
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');

  const navigate = useNavigate(); // Hook para mudar de página

  const handleSubmit = async (e) => {
    e.preventDefault(); // Não deixa a página recarregar
    setErro(''); // Limpa o erro da tentativa anterior

    // Campos vazios: nem chama o backend
    if (!email || !password) {
      setErro('Preencha o e-mail e a senha.');
      return;
    }

    try {
      // 2. O pedido para o backend
      const response = await api.post('/auth/login', {
        email: email,
        password: password
      });

      // 3. A resposta (o token)
      const token = response.data.token;
      const userId = response.data.user_id;

      // 4. Guardando no localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      // 5. Redirecionar para a área logada
      navigate('/morador');

    } catch (error) {
      setErro(error.response?.data?.msg || 'E-mail ou senha inválidos.');
    }
  };

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 pt-25 pb-10">
        <section className="grid w-full max-w-[420px] gap-4 rounded-xl bg-white p-6 font-[Absolut] shadow-[0_8px_24px_rgb(0_4_113/0.16)]">
          <h1 className="font-['AbsolutHandwritten'] text-4xl leading-none text-[#000471]">Área do morador</h1>
          <p className="text-[#4a4f6e]">Entre para ver e marcar as tarefas da semana.</p>

          <form onSubmit={handleSubmit} noValidate className="grid gap-4">
            {/* E-MAIL */}
            <div className="grid gap-1">
              <label htmlFor="email" className="font-bold text-[#000471]">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="apelido@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-h-[44px] w-full rounded-lg border-2 border-[#000471] bg-white px-3 py-2 text-[#10132e] placeholder:text-[#8a8fae] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-1 focus-visible:outline-[#1c21b8]"
              />
            </div>

            {/* SENHA */}
            <div className="grid gap-1">
              <label htmlFor="senha" className="font-bold text-[#000471]">Senha</label>
              <div className="relative">
                <input
                  id="senha"
                  name="senha"
                  type={mostrarSenha ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="min-h-[44px] w-full rounded-lg border-2 border-[#000471] bg-white py-2 pl-3 pr-24 text-[#10132e] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-1 focus-visible:outline-[#1c21b8]"
                />
                <button
                  type="button"
                  aria-pressed={mostrarSenha}
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-lg px-3 py-1 text-sm text-[#1c21b8] hover:bg-[#eef1ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1c21b8]"
                >
                  {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            </div>

            {/* ERRO: só aparece quando "erro" tem texto */}
            {erro && (
              <p
                role="alert"
                className="rounded-lg border-l-4 border-[#b42318] bg-[#fde8e6] px-4 py-3 text-[#b42318]"
              >
                {erro}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#1c21b8] px-5 font-bold text-white transition-colors hover:bg-[#12168a] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#1c21b8]"
            >
              Entrar
            </button>
          </form>

          <p className="text-sm text-[#4a4f6e]">
            Não tem conta?{' '}
            <Link to="/register" className="text-[#000471] underline underline-offset-4">Cadastre-se aqui</Link>
          </p>
        </section>

        <Link to="/home" className="font-[Absolut] text-[#000471] underline-offset-4 hover:underline">
          ‹ Voltar para o site
        </Link>
      </main>
    </div>
  );
};

export default Login;