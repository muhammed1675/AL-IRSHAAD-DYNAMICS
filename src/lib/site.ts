// Central source of truth for brand info, contact details, and content data.

export const SITE = {
  name: 'AL-IRSHAAD DYNAMICS',
  shortName: 'Al-Irshaad',
  slogan: 'Handle Your Memories Professionally.',
  tagline:
  'A premium media house and travel company crafting cinematic memories and seamless spiritual journeys across Nigeria.',
  phoneDisplay: '+234 810 844 1454',
  phoneRaw: '2348108441454',
  whatsappRaw: '2348108441454',
  email: 'hello@alirshaaddynamics.com',
  address: 'Media Suite, Central Business District, Abuja, Nigeria',
  mapLink: 'https://maps.app.goo.gl/WWemBnBFD21D6a678?g_st=ic',
  hours: [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'By appointment' }],

  socials: [
  { label: 'Instagram', handle: '@alirshaaddynamics', href: '#' },
  { label: 'Facebook', handle: 'Al-Irshaad Dynamics', href: '#' },
  { label: 'YouTube', handle: 'Al-Irshaad Dynamics', href: '#' },
  { label: 'TikTok', handle: '@alirshaaddynamics', href: '#' }]

};

export const IMAGES = {
  hero: "/a0c1d414-f0c2-4c6c-a5b4-9e8079270ad7.jpg",
  about: "/8de8fea5-48bc-47b5-ac27-4c8d75684b86.jpg",

  hajj: "/7a009380-803e-4bf4-9cb1-100a14f101c6.jpg",
  cta: "/522b1bf0-6293-4f4e-b215-71dbb96d0f97.jpg",
  event: "/b8e15e7d-cb61-4ea3-880f-481f98eacb73.jpg"

};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const WHATSAPP_DEFAULT =
'Assalamu alaikum Al-Irshaad Dynamics, I would like to make an enquiry about your services.';