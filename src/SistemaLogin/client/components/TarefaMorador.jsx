import React, { useState, useEffect } from 'react';
import Tarefa from './Tarefa';
import api from '../services/api';

const TarefaMorador = () => { // Removi o destruct vazio ({ })

  const [lista, setLista] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
        try {
            // CORREÇÃO 1: O nome da rota deve ser igual ao do server.js (/tarefas)
            const response = await api.get('/tarefas');
            setLista(response.data);
        } catch (error) {
            console.error("Erro ao carregar tarefas:", error);
        }
    };
    fetchTasks();
  }, []);

  const handleToggleTask = async (idParaMudar) => {
      try {
          // Atualiza visualmente primeiro
          const novaLista = lista.map((item) => {
              if (item._id === idParaMudar) { 
                  return { ...item, isDone: !item.isDone };
              }
              return item;
          });
          setLista(novaLista);

          // CORREÇÃO 2: Manda para a rota correta (/tarefas)
          await api.patch(`/tarefas/${idParaMudar}`);

      } catch (error) {
          console.error("Erro ao atualizar tarefa:", error);
          alert("Erro ao sincronizar. A página será recarregada.");
          window.location.reload(); 
      }
        if (navigator.vibrate) {
          navigator.vibrate(200);
      }
    };

    if (!lista || lista.length <= 0) {
      return <p style={{textAlign: 'center', color: '#1c21b8'}}>Carregando tarefas...</p>;
    }

    return ( 
      <div>
        {lista.map((tarefa) => (
          <Tarefa 
            key={tarefa._id} 
            data={tarefa}
            onToggle={handleToggleTask}
          />
        ))}
      </div>
    );
  };

export default TarefaMorador;