import { useState, useEffect, useRef } from 'react';
import '../data.js';
import FadeIn from '../components/FadeIn.jsx';
import Card from '../components/Card.jsx'
import MoradoresCards from '../components/MoradoresCards.jsx';
import { listaMoradores } from '../data.js';
import Header from '../components/Header.jsx';
import Gallery from '../components/Gallery.jsx';
import { Link } from 'react-router-dom';

function Home() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const fecharMenu = () => setMenuAtivo(false);

  return (
    <div>
      <Header>

          <nav
            className={`${menuAtivo ? 'flex' : 'hidden'} absolute right-0 top-full w-full flex-col gap-3 bg-black/90 p-5 text-center text-white font-regular text-rotulo leading-[1.65] tracking-[0.18em] *:rounded-[5px] *:p-2.5 *:transition-colors *:duration-300 *:hover:bg-white/20 *:focus-visible:outline-2 *:focus-visible:outline-white min-[1080px]:static min-[1080px]:flex min-[1080px]:w-auto min-[1080px]:flex-row min-[1080px]:gap-0 min-[1080px]:bg-transparent min-[1080px]:p-0 min-[1080px]:*:px-3 min-[1080px]:*:py-2`}
          >
            <a href="#sobre-nos" onClick={fecharMenu}>SOBRE NÓS</a>
            <a href="#eventos" onClick={fecharMenu}>EVENTOS</a>
            <a href="#moradores" onClick={fecharMenu}>MORADORES</a>
            <a href="#casa" onClick={fecharMenu}>NOSSA CASA</a>
            <Link to="/login" onClick={fecharMenu} className="text-azul-demoro bg-white hover:text-white">ÁREA DO MORADOR</Link>
          </nav>

          <button
            type="button"
            className="flex flex-col gap-[5px] border-0 bg-black p-2 min-[1080px]:hidden"
            onClick={() => setMenuAtivo(!menuAtivo)}
            aria-expanded={menuAtivo}
            aria-label={menuAtivo ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className="h-[3px] w-[25px] rounded-sm bg-white" />
            <span className="h-[3px] w-[25px] rounded-sm bg-white" />
            <span className="h-[3px] w-[25px] rounded-sm bg-white" />
          </button>
      </Header>

      <main>
        <section className="relative bg-black">

          <iframe
            className="block w-full h-full aspect-video md:hidden"
            src="https://www.youtube.com/embed/ZyaM1rqH4c8?autoplay=1&mute=1&playsinline=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <img
            className="block w-full h-auto aspect-[4/3] object-cover md:aspect-auto"
            src="/FOTO_REENCONTRO/foto_churrasco_ex_cortada.webp"
            alt="Foto do churrasco da república"
            id="rep_section"
          />

            <div className="px-6 pt-10 pb-16 text-white text-left md:absolute md:inset-x-0 md:bottom-0 md:px-10 md:pt-25 md:pb-12 md:bg-linear-to-t md:from-black/82 md:to-transparent lg:px-16 lg:pt-35 lg:pb-16">
              <h1 className="text-[clamp(1.75rem,0.5rem_+_5.5vw,7.25rem)] leading-[1.1] text-[#f0f0f0]">
                <FadeIn direcao="x">
                  <span className="block font-headline">Aprecie a Graduação,</span>
                  <span className="block font-handwritten">Deguste a Faculdade.</span>
                  <span className="block font-absolut text-[clamp(0.6875rem,1vw,0.8125rem)] tracking-[0.28em] uppercase text-white/65">SEM MODERAÇÃO</span>
                </FadeIn>
              </h1>
            </div>

        </section>

        <section id="sobre-nos" className="scroll-mt-15 flex flex-col justify-center items-center py-20 px-6 md:py-35 md:px-10 text-center bg-[#f0f0f0]">
          <p className="mb-4 text-rotulo tracking-[0.22em] uppercase text-[#1c1cb8]">
                SÃO CARLOS - DESDE 2005
            </p>
            <h2 className="mb-4 text-[clamp(2.125rem,5.5vw,4.75rem)] text-black">
                <span className="font-headline">Sobre</span><span className="font-handwritten"> Nós</span>
            </h2>
            <p className="w-fit mx-auto max-w-[64ch] text-[clamp(1.1875rem,1.9vw,1.6875rem)] leading-[1.45] text-black">
                Fundada em 2005 por estudantes das Engenharias da USP, a República Demorô é uma das mais tradicionais
                repúblicas universitárias de São Carlos.
            </p>
            <p className="max-w-[64ch] text-[#4a4a4a]">
                Hoje em dia, com moradores dos mais diversos cursos tanto da UFSCar quanto da USP, prezamos pela amizade e
                por partilhar os bons momentos da vida universitária entre nós!
          </p>
        </section>

        <section id="eventos" className="bg-black">
          <FadeIn>
            <h2 className="mb-8 pt-20 px-5 font-headline text-center uppercase text-titulo-secao text-white">
                Nossos Eventos
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col gap-6 mb-10 md:flex-row md:items-center md:max-w-[min(86%,64rem)] md:my-[6%] md:mx-auto lg:my-[5%] lg:gap-10">
              <div className="px-6 text-center md:order-2 md:flex-[1_1_50%] md:px-0">
                <img className="mx-auto mb-4 max-w-[150px] md:mx-0 md:max-w-[170px] lg:max-w-[190px]" src="/images/Logos/Logo_InterREP.webp" alt="Logo InterREP" />
                <p className="mx-auto max-w-[64ch] text-[clamp(1rem,4vw,1.125rem)] leading-[1.6] text-[#e0e0e0] md:text-left md:text-[clamp(1rem,1.6vw,1.125rem)] lg:text-[clamp(1rem,1.2vw,1.3125rem)]">
                  Organizado desde 2005, o Torneio InterREP se trata da maior competição entre Repúblicas de São Carlos. Organizada anualmente por nós, atualmente estamos na XIX Edição do Torneio, que conta com mais de 80 Repúblicas e 750 Atletas, o InterREP se divide em diversas áreas, como Marketing, Financeiro, Patrocínios, Operacional e Presidência.
                </p>
              </div>
              <div className="min-w-0 md:flex-[1_1_50%]">
                <Gallery type='interrep'/>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col gap-6 mb-10 md:flex-row md:items-center md:max-w-[min(86%,64rem)] md:my-[6%] md:mx-auto lg:my-[5%] lg:gap-10">
              <div className="px-6 text-center md:flex-[1_1_50%] md:px-0">
                <img className="mx-auto mb-4 max-w-[150px] md:mx-0 md:max-w-[170px] lg:max-w-[190px]" src="/images/Logos/LOGO_INTERREP_A_FESTA.webp" alt="Logo InterREP A FESTA" />
                <p className="mx-auto max-w-[64ch] text-[clamp(1rem,4vw,1.125rem)] leading-[1.6] text-[#e0e0e0] md:text-left md:text-[clamp(1rem,1.6vw,1.125rem)] lg:text-[clamp(1rem,1.2vw,1.3125rem)]">
                  Ao final do Torneio, sempre organizamos um evento de finalização do campeonato. O InterREP - A Festa se trata de um momento de comemoração, feito tanto para os ganhadores da competição, quanto feito para nós mesmos, com o objetivo de comemorarmos a finalização de um torneio trabalhoso para nós. Na última edição, contamos com a participação de 300 pessoas, com direito a entrega dos troféus para os campeões num clima perfeito de tardezinha, cerveja e piscina.
                </p>
              </div>
              <div className="min-w-0 md:flex-[1_1_50%]">
                <Gallery type='festa'/>
              </div>
            </div>
          </FadeIn>

          <div className="text-center bg-white text-[#333] md:relative md:flex md:min-h-[max(70svh,420px)] md:text-white md:bg-transparent lg:min-h-[85svh]">
            <div className="md:absolute md:inset-0">
              <img className="block w-full h-auto md:h-full md:object-cover" src="/FOTOS_CHURRAS_PAIS/FOTO_CHURRAS_PAIS.webp" alt="Foto do Churrasco dos Pais" />
            </div>
            <div className="p-6 md:relative md:flex md:flex-col md:justify-start md:w-full md:p-12 md:bg-linear-to-b md:from-black/100 md:via-black/10 md:via-40% md:to-transparent md:[text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
              <p className="mb-4 font-headline text-titulo-churras md:text-left">Churrasco dos Pais</p>
              <p className="mx-auto max-w-[54ch] font-regular text-churras leading-[1.6] md:mx-0 md:text-left">
                Muito mais que uma República, a Demorô também é uma família. Por isso, todo ano organizamos nosso Churrasco de Pais aqui! Com a presença dos pais dos moradores, esse é um momento de extrema importância entre nós, estreitando os laços entre nossas famílias e nossa República!
              </p>
              <p className="mt-4 font-handwritten text-assinatura md:self-end md:text-right">Muito mais que uma República</p>
            </div>
          </div>

          <div className="text-center bg-white text-[#333] md:relative md:flex md:min-h-[max(70svh,420px)] md:text-white md:bg-transparent lg:min-h-[85svh]">
            <div className="md:absolute md:inset-0">
              <img className="block w-full h-auto md:h-full md:object-cover" src="/FOTO_REENCONTRO/foto_churrasco_ex.webp" alt="Foto do nosso Reencontro 2025" />
            </div>

            <div className="p-6 md:relative md:flex md:flex-col md:justify-end md:w-full md:p-12 md:bg-linear-to-t md:from-black/85 md:via-black/50 md:via-45% md:to-transparent md:[text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
              <p className="mb-2 font-headline text-titulo-churras md:text-left">Churrasco de Ex-Moradores</p>
              <p className="mx-auto max-w-[60ch] font-regular text-churras leading-[1.6] md:mx-0 md:text-left">
                Anualmente, realizamos nosso tradicional Reencontro de Ex-Moradores. Aqui é onde percebemos a importância e a história da nossa República.<br />
                Compartilhando experiências, conhecendo melhor quem nós somos, nosso legado e como surgimos, nosso Reencontro é um momento extremamente especial e fundamental para nossa formação como Demorônios.<br />
                Regado à chopp, churrasco de alta qualidade e muita resenha, definitivamente é uma oportunidade única na vida de um universitário.
              </p>
              <p className="mt-4 font-handwritten text-[clamp(1.75rem,5vw,3rem)] md:self-end md:text-right">Uma família</p>
            </div>
          </div>
        </section>

        <section id="moradores" className="scroll-mt-15 py-20 px-6 md:py-35 md:px-10 bg-creme text-[#333] text-center">
          <p className="mb-4 text-rotulo tracking-[0.22em] uppercase text-azul-demoro">QUEM MORA AQUI</p>
          <h2 className="mb-[30px] font-headline uppercase text-titulo-secao text-black">Moradores</h2>
          <MoradoresCards data={listaMoradores} />
        </section>

        <section id="casa" className="scroll-mt-15 py-20 px-6 md:py-35 md:px-10 bg-azul-demoro">
          <FadeIn>
            <h2 className="mb-8 px-5 font-headline text-center uppercase text-titulo-secao text-creme">
              Nossa Casa
            </h2>
            <div className="flex flex-col items-center">
              <Link
                to="/casa"
                className="flex justify-center max-w-full px-8 py-5 bg-creme text-black text-center font-absolut text-rotulo tracking-[0.2em] transition-colors duration-400 hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:px-16 md:py-6"
              >
                CONHEÇA MAIS!
              </Link>
            </div>
          </FadeIn>
        </section>

      </main>
    </div>
  );
}

export default Home;