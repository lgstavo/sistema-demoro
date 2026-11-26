import React from 'react';

const photosInterrep = [
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_DTV.jpg', alt: 'InterREP: participantes no evento' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_TROFEU.jpg', alt: 'Troféu do InterREP' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_BORA_BORA.jpg', alt: 'Participantes do InterREP' },
  { src: '/Fotos_InterREP/Fotos Final 2/FOTO_ARTILHEIRO.jpg', alt: 'Artilheiro do InterREP' },
];


const photosFesta = [
  { src: '/Fotos InterREP A Festa/TPD.jpeg', alt: 'TPD' },
  { src: '/Fotos InterREP A Festa/VDN.jpeg', alt: 'VDN' },
  { src: '/Fotos InterREP A Festa/DTV.jpeg', alt: 'DTV' },
  { src: '/Fotos InterREP A Festa/PLACA.jpeg', alt: 'PLACA' },
];

const fotosSala = [  
{  src:"/FOTOS_CASA/foto_sala_2.jpeg", alt:"Sala da república, outro ângulo"},
{  src:"/FOTOS_CASA/foto_sala_recente.jpeg", alt:"Sala da república, foto recente" }
]
const fotosQuartos = [
  { src:'/FOTOS_CASA/quarto_corredor.jpeg', alt:'Quarto do corredor'},
  { src:'/FOTOS_CASA/quarto-cozinha.jpeg', alt:'Quarto da cozinha' },
  { src:'/FOTOS_CASA/quarto_bixos_2.jpeg', alt:'Quarto dos bixos, outro ângulo' },
  {  src:'/FOTOS_CASA/quarto_corredor_2.jpeg', alt:'Quarto do corredor, outro ângulo'}
]


const fotosCozinha = [
  {src: '/FOTOS_CASA/foto_cozinha_2.jpeg', alt:'Cozinha da república, outro ângulo'},
  {src: '/FOTOS_CASA/foto_cozinha.jpeg', alt:'Cozinha da república'}
]

const  fotosEstudos = [
  { src:"/FOTOS_CASA/sala_de_estudos.jpeg", alt:"Sala de estudos da república"}
]

const fotosALazer = [
  { src:"/FOTOS_CASA/quintal_1.jpeg", alt:"Quintal da república" },
  { src:"/FOTOS_CASA/varanda.jpeg", alt:"Varanda da república"},
  { src:"/FOTOS_CASA/Escada%20(2)%20(2).jpg", alt:"Piscina da república"},
  { src:"/FOTOS_CASA/piscina_2.jpeg", alt:"Piscina da república, outro ângulo"}
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
