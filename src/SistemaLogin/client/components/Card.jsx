import React from 'react';

const Card = ({ data, isActive, onCardHover, onLeave }) => {
  const { id, apelido, numero, curso, faculdade, foto } = data;

  return (
    <figure
      className={`
        relative min-h-[720px] cursor-pointer overflow-hidden rounded-lg
        bg-cover bg-center bg-no-repeat
        transition-[flex] duration-600 ease-in-out
        ${isActive ? 'flex-[0_0_360px]' : 'flex-1'}
      `}
      style={{ backgroundImage: `url(${foto})` }}
      onMouseEnter={() => onCardHover(id)}
      onMouseLeave={onLeave}
    >
      <figcaption
        className={`
          absolute inset-x-0 bottom-0 min-h-[74px] p-4 text-left
          bg-azul-demoro text-creme text-xs leading-[1.45] tracking-[0.04em] lg:text-[0.8rem] uppercase font-regular
          transition-opacity duration-300
          ${isActive ? 'opacity-100 delay-300' : 'opacity-0'}
        `}
      >
        <b className="mr-1 inline-block font-normal uppercase tracking-[0.12em]">{apelido}</b> {numero}<br />
        {curso}<br />
        {faculdade}
      </figcaption>
    </figure>
  );
};

export default Card;