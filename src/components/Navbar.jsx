import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <img 
            src="logo.png" 
            alt="MAUIX Intelligence" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Inicio', 'Trayectoria', 'Formación', 'Habilidades', 'Contacto'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-container transition-all hover:shadow-lg hover:-translate-y-0.5">
            Descargar CV
          </button>
        </div>

        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
