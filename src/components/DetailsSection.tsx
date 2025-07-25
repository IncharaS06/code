import React from "react";
import {
  Calendar,
  MapPin,
  Users,
  CreditCard,
  Wrench,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const DetailsSection = () => {
  const details = [
    {
      icon: <Calendar className="text-blue-400" size={28} />,
      title: "Dates",
      description: "6th & 7th September 2025",
    },
    {
      icon: <MapPin className="text-emerald-400" size={28} />,
      title: "Venue",
      description: "Sri H Kempegowda Sports Complex, VVCE, Mysuru",
    },
    {
      icon: <Users className="text-purple-400" size={28} />,
      title: "Organized by",
      description: "NSS & Red Cross Youth Wing, VVCE",
    },
    {
      icon: <Users className="text-orange-400" size={28} />,
      title: "Team Size",
      description: "2 to 3 members per team",
    },
    {
      icon: <CreditCard className="text-green-400" size={28} />,
      title: "Registration",
      description: "Free for Round 1,Regristration fee of ₹800 for final"
    },
    {
      icon: <Wrench className="text-red-400" size={28} />,
      title: "Type",
      description: "Hardware Hackathon",
    },
  ];

  return (
    <section
      id="details"
      className="bg-gradient-to-b from-gray-950 to-black text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hackathon Details
        </motion.h2>

        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Globe className="text-blue-400 mr-2" size={24} />
          <p className="text-lg text-gray-300">
            Engineering meets Service & Society
          </p>
        </motion.div>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          style={{ transformOrigin: "left" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white/10"
                initial={{ rotate: -10, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-white mb-2"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-gray-300 text-sm"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg inline-block max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build the Future?
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Join us for an extraordinary hardware hackathon experience
            </p>
            <a
              href="https://unstop.com/o/fVQ4pJD?lb=0KVkQgl7&utm_medium=Share&utm_source=shortUrl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              Register Your Team Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailsSection;
