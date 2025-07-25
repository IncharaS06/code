import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import Timeline from './components/Timeline';
import AboutNSS from './components/AboutNSS';
import AboutVVCE from './components/AboutVVCE';
import Achievements from './components/Achievements';
import Domains from './components/Domains';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Background from './components/Background';
import PrizeSection from './components/PrizeSection';
import SponsorSection from "./components/SponsorSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      <Background />
      <Navbar />

      {/* Sections with IDs for anchor scroll */}
      <section id="hero">
        <HeroSection />
      </section>

      <section id="details">
        <DetailsSection />
      </section>

      <section id="timeline">
        <Timeline />
      </section>

      <section id="domain">
        <Domains />
      </section>

      <section id="prizes">
        <PrizeSection />
      </section>

      <section id="sponsors">
        <SponsorSection />
      </section>

      <section id="about-nss">
        <AboutNSS />
      </section>

      <section id="about-vvce">
        <AboutVVCE />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      {/* ⬇️ Footer placed outside of all sections */}
      <Footer />
    </div>
  );
}

export default App;
