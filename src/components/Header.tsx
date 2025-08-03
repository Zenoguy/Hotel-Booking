import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light tracking-wider">
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              ZENO HOTEL
            </span>
            <span className="text-amber-600 ml-2">PURI</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Rooms', 'Dining', 'Amenities', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-light tracking-wide transition-colors duration-300 hover:text-amber-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className={`w-4 h-4 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
              <span className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
                +91 XXX XXX XXXX
              </span>
            </div>
            <button className="bg-amber-600 text-white px-6 py-2 text-sm font-light tracking-wide hover:bg-amber-700 transition-colors duration-300">
              BOOK NOW
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200/20">
            <nav className="flex flex-col space-y-4 mt-4">
              {['Home', 'Rooms', 'Dining', 'Amenities', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 hover:text-amber-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-amber-600 text-white px-6 py-2 text-sm font-light tracking-wide hover:bg-amber-700 transition-colors duration-300 w-fit">
                BOOK NOW
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;