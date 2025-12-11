import React, { useState, useRef, useEffect } from 'react';

const FadeIn = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-element ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

// AQUI ESTÁ A EXPORTAÇÃO PADRÃO
export default FadeIn;