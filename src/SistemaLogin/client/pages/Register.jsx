import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import Header from '../components/Header.jsx';
import '../base.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Estados da interface
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro(''); // Limpa o erro da tentativa anterior

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setErro('Preencha todos os campos.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErro('As senhas não conferem.');
      return;
    }

    try {
      await api.post('/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      });

      alert('Cadastro realizado com sucesso! Agora é só entrar.');
      navigate('/login', { replace: true });

    } catch (error) {
      console.log(error);
      setErro(error.response?.data?.msg || 'Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <div className="flex min-h-dvh flex-col">
      <Header/>

      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 pt-25 pb-10">
        <section className="grid w-full max-w-[420px] gap-4 rounded-xl bg-white p-6 font-[Absolut] shadow-[0_8px_24px_rgb(0_4_113/0.16)]">
          <h1 className="font-['AbsolutHandwritten'] text-4xl leading-none text-[#000471]">Crie sua conta</h1>
          <p className="text-[#4a4f6e]">Cadastre-se para acessar a área do morador.</p>

          <form onSubmit={handleSubmit} noValidate className="grid gap-4">
            {/* APELIDO */}
            <div className="grid gap-1">
              <label htmlFor="name" className="font-bold text-[#000471]">Apelido</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="nickname"
                value={formData.name}
                onChange={handleChange}
                className="min-h-[44px] w-full rounded-lg border-2 border-[#000471] bg-white px-3 py-2 text-[#10132e] placeholder:text-[#8a8fae] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-1 focus-visible:outline-[#1c21b8]"
              />
            </div>

            {/* E-MAIL */}
            <div className="grid gap-1">
              <label htmlFor="email" className="font-bold text-[#000471]">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="apelido@email.com"
                value={formData.email}
                onChange={handleChange}
                className="min-h-[44px] w-full rounded-lg border-2 border-[#000471] bg-white px-3 py-2 text-[#10132e] placeholder:text-[#8a8fae] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-1 focus-visible:outline-[#1c21b8]"
              />
            </div>

            {/* SENHA */}
            <div className="grid gap-1">
              <label htmlFor="password" className="font-bold text-[#000471]">Senha</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={mostrarSenha ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
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

            {/* CONFIRMAR SENHA */}
            <div className="grid gap-1">
              <label htmlFor="confirmPassword" className="font-bold text-[#000471]">Confirme a senha</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={mostrarSenha ? 'text' : 'password'}
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="min-h-[44px] w-full rounded-lg border-2 border-[#000471] bg-white px-3 py-2 text-[#10132e] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-1 focus-visible:outline-[#1c21b8]"
              />
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
              Cadastrar
            </button>
          </form>

          <p className="text-sm text-[#4a4f6e]">
            Já tem conta?{' '}
            <Link to="/login" className="text-[#000471] underline underline-offset-4">Faça login</Link>
          </p>
        </section>

        <Link to="/home" className="font-[Absolut] text-[#000471] underline-offset-4 hover:underline">
          ‹ Voltar para o site
        </Link>
      </main>
    </div>
  );
};

export default Register;