import React, { Children } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  MessageCircleIcon } from
'lucide-react';
import { Button } from '../ui/Button';
import { IMAGES, SITE, whatsappLink, WHATSAPP_DEFAULT } from '../../lib/site';
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
    <section className="relative flex min-h-[700px] items-end overflow-hidden bg-brand-navy sm:min-h-[100svh] sm:items-center">
      <motion.img
        src={IMAGES.hero}
        alt="An elegant Nigerian wedding celebration captured at golden hour"
        className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center"
        style={{
          y,
          scale
        }} />
      
      <motion.div
        style={{
          opacity: overlayOpacity
        }}
        className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/52 to-brand-navy/95 sm:from-brand-navy/80 sm:via-brand-navy/52 sm:to-brand-navy/90"
        aria-hidden="true" />
      

      <div className="relative mx-auto w-full max-w-content px-5 pb-12 pt-28 sm:px-8 sm:pb-24">
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
            className="mt-5 max-w-2xl font-display text-[2.5rem] font-bold leading-[1.06] text-white text-balance sm:mt-6 sm:text-6xl lg:text-7xl">
            
            Handle Your Memories{' '}
            <span className="text-brand-gold-soft">Professionally.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
            
            {SITE.name} brings cinematic photography, film, live coverage, and
            trusted Hajj & Umrah travel to the moments that matter most.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            
            <Button
              as="a"
              href={whatsappLink(WHATSAPP_DEFAULT)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full sm:w-auto">
              
              <MessageCircleIcon className="h-5 w-5" /> Book Now
            </Button>
            <Button
              as="link"
              to="/services"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto">
              
              Explore Services <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </motion.div>
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