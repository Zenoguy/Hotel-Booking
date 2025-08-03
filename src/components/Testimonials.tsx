import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Absolutely breathtaking! The ocean views from our suite were spectacular, and the service was impeccable. Every detail was perfect for our honeymoon.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Rajesh Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'The perfect blend of luxury and tradition. The staff went above and beyond to make our family vacation memorable. The dining experience was world-class.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Emma Thompson',
    location: 'London, UK',
    rating: 5,
    text: 'I have stayed at luxury hotels worldwide, but Zeno Hotel Puri stands out. The spa treatments were divine, and the beachfront location is unmatched.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'David Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Exceptional hospitality and stunning architecture. The sunset views from the restaurant are unforgettable. Will definitely return for another stay.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    if (section && title && typeof window !== 'undefined') {
      // Simple fade-in animation without GSAP for better compatibility
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(title);

      return () => observer.disconnect();
    }
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <style>{`
        .animate-fade-in {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 max-w-full"
        >
          <source src="https://raw.githubusercontent.com/Zenoguy/Hotel-Booking/main/assets/contact_us.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none max-w-full" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={titleRef} className="text-center mb-8 sm:mb-12 md:mb-16 opacity-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white drop-shadow-lg mb-4 sm:mb-6">
              Guest <span className="text-yellow-400 font-medium">Experiences</span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-sm px-4">
              Discover what our guests say about their unforgettable experiences at Zeno Hotel Puri.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div ref={sliderRef} className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-center relative border border-white/20 shadow-xl">
                      <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400 font-medium mx-auto mb-4 sm:mb-6 md:mb-8 opacity-50" />
                      
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed mb-6 sm:mb-8 italic drop-shadow-sm">
                        "{testimonial.text}"
                      </p>

                      <div className="flex justify-center mb-4 sm:mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-current" />
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
                        />
                        <div className="text-center sm:text-left">
                          <div className="font-light text-base sm:text-lg text-white tracking-wide">
                            {testimonial.name}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-300">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-1 sm:left-0 top-1/2 transform -translate-y-1/2 sm:-translate-x-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2 sm:p-3 hover:bg-amber-600 hover:text-white transition-all duration-300 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-1 sm:right-0 top-1/2 transform -translate-y-1/2 sm:translate-x-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2 sm:p-3 hover:bg-amber-600 hover:text-white transition-all duration-300 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;