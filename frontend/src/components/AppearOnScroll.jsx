import React, { useState, useRef, useEffect } from 'react';

const AppearOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(10vh)',
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default AppearOnScroll;
