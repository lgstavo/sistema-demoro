import React from 'react';

const photosInterrep = [
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_DTV.webp', alt: 'InterREP: participantes no evento' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_TROFEU.webp', alt: 'Troféu do InterREP' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_BORA_BORA.webp', alt: 'Participantes do InterREP' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_ARTILHEIRO.webp', alt: 'Artilheiro do InterREP' },
];


const photosFesta = [
  { src: '/Fotos InterREP A Festa/TPD.webp', alt: 'TPD' },
  { src: '/Fotos InterREP A Festa/VDN.webp', alt: 'VDN' },
  { src: '/Fotos InterREP A Festa/DTV.webp', alt: 'DTV' },
  { src: '/Fotos InterREP A Festa/PLACA.webp', alt: 'PLACA' },
];

const fotosSala = [  
{  src:"/FOTOS_CASA/foto_sala_2.webp", alt:"Sala da república, outro ângulo"},
{  src:"/FOTOS_CASA/foto_sala_recente.webp", alt:"Sala da república, foto recente" }
]
const fotosQuartos = [
  { src:'/FOTOS_CASA/quarto_corredor.webp', alt:'Quarto do corredor'},
  { src:'/FOTOS_CASA/quarto-cozinha.webp', alt:'Quarto da cozinha' },
  { src:'/FOTOS_CASA/quarto_bixos_2.webp', alt:'Quarto dos bixos, outro ângulo' },
  {  src:'/FOTOS_CASA/quarto_corredor_2.webp', alt:'Quarto do corredor, outro ângulo'}
]


const fotosCozinha = [
  {src: '/FOTOS_CASA/foto_cozinha_2.webp', alt:'Cozinha da república, outro ângulo'},
  {src: '/FOTOS_CASA/foto_cozinha.webp', alt:'Cozinha da república'}
]

const  fotosEstudos = [
  { src:"/FOTOS_CASA/sala_de_estudos.webp", alt:"Sala de estudos da república"}
]

const fotosALazer = [
  { src:"/FOTOS_CASA/quintal_1.webp", alt:"Quintal da república" },
  { src:"/FOTOS_CASA/varanda.webp", alt:"Varanda da república"},
  { src:"/FOTOS_CASA/Escada%20(2)%20(2).webp", alt:"Piscina da república"},
  { src:"/FOTOS_CASA/piscina_2.webp", alt:"Piscina da república, outro ângulo"}
]

const galeria = {
  festa: photosFesta,
  interrep: photosInterrep,
  cozinha: fotosCozinha,
  quartos: fotosQuartos,
  estudos: fotosEstudos,
  lazer: fotosALazer,
  sala: fotosSala
}


function Gallery({type}) {
  const photos = galeria[type] ?? []

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

export default Gallery;
