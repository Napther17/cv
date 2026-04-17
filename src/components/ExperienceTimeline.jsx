import React from 'react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "RECINTO PROTEGIDO",
      role: "Jefe Técnico de Operaciones",
      period: "Septiembre 2025 – Actualidad",
      desc: "Liderazgo estratégico del área de operaciones, enfocado en la mejora continua del equipo técnico. Gestión nacional de instaladores, asegurando la cobertura operativa en todas las regiones. Diseño e implementación de proyectos de seguridad crítica, incorporando fibra óptica y sistemas autosustentables.",
      icon: "admin_panel_settings",
      color: "bg-primary"
    },
    {
      company: "SMA",
      role: "Supervisor de Instalaciones y Proyecto",
      period: "Mayo 2025 – Sep 2025 (4 meses)",
      desc: "Supervisión técnica en terreno, garantizando altos estándares de calidad. Gestión integral de proyectos y cuantificación técnica de elementos para hardware de alta gama (Dahua y DSC).",
      icon: "verified_user",
      color: "bg-primary-container"
    },
    {
      company: "SLAM",
      role: "Técnico Supervisor",
      period: "2021 – 2024",
      desc: "Dirección de equipos para la instalación y mantenimiento de redes inalámbricas, cableado estructurado, CCTV y automatización. Elaboración de informes técnicos de gestión y optimización de proyectos.",
      icon: "engineering",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="trayectoria" className="section-py bg-white overflow-hidden">
      <div className="section-container">

        {/* Header */}
        <div className="space-y-4 max-w-3xl mb-16">
          <span className="section-label bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-sm">timeline</span>
            Experiencia
          </span>
          <h2 className="section-heading text-on-surface">Trayectoria Profesional</h2>
          <p className="section-subheading text-on-surface-variant">
            Evolución constante y compromiso con la excelencia operativa.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-outline-variant to-transparent md:-translate-x-[1px]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex items-center md:justify-between group ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Connector Dot */}
                <div className={`absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md z-10 md:-translate-x-1/2 ${exp.color}`} />

                {/* Content Card */}
                <div className="ml-10 md:ml-0 md:w-[45%] p-8 bg-white rounded-[2rem] shadow-sm border border-outline-variant/50 hover:border-primary/20 transition-all hover:shadow-xl card-base">
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">{exp.period}</span>
                    <h3 className="text-xl font-extrabold text-on-surface group-hover:text-primary transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-on-surface-variant font-bold text-sm">
                      <span className="material-symbols-outlined text-sm">{exp.icon}</span>
                      {exp.company}
                    </div>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed text-base">
                    {exp.desc}
                  </p>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
