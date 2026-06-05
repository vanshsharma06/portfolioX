import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="#home"
      className="icon-button fixed bottom-5 right-5 z-40 shadow-glow"
      aria-label="Back to top"
      title="Back to top"
    >
      <FaArrowUp />
    </a>
  );
}

export default BackToTop;