import { useState } from 'react';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import '../base.css';
import { tarefasMoradores } from '../data';
import TarefaMorador from '../components/TarefaMorador';
import Tarefa from '../components/Tarefa';

function MoradorPage (){
    const [menuAtivo, setMenuAtivo] = useState(false);

    // Função para fechar o menu ao clicar em um link
    const fecharMenu = () => setMenuAtivo(false);


    return (
        

        <div className="page-morador">
            <header className="barra_cima">
                <a href="#" className="logo-row">
                    <img className="logo" src="images/Logos/LOGO_DEMORO_SITE.png" alt="Logo Demorô" />
                </a>

                <div 
                    className={`hamburger ${menuAtivo ? 'active' : ''}`} 
                    onClick={() => setMenuAtivo(!menuAtivo)}
                ></div>
            </header>

            <div className="ola-morador">

            </div>

            <div className="tarefas">
                <span className="texto-tarefas">Tarefas da semana</span> 
            </div>    
            <section id="tarefas" className="tarefas">
                {<TarefaMorador dado={tarefasMoradores}/>}
            </section>
        

        </div>
    );
}

export default MoradorPage;