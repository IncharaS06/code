import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  User,
  Wifi,
  Coffee,
  Code,
  Shield,
  Award,
  Wrench
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can participate?',
      answer:
        'Any undergraduate or graduate student from any college across India can participate. Teams must be from the same college and consist of 2-3 members.',
      icon: <User className="w-5 h-5" />
    },
    {
      question: 'Are hardware kits allowed?',
      answer:
        'Yes, participants must bring their own hardware kits and components.',
      icon: <Wrench className="w-5 h-5" />
    },
    {
      question: 'Will power supplies be available?',
      answer:
        'Yes, adequate power supplies and charging stations will be available throughout the venue for all participants.',
      icon: <Shield className="w-5 h-5" />
    },
    {
      question: 'Can we bring our own tools?',
      answer:
        'Absolutely! Participants are encouraged to bring their own tools, soldering equipment, and hardware components for their projects.',
      icon: <Wrench className="w-5 h-5" />
    },
    {
      question: 'Is Wi-Fi provided?',
      answer:
        'Yes, high-speed Wi-Fi will be provided throughout the venue for all participants to access online resources and documentation.',
      icon: <Wifi className="w-5 h-5" />
    },
    {
      question: 'What about food and accommodation?',
      answer:
        'All meals including breakfast, lunch, dinner, and snacks will be provided.But accommodation is not included. Participants are advised to arrange their own accommodation.',
      icon: <Coffee className="w-5 h-5" />
    },
    {
      question: 'What happens in case of hardware failure?',
      answer:
        'Basic backup components and technical support will be available. Mentors will also assist in troubleshooting hardware issues.',
      icon: <Shield className="w-5 h-5" />
    },
    {
      question: 'Do we need to submit the hardware or just demo?',
      answer:
        'You need to demonstrate your working prototype. The hardware can be taken back after the event, but documentation and code should be submitted.',
      icon: <Code className="w-5 h-5" />
    },
    {
      question: 'Will we get certificates?',
      answer:
        'Yes, all participants will receive certificates of participation. Winners will receive special recognition certificates and prizes.',
      icon: <Award className="w-5 h-5" />
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Got questions about the hardware hackathon? We've got answers!
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-2xl shadow-md border border-slate-700 hover:border-blue-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 sm:px-8 text-left flex items-center justify-between hover:bg-slate-700 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-900/20 rounded-lg text-blue-400 group-hover:bg-blue-800 transition-colors duration-200">
                    {faq.icon}
                  </div>
                  <span className="font-semibold text-white text-base sm:text-lg">{faq.question}</span>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-400" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    className="px-6 pb-5 sm:px-8"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pl-12 sm:pl-14 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 max-w-xl mx-auto">
            <HelpCircle className="w-16 h-16 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Our team is here to help! Reach out to us at{' '}
              <a
                href="mailto:hacxerve@vvce.ac.in"
                className="underline text-white hover:text-blue-200 transition-colors"
              >
                hacxerve@vvce.ac.in
              </a>{' '}
              for any additional queries.
            </p>
            <a
              href="mailto:hacxerve@vvce.ac.in"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
