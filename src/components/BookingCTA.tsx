import React, { useEffect, useRef } from 'react';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BookingCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    const content = contentRef.current;

    if (section && background && content) {
      gsap.to(background, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        content,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-56 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute top-0 left-0 w-full h-[200%] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      />

      {/* Smooth scroll gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

      <div className="relative z-30 container mx-auto px-4 sm:px-6">
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6 sm:mb-8">
            Reserve Your Stay
            <span className="block text-amber-400 font-extralight">Now</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-light tracking-wide mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience luxury like never before. Book your unforgettable escape to paradise.
          </p>

          {/* Booking Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Check-in */}
              <div className="space-y-1 sm:space-y-2">
                <label className="block text-sm font-light text-gray-200">Check-in Date</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-amber-400"
                  />
                  <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-300" />
                </div>
              </div>

              {/* Check-out */}
              <div className="space-y-1 sm:space-y-2">
                <label className="block text-sm font-light text-gray-200">Check-out Date</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-amber-400"
                  />
                  <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-300" />
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-1 sm:space-y-2">
                <label className="block text-sm font-light text-gray-200">Guests</label>
                <div className="relative">
                  <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 appearance-none">
                    <option value="1" className="text-gray-900">1 Guest</option>
                    <option value="2" className="text-gray-900">2 Guests</option>
                    <option value="3" className="text-gray-900">3 Guests</option>
                    <option value="4" className="text-gray-900">4+ Guests</option>
                  </select>
                  <Users className="absolute right-3 top-3 w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4 sm:space-y-6">
            <button className="group bg-amber-600 text-white px-10 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-light tracking-widest hover:bg-amber-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl inline-flex items-center relative overflow-hidden">
              <span className="relative z-10">CHECK AVAILABILITY</span>
              <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </button>

            <p className="text-gray-300 text-sm sm:text-base">
              Or call us directly at <span className="text-amber-400">+91 674 123 4567</span>
            </p>
          </div>

          {/* Special Offers */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 sm:p-6 text-center">
              <div className="text-xl sm:text-2xl font-light text-amber-400 mb-1 sm:mb-2">20% OFF</div>
              <div className="text-sm tracking-wide text-gray-200">EARLY BIRD BOOKING</div>
              <p className="text-xs text-gray-300 mt-1 sm:mt-2">Book 30 days in advance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 sm:p-6 text-center">
              <div className="text-xl sm:text-2xl font-light text-amber-400 mb-1 sm:mb-2">FREE</div>
              <div className="text-sm tracking-wide text-gray-200">AIRPORT TRANSFER</div>
              <p className="text-xs text-gray-300 mt-1 sm:mt-2">For stays 3+ nights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
