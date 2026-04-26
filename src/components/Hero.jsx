import React from 'react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* No background decoration */}

      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16">

          {/* ───── LEFT: Text ───── */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="section-label bg-primary/10 text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Disponible para Nuevos Desafíos
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.08]">
              Precisión <span className="text-primary italic">Técnica</span>.<br />
              Visión <span className="text-primary-container">Estratégica</span>.
            </h1>

            {/* Subheading */}
            <p className="section-subheading text-on-surface-variant font-medium">
              Desarrollo soluciones técnicas que{' '}
              <span className="text-on-surface font-bold">funcionan</span> y
              generan{' '}
              <span className="text-on-surface font-bold">
                impacto en el negocio
              </span>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#trayectoria"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all group"
              >
                Explorar Trayectoria
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold hover:bg-surface-variant transition-all hover:shadow-lg"
              >
                Contactar Ahora
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-outline-variant">
              {[
                { value: '12+', label: 'Años Exp.' },
                { value: '500+', label: 'Proyectos' },
                { value: '09+', label: 'Certificaciones' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-on-surface">
                    {stat.value}
                  </div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ───── RIGHT: Visual Card ───── */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -z-10 w-[110%] h-[110%] bg-gradient-to-tr from-primary/8 via-primary-container/10 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 scale-105" />
              <div className="absolute inset-0 bg-primary-container/20 rounded-[2.5rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 scale-105" />
              <div className="relative z-10 w-full max-w-[440px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-surface-container">
                <img 
                  src={`${import.meta.env.BASE_URL}perfil.jpg`} 
                  alt="Mauricio Báez - Perfil Profesional" 
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="block w-full h-auto aspect-[4/5] object-cover object-top" 
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 pt-24 flex flex-col justify-end">
                  <p className="text-white text-center text-sm sm:text-base font-semibold italic opacity-95 leading-relaxed drop-shadow-md">
                    "Liderando la convergencia entre tecnología y resultados de negocio"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
