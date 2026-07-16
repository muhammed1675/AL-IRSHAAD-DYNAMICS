import {
  CameraIcon,
  VideoIcon,
  RadioIcon,
  SparklesIcon,
  MegaphoneIcon,
  PlaneIcon,
  GraduationCapIcon,
  NewspaperIcon,
  type LucideIcon } from
'lucide-react';
import { IMAGES } from './site';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  features: string[];
  benefit: string;
  image: string;
}

export const SERVICES: Service[] = [
{
  slug: 'photography',
  icon: CameraIcon,
  title: 'Professional Photography',
  short: 'Timeless imagery for weddings, portraits, and brands.',
  description:
  "From intimate family portraits to grand wedding celebrations, we capture every detail with an editorial eye and a storyteller's heart.",
  features: [
  'Weddings & Nikkah',
  'Portrait & Family',
  'Product & Brand',
  'Corporate Events'],

  benefit: 'Gallery-ready images that turn moments into heirlooms.',
  image: IMAGES.hero
},
{
  slug: 'videography',
  icon: VideoIcon,
  title: 'Cinematic Videography',
  short: 'Films that make your story unforgettable.',
  description:
  'Cinematic direction, color grading, and sound design that transform your event into a film worth reliving again and again.',
  features: [
  'Wedding Films',
  'Documentary',
  'Brand Films',
  'Highlight Reels'],

  benefit: 'Cinema-grade storytelling that moves your audience.',
  image: IMAGES.about
},
{
  slug: 'live-coverage',
  icon: RadioIcon,
  title: 'Live Event Coverage & Streaming',
  short: 'Broadcast-quality coverage, streamed anywhere.',
  description:
  'Multi-camera production and reliable live streaming that connect your event to audiences across the world in real time.',
  features: [
  'Multi-camera Setup',
  'HD Live Streaming',
  'On-site Direction',
  'Instant Highlights'],

  benefit: 'Reach every guest, wherever they are.',
  image: IMAGES.event
},
{
  slug: 'branding',
  icon: SparklesIcon,
  title: 'Event Branding',
  short: 'Cohesive visual identity for your occasion.',
  description:
  'Custom stage design, signage, and visual identity that make every event feel intentional, premium, and unmistakably yours.',
  features: [
  'Stage & Backdrop',
  'Signage & Print',
  'Visual Identity',
  'On-brand Assets'],

  benefit: 'A polished, memorable brand presence.',
  image: IMAGES.event
},
{
  slug: 'promotion',
  icon: MegaphoneIcon,
  title: 'Business Promotion & Advertising',
  short: 'Content and campaigns that grow your reach.',
  description:
  'Strategic content and advertising that positions your business in front of the right audience with clarity and confidence.',
  features: [
  'Ad Campaigns',
  'Social Content',
  'Promo Videos',
  'Growth Strategy'],

  benefit: 'More visibility, more enquiries, more growth.',
  image: IMAGES.about
},
{
  slug: 'hajj-umrah',
  icon: PlaneIcon,
  title: 'Hajj & Umrah Travel',
  short: 'Seamless, spiritually enriching journeys.',
  description:
  'Carefully managed pilgrimage packages with trusted logistics, accommodation, and guidance for a journey of a lifetime.',
  features: [
  'Guided Packages',
  'Visa & Logistics',
  'Premium Lodging',
  'Experienced Guides'],

  benefit: 'Peace of mind for a sacred journey.',
  image: IMAGES.hajj
},
{
  slug: 'training',
  icon: GraduationCapIcon,
  title: 'Content Creation Training',
  short: 'Learn the craft from working professionals.',
  description:
  'Hands-on training in photography, videography, and content creation, taught by our team of working professionals.',
  features: [
  'Photography 101',
  'Video Editing',
  'Content Strategy',
  'Hands-on Practice'],

  benefit: 'Skills that turn passion into profession.',
  image: IMAGES.about
},
{
  slug: 'news-coverage',
  icon: NewspaperIcon,
  title: 'Information & News Coverage',
  short: 'Credible reporting and media documentation.',
  description:
  'Professional documentation and news coverage for organizations, agencies, and communities that value accuracy.',
  features: ['Press Coverage', 'Interviews', 'Documentation', 'Reporting'],
  benefit: 'Trusted coverage that informs and endures.',
  image: IMAGES.event
}];


