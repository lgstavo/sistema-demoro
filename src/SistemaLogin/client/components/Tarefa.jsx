import React from 'react'; 
import CheckboxComponent from './CheckboxComponent';

const Tarefa = ({ data, onToggle }) => {
    const { _id, tarefa, dia, horario, responsavel, isDone } = data;
    
    const formatarData = (dataString) => {
        if(!dataString) return "";
        const [ano, mes, dia] = dataString.split('-');
        return `${dia}/${mes}/${ano}`;
    }
      
    return (
      <div className="container-tarefa">
        <div className='box-tarefas'>
            <span>
                <strong>Tarefa:</strong> {tarefa}<br/>                
                <strong>Prazo:</strong>{formatarData(dia)}<br />
                <strong>Horario:</strong> {horario}<br />
                <strong>Responsavel:</strong> {responsavel}<br/>
            </span>
        </div>
        
        <div className="checkbox-tarefa">
            <CheckboxComponent
                isDone={isDone}
                onToggle={() => onToggle(_id)} 
            />
        </div>
        
      </div>
    );
}; 

export default Tarefa;