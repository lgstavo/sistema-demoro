import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../base.css';

const Admin = () => {
    const [tarefa, setTarefa] = useState('');
    const [dia, setDia] = useState(''); 
    const [horario, setHorario] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        carregarTarefas();
    }, []);

    const carregarTarefas = async () => {
        try {
            const response = await api.get('/tarefas');
            setLista(response.data); 
        } catch (error) {
            console.error("Erro ao buscar tarefas", error);
        }
    };

        const compartilharTarefas = () => {
            if (navigator.share) {
                navigator.share({
                    title: 'Tarefas da Rep',
                    text: 'Galera, as tarefas da semana já estão no app Demorô! Entrem para conferir.',
                    url: window.location.href,
                })
                .then(() => console.log('Compartilhado com sucesso'))
                .catch((error) => console.log('Erro ao compartilhar', error));
            } else {
                alert("Seu navegador não suporta compartilhamento nativo.");
            }
    };


    const handleAddTask = async (e) => {
        e.preventDefault();
        if(!tarefa || !dia || !horario || !responsavel) {
            alert("Preencha todos os campos!");
            return;
        }
        try {
            await api.post('/tarefas', { tarefa, dia, horario, responsavel });
            
            alert("Tarefa adicionada!");
            
            setTarefa(''); 
            setDia(''); 
            setHorario(''); 
            setResponsavel('');
            
            carregarTarefas();
        } catch (error) {
            console.error("Erro completo:", error);
            if (error.response) {
                console.log("RESPOSTA DO SERVIDOR:", error.response.data);
                alert(`Erro do servidor: ${error.response.data.message || JSON.stringify(error.response.data)}`);
            } else {
                alert("Erro ao criar tarefa (sem resposta do servidor)");
            }
        }
    };

    const handleDelete = async (id) => {
        if(window.confirm("Tem certeza que quer apagar essa tarefa?")) {
            try {
                await api.delete(`/tarefas/${id}`);
                carregarTarefas();
            } catch (error) {
                alert("Erro ao deletar");
            }
        }
    };

    const formatarDia = (diaString) => {
        if(!diaString) return "";
        // Se vier no formato ISO do banco (2023-12-25T00...)
        const dataLimpa = diaString.split('T')[0]; 
        const [ano, mes, dia] = dataLimpa.split('-');
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <div className="fundo-login pagina-admin">
            
            <div className="hero-section hero-admin">
                <span className="titulo-login">Painel Admin</span>
                <p className="subtitulo-admin">Adicionar nova tarefa</p>

                <form onSubmit={handleAddTask} className="formulario-login form-admin">
                    <input 
                        type="text" 
                        placeholder="Descrição da Tarefa" 
                        value={tarefa}
                        onChange={e => setTarefa(e.target.value)}
                        className="input-padrao"
                    />
                    
                    <div style={{display: 'flex', gap: '10px'}}>
                        <input 
                            type="date" 
                            value={dia}
                            onChange={e => setDia(e.target.value)}
                            className="input-padrao"
                            style={{flex: 1}} 
                        />
                        <input 
                            type="time" 
                            value={horario}
                            onChange={e => setHorario(e.target.value)}
                            className="input-padrao"
                            style={{flex: 1}}
                        />
                    </div>

                    <select 
                        value={responsavel}
                        onChange={e => setResponsavel(e.target.value)}
                        className="input-padrao"
                        style={{ backgroundColor: 'white' }}
                    >
                        <option value="" disabled>Selecione o responsável</option>
                        <option value="021">021</option>
                        <option value="022">022</option>
                        <option value="023">023</option>
                        <option value="024">024</option>
                        <option value="Bixos">Bixos</option>
                    </select>
                    
                    <button type="submit" className="botao-entrar">ADICIONAR TAREFA</button>
                </form>

                <div className="divisor-admin"></div>

                <span className="titulo-lista-admin">Gerenciar Tarefas</span>
                
                <div className="lista-admin-container">
                    {/* Verificação de segurança: Só faz o map se lista for um array */}
                    {Array.isArray(lista) && lista.map(item => (
                        <div key={item._id} className="item-tarefa-admin">
                            <div className="info-tarefa-admin">
                                <strong>{item.tarefa}</strong>
                                
                                <small>
                                    {/* Usa a função corrigida */}
                                    {formatarDia(item.dia)} às {item.horario} • {item.responsavel}
                                </small>
                                
                                <span style={{ 
                                    color: item.isDone ? 'green' : 'orange', 
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem',
                                    marginTop: '5px'
                                }}>
                                    {item.isDone ? "✓ Concluída" : "⏳ Pendente"}
                                </span>
                            </div>
                            
                            <button onClick={compartilharTarefas} className="botao-secundario">
                                Cobrar no Grupo 📣
                            </button>
                            
                            <button 
                                onClick={() => handleDelete(item._id)}
                                className="botao-deletar-admin"
                                aria-label="Deletar tarefa"
                            >
                                X
                            </button>
                        </div>
                    ))}
                    
                    {/* Se a lista estiver vazia, mostra aviso */}
                    {lista.length === 0 && <p style={{textAlign:'center', color:'#999'}}>Nenhuma tarefa cadastrada.</p>}
                </div>

            </div>
        </div>
    );
};

export default Admin;