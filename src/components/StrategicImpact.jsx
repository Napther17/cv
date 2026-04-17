import React from 'react';

const StrategicImpact = () => {
  const areas = [
    {
      title: "Gestión Basada en Datos",
      desc: "Transformación de información operativa en decisiones estratégicas que fortalecen la ejecución y la continuidad del servicio. Optimización de procesos y recursos mediante un enfoque estructurado y orientado a resultados.",
      icon: "leaderboard",
      span: "md:col-span-2",
      bg: "bg-primary/5",
      iconBg: "bg-primary text-white"
    },
    {
      title: "Excelencia Técnica",
      desc: "Capacidad técnica avanzada en implementación, diagnóstico y control de sistemas en terreno. Ejecución eficiente, reducción de errores y aseguramiento de calidad en cada proyecto.",
      icon: "precision_manufacturing",
      span: "md:col-span-1",
      bg: "bg-surface-container-low",
      iconBg: "bg-on-surface text-surface"
    },
    {
      title: "Liderazgo de Equipos",
      desc: "Capacidad probada para dirigir técnicos especializados y optimizar flujos de trabajo unificando objetivos.",
      icon: "groups",
      span: "md:col-span-1",
      bg: "bg-surface-container-low",
      iconBg: "bg-on-surface text-surface"
    },
    {
      title: "Visión Comercial y Postventa",
      desc: "Entendimiento profundo del valor del cliente. Preventa técnica y fidelización mediante soporte de excelencia estratégica.",
      icon: "visibility",
      span: "md:col-span-2",
      bg: "bg-primary-container/5",
      iconBg: "bg-primary-container text-white"
    }
  ];

  return (
    <section className="section-py overflow-hidden">
      <div className="section-container space-y-16">

        {/* Header — left aligned, consistent axis */}
        <div className="space-y-4 max-w-3xl">
          <span className="section-label bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-sm">hub</span>
            Competencias
          </span>
          <h2 className="section-heading text-on-surface">
            Matriz de Competencias Estratégicas
          </h2>
          <p className="section-subheading text-on-surface-variant font-medium">
            Liderazgo operativo orientado a la rentabilidad y la excelencia técnica.
          </p>
        </div>

        {/* Cards Grid — equal height rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className={`${area.bg} ${area.span} card-base p-8 rounded-[2rem] group border border-transparent hover:border-primary/10 flex flex-col`}
            >
              <div
                className={`w-14 h-14 ${area.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}
              >
                <span className="material-symbols-outlined text-3xl">{area.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-on-surface">{area.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-base flex-1">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicImpact;
