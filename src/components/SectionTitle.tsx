type SectionTitleProps = {
  label?: string;
  heading: string;
  subtext?: string;
  align?: 'left' | 'center';
  id?: string;
};

/**
 * Consistent section heading block used across pages.
 */
export default function SectionTitle({
  label,
  heading,
  subtext,
  align = 'center',
  id,
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div id={id} className={`max-w-2xl ${alignment} scroll-mt-28`}>
      {label && (
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
          {label}
        </span>
      )}
      <h2 className="mt-3 text-2xl font-extrabold leading-tight text-ink-900 sm:text-3xl lg:text-4xl">
        {heading}
      </h2>
      {subtext && (
        <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base lg:text-lg">
          {subtext}
        </p>
      )}
    </div>
  );
}
