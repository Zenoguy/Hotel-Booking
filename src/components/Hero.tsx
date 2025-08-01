import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(buttonRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-light tracking-wider mb-6 leading-tight"
          >
            UNIQUE HOTEL
            <span className="block text-amber-400 font-extralight">PURI</span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Where Elegance Meets the Ocean
          </p>
          
          <button
            ref={buttonRef}
            className="group bg-amber-600 text-white px-12 py-4 text-lg font-light tracking-widest hover:bg-amber-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">BOOK NOW</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-light tracking-wider mb-2">SCROLL</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;