import React, { useState } from 'react';
import Card from './Card';

const MoradoresCards = ({ data }) => {

  const [activeId, setActiveId] = useState(null);

  if (!data || data.length <= 0) {
    return "No data to render";
  }

  return ( 
    <div className="flex flex-col width-80 gap-x-[30px] md:flex-row md:w-95 lg:flex lg:flex-row lg:w-[90vw]">
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