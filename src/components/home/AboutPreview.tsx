import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { IMAGES } from '../../lib/site';
const POINTS = [
'A seasoned crew with cinema-grade equipment',
'Trusted by families, corporates & government',
'End-to-end care from first call to final delivery'];

export function AboutPreview() {
  return (
    <section
      id="about-preview"
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-28">
      
      <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-4xl shadow-soft-lg">
            <motion.img
              src={IMAGES.about}
              alt="The Al-Irshaad Dynamics production team capturing an event"
              className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
              initial={{
                scale: 1.1
              }}
              whileInView={{
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }} />
            
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white p-5 shadow-soft-lg sm:block lg:-right-8">
            <p className="font-display text-3xl font-bold text-brand-green">
              8+
            </p>
            <p className="mt-1 text-xs font-medium text-ink/60">
              Years crafting
              <br />
              memories
            </p>
          </div>
          <div
            className="pointer-events-none absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-3xl border-2 border-brand-gold/40"
            aria-hidden="true" />
          
        </Reveal>

        <div>
          <Reveal>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
              <span className="h-px w-6 bg-brand-gold" aria-hidden="true" /> Who
              we are
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand-navy text-balance sm:text-4xl">
              A media house built on craft, trust, and devotion to your story.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              Al-Irshaad Dynamics is a professional media and travel company
              serving individuals, families, organizations, and businesses
              across Nigeria. We blend cinematic artistry with dependable
              service — so your most important moments are handled with the
              professionalism they deserve.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-4">
            {POINTS.map((p, i) =>
            <Reveal
              as="li"
              key={p}
              delay={i * 0.08}
              className="flex items-center gap-3">
              
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-green/10">
                  <CheckIcon className="h-3.5 w-3.5 text-brand-green" />
                </span>
                <span className="text-[15px] font-medium text-ink/80">{p}</span>
              </Reveal>
            )}
          </ul>

          <Reveal delay={0.2} className="mt-10">
            <Button as="link" to="/about" variant="secondary" size="lg">
              Learn More <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>);

}