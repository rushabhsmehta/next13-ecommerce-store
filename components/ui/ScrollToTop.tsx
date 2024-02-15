'use client'
import { useEffect, useState } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled for a certain amount
  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-4 right-4 bg-gradient-to-r from-black to-gray-800 text-white p-2 rounded-full"
      >
        &#8593;
      </button>
    )
  );
}

export default ScrollToTop;
