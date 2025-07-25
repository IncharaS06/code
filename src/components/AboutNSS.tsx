import React from 'react';
import { Heart, Users, Leaf, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutNSS = () => {
  const initiatives = [
    {
      icon: <Heart className="text-red-400" size={24} />,
      title: 'Health Camps & Blood Donation',
      description: 'Regular blood donation drives and comprehensive health camps for community wellness'
    },
    {
      icon: <Users className="text-pink-400" size={24} />,
      title: 'Awareness Programs',
      description: 'Menstrual hygiene, drug abuse prevention, and mental health awareness initiatives'
    },
    {
      icon: <Leaf className="text-green-400" size={24} />,
      title: 'Environmental Campaigns',
      description: 'Tree plantation drives and cleanliness campaigns for sustainable development'
    },
    {
      icon: <Shield className="text-blue-400" size={24} />,
      title: 'Social Collaboration',
      description: 'Partnerships with social organizations for maximum community impact'
    }
  ];

  return (
    <section id="about-nss" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About NSS & Red Cross Youth Wing – VVCE
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            style={{ transformOrigin: 'left' }}
          ></motion.div>
        </div>

        <motion.div
          className="bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.div
              className="flex items-center justify-center mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="text-red-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-white">Committed to Social Outreach</h3>
              <Heart className="text-red-400 ml-3" size={32} />
            </motion.div>
          </div>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The <span className="font-semibold text-white">National Service Scheme (NSS)</span> and <span className="font-semibold text-white">Red Cross Youth Wing</span> at VVCE are committed to <span className="font-semibold text-red-400">social outreach</span>, <span className="font-semibold text-red-400">technical upliftment</span>, and <span className="font-semibold text-red-400">leadership growth</span>.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  {initiative.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{initiative.title}</h4>
                  <p className="text-gray-300">{initiative.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 rounded-xl border border-blue-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-2">
              <Award className="text-blue-400" size={24} />
              <h4 className="text-xl font-bold text-white">Student Benefits</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-center">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold text-blue-400 mb-1">AICTE Activity Points</p>
                <p className="text-gray-300 text-sm">Earn 10 AICTE activity points for participation</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold text-blue-400 mb-1">Free .xyz domain</p>
                <p className="text-gray-300 text-sm">Each team member gets a free .xyz domain  valid for 1 year</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-xl inline-block">
            <p className="text-lg font-medium mb-2">Empowering students through <span className="font-bold">leadership development</span></p>
            <p className="text-pink-100">Building civic responsibility and social awareness for tomorrow's leaders</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutNSS;
