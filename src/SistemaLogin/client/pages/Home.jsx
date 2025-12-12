// Arquivo: src/pages/Home.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importante para navegar
import '../base.css';
import FadeIn from '../components/FadeIn.jsx';
import MoradoresCards from '../components/MoradoresCards.jsx';
import { listaMoradores } from '../data.js'; // Certifique-se que esse arquivo existe ou use o do banco

function Home() {
    const [menuAtivo, setMenuAtivo] = useState(false);
    const navigate = useNavigate(); // Hook para mudar de página

    // Função para fechar o menu ao clicar
    const fecharMenu = () => setMenuAtivo(false);

    // Função para rolar até a seção
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        fecharMenu();
    };

    return (
      <div>
        <header className="barra_cima">
          <div className="logo-row">
            <img className="logo" src="/images/Logos/LOGO_DEMORO_SITE.png" alt="Logo Demorô" />
          </div>

          <nav className={`menu ${menuAtivo ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('hero')} style={{background:'none', border:'none', color:'white', fontSize:'1.2rem', cursor:'pointer'}}>Início</button>
            <button onClick={() => scrollToSection('sobre-nos')} style={{background:'none', border:'none', color:'white', fontSize:'1.2rem', cursor:'pointer'}}>Sobre Nós</button>
            <button onClick={() => scrollToSection('eventos')} style={{background:'none', border:'none', color:'white', fontSize:'1.2rem', cursor:'pointer'}}>Eventos</button>
            <button onClick={() => scrollToSection('moradores')} style={{background:'none', border:'none', color:'white', fontSize:'1.2rem', cursor:'pointer'}}>Moradores</button>
            {/* Link direto para Login no menu também */}
            <button onClick={() => navigate('/login')} style={{background:'none', border:'none', color:'#1c21b8', fontWeight:'bold', fontSize:'1.2rem', cursor:'pointer'}}>Login</button>
          </nav>

          <div 
            className={`hamburger ${menuAtivo ? 'active' : ''}`} 
            onClick={() => setMenuAtivo(!menuAtivo)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>

        <main>
          <section className="crop" id="hero">
            {/* Vídeo apenas desktop (controlado pelo CSS) */}
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/ZyaM1rqH4c8?autoplay=1&mute=1&playsinline=1&loop=1&playlist=ZyaM1rqH4c8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Imagem Mobile (controlado pelo CSS) */}
            <img 
              className="foto_churrasco_ex" 
              src="/FOTO_REENCONTRO/foto_churrasco_ex_cortada.png" 
              alt="Foto do churrasco da república" 
            />

            {/* Texto + Botões de Ação */}
            <div className="titulo-rep-demoro">
              <span className="fonte-sobre">Aprecie a Graduação,</span>
              <span className="fonte-nos">Deguste a Faculdade.</span>
              
              {/* OS BOTÕES IMPORTANTES AQUI */}
              <div className="container-botao">
                  <button onClick={() => scrollToSection('sobre-nos')} className="botao-conhecer">
                      Conheça a Demorô!
                  </button>
                  <button onClick={() => navigate('/login')} className="botao-morador">
                      Área do Morador
                  </button>
              </div>
            </div>
          </section>

          <section id="sobre-nos" className="sobre-nos-section">
            <p className="titulo-sobre-nos">
              <span className="fonte-sobre">Sobre</span>
              <span className="fonte-nos">Nós</span>
            </p>
            <p className="sobre-nos">
              Fundada em 2005 por estudantes das Engenharias da USP, a República Demorô é uma das mais tradicionais
              repúblicas universitárias de São Carlos.
              Hoje em dia, com moradores dos mais diversos cursos tanto da UFSCar quanto da USP, prezamos pela amizade e
              por partilhar os bons momentos da vida universitária entre nós!
            </p>
          </section>

          <section id="eventos" className="eventos-section">
            <FadeIn>
              <p className="titulo-nossos-eventos">
                Nossos Eventos
              </p>
            </FadeIn>

            <FadeIn>
              <div className="sobre-torneio-interrep">
                <div className="conteudo-texto">
                  <img className="logo-torneio-interrep" src="/images/Logos/Logo_InterREP.png" alt="Logo InterREP" />
                  <p className="texto-torneio-interrep">
                    Organizado desde 2005, o Torneio InterREP se trata da maior competição entre Repúblicas de São Carlos. Organizada anualmente por nós, atualmente estamos na XIX Edição do Torneio, que conta com mais de 80 Repúblicas e 750 Atletas.
                  </p>
                </div>
                <div className="fotos-interrep">
                  <figure><img src="/Fotos_InterREP/Fotos Final 2/FOTO_DTV.jpg" alt="Foto DTV" /></figure>
                  <figure><img src="/Fotos_InterREP/Fotos Final 2/FOTO_TROFEU.jpg" alt="Foto TROFEU" /></figure>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="sobre-a-festa">
                <div className="conteudo-texto-festa">
                  <img className="logo-a-festa" src="/images/Logos/LOGO_INTERREP_A_FESTA.png" alt="Logo InterREP A FESTA" />
                  <p className="texto-a-festa">
                    Ao final do Torneio, sempre organizamos um evento de finalização do campeonato. O InterREP - A Festa se trata de um momento de comemoração...
                  </p>
                </div>
                <div className="fotos-a-festa">
                  <figure><img src="/Fotos InterREP A Festa/PLACA.jpeg" alt="Foto Placa" /></figure>
                  <figure><img src="/Fotos InterREP A Festa/DTV.jpeg" alt="Foto DTV" /></figure>
                </div>
              </div>
            </FadeIn>

            <div className="sobre-churras-dos-pais">
              <div className="background-churras-pais">
                <img src="/FOTOS_CHURRAS_PAIS/FOTO_CHURRAS_PAIS.jpeg" alt="Foto do Churrasco dos Pais" />
              </div>
              <div className="conteudo-churras-pais">
                <p className="titulo-churras-pais">Churrasco dos Pais</p>
                <p className="texto-churras-pais">
                  Muito mais que uma República, a Demorô também é uma família...
                </p>
                <p className="muito-mais-rep">Muito mais que uma República</p>
              </div>
            </div>

            <div className="sobre-churras-ex-moradores">
              <div className="background-churras-ex-moradores">
                <img src="/FOTO_REENCONTRO/foto_churrasco_ex.jpeg" alt="Foto do nosso Reencontro 2025" />
              </div>
              <div className="conteudo-churras-ex-moradores">
                <p className="titulo-churras-ex-moradores">Reencontro de Ex-Moradores</p>
                <p className="texto-churras-ex-moradores">
                  Anualmente, realizamos nosso tradicional Reencontro...
                </p>
                <p className="muito-mais-rep">Uma família</p>
              </div>
            </div>
          </section>

          <section id="moradores" className="moradores">
            <div className="titulo-moradores"><span>Moradores</span></div>
            <MoradoresCards data={listaMoradores}/>
          </section>

          <section id="casa" className="casa-section">
            <FadeIn>
              <p className="titulo-nossa-casa">
                Quer fazer parte?
              </p>
              <div className="sobre-casa">
                {/* Redireciona para Cadastro */}
                <button onClick={() => navigate('/register')} className="conteudo-casa">
                  Inscreva-se no Processo Seletivo!
                </button>
                <div className="foto-casa">
                     {/* Adicione uma foto da casa aqui se tiver, ou deixe vazio */}
                </div>
              </div>
            </FadeIn>
          </section>

        </main>
      </div>
    );
}

export default Home;