import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { TargetIcon, EyeIcon } from 'lucide-react';
import { PageHero } from '../components/sections/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal, staggerContainer, staggerItem } from '../components/ui/Reveal';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FinalCTA } from '../components/sections/FinalCTA';
import { IMAGES } from '../lib/site';
import { VALUES, STATS } from '../lib/content';
import { Seo } from '../components/seo/Seo';
export function About() {
  return (
    <>
      <Seo title="About Al-Irshaad Dynamics — Craft, Trust & Devotion to Your Story" description="A professional Nigerian media and travel company handling the country's most treasured moments with true craft. Learn about our mission, values, and team." path="/about" />
      <PageHero
        eyebrow="About us"
        title="Craft, trust, and devotion to your story."
        description="Al-Irshaad Dynamics is a professional media and travel company on a mission to handle Nigeria's most treasured moments with true professionalism."
        image={IMAGES.about}
        crumbs={[
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'About'
        }]
        } />
      

      {/* Company story */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
              <span className="h-px w-6 bg-brand-gold" aria-hidden="true" /> Our
              story
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand-navy text-balance sm:text-4xl">
              Born from a passion for capturing what matters.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
              <p>
                Al-Irshaad Dynamics began with a simple conviction: that every
                memory deserves to be handled professionally. What started as a
                small team of dedicated creatives has grown into one of
                Nigeria's most trusted media houses.
              </p>
              <p>
                Today we serve individuals, families, wedding clients, Islamic
                and corporate organizations, schools, businesses, and government
                agencies — delivering photography, cinematic film, live
                coverage, branding, and seamless Hajj & Umrah journeys.
              </p>
              <p>
                Our name reflects our purpose.{' '}
                <span className="font-semibold text-brand-navy">
                  Al-Irshaad
                </span>{' '}
                — guidance — combined with the momentum of{' '}
                <span className="font-semibold text-brand-navy">Dynamics</span>.
                We guide your vision into reality with energy, artistry, and
                unwavering care.
              </p>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-4xl shadow-soft-lg">
              <img
                src={IMAGES.hero}
                alt="A celebration captured by the Al-Irshaad Dynamics team"
                className="aspect-[4/5] w-full object-cover" />
              
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-navy px-5 py-16 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true
          }}
          className="mx-auto grid max-w-content grid-cols-2 gap-8 md:grid-cols-4">
          
          {STATS.map((s) =>
          <motion.div
            key={s.label}
            variants={staggerItem}
            className="text-center">
            
              <p className="font-display text-4xl font-bold text-brand-gold-soft sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-mist px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-content gap-6 lg:grid-cols-2">
          {[
          {
            icon: TargetIcon,
            title: 'Our Mission',
            text: 'To handle every memory and journey with unmatched professionalism — blending cinematic artistry and dependable service to exceed the expectations of every client we serve.'
          },
          {
            icon: EyeIcon,
            title: 'Our Vision',
            text: 'To be recognised as the leading media and travel company in Nigeria, setting the standard for quality, trust, and creativity across the industry.'
          }].
          map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal
                key={b.title}
                delay={i * 0.1}
                className="rounded-3xl border border-line bg-white p-8 sm:p-10">
                
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-green/10 text-brand-green">
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-brand-navy">
                  {b.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/70">
                  {b.text}
                </p>
              </Reveal>);

          })}
        </div>
      </section>

      {/* Core values */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="What guides us"
            title="Our core values"
            description="The principles behind every frame we shoot and every journey we guide." />
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: '-60px'
            }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            
            {VALUES.map((v, i) =>
            <motion.div
              key={v.title}
              variants={staggerItem}
              className="group rounded-3xl border border-line bg-mist/50 p-7 transition-all duration-400 hover:border-brand-gold/40 hover:bg-white hover:shadow-soft">
              
                <span className="font-display text-3xl font-bold text-brand-gold/50 transition-colors group-hover:text-brand-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-navy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {v.description}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <WhyChooseUs />
      <FinalCTA />
    </>);

}