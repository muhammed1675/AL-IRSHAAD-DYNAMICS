import React from 'react';
import { motion } from 'framer-motion';
import {
  AwardIcon,
  UsersIcon,
  ZapIcon,
  GemIcon,
  ShieldCheckIcon,
  HeartHandshakeIcon,
  BoxIcon } from
'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { staggerContainer, staggerItem } from '../ui/Reveal';
import { WHY_CHOOSE } from '../../lib/content';
const ICONS: BoxIcon[] = [
AwardIcon,
UsersIcon,
ZapIcon,
GemIcon,
ShieldCheckIcon,
HeartHandshakeIcon];

export function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Why choose us"
          title="The difference is in the details"
          description="We are chosen again and again because we treat every project with rigor, artistry, and genuine care." />
        

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-60px'
          }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          
          {WHY_CHOOSE.map((r, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={r.title}
                variants={staggerItem}
                className="group flex gap-5 rounded-3xl border border-line bg-mist/50 p-7 transition-all duration-400 ease-smooth hover:border-brand-gold/40 hover:bg-white hover:shadow-soft">
                
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-green shadow-soft transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-navy">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {r.description}
                  </p>
                </div>
              </motion.div>);

          })}
        </motion.div>
      </div>
    </section>);

}