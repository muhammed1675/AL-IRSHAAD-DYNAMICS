import React, { Children } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRightIcon,
  MessageCircleIcon,
  ChevronDownIcon } from
'lucide-react';
import { Button } from '../ui/Button';
import { IMAGES, SITE, whatsappLink, WHATSAPP_DEFAULT } from '../../lib/site';
import { STATS } from '../../lib/content';
export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [1, 1.2]);
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 30
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-navy">
      <img
        src={IMAGES.hero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl" />
      
      <motion.img
        src={IMAGES.hero}
        alt="An elegant Nigerian wedding celebration captured at golden hour"
        className="absolute inset-0 h-full w-full object-contain object-center"
        style={{
          y,
          scale
        }} />
      
      <motion.div
        style={{
          opacity: overlayOpacity
        }}
        className="absolute inset-0 bg-brand-navy/50"
        aria-hidden="true" />
      

      <div className="relative mx-auto w-full max-w-content px-5 pt-28 pb-24 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl">
          
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
            
            <span
              className="h-2 w-2 rounded-full bg-brand-gold"
              aria-hidden="true" />
            
            Premium Media House & Travel — Nigeria
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.6rem] font-bold leading-[1.03] text-white text-balance sm:text-6xl lg:text-7xl">
            
            Handle Your Memories{' '}
            <span className="text-brand-gold-soft">Professionally.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            
            {SITE.name} is a premium media company crafting cinematic
            photography, film, and live coverage — and seamless Hajj & Umrah
            journeys — for the moments that matter most.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-4 sm:flex-row">
            
            <Button
              as="a"
              href={whatsappLink(WHATSAPP_DEFAULT)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg">
              
              <MessageCircleIcon className="h-5 w-5" /> Book Now
            </Button>
            <Button as="link" to="/services" variant="ghost" size="lg">
              Explore Services <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-14 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
            
            {STATS.map((s) =>
            <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </dd>
                <p className="mt-1 text-xs text-white/60">{s.label}</p>
              </div>
            )}
          </motion.dl>
        </motion.div>
      </div>

      <motion.a
        href="#about-preview"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.4
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 sm:flex"
        aria-label="Scroll to explore">
        
        <ChevronDownIcon className="h-6 w-6" />
        <motion.span
          animate={{
            y: [0, 6, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: 'easeInOut'
          }}
          className="text-[11px] uppercase tracking-[0.2em]">
          
          Scroll
        </motion.span>
      </motion.a>
    </section>);

}