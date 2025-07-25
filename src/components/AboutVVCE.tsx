import React from 'react';
import { Trophy, Lightbulb, Users, Target, Building, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutVVCE = () => {
  const highlights = [
    {
      icon: <Trophy className="text-yellow-400 dark:text-yellow-300" size={28} />,
      title: 'National Level Hackathons',
      description: 'Successfully hosted 20+ national hackathons',
    },
    {
      icon: <Lightbulb className="text-orange-400 dark:text-orange-300" size={28} />,
      title: 'Innovation Focus',
      description: 'Engineering Solutions for Societal Impact',
    },
    {
      icon: <Users className="text-green-400 dark:text-green-300" size={28} />,
      title: 'Innovation Ecosystem',
      description: 'Promoting SDG-driven holistic development environment',
    },
    {
      icon: <Target className="text-blue-400 dark:text-blue-300" size={28} />,
      title: 'Industry Mentoring',
      description: 'Expert guidance from industry professionals and alumni',
    },
  ];

  return (
    <section id="about-vvce" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About VVCE
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Host Institution
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Building className="text-green-500 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-white">Vidyavardhaka College of Engineering (VVCE), Mysuru</h3>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              An <span className="font-semibold text-green-400">autonomous institute under VTU</span>, VVCE is a
              breeding ground for <span className="font-semibold text-green-400">technological innovation</span>,
              <span className="font-semibold text-green-400">entrepreneurship</span>, and
              <span className="font-semibold text-green-400"> social impact</span>.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 border border-slate-800 bg-slate-800/40 hover:bg-slate-800/60 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{highlight.title}</h4>
                    <p className="text-slate-300 text-sm">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-emerald-900 to-teal-950 p-8 rounded-2xl border border-emerald-700 shadow-md"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                VVCE empowers students through <span className="text-emerald-400 font-semibold">hands-on experiences</span>, fostering real-world
                <span className="text-emerald-400 font-semibold"> problem solving</span> and
                <span className="text-emerald-400 font-semibold"> collaborative creativity</span>.
              </p>

              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-left">
                <h5 className="font-semibold text-white mb-2">Key Achievements</h5>
                <ul className="text-slate-300 text-sm list-disc ml-5 space-y-1">
                  <li>Autonomous Institue Affiliated by  VTU</li>
                  <li>Accrediated by NAAC with 'A' Grade</li>
                  <li>Strong industry partnerships</li>
                  <li>Has </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-10 rounded-2xl shadow-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Why HacXerve?</h3>
          <p className="text-lg text-green-100 mb-6">
            Experience better infrastructure facilities, expert mentorship, and a vibrant innovation ecosystem
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: 'Sustainable Infrastructure',
              desc: 'Focusing on rural development and sustainability',
            },
            {
              title: 'Expert Mentorship',
              desc: 'Industry professionals and experienced faculty',
            },
            {
              title: 'Innovation Culture',
              desc: 'Encouraging creativity and ideation',
            }].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/10 p-5 rounded-xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-green-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutVVCE;
