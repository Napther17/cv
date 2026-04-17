import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrategicImpact from './components/StrategicImpact';
import Habilidades from './components/Habilidades';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsTools from './components/SkillsTools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      {/* 
        El pt-20 se ajusta según el height del navbar.
        He quitado la clase pt-20 para que el Hero maneje su propio respiro, 
        pero si Navbar es fixed-top e interfiere, podemos reponerlo aquí.
      */}
      <main className="pt-20 lg:pt-24">
        <Hero />
        <StrategicImpact />
        <Habilidades />
        <ExperienceTimeline />
        <SkillsTools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
