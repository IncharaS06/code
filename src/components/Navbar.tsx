import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: 'About NSS', href: '#about-nss' },
        { name: 'About VVCE', href: '#about-vvce' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Details', href: '#details' },
        { name: 'Domain', href: '#domain' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'FAQ', href: '#faq' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-blue-900/95 backdrop-blur-lg shadow-xl border-b border-blue-700/30'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Left Logos */}
                    <div className="flex items-center space-x-3">
                        <img src="/vvce.png" alt="VVCE Logo" className="w-10 h-10 object-contain" />
                        <img src="/NSS.png" alt="NSS Logo" className="w-10 h-10 object-contain" />
                    </div>

                    {/* Center Nav Links (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="relative px-4 py-2 text-white font-medium transition-all duration-300 group hover:text-blue-200"
                            >
                                <span className="relative z-10">{item.name}</span>
                                <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-300 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                            </button>
                        ))}
                    </div>

                    {/* Register Button (Desktop) */}
                    <div className="hidden md:block">
                        <a
                            href="https://unstop.com/o/fVQ4pJD?lb=0KVkQgl7&utm_medium=Share&utm_source=shortUrl" // Replace with your actual Unstop event link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
                        >
                            Register
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-blue-200 transition duration-300"
                        >
                            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gradient-to-b from-blue-900/95 to-blue-800/95 backdrop-blur-md border-t border-blue-700/30 px-4 pb-4">
                        <div className="space-y-3 pt-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-md transition-all duration-300 font-medium"
                                >
                                    {item.name}
                                </button>
                            ))}

                            {/* Register Button (Mobile) */}
                            <a
                                href="https://unstop.com/o/fVQ4pJD?lb=0KVkQgl7&utm_medium=Share&utm_source=shortUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md font-semibold mt-3 shadow-md hover:scale-105 transition-transform"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
