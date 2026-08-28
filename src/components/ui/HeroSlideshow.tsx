"use client";

import { useState, useEffect } from "react";
import { SlideUp } from "@/components/ui/animations";
import Link from "next/link";

export default function HeroSlideshow({ slideImages }: { slideImages: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slideImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000); // ganti slide setiap 5 detik

    return () => clearInterval(timer);
  }, [slideImages.length]);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Images */}
      {slideImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center w-full h-full z-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10 transition-colors"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-on-primary">
        <SlideUp className="max-w-2xl flex flex-col gap-4 md:gap-stack-md" delay={0.2}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-shadow text-white drop-shadow-md">
            Selamat Datang di Website Resmi Desa Nagarakembang
          </h1>
          <p className="font-body-md sm:font-body-lg text-shadow opacity-90 text-white max-w-lg drop-shadow">
            Media informasi dan pelayanan digital Pemerintah Desa Nagarakembang
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-stack-sm w-full">
            <Link href="/profil" className="w-full sm:w-auto block">
              <button className="bg-primary text-on-primary font-bold px-8 py-3 rounded-xl font-label-md hover:bg-primary-container hover:text-on-primary-container transition-all shadow-ambient hover:-translate-y-1 w-full">
                Profil Desa
              </button>
            </Link>
            <Link href="/pelayanan" className="w-full sm:w-auto block">
              <button className="bg-surface text-primary font-bold px-8 py-3 rounded-xl font-label-md hover:bg-surface-container-low transition-all shadow-ambient hover:-translate-y-1 w-full border border-surface/20">
                Layanan Pengaduan
              </button>
            </Link>
          </div>
        </SlideUp>
      </div>

      {/* Slide Indicators */}
      {slideImages.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
