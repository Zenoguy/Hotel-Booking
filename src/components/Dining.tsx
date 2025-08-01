import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    name: 'Grilled Lobster',
    description: 'Fresh lobster grilled to perfection with herbs and butter',
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    name: 'Wagyu Steak',
    description: 'Premium wagyu beef with truffle sauce and seasonal vegetables',
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    name: 'Seafood Platter',
    description: 'Assorted fresh seafood from the Bay of Bengal',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  }
];

const Dining: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dishesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    const content = contentRef.current;

    if (section && background && content) {
      // Parallax background effect
      gsap.to(background, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Content animation
      gsap.fromTo(content,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Dishes animation
      dishesRef.current.forEach((dish, index) => {
        if (dish) {
          gsap.fromTo(dish,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: dish,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="dining" className="relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div ref={contentRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-6">
            Fine Dining at <span className="text-amber-400">Unique</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Indulge in culinary excellence at our signature restaurants. Our world-class chefs 
            create extraordinary dining experiences using the finest local ingredients and 
            international techniques, all while you enjoy breathtaking ocean views.
          </p>
        </div>

        {/* Featured Dishes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {dishes.map((dish, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) dishesRef.current[index] = el;
              }}
              className="group bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <div
                  className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${dish.image}')` }}
                />
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light tracking-wide text-white mb-3">
                  {dish.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Restaurant Info */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h3 className="text-3xl font-light tracking-wide mb-6">
              Oceanfront Dining Experience
            </h3>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Our beachside restaurant offers an intimate dining experience with panoramic 
                views of the Bay of Bengal. Watch the sunset while savoring expertly crafted 
                dishes that celebrate both local Odia cuisine and international flavors.
              </p>
              <p>
                From fresh seafood caught daily by local fishermen to organic produce from 
                our own gardens, every ingredient is carefully selected to ensure the highest 
                quality and authentic taste.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <div className="text-2xl font-light text-amber-400 mb-2">6:30 AM - 11:00 PM</div>
                <div className="text-sm tracking-wide text-gray-300">DINING HOURS</div>
              </div>
              <div>
                <div className="text-2xl font-light text-amber-400 mb-2">3 RESTAURANTS</div>
                <div className="text-sm tracking-wide text-gray-300">DINING OPTIONS</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/5] bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop')`
              }}
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-400 rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;