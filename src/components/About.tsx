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
    <section ref={sectionRef} className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <div
              className="aspect-[4/5] bg-cover bg-center rounded-2xl shadow-2xl"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop')`
              }}
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-amber-600 rounded-xl opacity-20"></div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-gray-900 mb-4">
                Discover <span className="block text-amber-600">Luxury</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-amber-600 mx-auto lg:mx-0 mb-6" />
            </div>

            <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Nestled along the pristine shores of Puri, Unique Hotel stands as a beacon of
                contemporary luxury and timeless elegance.
              </p>
              <p>
                From world-class amenities to personalized service, we ensure every guest
                experiences the perfect blend of comfort and sophistication.
              </p>
              <p>
                Whether it’s a romantic escape, family vacation, or tranquil retreat, our
                oceanfront sanctuary offers an unforgettable stay.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-amber-600 mb-1">150+</div>
                <div className="text-xs sm:text-sm tracking-wide text-gray-500">LUXURY ROOMS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-amber-600 mb-1">24/7</div>
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
