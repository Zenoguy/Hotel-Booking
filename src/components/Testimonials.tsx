import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    text: 'I have stayed at luxury hotels worldwide, but Unique Hotel Puri stands out. The spa treatments were divine, and the beachfront location is unmatched.',
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

    if (section && title) {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-6">
            Guest <span className="text-amber-600">Experiences</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover what our guests say about their unforgettable experiences at Unique Hotel Puri.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div ref={sliderRef} className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-2xl p-12 text-center relative">
                    <Quote className="w-12 h-12 text-amber-600 mx-auto mb-8 opacity-50" />
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <div className="font-light text-lg text-gray-900 tracking-wide">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-amber-600 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-amber-600 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-amber-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;