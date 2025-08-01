import React, { useEffect, useRef } from 'react';
import { Waves, Utensils, Wifi, Car, Dumbbell, Space as Spa, Shield, Coffee } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  { icon: Waves, title: 'Ocean View', description: 'Breathtaking views of the Bay of Bengal' },
  { icon: Utensils, title: 'Fine Dining', description: 'World-class restaurants and bars' },
  { icon: Spa, title: 'Luxury Spa', description: 'Rejuvenating treatments and wellness' },
  { icon: Dumbbell, title: 'Fitness Center', description: 'State-of-the-art gym equipment' },
  { icon: Wifi, title: 'Free WiFi', description: 'High-speed internet throughout' },
  { icon: Car, title: 'Valet Parking', description: 'Complimentary parking service' },
  { icon: Shield, title: '24/7 Security', description: 'Round-the-clock safety and service' },
  { icon: Coffee, title: 'Room Service', description: 'Gourmet dining in your room' }
];

const Amenities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;

    if (section && title && grid) {
      gsap.fromTo(title,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            { y: 60, opacity: 0, scale: 0.8 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-6">
            World-Class <span className="text-amber-600">Amenities</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every detail has been carefully considered to ensure your stay exceeds expectations. 
            Discover our comprehensive range of luxury amenities and services.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-light tracking-wide text-gray-900 mb-3">
                  {amenity.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Amenities Section */}
        <div className="mt-20 bg-white rounded-2xl p-12 shadow-xl">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-light text-amber-600 mb-3">500m</div>
              <div className="text-sm tracking-wide text-gray-500 mb-2">TO BEACH</div>
              <p className="text-gray-600 text-sm">Direct access to pristine golden sands</p>
            </div>
            <div>
              <div className="text-4xl font-light text-amber-600 mb-3">2 KM</div>
              <div className="text-sm tracking-wide text-gray-500 mb-2">TO JAGANNATH TEMPLE</div>
              <p className="text-gray-600 text-sm">Walking distance to the sacred temple</p>
            </div>
            <div>
              <div className="text-4xl font-light text-amber-600 mb-3">24/7</div>
              <div className="text-sm tracking-wide text-gray-500 mb-2">CONCIERGE</div>
              <p className="text-gray-600 text-sm">Personalized service around the clock</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;