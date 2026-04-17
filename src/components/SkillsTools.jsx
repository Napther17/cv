import React from 'react';

const SkillsTools = () => {
  const categories = [
    {
      name: "Seguridad y Redes",
      icon: "shield",
      skills: ["Hikvision (HCSA)", "CCTV Experto", "Redes Inalámbricas", "Cableado Estructurado", "Automation (NICE)", "Telecom (Entel)"]
    },
    {
      name: "Gestión y Diseño",
      icon: "bar_chart",
      skills: ["SAP ERP", "Microsoft Excel (Avanzado)", "Illustrator", "Photoshop", "Lightroom", "PowerPoint"]
    },
    {
      name: "Vanguardia Tech",
      icon: "bolt",
      skills: ["Sistemas Fotovoltaicos", "Integración de IA", "Optimización de Procesos", "Energía Eléctrica Solar"]
    }
  ];

  return (
    <section id="herramientas" className="section-py bg-on-surface text-surface overflow-hidden">
      <div className="section-container space-y-16">

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
          >
            <span className="material-symbols-outlined text-sm">build</span>
            Herramientas
          </span>
          <h2 className="section-heading">
            Dominio Técnico &amp; Herramientas
          </h2>
          <p className="section-subheading" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Conjunto de habilidades transversales que permiten la ejecución
            técnica de alto nivel y la gestión empresarial eficiente.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <span className="material-symbols-outlined text-primary text-xl">{cat.icon}</span>
                <h3 className="text-lg font-bold text-primary-fixed-dim">{cat.name}</h3>
              </div>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform flex-shrink-0" />
                    <span className="text-base font-medium group-hover:text-primary-fixed transition-colors" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Brand logos */}
        <div className="pt-16 border-t border-white/10 flex flex-wrap justify-between gap-8" style={{ opacity: 0.4 }}>
          {['HIKVISION', 'NICE', 'ENTEL', 'SAP', 'ADOBE', 'OFFICE'].map((brand) => (
            <span key={brand} className="text-xl font-black tracking-tighter">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsTools;
