import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FsLightbox from 'fslightbox-react';

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
  const gridRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

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

      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
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

  const openLightboxOnSlide = (slideIndex: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: slideIndex + 1
    });
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-6">
            Hotel <span className="text-amber-600">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore the beauty and elegance of Unique Hotel Puri through our curated 
            collection of spaces, amenities, and experiences.
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-4 md:gap-6"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${image.span || ''}`}
              onClick={() => openLightboxOnSlide(index)}
            >
              <div className={`${image.aspectRatio} relative overflow-hidden`}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${image.src}')` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-light tracking-wide mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {image.description}
                    </p>
                    <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-3"></div>
                  </div>
                </div>

                {/* Click indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button 
            onClick={() => openLightboxOnSlide(0)}
            className="group bg-gray-900 text-white px-12 py-4 text-sm font-light tracking-widest hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">VIEW SLIDESHOW</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* FsLightbox */}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={galleryImages.map(img => img.src)}
        slide={lightboxController.slide}
        type="image"
      />
    </section>
  );
};

export default Gallery;