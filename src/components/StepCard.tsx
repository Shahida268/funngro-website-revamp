type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

/**
 * Numbered step card used in the "How it works" sections.
 */
export default function StepCard({ step, title, description }: StepCardProps) {
  return (
    <article className="relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink-900/5 transition hover:-translate-y-1 hover:shadow-soft">
      <span className="text-4xl font-extrabold text-brand-200" aria-hidden="true">
        {step}
      </span>
      <h3 className="mt-3 text-lg font-bold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
    </article>
  );
}
