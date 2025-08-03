import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (section && image && content) {
      gsap.fromTo(image,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(content,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] bg-cover bg-center rounded-lg shadow-2xl"
                 style={{
                   backgroundImage: `url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop')`
                 }}>
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-amber-600 rounded-lg opacity-20"></div>
          </div>

          <div ref={contentRef} className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-4 sm:mb-6">
                Discover
                <span className="block text-amber-600">Luxury</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-amber-600 mb-6 sm:mb-8"></div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base sm:text-lg">
                Nestled along the pristine shores of Puri, Zeno Hotel stands as a beacon of 
                contemporary luxury and timeless elegance. Our carefully curated spaces blend 
                modern sophistication with the natural beauty of the Bay of Bengal.
              </p>
              
              <p className="text-sm sm:text-base">
                Each moment at Zeno Hotel is designed to create lasting memories. From our 
                world-class amenities to our personalized service, we ensure that every guest 
                experiences the perfect harmony of comfort and luxury.
              </p>

              <p className="text-sm sm:text-base">
                Whether you're seeking a romantic getaway, a family vacation, or a peaceful 
                retreat, our oceanfront sanctuary offers an unparalleled experience where 
                every detail has been thoughtfully considered.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-amber-600 mb-1 sm:mb-2">150+</div>
                <div className="text-xs sm:text-sm tracking-wide text-gray-500">LUXURY ROOMS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-amber-600 mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm tracking-wide text-gray-500">CONCIERGE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;