import React from 'react';

const photosInterrep = [
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_DTV.jpg', alt: 'InterREP: participantes no evento' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_TROFEU.jpg', alt: 'Troféu do InterREP' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_BORA_BORA.jpg', alt: 'Participantes do InterREP' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_ARTILHEIRO.jpg', alt: 'Artilheiro do InterREP' },
];

const photosFesta = [
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_DTV.jpg', alt: 'InterREP: participantes no evento' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_TROFEU.jpg', alt: 'Troféu do InterREP' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_BORA_BORA.jpg', alt: 'Participantes do InterREP' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_ARTILHEIRO.jpg', alt: 'Artilheiro do InterREP' },
];

function InterrepGallery() {
  return (
    <div className="order-1 grid grid-cols-2 gap-2 md:flex-[1_1_50%]">
      {photos.map(({ src, alt }) => (
        <figure key={src} className="group aspect-[4/5] overflow-hidden md:aspect-[9/16]">
          <img  
            className="size-full object-cover transition-[filter,scale] duration-[400ms,600ms] [@media(hover:hover)]:grayscale-[0.35] group-hover:grayscale-0 group-hover:scale-[1.04]"
            src={src}
            alt={alt}
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
}

export default InterrepGallery;
