import React from 'react';
import { Hero } from '../components/home/Hero';
import { StatsBand } from '../components/home/StatsBand';
import { ClientsBand } from '../components/sections/ClientsBand';
import { AboutPreview } from '../components/home/AboutPreview';
import { ServicesSection } from '../components/home/ServicesSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Gallery } from '../components/home/Gallery';
import { FeaturedEvent } from '../components/home/FeaturedEvent';
import { FinalCTA } from '../components/sections/FinalCTA';
export function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ClientsBand />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUs />
      <Gallery />
      <FeaturedEvent />
      <FinalCTA />
    </>);

}