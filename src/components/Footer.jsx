import React from 'react';
import { CONTACT } from '../config/site';

const Footer = () => {
  const socialLinks = [
    { label: 'LinkedIn', href: CONTACT.linkedinHref, external: true },
    { label: 'WhatsApp', href: CONTACT.whatsappHref, external: true },
    { label: 'Email', href: `mailto:${CONTACT.email}`, external: false },
  ];

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-outline-variant bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl font-bold tracking-tighter text-on-surface mb-2">
            Mauricio Báez <span className="text-primary">Bascour</span>
          </div>
          <p className="text-xs text-on-surface-variant font-medium">Técnico Electrónico & Ingeniero en Marketing</p>
        </div>
        
        <div className="text-xs text-on-surface-variant font-medium text-center md:text-right">
          © {new Date().getFullYear()} Mauricio Esteban Báez Bascour. Todos los derechos reservados.
          <br />
          <span className="opacity-50">Diseñado para la excelencia operativa.</span>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((social) => (
            <a 
              key={social.label}
              href={social.href}
              target={social.external ? '_blank' : undefined}
              rel={social.external ? 'noopener noreferrer' : undefined}
              className="text-xs font-bold uppercase tracking-widest text-on-surface hover:text-primary transition-colors underline decoration-outline-variant underline-offset-4"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
