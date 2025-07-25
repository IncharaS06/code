import React from 'react';
import {
  MapPin,
  ExternalLink,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Domains', href: '#domain' },
    { title: 'About NSS', href: '#about-nss' },
    { title: 'About VVCE', href: '#about-vvce' },
    { title: 'Register', href: '#prizes' },
    { title: 'FAQs', href: '#faq' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden sm:px-4">
      {/* Decorative Circles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full animate-pulse delay-500" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12">
          {/* Map */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Venue Location</h4>
            <div className="rounded-lg overflow-hidden shadow-lg border border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.123789232983!2d76.6139909!3d12.3365811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7a5a3fdf1b5b%3A0x6cc39c1531dfba9b!2sVidyavardhaka%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1721831824080!5m2!1sen!2sin"
                width="100%"
                height="220"
                allowFullScreen
                loading="lazy"
                className="border-0 w-full max-w-full"
                title="VVCE Location"
              />
            </div>
            <p className="text-slate-400 mt-4 text-sm leading-relaxed">
              "Where Innovation Meets Service" – A hardware hackathon blending technology and social impact, hosted at VVCE, Mysuru.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <ExternalLink className="mr-2" size={18} />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white flex items-center transition duration-300 group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-white transition" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-slate-400" size={18} />
                <a
                  href="https://www.google.com/maps/place/Vidyavardhaka+College+of+Engineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Vidyavardhaka College of Engineering<br />
                  Mysuru, Karnataka - 570002
                </a>
              </div>
              <div className="flex items-start gap-3">
                <ExternalLink className="mt-1 text-slate-400" size={18} />
                <a
                  href="mailto:hacxerve@vvce.ac.in"
                  className="hover:text-white transition-colors"
                >
                  hacxerve@vvce.ac.in
                </a>
              </div>

              {/* Coordinators */}
              <div className="mt-6">
                <h5 className="text-md font-semibold text-white mb-2">Student Coordinators</h5>
                <ul className="space-y-2">
                  <li className="mt-4">
                    <span className="text-white font-medium">Usha S Gowda</span><br />
                    📞 <a href="tel:+919019829230" className="text-purple-300 hover:underline">+91 9019829230</a>
                  </li>
                  <li className="mt-4">
                    <span className="text-white font-medium">Durga Prasad A</span><br />
                    📞 <a href="tel:+917406284645" className="text-purple-300 hover:underline">+91 7406284645</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row md:justify-between items-center gap-4 text-sm text-slate-400 text-center md:text-left">
          <p>
            © 2025 HacXerve Hardware Edition. Organized by NSS & Red Cross Youth Wing, VVCE.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-3">
            <a href="https://www.instagram.com/nss_vvce/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://x.com/nssVVCE_mysuru" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="http://www.linkedin.com/in/hacxerve" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
