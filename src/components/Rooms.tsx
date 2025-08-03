import React, { useEffect, useRef } from 'react';
import { ArrowRight, Users, Bed, Wifi } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    id: 1,
    name: 'Ocean View Suite',
    price: '₹15,000',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: ['2 Guests', 'King Bed', 'Ocean View', 'Free WiFi']
  },
  {
    id: 2,
    name: 'Deluxe Room',
    price: '₹8,500',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: ['2 Guests', 'Queen Bed', 'Garden View', 'Free WiFi']
  },
  {
    id: 3,
    name: 'Presidential Suite',
    price: '₹25,000',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: ['4 Guests', '2 Bedrooms', 'Private Balcony', 'Butler Service']
  }
];

const Rooms: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    if (section && title) {
      gsap.fromTo(title, { y: 50, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card, { opacity: 0, y: 80 }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          });
        }
      });
    }
  }, []);

  const getIcon = (feature: string) => {
    if (feature.includes('Guests')) return <Users className="w-4 h-4 mr-2" />;
    if (feature.includes('Bed')) return <Bed className="w-4 h-4 mr-2" />;
    if (feature.includes('WiFi')) return <Wifi className="w-4 h-4 mr-2" />;
    return <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>;
  };

  return (
    <section ref={sectionRef} id="rooms" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-6">
            Rooms & <span className="text-amber-600">Suites</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience unparalleled comfort in our thoughtfully designed accommodations, 
            each offering stunning views and luxurious amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group opacity-0 translate-y-20 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:ring-2 hover:ring-amber-600"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 text-sm font-light tracking-wide">
                  {room.price}/night
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-gray-900 mb-4">
                  {room.name}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      {getIcon(feature)}
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="group/btn w-full bg-gray-900 text-white py-3 px-6 text-sm font-light tracking-widest hover:bg-amber-600 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  VIEW DETAILS
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
