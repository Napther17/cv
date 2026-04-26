import React, { useEffect, useState } from 'react';
import { CV_DOWNLOAD_PATH, NAV_ITEMS } from '../config/site';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let frameId = null;

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 20;
        setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
        frameId = null;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="MAUIX Intelligence" 
            loading="eager"
            decoding="async"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {item.label === 'Formacion' ? 'Formación' : item.label}
            </a>
          ))}
          <a
            href={CV_DOWNLOAD_PATH}
            download="Mauricio-Baez-Bascour-CV.html"
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-container transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Descargar CV
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-on-surface"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Cerrar menu' : 'Abrir menu'}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden px-6 pb-6 pt-4"
        >
          <div className="rounded-[2rem] border border-outline-variant/70 bg-white/95 p-5 shadow-xl backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label === 'Formacion' ? 'Formación' : item.label}
                </a>
              ))}
              <a
                href={CV_DOWNLOAD_PATH}
                download="Mauricio-Baez-Bascour-CV.html"
                className="inline-flex justify-center bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-container transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
