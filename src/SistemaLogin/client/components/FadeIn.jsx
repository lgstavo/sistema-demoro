import React, { useState, useRef, useEffect } from 'react';

const FadeIn = ({ direcao = 'y', children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting)
      });
    },
    {
      threshold: 0.25,
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
    <div ref={domRef} className={`fade-in-element ${direcao === 'x' ? 'eixo-x' : ''} ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeIn;