import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Location: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const map = mapRef.current;

    if (section && content && map) {
      gsap.fromTo(content,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(map,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-4 sm:mb-6">
            Find <span className="text-amber-600">Us</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-amber-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Located in the heart of Puri, just steps away from the sacred Jagannath Temple 
            and the pristine beaches of the Bay of Bengal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div ref={contentRef} className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-light tracking-wide text-gray-900 mb-1 sm:mb-2">Address</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Marine Drive Road, Sea Beach<br />
                    Puri, Odisha 752001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-light tracking-wide text-gray-900 mb-1 sm:mb-2">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-600">+91 674 123 4567</p>
                  <p className="text-sm sm:text-base text-gray-600">+91 674 123 4568</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-light tracking-wide text-gray-900 mb-1 sm:mb-2">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600">reservations@uniquehotelpuri.com</p>
                  <p className="text-sm sm:text-base text-gray-600">info@uniquehotelpuri.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-light tracking-wide text-gray-900 mb-1 sm:mb-2">Reception Hours</h3>
                  <p className="text-sm sm:text-base text-gray-600">24/7 Front Desk Service</p>
                  <p className="text-sm sm:text-base text-gray-600">Check-in: 3:00 PM | Check-out: 12:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <button className="bg-amber-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-light tracking-widest hover:bg-amber-700 transition-colors duration-300">
                GET DIRECTIONS
              </button>
            </div>
          </div>

          <div ref={mapRef} className="relative">
            <div className="aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden shadow-2xl">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500 mx-auto mb-3 sm:mb-4" />
                  <p className="text-blue-700 font-light text-sm sm:text-base">Interactive Map</p>
                  <p className="text-blue-600 text-xs sm:text-sm">Unique Hotel Puri</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-amber-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-amber-600 rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Distance Information */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="text-xl sm:text-2xl font-light text-amber-600 mb-1 sm:mb-2">2 min</div>
            <div className="text-xs sm:text-sm tracking-wide text-gray-500">WALK TO BEACH</div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="text-xl sm:text-2xl font-light text-amber-600 mb-1 sm:mb-2">5 min</div>
            <div className="text-xs sm:text-sm tracking-wide text-gray-500">TO JAGANNATH TEMPLE</div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="text-xl sm:text-2xl font-light text-amber-600 mb-1 sm:mb-2">15 min</div>
            <div className="text-xs sm:text-sm tracking-wide text-gray-500">TO RAILWAY STATION</div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="text-xl sm:text-2xl font-light text-amber-600 mb-1 sm:mb-2">45 min</div>
            <div className="text-xs sm:text-sm tracking-wide text-gray-500">TO AIRPORT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;