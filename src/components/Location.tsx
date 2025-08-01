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
    <section ref={sectionRef} id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-6">
            Find <span className="text-amber-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Located in the heart of Puri, just steps away from the sacred Jagannath Temple 
            and the pristine beaches of the Bay of Bengal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light tracking-wide text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Marine Drive Road, Sea Beach<br />
                    Puri, Odisha 752001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light tracking-wide text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+91 674 123 4567</p>
                  <p className="text-gray-600">+91 674 123 4568</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light tracking-wide text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">reservations@uniquehotelpuri.com</p>
                  <p className="text-gray-600">info@uniquehotelpuri.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light tracking-wide text-gray-900 mb-2">Reception Hours</h3>
                  <p className="text-gray-600">24/7 Front Desk Service</p>
                  <p className="text-gray-600">Check-in: 3:00 PM | Check-out: 12:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="bg-amber-600 text-white px-8 py-3 text-sm font-light tracking-widest hover:bg-amber-700 transition-colors duration-300">
                GET DIRECTIONS
              </button>
            </div>
          </div>

          <div ref={mapRef} className="relative">
            <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden shadow-2xl">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-blue-700 font-light">Interactive Map</p>
                  <p className="text-blue-600 text-sm">Unique Hotel Puri</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600 rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Distance Information */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-2xl font-light text-amber-600 mb-2">2 min</div>
            <div className="text-sm tracking-wide text-gray-500">WALK TO BEACH</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-2xl font-light text-amber-600 mb-2">5 min</div>
            <div className="text-sm tracking-wide text-gray-500">TO JAGANNATH TEMPLE</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-2xl font-light text-amber-600 mb-2">15 min</div>
            <div className="text-sm tracking-wide text-gray-500">TO RAILWAY STATION</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-2xl font-light text-amber-600 mb-2">45 min</div>
            <div className="text-sm tracking-wide text-gray-500">TO AIRPORT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;