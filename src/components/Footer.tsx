import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-light tracking-wider mb-6">
              UNIQUE HOTEL
              <span className="text-amber-400 ml-2">PURI</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Where elegance meets the ocean. Experience unparalleled luxury and 
              hospitality at Puri's most prestigious beachfront destination.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-light tracking-wide mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Rooms & Suites', 'Dining', 'Amenities', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} 
                     className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
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
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  Marine Drive Road, Sea Beach<br />
                  Puri, Odisha 752001
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-sm text-gray-400">+91 674 123 4567</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-sm text-gray-400">info@uniquehotelpuri.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-light tracking-wide mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to receive exclusive offers and updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors duration-300"
              />
              <button className="bg-amber-600 text-white px-6 py-3 rounded-r-lg hover:bg-amber-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 Unique Hotel Puri. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
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