import React from 'react';
import { Bot, Cpu, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Domains = () => {
  const domains = [
    {
      icon: <Bot className="text-blue-400 group-hover:text-blue-500" size={40} />,
      title: 'Robotics and Automation',
      description: 'Design and develop robot or drone technology for automated solutions',
      color: 'from-blue-900 to-slate-950',
      borderColor: 'border-blue-500',
      hoverColor: 'hover:border-blue-400'
    },
    {
      icon: <Cpu className="text-purple-400 group-hover:text-purple-500" size={40} />,
      title: 'Embedded IoT',
      description: 'Create intelligent embedded systems with AI or pure IoT capabilities',
      color: 'from-purple-900 to-slate-950',
      borderColor: 'border-purple-500',
      hoverColor: 'hover:border-purple-400'
    },
    {
      icon: <Wrench className="text-orange-400 group-hover:text-orange-500" size={40} />,
      title: 'Mechanical Product Development',
      description: 'Develop innovative products in Agriculture, Bio Medical, Mobility, Energy and more',
      color: 'from-orange-900 to-slate-950',
      borderColor: 'border-orange-500',
      hoverColor: 'hover:border-orange-400'
    }
  ];

  return (
    <section id="domain" className="py-20 px-4 bg-gradient-to-br from-blue-950 via-black to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Domains for Participation</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-6">
            Choose your domain and design hardware-based solutions that create real social impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${domain.color} p-6 rounded-xl border-2 ${domain.borderColor} ${domain.hoverColor} shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 group`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-slate-800 rounded-full mb-6 shadow-md group-hover:shadow-xl transition duration-300">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{domain.title}</h3>
                <p className="text-slate-300 text-sm">{domain.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Ready to Innovate?</h3>
            <p className="text-blue-100 mb-6 text-base">
              Join us in building impactful hardware solutions!
            </p>
            <a
              href="https://unstop.com/o/fVQ4pJD?lb=0KVkQgl7&utm_medium=Share&utm_source=shortUrl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-100 transition-all duration-300 shadow-md"
            >
              Register Your Team Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Domains;
