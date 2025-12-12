// Arquivo: src/Home.jsx

import { useState, useEffect, useRef } from 'react';
import '../base.css';
import '../data.js';
import FadeIn from '../components/FadeIn.jsx';
import Card from '../components/Card.jsx'
import MoradoresCards from '../components/MoradoresCards.jsx';
import { listaMoradores } from '../data.js';


function Home() {
    const [menuAtivo, setMenuAtivo] = useState(false);

    // Função para fechar o menu ao clicar em um link
    const fecharMenu = () => setMenuAtivo(false);

    return (
      <div>
        <header className="barra_cima">
          <a href="#" class="logo-row">
            <img className="logo" src="/images/Logos/LOGO_DEMORO_SITE.png" alt="Logo Demorô" />
          </a>

          <nav className={`menu ${menuAtivo ? 'active' : ''}`}>
            <a href="#sobre-nos" onClick={fecharMenu}>Sobre Nós</a>
            <a href="#eventos" onClick={fecharMenu}>Eventos</a>
            <a href="#moradores" onClick={fecharMenu}>Moradores</a>
            <a href="casa.html">Nossa Casa</a>
          </nav>

          <div 
            className={`hamburger ${menuAtivo ? 'active' : ''}`} 
            onClick={() => setMenuAtivo(!menuAtivo)}
          >
          </div>
        </header>

        <main>
          <section className="crop">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/ZyaM1rqH4c8?autoplay=1&mute=1&playsinline=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <img 
              className="foto_churrasco_ex" 
              src="FOTO_REENCONTRO/foto_churrasco_ex_cortada.png" 
              alt="Foto do churrasco da república" 
              id="rep_section" 
            />

            <span className="titulo-rep-demoro">
              <span className="fonte-sobre">Aprecie a Graduação,</span>
              <span className="fonte-nos">Deguste a Faculdade.</span>
              <span className="fonte-moderacao">(Sem Moderação)</span>
            </span>
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
                  <img className="logo-torneio-interrep" src="images/Logos/Logo_InterREP.png" alt="Logo InterREP" />
                  <p className="texto-torneio-interrep">
                    Organizado desde 2005, o Torneio InterREP se trata da maior competição entre Repúblicas de São Carlos. Organizada anualmente por nós, atualmente estamos na XIX Edição do Torneio, que conta com mais de 80 Repúblicas e 750 Atletas, o InterREP se divide em diversas áreas, como Marketing, Financeiro, Patrocínios, Operacional e Presidência.
                  </p>
                </div>
                <div className="fotos-interrep">
                  <figure><img src="Fotos_InterREP/Fotos Final 2/FOTO_DTV.jpg" alt="Foto DTV" /></figure>
                  <figure><img src="Fotos_InterREP/Fotos Final 2/FOTO_TROFEU.jpg" alt="Foto TROFEU" /></figure>
                  <figure><img src="Fotos_InterREP/Fotos Final 2/FOTO_BORA_BORA.jpg" alt="Foto Bora Bora" /></figure>
                  <figure><img src="Fotos_InterREP/Fotos Final 2/FOTO_ARTILHEIRO.jpg" alt="Foto Artilheiro" /></figure>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="sobre-a-festa">
                <div className="conteudo-texto-festa">
                  <img className="logo-a-festa" src="images/Logos/LOGO_INTERREP_A_FESTA.png" alt="Logo InterREP A FESTA" />
                  <p className="texto-a-festa">
                    Ao final do Torneio, sempre organizamos um evento de finalização do campeonato. O InterREP - A Festa se trata de um momento de comemoração, feito tanto para os ganhadores da competição, quanto feito para nós mesmos, com o objetivo de comemorarmos a finalização de um torneio trabalhoso para nós. Na última edição, contamos com a participação de 300 pessoas, com direito a entrega dos troféus para os campeões num clima perfeito de tardezinha, cerveja e piscina.
                  </p>
                </div>
                <div className="fotos-a-festa">
                  <figure><img src="Fotos InterREP A Festa/PLACA.jpeg" alt="Foto Placa" /></figure>
                  <figure><img src="Fotos InterREP A Festa/DTV.jpeg" alt="Foto DTV" /></figure>
                  <figure><img src="Fotos InterREP A Festa/VDN.jpeg" alt="Foto VDN" /></figure>
                  <figure><img src="Fotos InterREP A Festa/TPD.jpeg" alt="Foto TPD" /></figure>
                </div>
              </div>
            </FadeIn>

            <div className="sobre-churras-dos-pais">
              <div className="background-churras-pais">
                <img src="./FOTOS_CHURRAS_PAIS/FOTO_CHURRAS_PAIS.jpeg" alt="Foto do Churrasco dos Pais" />
              </div>

              <div className="conteudo-churras-pais">
                <p className="titulo-churras-pais">Churrasco dos Pais</p>
                <p className="texto-churras-pais">
                  Muito mais que uma República, a Demorô também é uma família. Por isso, todo ano organizamos nosso Churrasco de Pais aqui! Com a presença dos pais dos moradores, esse é um momento de extrema importância entre nós, estreitando os laços entre nossas famílias e nossa República!
                </p>
                <p className="muito-mais-rep">Muito mais que uma República</p>
              </div>
            </div>

            <div className="sobre-churras-ex-moradores">
              <div className="background-churras-ex-moradores">
                <img src="FOTO_REENCONTRO/foto_churrasco_ex.jpeg" alt="Foto do nosso Reencontro 2025" />
              </div>

              <div className="conteudo-churras-ex-moradores">
                <p className="titulo-churras-ex-moradores">Churrasco de Ex-Moradores</p>
                <p className="texto-churras-ex-moradores">
                  Anualmente, realizamos nosso tradicional Reencontro de Ex-Moradores. Aqui é onde percebemos a importância e a história da nossa República.<br />
                  Compartilhando experiências, conhecendo melhor quem nós somos, nosso legado e como surgimos, nosso Reencontro é um momento extremamente especial e fundamental para nossa formação como Demorônios.<br />
                  Regado à chopp, churrasco de alta qualidade e muita resenha, definitivamente é uma oportunidade única na vida de um universitário.
                </p>
                <p className="muito-mais-rep">Uma família</p>
              </div>
            </div>
          </section>

          

          <section id="moradores" className="moradores">
            <div className="titulo-moradores"><span>Moradores</span></div>
            {<MoradoresCards data={listaMoradores}/>}
            
          </section>

          <section id="casa" className="casa-section">
            <FadeIn>
              <p className="titulo-nossa-casa">
                Nossa Casa
              </p>
              <div className="sobre-casa">
                <button onClick={() => window.location.href = 'casa.html'} className="conteudo-casa">
                  Ficou curioso? Clique aqui!
                </button>
              </div>
            </FadeIn>
          </section>

        </main>
      </div>
    );
  }

  export default Home;