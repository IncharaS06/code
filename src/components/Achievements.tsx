import React from 'react';
import { Trophy, Award, Heart, TreePine, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      icon: <Zap className="text-blue-400 group-hover:text-blue-500" size={28} />,
      title: 'Tech Event Success',
      description: 'Organized HacXerve (SDG-focused) and DevSprint (Consumer Protection) with national participation',
      color: 'from-blue-900 via-blue-950 to-slate-900',
    },
    {
      icon: <Trophy className="text-yellow-400 group-hover:text-yellow-500" size={28} />,
      title: 'National Competition Wins',
      description: 'Won multiple national hackathons including Ideathon 2K23 and other prestigious competitions',
      color: 'from-yellow-900 via-orange-900 to-slate-900',
    },
    {
      icon: <Heart className="text-red-400 group-hover:text-red-500" size={28} />,
      title: 'Social Impact Initiatives',
      description: 'Regular blood donations camps, tree plantation drives, and comprehensive anti-drug campaigns',
      color: 'from-red-900 via-pink-900 to-slate-900',
    },
    {
      icon: <TreePine className="text-green-400 group-hover:text-green-500" size={28} />,
      title: 'Rural Development',
      description: 'Annual Special Camp 2024 at Hosa Ramanahalli, focusing on sustainable rural upliftment',
      color: 'from-green-900 via-emerald-900 to-slate-900',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">NSS Past Achievements</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A legacy of excellence in community service, innovation, and impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-lg border border-slate-700 group hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-slate-800 rounded-full mb-4 mx-auto shadow-md">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm text-center leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-2 mb-16">
          <motion.div
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Award className="text-purple-400 mr-3" size={30} />
              <h3 className="text-2xl font-bold">Recognition & Awards</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              {[
                'Best NSS Unit Award - State Level',
                'Outstanding Community Service Recognition',
                'Innovation in Social Impact - University Level',
                'Youth Leadership Excellence Award',
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Users className="text-green-400 mr-3" size={30} />
              <h3 className="text-2xl font-bold">Impact Statistics</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { count: '500+', label: 'Blood Units Donated', color: 'text-green-400' },
                { count: '1000+', label: 'Trees Planted', color: 'text-blue-400' },
                { count: '50+', label: 'Villages Impacted', color: 'text-purple-400' },
                { count: '2000+', label: 'Students Engaged', color: 'text-orange-400' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900/70 p-4 rounded-xl text-center border border-slate-700">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
                  <div className="text-slate-300 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-gradient-to-br from-purple-800 to-pink-800 border border-slate-700 text-white p-8 rounded-xl shadow-xl max-w-xl">
            <h3 className="text-2xl font-bold mb-4">Building a Better Tomorrow Through Innovation</h3>
            <p className="text-slate-300 mb-6">
              Join us in our mission to create meaningful impact through technology and community service.
            </p>
            <a
              href="https://nss.vvce.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-800 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              Be Part of Our Legacy
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
