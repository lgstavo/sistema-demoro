import { useState } from 'react';
import '../base.css';
import FadeIn from '../components/FadeIn.jsx';
import Header from '../components/Header.jsx';

/* Classes reaproveitadas (mesmas do HTML) */
const tituloSecao = 'mb-8 pt-20 px-5 font-headline text-center uppercase text-titulo-secao text-black';
const conteudoSecao = 'mx-auto max-w-6xl flex flex-col gap-7.5 md:flex-row md:items-center md:gap-10';
const textoSecao =
  'flex flex-col gap-4 text-left text-[clamp(1rem,4vw,1.125rem)] leading-[1.6] md:flex-1 md:justify-center md:text-[clamp(1rem,1.5vw,1.25rem)]';
const galeria = 'grid gap-2 w-full md:flex-[1.2]';

/* Equivalente ao .foto-galeria do HTML */
function Foto({ src, alt, className = '', imgClassName = '' }) {
  return (
    <figure className={`group aspect-[3/4] overflow-hidden ${className}`}>
      <img
        className={`block size-full object-cover transition-[filter,scale] duration-[400ms,600ms] [@media(hover:hover)]:grayscale-[0.35] group-hover:grayscale-0 motion-safe:group-hover:scale-[1.04] motion-reduce:transition-none ${imgClassName}`}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

function Casa() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const fecharMenu = () => setMenuAtivo(false);

  return (
    <div className="w-full overflow-x-hidden bg-creme text-black font-absolut">
      <Header>
        <nav
          id="menu"
          aria-label="Menu principal"
          className={`${menuAtivo ? 'flex' : 'hidden'} absolute top-full right-0 w-50 flex-col gap-3 p-5 bg-black/90 text-center text-white font-absolut text-rotulo uppercase tracking-[0.18em] leading-[1.65] *:p-2.5 *:rounded-[5px] *:transition-colors *:duration-300 *:hover:bg-white/20 *:focus-visible:outline-2 *:focus-visible:outline-offset-2 *:focus-visible:outline-white min-[1080px]:static min-[1080px]:flex min-[1080px]:w-auto min-[1080px]:flex-row min-[1080px]:gap-0 min-[1080px]:p-0 min-[1080px]:bg-transparent min-[1080px]:*:px-3 min-[1080px]:*:py-2`}
        >
          <a href="#sala" onClick={fecharMenu}>Sala</a>
          <a href="#quartos" onClick={fecharMenu}>Quartos</a>
          <a href="#cozinha" onClick={fecharMenu}>Cozinha</a>
          <a href="#sala_de_estudos" onClick={fecharMenu}>Sala de Estudos</a>
          <a href="#area_de_lazer" onClick={fecharMenu}>Lazer</a>
          <a href="#entre-em-contato" onClick={fecharMenu}>Entre em Contato</a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-[5px] p-2.5 -mr-2.5 border-0 bg-black cursor-pointer focus-visible:outline-2 focus-visible:outline-white min-[1080px]:hidden"
          onClick={() => setMenuAtivo(!menuAtivo)}
          aria-expanded={menuAtivo}
          aria-controls="menu"
          aria-label={menuAtivo ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className="block w-[25px] h-[3px] bg-white rounded-[2px]" />
          <span className="block w-[25px] h-[3px] bg-white rounded-[2px]" />
          <span className="block w-[25px] h-[3px] bg-white rounded-[2px]" />
        </button>
      </Header>

      <main>
        {/* HERO */}
        <section className="pb-7.5 text-center bg-creme md:relative md:pb-0">
          <div className="relative w-full aspect-[9/16] overflow-hidden md:hidden">
            <iframe
              className="absolute inset-0 size-full border-0"
              src="https://www.youtube.com/embed/oga8HZO6ivw"
              title="Vídeo da República Demorô"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <img
            className="block w-full h-auto"
            src="/FOTOS_CASA/Escada%20(2)%20(2).jpg"
            alt="Foto da fachada da casa"
            fetchPriority="high"
          />


          
            <div className="px-6 pt-10 pb-16 text-white text-left md:absolute md:inset-x-0 md:bottom-0 md:px-10 md:pt-25 md:pb-12 md:bg-linear-to-t md:from-black/82 md:to-transparent lg:px-16 lg:pt-35 lg:pb-16">
              <h1 className="text-[clamp(1.75rem,0.5rem_+_5.5vw,7.25rem)] leading-[1.1] text-[#f0f0f0]">
                <FadeIn direcao="x">
                  <span className="block font-handwritten">NOSSA CASA</span>
                </FadeIn>
              </h1>
            </div>
        </section>

        {/* SALA */}
        <section id="sala" className="scroll-mt-15 py-20 px-6 md:py-35 md:px-10">
          <FadeIn>
            <h2 className={`${tituloSecao} font-headline`}>Sala</h2>
          </FadeIn>
          <div className={conteudoSecao}>
            <FadeIn className="w-full md:flex-[1.2]">
              <div className={`${galeria} grid-cols-2 md:grid-cols-2`}>
                <Foto
                  className="col-span-full aspect-[4/3] md:col-auto md:aspect-[3/4]"
                  src="/FOTOS_CASA/foto_sala.jpeg"
                  alt="Sala principal da república"
                />
                <Foto src="/FOTOS_CASA/foto_sala_2.jpeg" alt="Sala da república, outro ângulo" />
                <Foto src="/FOTOS_CASA/foto_sala_recente.jpeg" alt="Sala da república, foto recente" />
              </div>
            </FadeIn>
            <div className="mx-auto max-w-[64ch] text-[clamp(1rem,4vw,1.125rem)] leading-[1.6] text-black md:text-left md:text-[clamp(1rem,1.6vw,1.125rem)] lg:text-[clamp(1rem,1.2vw,1.3125rem)]">
              <p>Temos 2 salas bem espaçosas!</p>
              <p>Na sala principal, possuímos uma TV de 50 polegadas e é onde nos reunimos todos os dias para almoçarmos juntos, fazer aquela resenha e assistir a alguns filmes!</p>
              <p>Na salinha é onde tiramos um tempo para relaxar dos estudos e nos divertimos um pouco. Nela, temos mais uma TV de 45 polegadas, PS4 com inúmeros jogos e 3 sofás!</p>
            </div>
          </div>
        </section>

        {/* QUARTOS */}
        <section id="quartos" className="scroll-mt-15 py-20 px-6 md:py-35 md:px-10">
          <FadeIn>
            <h2 className={`${tituloSecao} font-headline`}>Quartos</h2>
          </FadeIn>
          <div className={conteudoSecao}>
            <div className="mx-auto max-w-[64ch] text-[clamp(1rem,4vw,1.125rem)] leading-[1.6] text-black md:text-left md:text-[clamp(1rem,1.6vw,1.125rem)] lg:text-[clamp(1rem,1.2vw,1.3125rem)]">
              <p>Nossa casa possui 8 quartos amplos, todos equipados com armários e mesas de estudo para garantir conforto e praticidade.</p>
            </div>
            <FadeIn className="w-full md:flex-[1.2]">
              <div className={`${galeria} grid-cols-2 md:grid-cols-3`}>
                <Foto
                  className="col-span-full aspect-[4/3] md:relative md:col-span-2 md:aspect-auto"
                  imgClassName="md:absolute md:inset-0"
                  src="/FOTOS_CASA/quarto_bixos.jpeg"
                  alt="Quarto dos bixos"
                />
                <Foto src="/FOTOS_CASA/quarto_corredor.jpeg" alt="Quarto do corredor" />
                <Foto src="/FOTOS_CASA/quarto-cozinha.jpeg" alt="Quarto da cozinha" />
                <Foto src="/FOTOS_CASA/quarto_bixos_2.jpeg" alt="Quarto dos bixos, outro ângulo" />
                <Foto src="/FOTOS_CASA/quarto_corredor_2.jpeg" alt="Quarto do corredor, outro ângulo" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* COZINHA */}
        <section id="cozinha" className="scroll-mt-15 py-20 px-6 md:py-35 md:px-10">
          <FadeIn>
            <h2 className={`${tituloSecao} font-handwritten`}>Cozinha</h2>
          </FadeIn>
          <div className={conteudoSecao}>
            <FadeIn className="w-full md:flex-[1.2]">
              <div className={`${galeria} grid-cols-2`}>
                <Foto src="/FOTOS_CASA/foto_cozinha_2.jpeg" alt="Cozinha da república, outro ângulo" />
                <Foto src="/FOTOS_CASA/foto_cozinha.jpeg" alt="Cozinha da república" />
              </div>
            </FadeIn>
            <div className={textoSecao}>
              <p>Possuímos uma cozinha ampla, com diversos armários para a divisão entre os moradores e 1 fogão industrial.</p>
              <p>Também possuímos Air-Fryer, 2 geladeiras, microondas, forno elétrico e tudo que é necessário para fazermos nossas refeições aos finais de semana.</p>
            </div>
          </div>
        </section>

        {/* SALA DE ESTUDOS */}
        <section id="sala_de_estudos" className="scroll-mt-15 py-20 px-6 md:py-35 md:px-10">
          <FadeIn>
            <h2 className={`${tituloSecao} font-headline`}>Sala de Estudos</h2>
          </FadeIn>
          <div className={conteudoSecao}>
            <div className={textoSecao}>
              <p>Nossa sala de estudos fica afastada de todo o restante da casa.</p>
              <p>Equipada com mesas, cadeiras e uma rede para dar aquela descansada de vez em quando, aqui é o ambiente perfeito para fazer reuniões, estudar e dar uma deitada na rede nos momentos de cansaço.</p>
            </div>
            <FadeIn className="w-full md:flex-[1.2]">
              <div className={`${galeria} grid-cols-1`}>
                <Foto src="/FOTOS_CASA/sala_de_estudos.jpeg" alt="Sala de estudos da república" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ÁREA DE LAZER */}
        <section id="area_de_lazer" className="scroll-mt-15 py-20 px-6 md:py-35 md:px-10">
          <FadeIn>
            <h2 className={`${tituloSecao} font-handwritten`}>Área de Lazer e Piscina</h2>
          </FadeIn>
          <div className={conteudoSecao}>
            <FadeIn className="w-full md:flex-[1.2]">
              <div className={`${galeria} grid-cols-2`}>
                <Foto src="/FOTOS_CASA/quintal_1.jpeg" alt="Quintal da república" />
                <Foto src="/FOTOS_CASA/varanda.jpeg" alt="Varanda da república" />
                <Foto src="/FOTOS_CASA/Escada%20(2)%20(2).jpg" alt="Piscina da república" />
                <Foto src="/FOTOS_CASA/piscina_2.jpeg" alt="Piscina da república, outro ângulo" />
              </div>
            </FadeIn>
            <div className={textoSecao}>
              <p>Aqui é onde passamos a maior parte dos nossos finais de semana!</p>
              <p>Nosso quintal é um dos maiores entre as Repúblicas de São Carlos, com mais de 1200 m²! Nele, fazemos nossos Churrascos de Ex-Moradores e dos Pais, perfeito para um dia de churrasco, chopp e muita conversa.</p>
              <p>Na nossa área de piscina nos reunimos quase todos os finais de semana para fazermos um churrasco entre nós nos dias ensolarados.</p>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="entre-em-contato" className="scroll-mt-15 py-20 px-6 md:py-35 md:px-10">
          <div className="flex flex-col items-center">
            <FadeIn>
              <h2 className="mb-8 font-handwritten text-center uppercase text-titulo-secao leading-[1.1]">
                Quer viver essa experiência única na sua vida?
              </h2>
            </FadeIn>
            <a
              className="inline-block max-w-full px-8 py-5 bg-azul-demoro text-creme text-center font-absolut text-[0.8125rem] leading-[1.4] tracking-[0.2em] uppercase transition-colors duration-400 hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black md:px-16 md:py-6 md:text-[clamp(0.8125rem,1vw,0.9375rem)]"
              href="https://wa.me/5511943996754"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vem ser feliz na Demorô!
            </a>
          </div>
        </section>
      </main>

      <footer id="footer-demoro" className="p-6 font-handwritten text-[clamp(0.875rem,2vw,1.25rem)] leading-[1.4]">
        <p>República Demorô</p>
        <p>Desde 2005</p>
      </footer>
    </div>
  );
}

export default Casa;
