import React from 'react'; 

const Card = ({ data, isActive, onCardHover, onLeave }) => {
    const { id, apelido, numero, curso, faculdade, foto } = data;
      
    return (
      <div 
        className={`morador ${isActive ? 'active' : ''}`} 
        style={{ backgroundImage: `url(${foto})` }}
        // Quando o mouse entra, chamamos a função passando o ID
        onMouseEnter={() => onCardHover(id)}
        onMouseLeave={onLeave}
      >
        <figcaption>
          {apelido} - {numero}<br />
          {curso}<br />
          {faculdade}
        </figcaption>
      </div>
    );
}; 

export default Card;