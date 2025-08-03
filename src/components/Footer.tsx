import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 md:col-span-2">
            <div className="text-2xl sm:text-3xl font-light tracking-wider mb-4 sm:mb-6">
              Zeno HOTEL
              <span className="text-amber-400 ml-2">PURI</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Where elegance meets the ocean. Experience unparalleled luxury and 
              hospitality at Puri's most prestigious beachfront destination.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-light tracking-wide mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'Rooms & Suites', 'Dining', 'Amenities', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} 
                     className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-xs sm:text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-light tracking-wide mb-4 sm:mb-6">Contact</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-gray-400">
                  Marine Drive Road, Sea Beach<br />
                  Puri, Odisha 752001
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-gray-400">+91 XXX XXX XXXX</div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-gray-400">info@Zenohotelpuri.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-8 sm:pt-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg sm:text-xl font-light tracking-wide mb-3 sm:mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
              Subscribe to receive exclusive offers and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors duration-300 text-sm"
              />
              <button className="bg-amber-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-amber-700 transition-colors duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs sm:text-sm text-gray-400 mb-3 md:mb-0 text-center md:text-left">
            © 2025 Zeno Hotel Puri. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;