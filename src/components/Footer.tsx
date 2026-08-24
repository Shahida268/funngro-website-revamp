import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const footerLinks = [
  { label: 'For Teens', to: '/' },
  { label: 'For Companies', to: '/company' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'About', to: '/#about' },
  { label: 'Login', to: '/login' },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-ink-900/5 bg-brand-50/60">
      <div className="container-page py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 text-lg font-extrabold text-ink-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              funngro.
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Connecting India&apos;s young earners with real brand opportunities, and
              companies with fresh digital talent.
            </p>
            <div className="mt-4 flex items-center gap-3" aria-label="Social links">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-500 ring-1 ring-ink-900/5 transition hover:text-brand-600"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink-600 transition hover:text-brand-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink-900/5 pt-6 text-xs text-ink-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Funngro Revamp. All rights reserved.</p>
          <p>Built as an original design concept for the Funngro evaluation project.</p>
        </div>
      </div>
    </footer>
  );
}
