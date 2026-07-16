import React, { useCallback, useEffect, useState, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon } from
'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GALLERY } from '../../lib/content';
const spanClasses: Record<string, string> = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  normal: ''
};
export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => i === null ? i : (i + 1) % GALLERY.length),
    []
  );
  const prev = useCallback(
    () =>
    setActive((i) =>
    i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length
    ),
    []
  );
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close, next, prev]);
  return (
    <section className="bg-mist px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Our work"
          title="A glimpse of the moments we've captured"
          description="Every frame tells a story. Explore a selection of our featured photography and event coverage." />
        

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3">
          {GALLERY.map((img, i) =>
          <motion.button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            initial={{
              opacity: 0,
              scale: 0.96
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              margin: '-40px'
            }}
            transition={{
              duration: 0.6,
              delay: i % 3 * 0.08,
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`group relative overflow-hidden rounded-2xl ${spanClasses[img.span]}`}
            aria-label={`View image: ${img.alt}`}>
            
              <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110" />
            
              <span
              className="absolute inset-0 bg-brand-navy/0 transition-colors duration-400 group-hover:bg-brand-navy/40"
              aria-hidden="true" />
            
              <span className="absolute bottom-4 left-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <PlusIcon className="h-5 w-5" />
              </span>
            </motion.button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {active !== null &&
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-navy/90 p-4 backdrop-blur-md"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox">
          
            <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close">
            
              <XIcon className="h-6 w-6" />
            </button>
            <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
            aria-label="Previous image">
            
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <motion.img
            key={active}
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            className="max-h-[82vh] max-w-full rounded-2xl object-contain shadow-soft-lg"
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.4
            }}
            onClick={(e) => e.stopPropagation()} />
          
            <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
            aria-label="Next image">
            
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}