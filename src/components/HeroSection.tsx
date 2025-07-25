import React, { useEffect, useState } from 'react';
import { ChevronDown, Cog } from 'lucide-react';
import Background from './Background';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-06T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToDetails = () => {
    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white overflow-hidden px-4">
      <Background />

      {/* Animated Gears */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 animate-spin" style={{ animationDuration: '8s' }}>
          <Cog size={60} className="text-blue-400" />
        </div>
        <div className="absolute top-32 right-20 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
          <Cog size={50} className="text-indigo-400" />
        </div>
        <div className="absolute bottom-28 left-24 animate-spin" style={{ animationDuration: '6s' }}>
          <Cog size={48} className="text-slate-400" />
        </div>
        <div className="absolute bottom-12 right-12 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
          <Cog size={56} className="text-blue-500" />
        </div>
      </div>

      {/* Logo with Animation */}
      {/* Logo with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="z-25 mb-15 mt-20 w-full max-w-xs md:max-w-md"
      >
        <motion.img
          src="/logo1.png"
          alt="HacXerve 2025 Logo"
          className="w-full h-auto mx-auto drop-shadow-2xl"
          animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.02, 0.98, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Countdown with Margin Top */}
      <motion.div
        className="z-20 mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl w-full max-w-lg sm:max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-5 text-center">Event Starts In</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0.95 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2 + index * 0.2, ease: 'easeInOut' }}
            >
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-3xl md:text-4xl font-extrabold py-3 px-5 rounded-2xl shadow-lg">
                {value.toString().padStart(2, '0')}
              </div>
              <p className="text-slate-300 text-xs md:text-sm capitalize mt-1">{unit}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>



      {/* Scroll Down Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <button onClick={scrollToDetails} className="text-slate-400 hover:text-slate-200 transition-colors duration-300">
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