export const HOME_SERVICES = SERVICES.filter((s) =>
[
'photography',
'videography',
'live-coverage',
'branding',
'promotion',
'hajj-umrah',
'training'].
includes(s.slug)
);

export interface Reason {
  title: string;
  description: string;
}

export const WHY_CHOOSE: Reason[] = [
{
  title: 'Professional Equipment',
  description:
  'Cinema cameras, pro lighting, and broadcast gear on every project.'
},
{
  title: 'Experienced Team',
  description:
  'A seasoned crew of photographers, cinematographers, and producers.'
},
{
  title: 'Fast Delivery',
  description:
  'Reliable timelines with previews and final galleries delivered promptly.'
},
{
  title: 'Uncompromising Quality',
  description: 'Editorial standards and meticulous attention to every frame.'
},
{
  title: 'Trusted Service',
  description:
  'Chosen by families, corporates, schools, and government agencies.'
},
{
  title: 'End-to-End Care',
  description:
  'From first call to final delivery, we handle every detail for you.'
}];


export const CLIENTS = [
'Individuals',
'Families',
'Wedding Clients',
'Islamic Organizations',
'Corporate Organizations',
'Schools',
'Businesses',
'Government Agencies'];


export const VALUES = [
{
  title: 'Excellence',
  description:
  'We hold every frame, film, and journey to the highest standard.'
},
{
  title: 'Trust',
  description:
  'We honour our commitments and protect your memories like our own.'
},
{
  title: 'Integrity',
  description: 'Honest guidance and transparent service, always.'
},
{
  title: 'Craft',
  description:
  'A relentless devotion to the details that make work timeless.'
}];


export const FAQS = [
{
  q: 'How do I book a session or event coverage?',
  a: "Simply reach out via WhatsApp, phone, or the contact form. We'll discuss your needs, share a tailored quote, and confirm your date."
},
{
  q: 'Which locations do you cover?',
  a: 'We are based in Abuja and cover events nationwide across Nigeria. Travel arrangements are included for out-of-state bookings.'
},
{
  q: 'How soon will I receive my photos and videos?',
  a: 'Previews are typically shared within 48 hours, with full edited galleries and films delivered within 1–3 weeks depending on scope.'
},
{
  q: 'Do you offer Hajj & Umrah packages for groups?',
  a: 'Yes. We manage individual, family, and group pilgrimage packages with full logistics, accommodation, and experienced guides.'
},
{
  q: 'Can I book a training program?',
  a: 'Absolutely. We run hands-on content creation training for beginners and aspiring professionals. Contact us for the next cohort.'
}];


export const STATS = [
{ value: '500+', label: 'Events Covered' },
{ value: '8+', label: 'Years of Craft' },
{ value: '1200+', label: 'Happy Clients' },
{ value: '100%', label: 'Dedication' }];


// A small curated gallery set reusing the generated brand imagery.
export const GALLERY = [
{
  src: IMAGES.hero,
  alt: 'Elegant Nigerian wedding celebration at golden hour',
  span: 'tall'
},
{
  src: IMAGES.about,
  alt: 'Media production team capturing an event',
  span: 'wide'
},
{ src: IMAGES.event, alt: 'Corporate gala event coverage', span: 'normal' },
{
  src: IMAGES.hajj,
  alt: 'Serene Islamic architecture on a pilgrimage journey',
  span: 'normal'
},
{
  src: IMAGES.event,
  alt: 'Live event stage under dramatic lighting',
  span: 'wide'
},
{
  src: IMAGES.hero,
  alt: 'Guests celebrating at a luxury wedding',
  span: 'tall'
}];