import { useState } from 'react';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import '../base.css'; // Importa o CSS onde você criou a classe .fundo-index acima

const Index = () => {
  return (
    // Essa div vai crescer e pintar o fundo de branco
    <div className="fundo-index"> 
        
        {/* Barra de cima (certifique-se que ela tenha z-index alto no CSS) */}
        <header className="barra_cima" style={{ position: 'relative', zIndex: 10 }}>
          <a href="#" className="logo-row">
            <img className="logo" src="images/Logos/LOGO_DEMORO_SITE.png" alt="Logo Demorô" />
          </a>
        </header>

        <div className="hero-section">
  
            <div className="container-text-index">
                <p className="texto-universidade">
                <span className="fonte-vida">Viva o melhor da</span>
                <span className="fonte-universitaria">Vida universitária!</span> 
                </p>
            </div>

            <div className="container-botao">
                <Link to="/home"><button type="button" className="botao-conhecer">Conheça a Demorô!</button></Link>
                <Link to="/login"><button type="button" className="botao-morador">Página do Morador</button></Link>
            </div>

        </div>

    </div>
  );
};

export default Index;