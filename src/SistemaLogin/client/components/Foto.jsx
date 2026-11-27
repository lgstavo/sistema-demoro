
function Foto({ src, alt, className = '', imgClassName = '' }) {
  return (
    <figure className={`group aspect-[3/4] overflow-hidden ${className}`}>
      <img
        className={`block size-full object-cover transition-[filter,scale] duration-[400ms,600ms] [@media(hover:hover)]:grayscale-[0.35] group-hover:grayscale-0 motion-safe:group-hover:scale-[1.04] motion-reduce:transition-none ${imgClassName}`}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
};

export default Foto;