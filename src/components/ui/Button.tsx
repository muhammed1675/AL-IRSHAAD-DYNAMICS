import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
type Variant = 'primary' | 'secondary' | 'gold' | 'ghost';
type Size = 'md' | 'lg';
const base =
'inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full transition-all duration-300 ease-smooth focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap';
const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base'
};
const variants: Record<Variant, string> = {
  primary:
  'bg-brand-green text-white shadow-green hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-soft-lg',
  secondary:
  'bg-white text-brand-green border border-brand-green/40 hover:border-brand-green hover:bg-brand-green hover:text-white hover:-translate-y-0.5',
  gold: 'bg-brand-gold text-brand-navy shadow-gold hover:bg-brand-gold-soft hover:-translate-y-0.5',
  ghost:
  'bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white/20 hover:-translate-y-0.5'
};
interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}
type ButtonAsButton = CommonProps &
React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
};
type ButtonAsLink = CommonProps & {
  as: 'link';
  to: string;
};
type ButtonAsAnchor = CommonProps &
React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  href: string;
};
type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;
export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = twMerge(base, sizes[size], variants[variant], className);
  if (props.as === 'link') {
    const { to } = props;
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>);

  }
  if (props.as === 'a') {
    const {
      href,
      as,
      variant: _v,
      size: _s,
      className: _c,
      children: _ch,
      ...rest
    } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>);

  }
  const {
    as,
    variant: _v,
    size: _s,
    className: _c,
    children: _ch,
    ...rest
  } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>);

}