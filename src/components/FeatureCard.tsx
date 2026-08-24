import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

type FeatureCardProps = {
  icon: LucideIcon;
  heading: string;
  description: string;
  cta: string;
  href?: string;
  accent?: 'brand' | 'sky' | 'amber' | 'rose';
};

const accentMap = {
  brand: 'bg-brand-50 text-brand-600 ring-brand-200',
  sky: 'bg-sky-50 text-sky-600 ring-sky-200',
  amber: 'bg-amber-50 text-amber-600 ring-amber-200',
  rose: 'bg-rose-50 text-rose-600 ring-rose-200',
} as const;

/**
 * Reusable card used for the "what you can do" / "benefits" grids.
 */
export default function FeatureCard({
  icon: Icon,
  heading,
  description,
  cta,
  href = '#',
  accent = 'brand',
}: FeatureCardProps) {
  return (
    <article className="card group flex h-full flex-col">
      <span
        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${accentMap[accent]}`}
        aria-hidden="true"
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-ink-900">{heading}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{description}</p>
      <a
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5"
      >
        {cta}
        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      </a>
    </article>
  );
}
