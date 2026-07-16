import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../lib/content';
import { staggerContainer, staggerItem } from '../ui/Reveal';
export function StatsBand() {
  return (
    <section className="bg-brand-navy px-5 py-9 sm:px-8 sm:py-12">
      <motion.dl
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: '-40px'
        }}
        className="mx-auto grid max-w-content grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-4 sm:divide-y-0">
        
        {STATS.map((stat) =>
        <motion.div
          key={stat.label}
          variants={staggerItem}
          className="px-5 py-5 text-center sm:px-7 sm:py-6">
          
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
              {stat.value}
            </dd>
            <p className="mt-1 text-xs text-white/55">{stat.label}</p>
          </motion.div>
        )}
      </motion.dl>
    </section>);

}