import React,{useState} from 'react';
import { tarefasMoradores } from '../data';

function CheckboxComponent({inProgress, isDone, onToggle}){

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={onToggle}
                />
                    <span style={{ fontSize: '1rem', color: isDone ? 'green' : 'black' }}>
                        {isDone ? "Feito!" : "Pendente"}
                    </span>            
                </label>
        </div>
    );
}

export default CheckboxComponent;