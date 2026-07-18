import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

const SITE_URL = 'https://alirshaaddynamics.com';

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Lightweight, dependency-free SEO manager. Updates title, meta description,
 * canonical, OG/Twitter tags, robots, and optional JSON-LD per route.
 */
export function Seo({ title, description, path = '/', image, noindex, jsonLd }: SeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const ogImage = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : `${SITE_URL}/a0c1d414-f0c2-4c6c-a5b4-9e8079270ad7.jpg`;

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', 'website');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    setLink('canonical', url);

    // JSON-LD (per-page). Managed under a data-seo-jsonld attr so we can clean it up.
    const existing = document.head.querySelectorAll('script[data-seo-jsonld]');
    existing.forEach((n) => n.remove());
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((obj) => {
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.setAttribute('data-seo-jsonld', '');
        s.textContent = JSON.stringify(obj);
        document.head.appendChild(s);
      });
    }
    return () => {
      document.head
        .querySelectorAll('script[data-seo-jsonld]')
        .forEach((n) => n.remove());
    };
  }, [title, description, path, image, noindex, JSON.stringify(jsonLd)]);

  return null;
}
