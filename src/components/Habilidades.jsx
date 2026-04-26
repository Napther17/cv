import React, { useState, useEffect } from 'react';

const habilidades = [
  {
    icon: 'settings_remote',
    nombre: 'Automatización de Portones',
    marcas: 'Nice · Centurion',
    iconColor: 'bg-violet-100 text-violet-700',
  },
  {
    icon: 'lock',
    nombre: 'Control de Acceso',
    marcas: 'Dahua · Hikvision · ZKTeco',
    iconColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    icon: 'electric_bolt',
    nombre: 'Cerco Eléctrico',
    marcas: 'Geno · JVA · Hagroy',
    iconColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    icon: 'videocam',
    nombre: 'CCTV',
    marcas: 'Dahua · Hikvision · Sony',
    iconColor: 'bg-slate-100 text-slate-700',
  },
  {
    icon: 'lan',
    nombre: 'Redes y Conectividad',
    marcas: 'Cableado estructurado · Fibra óptica · Ruteo',
    iconColor: 'bg-violet-100 text-violet-700',
  },
];

const carouselImages = [
  `${import.meta.env.BASE_URL}slide1.png`,
  `${import.meta.env.BASE_URL}slide2.png`,
  `${import.meta.env.BASE_URL}slide3.png`,
];

const Habilidades = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const preloadNextImage = (index) => {
      const nextImage = new window.Image();
      nextImage.src = carouselImages[index];
    };

    preloadNextImage((currentImageIndex + 1) % carouselImages.length);

    const interval = setInterval(() => {
      if (document.hidden) {
        return;
      }

      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section id="habilidades" className="section-py bg-white overflow-hidden">
      <div className="section-container">

        {/* ── 2-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Cards column */}
          <div className="space-y-10 order-2 lg:order-1">

            {/* Header */}
            <div className="space-y-4">
              <span className="section-label bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-sm">construction</span>
                Habilidades
              </span>
              <h2 className="section-heading text-on-surface">Habilidades</h2>
              <p className="section-subheading text-on-surface-variant">
                Experiencia técnica aplicada en terreno, respaldada por soluciones
                reales y marcas líderes.
              </p>
            </div>

            {/* Skill Cards — cápsulas verticales */}
            <div className="flex flex-col gap-4">
              {habilidades.map((h, idx) => (
                <div key={idx} className="habilidad-card">
                  {/* Icon */}
                  <div className={`icon-wrap ${h.iconColor}`}>
                    <span className="material-symbols-outlined text-xl">{h.icon}</span>
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="font-bold text-on-surface text-base leading-tight">
                      {h.nombre}
                    </p>
                    <p className="text-sm text-on-surface-variant font-medium mt-0.5 truncate">
                      {h.marcas}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <span className="material-symbols-outlined text-primary/40 text-lg ml-auto flex-shrink-0">
                    chevron_right
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Professional image carousel */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[480px]">
              {/* No decorative blobs */}

              {/* Image card */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-surface-container">
                
                {/* Carousel Backgrounds */}
                <img
                  key={carouselImages[currentImageIndex]}
                  src={carouselImages[currentImageIndex]}
                  alt={`Habilidad Técnica ${currentImageIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100"
                />

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center text-white bg-black/50 z-10">
                  <div className="animate-float space-y-6">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto shadow-2xl border border-white/20">
                      <span className="material-symbols-outlined text-5xl text-white">
                        settings_suggest
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xl font-extrabold opacity-100 drop-shadow-md">Dominio Técnico</p>
                      <p className="text-base font-medium opacity-90 leading-relaxed max-w-[220px] mx-auto drop-shadow-sm">
                        Instalación, configuración y diagnóstico de sistemas de seguridad electrónica
                      </p>
                    </div>
                  </div>

                  {/* Tech badges */}
                  <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 flex-wrap px-6">
                    {['CCTV', 'Access', 'Redes', 'IoT'].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold border border-white/30 drop-shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
