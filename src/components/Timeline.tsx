import React, { useState } from 'react';
import {
  Clock,
  Calendar,
  CheckCircle,
  Coffee,
  Users,
  Trophy,
  Lightbulb,
  Presentation,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Background from './Background';

const Timeline: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);

  const day1Events = [
    { time: '08:30 AM - 9:30 AM', activity: 'Check-in', icon: <CheckCircle className="w-5 h-5" />, color: 'bg-green-600' },
    { time: '09:45 AM - 10:45 AM', activity: 'Inauguration', icon: <Trophy className="w-5 h-5" />, color: 'bg-blue-600' },
    { time: '10:45 AM - 11:00 AM', activity: 'Guidelines Briefing', icon: <Presentation className="w-5 h-5" />, color: 'bg-purple-600' },
    { time: '11:00 AM', activity: 'Hackathon Starts', icon: <Lightbulb className="w-5 h-5" />, color: 'bg-yellow-500' },
    { time: '12:00 PM – 1:30 PM', activity: 'Mentoring', icon: <Users className="w-5 h-5" />, color: 'bg-indigo-600' },
    { time: '1:30 PM - 2:30 PM', activity: 'Lunch Break', icon: <Coffee className="w-5 h-5" />, color: 'bg-orange-500' },
    { time: '6:00 PM – 6:30 PM', activity: 'Snacks', icon: <Coffee className="w-5 h-5" />, color: 'bg-red-600' },
    { time: '6:30 PM – 8:30 PM', activity: 'Checkpoint-1', icon: <CheckCircle className="w-5 h-5" />, color: 'bg-teal-600' },
    { time: '8:30 PM - 9:30 PM', activity: 'Dinner', icon: <Coffee className="w-5 h-5" />, color: 'bg-orange-500' },
    { time: '10:00 PM', activity: 'Networking, Jamming Sessions', icon: <Users className="w-5 h-5" />, color: 'bg-pink-500' },
  ];

  const day2Events = [
    { time: '1:00 AM - 1:30 AM', activity: 'Snacks', icon: <Coffee className="w-5 h-5" />, color: 'bg-red-500' },
    { time: '8:00 AM - 9:00 AM', activity: 'Breakfast', icon: <Coffee className="w-5 h-5" />, color: 'bg-orange-500' },
    { time: '09:00 AM – 11:00 AM', activity: 'Checkpoint-2', icon: <CheckCircle className="w-5 h-5" />, color: 'bg-green-600' },
    { time: '12:00 – 1:00 PM', activity: 'Valedictory', icon: <Presentation className="w-5 h-5" />, color: 'bg-purple-600' },
    { time: '1:00 PM - 2:00 PM', activity: 'Lunch Break', icon: <Coffee className="w-5 h-5" />, color: 'bg-orange-500' },
    { time: '2:00 PM', activity: 'Checkout', icon: <CheckCircle className="w-5 h-5" />, color: 'bg-gray-500' }, // Optional: update checkout time
  ];


  const TimelineEvent = ({ event, index, isLast }: { event: any; index: number; isLast: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex items-start space-x-4 group"
    >
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-300 to-blue-500 opacity-30"></div>
      )}
      <div className={`relative z-10 flex items-center justify-center w-12 h-12 ${event.color} rounded-full shadow-lg`}>
        <div className="text-white animate-bounce">{event.icon}</div>
        <div className={`absolute inset-0 ${event.color} rounded-full animate-ping opacity-20`}></div>
      </div>
      <div className="flex-1 pb-8">
        <div className="bg-slate-800 text-white rounded-xl p-4 shadow-lg border border-slate-600 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h4 className="font-semibold mb-1">{event.activity}</h4>
            <p className="text-blue-400 font-medium text-sm">{event.time}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="timeline" className="relative min-h-screen text-white overflow-hidden bg-black">
      <Background />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black opacity-90 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">Event Timeline</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Complete schedule for the 24-hour hardware hackathon journey
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 rounded-2xl p-2 shadow-lg border border-slate-700 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full max-w-md">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeDay === 1
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                : 'text-slate-300 hover:bg-slate-700'
                }`}
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Day 1 - 6th Sept
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeDay === 2
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                : 'text-slate-300 hover:bg-slate-700'
                }`}
            >
              <Clock className="w-5 h-5 inline mr-2" />
              Day 2 - 7th Sept
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-slate-700"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">
                {activeDay === 1 ? 'Day 1 - 6th September 2025' : 'Day 2 - 7th September 2025'}
              </h3>
              <p className="text-slate-400">
                {activeDay === 1 ? 'Kickoff, Development & Networking' : 'Final Sprint & Presentations'}
              </p>
            </div>
            <div className="space-y-2">
              {(activeDay === 1 ? day1Events : day2Events).map((event, index, array) => (
                <TimelineEvent key={index} event={event} index={index} isLast={index === array.length - 1} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Clock className="w-12 h-12 mx-auto mb-4 animate-pulse" />
            <h3 className="text-3xl font-bold mb-2">24-Hour Hardware Hackathon</h3>
            <p className="text-blue-100 text-lg">From Saturday 8:30 AM to Sunday 2:00 PM</p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Non-Stop Innovation</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                <span>Volunteer Support</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
                <span>Continuous Learning</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
