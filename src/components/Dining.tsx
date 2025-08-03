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
      // Set CSS properties for better performance
      gsap.set(background, { 
        willChange: "transform",
        force3D: true 
      });

      // Optimized parallax background effect
      const parallaxTween = gsap.to(background, {
        yPercent: -30, // Reduced from -50 for smoother performance
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Added small scrub value for smoothness instead of true
          invalidateOnRefresh: true, // Recalculate on content changes
          refreshPriority: -1, // Lower priority to avoid conflicts
          onUpdate: () => {
            // Force hardware acceleration
            if (background) {
              background.style.transform = background.style.transform + ' translateZ(0)';
            }
          }
        }
      });

      // Content animation with puseEffecerformance optimizations
      gsap.fromTo(content,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          force3D: true, // Hardware acceleration
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        }
      );

      // Dishes animation with stagger and performance optimization
      const dishTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true
        }
      });

      dishesRef.current.forEach((dish, index) => {
        if (dish) {
          gsap.set(dish, { force3D: true }); // Pre-set hardware acceleration
          
          dishTimeline.fromTo(dish,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
              force3D: true
            },
            index * 0.15 // Slightly faster stagger
          );
        }
      });

      // Refresh ScrollTrigger when component mounts (handles dynamic content)
      const refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      // Cleanup function
      return () => {
        clearTimeout(refreshTimer);
        parallaxTween.kill();
        dishTimeline.kill();
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === section) {
            trigger.kill();
          }
        });
      };
    }
  }, []);

  // Additional effect to handle page resize/content changes
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleLoad);

    // Refresh after images load
    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    
    images.forEach(img => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', () => {
          loadedCount++;
          if (loadedCount === images.length) {
            ScrollTrigger.refresh();
          }
        });
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <section ref={sectionRef} id="dining" className="relative py-16 sm:py-20 md:py-24 overflow-hidden max-w-full">
      {/* Optimized Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backfaceVisibility: 'hidden', // Prevent flickering
          perspective: 1000, // Enable 3D rendering context
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-full">
        <div ref={contentRef} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white mb-4 sm:mb-6">
            Fine Dining at <span className="text-amber-400">Unique</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-amber-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            Indulge in culinary excellence at our signature restaurants. Our world-class chefs 
            create extraordinary dining experiences using the finest local ingredients and 
            international techniques, all while you enjoy breathtaking ocean views.
          </p>
        </div>

        {/* Featured Dishes */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {dishes.map((dish, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) dishesRef.current[index] = el;
              }}
              className="group bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-500"
              style={{
                backfaceVisibility: 'hidden', // Prevent flickering during animation
              }}
            >
              <div className="relative overflow-hidden">
                <div
                  className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url('${dish.image}')`,
                    backfaceVisibility: 'hidden' // Smooth hover animation
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-light tracking-wide text-white mb-2 sm:mb-3">
                  {dish.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Restaurant Info */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
         <div className="bg-black/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
            <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-white mb-4 sm:mb-6">
              Oceanfront Dining Experience
            </h3>
            <div className="space-y-3 sm:space-y-4 text-gray-100 leading-relaxed">
              <p className="text-sm sm:text-base">
                Our beachside restaurant offers an intimate dining experience with panoramic 
                views of the Bay of Bengal. Watch the sunset while savoring expertly crafted 
                dishes that celebrate both local Odia cuisine and international flavors.
              </p>
              <p className="text-sm sm:text-base">
                From fresh seafood caught daily by local fishermen to organic produce from 
                our own gardens, every ingredient is carefully selected to ensure the highest 
                quality and authentic taste.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-light text-amber-400 mb-1 sm:mb-2">6:30 AM - 11:00 PM</div>
                <div className="text-xs sm:text-sm tracking-wide text-gray-200">DINING HOURS</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-light text-amber-400 mb-1 sm:mb-2">3 RESTAURANTS</div>
                <div className="text-xs sm:text-sm tracking-wide text-gray-200">DINING OPTIONS</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/3] sm:aspect-[4/5] bg-center bg-no-repeat bg-cover rounded-lg shadow-2xl"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%),
                  url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop')
                `,
                backfaceVisibility: 'hidden'
              }}
            />
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-amber-400 rounded-lg opacity-20"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dining;