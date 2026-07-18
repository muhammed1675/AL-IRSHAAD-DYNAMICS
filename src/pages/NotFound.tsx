import { Link } from 'react-router-dom';
import { Seo } from '../components/seo/Seo';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found — Al-Irshaad Dynamics"
        description="The page you're looking for isn't here. Head back home or reach us directly on WhatsApp."
        path="/404"
        noindex
      />
      <section className="flex min-h-[70vh] items-center justify-center bg-white px-5 py-24 sm:px-8">
        <div className="max-w-lg text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-green">
            Error 404
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-brand-navy sm:text-5xl">
            We couldn't find that page.
          </h1>
          <p className="mt-4 text-ink/70">
            The link may be broken or the page may have moved. Let's get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button as="link" to="/" size="lg">Go home</Button>
            <Button as="link" to="/contact" variant="secondary" size="lg">Contact us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
