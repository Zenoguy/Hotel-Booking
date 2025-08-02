import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm sm:text-base">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-2xl sm:text-3xl font-light tracking-wider mb-6">
              UNIQUE HOTEL
              <span className="text-amber-400 ml-2">PURI</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Where elegance meets the ocean. Experience unparalleled luxury and 
              hospitality at Puri's most prestigious beachfront destination.
            </p>
            <div className="flex flex-wrap gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`Social icon ${Icon.name}`}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-light tracking-wide mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Rooms & Suites', 'Dining', 'Amenities', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="text-gray-400 hover:text-amber-400 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-light tracking-wide mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 shrink-0" />
                <address className="not-italic text-gray-400 leading-relaxed">
                  Marine Drive Road, Sea Beach<br />
                  Puri, Odisha 752001
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <a href="tel:+916741234567" className="text-gray-400 hover:text-amber-400 transition-colors">
                  +91 674 123 4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <a href="mailto:info@uniquehotelpuri.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                  info@uniquehotelpuri.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-light tracking-wide mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to receive exclusive offers and updates
            </p>
            <form className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button
                type="submit"
                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs sm:text-sm">
          <div>© 2025 Unique Hotel Puri. All rights reserved.</div>
          <div className="flex flex-wrap gap-4 justify-center">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((text, i) => (
              <a key={i} href="#" className="hover:text-amber-400 transition-colors">
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
