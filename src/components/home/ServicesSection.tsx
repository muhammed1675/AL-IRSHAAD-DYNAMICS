import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { staggerContainer, staggerItem } from '../ui/Reveal';
import { HOME_SERVICES } from '../../lib/content';
export function ServicesSection() {
  return (
    <section className="bg-mist px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="What we do"
          title="Services crafted for every occasion"
          description="From cinematic wedding films to broadcast-quality live coverage and seamless pilgrimage journeys — everything you need, under one trusted roof." />
        

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-60px'
          }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          
          {HOME_SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.slug}
                variants={staggerItem}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 transition-all duration-400 ease-smooth hover:-translate-y-1.5 hover:border-brand-green/30 hover:shadow-soft-lg">
                
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-green/10 text-brand-green transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-brand-navy">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                  {s.short}
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors group-hover:text-brand-green-dark"
                  aria-label={`Learn more about ${s.title}`}>
                  
                  Learn more
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span
                  className="pointer-events-none absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-brand-gold/10 blur-2xl transition-opacity duration-400 opacity-0 group-hover:opacity-100"
                  aria-hidden="true" />
                
              </motion.article>);

          })}

          <motion.div
            variants={staggerItem}
            className="flex flex-col justify-center rounded-3xl bg-brand-navy p-7 text-white">
            
            <h3 className="font-display text-xl font-semibold">
              Something else in mind?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              We tailor bespoke media packages for unique events and
              organizations.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-soft transition-colors hover:text-brand-gold">
              
              Request a custom quote
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}