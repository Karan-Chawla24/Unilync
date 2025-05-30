'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const sliderImages = [
  { src: '/images/engg.jpg', alt: 'Engineering Services' },
  { src: '/images/code1.jpg', alt: 'IT Services' },  
  { src: '/images/code2.jpg', alt: 'IT Solutions' },
  { src: '/images/code3.jpg', alt: 'Technology Services' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current]);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => [...prev, index]);
    if (index === 0) setIsLoading(false);
  };

  return (
    <div className="bg-white">
      {/* Hero section with full-width image slider background */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-24 sm:pt-32 lg:pt-0">
        {/* Full-width image slider */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {sliderImages.map((img, index) => (
              <div key={index} className="min-w-full h-full bg-gray-100 flex items-center justify-center relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  onLoad={() => handleImageLoad(index)}
                  sizes="100vw"
                  quality={100}
                />
                {!loadedImages.includes(index) && (
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Loading state for initial load */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
          )}
          {/* Strong dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-white/0 z-20 pointer-events-none" />
          {/* Navigation dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
            {sliderImages.map((_, idx) => (
              <button
                key={idx}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${current === idx ? 'bg-indigo-600 scale-125' : 'bg-gray-300'}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          {/* Overlayed hero text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-30">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg mt-10">
            Bridging the Gap between Talents and Technologies
            </h1>
            <p className="mt-6 text-base sm:text-xl md:text-2xl leading-8 text-white/90 max-w-full px-4 drop-shadow">
            We deliver end-to-end IT consultancy, technical support, and staff augmentation services to empower your business in the digital era.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-white hover:underline">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 