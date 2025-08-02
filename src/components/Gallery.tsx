import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
  aspectRatio: string;
  span: string;
}

const LuxuryHotelGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  // Luxury hotel gallery data restructured to match optimal grid layout
  const galleryImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=900&fit=crop",
      title: "Presidential Suite",
      description: "Elegantly appointed suite with panoramic city views",
      aspectRatio: "aspect-[4/3]",
      span: "md:col-span-2 md:row-span-2" // Large feature - takes 2x2 space
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      title: "Fine Dining",
      description: "Michelin-starred culinary excellence",
      aspectRatio: "aspect-square",
      span: "" // Normal square - 1x1
    },
    {
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=600&fit=crop",
      title: "Spa Sanctuary",
      description: "Tranquil wellness retreat for ultimate relaxation",
      aspectRatio: "aspect-square",
      span: "" // Normal square - 1x1
    },
    {
      src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=675&fit=crop",
      title: "Infinity Pool",
      description: "Rooftop pool with breathtaking skyline views",
      aspectRatio: "aspect-[16/9]",
      span: "md:col-span-2" // Wide - 2x1
    },
    {
      src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=600&fit=crop",
      title: "Executive Lounge",
      description: "Premium amenities for discerning guests",
      aspectRatio: "aspect-square",
      span: "" // Normal square - 1x1
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=600&fit=crop",
      title: "Garden Terrace",
      description: "Lush outdoor dining with seasonal botanicals",
      aspectRatio: "aspect-square",
      span: "" // Normal square - 1x1 (same as Executive Lounge)
    },
    {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=675&fit=crop",
      title: "Ballroom Elegance",
      description: "Grand ballroom for unforgettable celebrations",
      aspectRatio: "aspect-[16/9]",
      span: "md:col-span-2" // Wide - 2x1
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = (entry.target as HTMLElement).dataset.index;
            if (index) {
              setVisibleItems(prev => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const items = galleryRef.current?.querySelectorAll('.gallery-item');
    items?.forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Handle image loading
  const handleImageLoad = (index: number): void => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  // Lightbox functions
  const openLightbox = (index: number): void => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = (): void => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'next' | 'prev'): void => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % galleryImages.length
      : (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Experience Luxury
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection showcasing the finest amenities and experiences at our luxury destination.
          </p>
        </div>

        {/* Gallery Grid */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-index={index}
              className={`gallery-item group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-700 ${
                image.span
              } ${
                visibleItems.has(String(index)) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              onClick={() => openLightbox(index)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className={`relative ${image.aspectRatio} w-full overflow-hidden`}>
                {/* Loading Skeleton */}
                {!imagesLoaded[index] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                )}

                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(index)}
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Eye className="w-8 h-8 mx-auto mb-3 opacity-90" />
                    <p className="text-lg font-medium tracking-wide">View Photo</p>
                  </div>
                </div>

                {/* Gradient Overlay for Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Title on Hover */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-lg font-semibold mb-1 tracking-wide">{image.title}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-200 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all duration-200 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all duration-200 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image Container */}
              <div className="relative flex-1 flex items-center justify-center mb-4">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Image Info */}
              <div className="bg-black/60 backdrop-blur-sm text-white p-6 rounded-lg border border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-light mb-1 tracking-wide">
                      {galleryImages[currentImageIndex].title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {galleryImages[currentImageIndex].description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <span>{currentImageIndex + 1}</span>
                    <span>/</span>
                    <span>{galleryImages.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default LuxuryHotelGallery;