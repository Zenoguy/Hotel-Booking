import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  src: string;
  title: string;
  description: string;
  aspectRatio: string;
  span?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    title: 'Presidential Suite',
    description: 'Ultimate luxury with private balcony',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Ocean View Suite',
    description: 'Spacious suite with panoramic ocean views',
    aspectRatio: 'aspect-video', // 16/9
    span: 'md:col-span-2'
  },
  {
    src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    title: 'Presidential Suite',
    description: 'Ultimate luxury with private balcony',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    title: 'Beachfront Paradise',
    description: 'Direct access to pristine golden beaches',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    title: 'Beachfront Paradise',
    description: 'Direct access to pristine golden beaches',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    src: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Deluxe Room Interior',
    description: 'Elegant furnishings with modern amenities',
    aspectRatio: 'aspect-video',
    span: 'md:col-span-2'
  },
  {
    src: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Spa & Wellness Center',
    description: 'Rejuvenating treatments in tranquil settings',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    src: 'https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    title: 'Infinity Pool Terrace',
    description: 'Stunning pool overlooking the Bay of Bengal',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    src: 'https://images.pexels.com/photos/130879/pexels-photo-130879.jpeg?auto=compress&cs=tinysrgb&?w=1200&h=800&fit=crop',
    title: 'Infinity Pool Terrace',
    description: 'Stunning pool overlooking the Bay of Bengal',
    aspectRatio: 'aspect-video',
    span: 'md:col-span-2'
  }
];

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      });
    }
  }, []);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-4 sm:mb-6">
            Hotel <span className="text-amber-600">Gallery</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-amber-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Explore the beauty and elegance of Unique Hotel Puri through our curated 
            collection of spaces, amenities, and experiences.
          </p>
        </div>

        <div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-3 sm:gap-4 md:gap-6"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${image.span || ''}`}
              onClick={() => openModal(index)}
            >
              <div className={`${image.aspectRatio} relative overflow-hidden`}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${image.src}')` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 sm:p-4">
                  <div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-sm sm:text-base md:text-lg font-light tracking-wide mb-1 sm:mb-2">
                      {image.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                      {image.description}
                    </p>
                    <div className="w-8 sm:w-12 h-0.5 bg-amber-400 mx-auto mt-2 sm:mt-3"></div>
                  </div>
                </div>

                {/* Click indicator */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 border-2 border-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button 
            onClick={() => openModal(0)}
            className="group bg-gray-900 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-xs sm:text-sm font-light tracking-widest hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">VIEW SLIDESHOW</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Custom Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal}
        >
          {/* Modal content */}
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on image
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl z-50 p-2"
            >
              &times;
            </button>
            
            {/* Image and navigation */}
            <div className="relative flex-grow flex items-center justify-center">
              {/* Previous button */}
              <button 
                onClick={goToPreviousImage}
                className="absolute left-4 z-50 text-white p-2 text-4xl"
              >
                &lsaquo;
              </button>

              {/* Image */}
              <img 
                src={galleryImages[currentImageIndex].src} 
                alt={galleryImages[currentImageIndex].title} 
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Next button */}
              <button 
                onClick={goToNextImage}
                className="absolute right-4 z-50 text-white p-2 text-4xl"
              >
                &rsaquo;
              </button>
            </div>
            
            {/* Image title and description */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg sm:text-xl font-light">
                {galleryImages[currentImageIndex].title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-1">
                {galleryImages[currentImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;