import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, CheckCircle2Icon, Loader2Icon } from 'lucide-react';
import { SERVICES } from '../../lib/content';
interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
const EMPTY: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};
const fieldClasses =
'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20';
export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle'
  );
  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    next.email = 'Please enter a valid email.';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    if (!form.message.trim()) next.message = 'Please tell us how we can help.';else
    if (form.message.trim().length < 10)
    next.message = 'A little more detail helps us serve you better.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const update =
  (key: keyof FormState) =>
  (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setForm((f) => ({
      ...f,
      [key]: e.target.value
    }));
    if (errors[key as keyof Errors])
    setErrors((prev) => ({
      ...prev,
      [key]: undefined
    }));
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    // Simulated submission for the front-end prototype.
    setTimeout(() => {
      setStatus('success');
      setForm(EMPTY);
    }, 1400);
  };
  if (status === 'success') {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        className="flex flex-col items-center justify-center rounded-3xl border border-brand-green/20 bg-brand-green/5 p-10 text-center"
        role="status">
        
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-green text-white">
          <CheckCircle2Icon className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-brand-navy">
          Message sent!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
          Thank you for reaching out. Our team will get back to you shortly —
          usually within a few hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-brand-green underline-offset-4 hover:underline">
          
          Send another message
        </button>
      </motion.div>);

  }
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
      
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-brand-navy">
            
            Full name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update('name')}
            placeholder="Your name"
            className={fieldClasses}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined} />
          
          {errors.name &&
          <p id="name-error" className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          }
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-brand-navy">
            
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="+234 ..."
            className={fieldClasses}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined} />
          
          {errors.phone &&
          <p id="phone-error" className="mt-1.5 text-xs text-red-600">
              {errors.phone}
            </p>
          }
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-brand-navy">
          
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={update('email')}
          placeholder="you@example.com"
          className={fieldClasses}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined} />
        
        {errors.email &&
        <p id="email-error" className="mt-1.5 text-xs text-red-600">
            {errors.email}
          </p>
        }
      </div>

      <div className="mt-5">
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-medium text-brand-navy">
          
          Service of interest
        </label>
        <select
          id="service"
          value={form.service}
          onChange={update('service')}
          className={fieldClasses}>
          
          <option value="">Select a service (optional)</option>
          {SERVICES.map((s) =>
          <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          )}
          <option value="Other">Other / Custom</option>
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-brand-navy">
          
          How can we help?
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your event, project, or journey..."
          className={`${fieldClasses} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined} />
        
        {errors.message &&
        <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        }
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 font-display text-base font-semibold text-white shadow-green transition-all duration-300 ease-smooth hover:bg-brand-green-dark hover:-translate-y-0.5 disabled:opacity-70">
        
        {status === 'submitting' ?
        <>
            <Loader2Icon className="h-5 w-5 animate-spin" /> Sending...
          </> :

        <>
            Send Message <SendIcon className="h-5 w-5" />
          </>
        }
      </button>
    </form>);

}