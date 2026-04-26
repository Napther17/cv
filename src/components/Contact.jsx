import React from 'react';
import { CONTACT } from '../config/site';

const Contact = () => {
  return (
    <section id="contacto" className="section-py relative overflow-hidden bg-primary text-white">
      {/* No Background Details */}

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <div className="space-y-10">
            <div className="space-y-4">
               <span className="section-label bg-white/10 text-white">
                <span className="material-symbols-outlined text-sm">mail</span>
                Contacto
              </span>
              <h2 className="section-heading text-white">¿Hablamos de su próximo proyecto?</h2>
              <p className="section-subheading text-white/80 font-medium">
                Estoy disponible para roles de liderazgo técnico, gestión de operaciones y proyectos de seguridad electrónica.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Ubicación</h4>
                  <p className="text-xl font-medium">{CONTACT.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Teléfono</h4>
                  <a href={CONTACT.phoneHref} className="text-xl font-medium hover:underline underline-offset-4">
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Email</h4>
                  <a href={`mailto:${CONTACT.email}`} className="text-xl font-medium break-all hover:underline underline-offset-4">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href={CONTACT.linkedinHref}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-bold transition-all"
              >
                Conectar en LinkedIn
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          </div>

          {/* Right Column: WhatsApp Card */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl text-on-surface flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              {/* WhatsApp Icon */}
              <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.161.453-.834.815-1.168.851-.314.034-.73.08-1.92-.416-1.428-.593-2.359-2.05-2.39-2.091-.031-.041-.572-.76-.572-1.448 0-.687.356-1.026.48-1.156.124-.131.27-.165.36-.165.09 0 .178.006.255.011.085.005.201-.033.314.238.125.305.426 1.042.463 1.117.038.075.062.164.015.258-.046.094-.07.153-.139.229-.068.076-.144.164-.207.228-.069.069-.141.144-.061.282.08.138.355.588.759.95.52.467.954.614 1.092.682.138.069.219.057.3-.035.08-.092.35-.406.444-.545.094-.14.188-.117.316-.069.128.048.813.383.953.453.14.07.234.105.267.164.035.059.035.342-.126.795z" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold mb-4">Comunícate por WhatsApp</h3>
            <p className="text-on-surface-variant font-medium mb-8">
              Para respuestas más rápidas y atención directa, puedes escribirme a mi WhatsApp personal en cualquier momento.
            </p>
            
            <a 
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              Ir a WhatsApp
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
