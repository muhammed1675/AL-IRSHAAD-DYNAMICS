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
import { Seo } from '../components/seo/Seo';
export function Home() {
  return (
    <>
      <Seo title="Al-Irshaad Dynamics — Premium Photography, Cinematic Film & Hajj Travel | Nigeria" description="Premium Nigerian media house & travel company. Wedding photography, cinematic films, live event coverage, brand content, and trusted Hajj & Umrah packages. Based in Abuja, serving nationwide." path="/" />
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