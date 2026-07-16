import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
interface Crumb {
  label: string;
  to?: string;
}
interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  crumbs: Crumb[];
}
// Consistent interior page hero with breadcrumb and cinematic image.
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-brand-navy pt-24">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl" />
      
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain object-center"
        initial={{
          opacity: 0,
          scale: 0.96
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1]
        }} />
      
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/75 to-brand-navy/35"
        aria-hidden="true" />
      

      <div className="relative mx-auto w-full max-w-content px-5 pb-14 pt-10 sm:px-8 sm:pb-20">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{
            opacity: 0,
            y: 12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="mb-6 flex items-center gap-1.5 text-sm text-white/60">
          
          {crumbs.map((c, i) =>
          <span key={c.label} className="flex items-center gap-1.5">
              {c.to ?
            <Link to={c.to} className="transition-colors hover:text-white">
                  {c.label}
                </Link> :

            <span className="text-white/90">{c.label}</span>
            }
              {i < crumbs.length - 1 &&
            <ChevronRightIcon className="h-4 w-4 text-white/40" />
            }
            </span>
          )}
        </motion.nav>

        <motion.span
          initial={{
            opacity: 0,
            y: 12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.05
          }}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold-soft">
          
          <span className="h-px w-6 bg-brand-gold" aria-hidden="true" />{' '}
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 18
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            delay: 0.12
          }}
          className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-white text-balance sm:text-6xl">
          
          {title}
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 18
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            delay: 0.2
          }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          
          {description}
        </motion.p>
      </div>
    </section>);

}