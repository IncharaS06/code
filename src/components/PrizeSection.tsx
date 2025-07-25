import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Gem, Lightbulb, ClipboardCheck } from 'lucide-react';

const prizes = [
    {
        icon: Trophy,
        title: '1st Prize',
        amount: '₹25,000',
        description: 'Goodies and exciting prizes for the most innovative solution.',
        color: 'text-yellow-400'
    },
    {
        icon: Gem,
        title: '2nd Prize',
        amount: '₹15,000',
        description: 'Goodies and exciting prizes for exceptional creativity and execution.',
        color: 'text-blue-400'
    },
    {
        icon: Award,
        title: '3rd Prize',
        amount: '₹10,000',
        description: 'Goodies and prizes for outstanding potential and effort.',
        color: 'text-purple-400'
    },
    {
        icon: Lightbulb,
        title: 'Best Innovation',
        amount: '₹5,000',
        description: 'Recognizing the most groundbreaking idea — plus goodies!',
        color: 'text-orange-400'
    },
    {
        icon: ClipboardCheck,
        title: 'Best Problem Statement',
        amount: '₹5,000',
        description: 'Rewarding the most impactful and well-defined problem statement — with goodies!',
        color: 'text-green-400'
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
};

const PrizeSection = () => {
    return (
        <section
            id="prizes"
            className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Prizes & Recognition</h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-6">
                        Your innovations deserve the spotlight — here’s what’s at stake!
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto"></div>
                </div>

                {/* Prize Cards */}
                <div className="flex flex-wrap gap-10 justify-center items-stretch">
                    {prizes.map((prize, index) => {
                        const Icon = prize.icon;
                        return (
                            <motion.div
                                key={index}
                                className="group bg-gradient-to-br from-slate-900 to-black border border-slate-700 hover:border-yellow-500 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-xs"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                            >
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                                    className="flex items-center justify-center w-20 h-20 bg-slate-800 rounded-full mb-6 mx-auto shadow-md"
                                >
                                    <Icon size={40} className={`${prize.color}`} />
                                </motion.div>
                                <h3 className="text-xl font-semibold text-white text-center mb-2">{prize.title}</h3>
                                <p className="text-3xl text-yellow-400 font-bold text-center mb-2">{prize.amount}</p>
                                <p className="text-slate-300 text-center text-sm">{prize.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Recognition Message */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-2">Recognition for Every Innovator</h3>
                        <p className="text-yellow-100 mb-6 text-base">
                            All participants will receive a certificate and exciting goodies!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrizeSection;
