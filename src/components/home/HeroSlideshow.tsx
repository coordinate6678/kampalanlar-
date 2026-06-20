"use client";

import { useEffect, useState, type ReactNode } from "react";
import { PlaceImage } from "@/components/ui/PlaceImage";

export interface HeroSlide {
  src: string;
  alt: string;
}

const INTERVAL_MS = 4000;
const FADE_MS = 1200;
const LAZY_SLIDE_WIDTH = 960;

interface HeroSlideshowProps {
  firstSlide: ReactNode;
  slides: HeroSlide[];
}

export function HeroSlideshow({ firstSlide, slides }: HeroSlideshowProps) {
  const [active, setActive] = useState(0);
  const [lazyLoaded, setLazyLoaded] = useState(false);

  useEffect(() => {
    const preloadRest = () => setLazyLoaded(true);
    const useIdle = typeof window.requestIdleCallback === "function";
    if (useIdle) {
      const id = window.requestIdleCallback(preloadRest, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(preloadRest, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const lazySlides = slides.slice(1);

  return (
    <div
      className="absolute inset-0"
      role="region"
      aria-label="Öne çıkan kamp alanları görselleri"
      aria-live="polite"
    >
      <div
        className="absolute inset-0 transition-opacity ease-in-out"
        style={{
          opacity: active === 0 ? 1 : 0,
          transitionDuration: `${FADE_MS}ms`,
          zIndex: active === 0 ? 1 : 0,
        }}
        aria-hidden={active !== 0}
      >
        {firstSlide}
      </div>

      {lazyLoaded &&
        lazySlides.map((slide, index) => {
          const slideIndex = index + 1;
          const isActive = slideIndex === active;
          return (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                transitionDuration: `${FADE_MS}ms`,
                zIndex: isActive ? 1 : 0,
              }}
              aria-hidden={!isActive}
            >
              <PlaceImage
                src={slide.src}
                alt={slide.alt}
                fill
                className={`object-cover object-center transition-transform ease-out ${
                  isActive ? "scale-100" : "scale-105"
                }`}
                style={{ transitionDuration: `${INTERVAL_MS}ms` }}
                loading="lazy"
                wikimediaWidth={LAZY_SLIDE_WIDTH}
                sizes="100vw"
              />
            </div>
          );
        })}
    </div>
  );
}
