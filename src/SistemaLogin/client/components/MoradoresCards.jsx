import React, { useState } from 'react';
import Card from './Card';

const MoradoresCards = ({ data }) => {

  const [activeId, setActiveId] = useState(null);

  if (!data || data.length <= 0) {
    return "No data to render";
  }

  return ( 
    <div className="cards-moradores">
      {data.map((morador) => (
        <Card 
          key={morador.id} 
          data={morador}
          isActive={activeId === morador.id}
          onCardHover={setActiveId}
          onLeave={() => setActiveId(null)} 
        />
      ))}
    </div>
  );
};

export default MoradoresCards;