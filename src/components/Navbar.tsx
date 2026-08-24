import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

type NavItem = {
  label: string;
  to: string;
  type: 'route' | 'anchor';
};

const navItems: NavItem[] = [
  { label: 'For Teens', to: '/', type: 'route' },
  { label: 'For Companies', to: '/company', type: 'route' },
  { label: 'How It Works', to: '#how-it-works', type: 'anchor' },
  { label: 'About', to: '#about', type: 'anchor' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchor = (to: string) => {
    setOpen(false);

    const id = to.replace('#', '');
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.location.assign(`/#${id}`);
    }
  };

  const renderLink = (item: NavItem) => {
    if (item.type === 'anchor') {
      return (
        <button
          key={item.label}
          type="button"
          onClick={() => handleAnchor(item.to)}
          className="rounded-full px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-700"
        >
          {item.label}
        </button>
      );
    }

    return (
      <NavLink
        key={item.label}
        to={item.to}
        end={item.to === '/'}
        className={({ isActive }) =>
          `rounded-full px-3 py-2 text-sm font-medium transition hover:bg-brand-50 hover:text-brand-700 ${
            isActive ? 'text-brand-700' : 'text-ink-700'
          }`
        }
      >
        {item.label}
      </NavLink>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-soft backdrop-blur'
          : 'bg-white/70 backdrop-blur'
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between gap-4"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="flex items-center gap-2 whitespace-nowrap text-lg font-extrabold tracking-tight text-ink-900"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          funngro.
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.map(renderLink)}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/login" className="btn-ghost">
            Login
          </Link>

          {/* Changed to Signup */}
          <Link to="/signup" className="btn-primary">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink-800 transition hover:bg-brand-50 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-ink-900/5 bg-white lg:hidden"
        >
          <div className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) =>
              item.type === 'anchor' ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleAnchor(item.to)}
                  className="rounded-xl px-3 py-3 text-left text-sm font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                </button>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-brand-50 ${
                      isActive ? 'text-brand-700' : 'text-ink-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}

            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link to="/login" className="btn-ghost w-full">
                Login
              </Link>

              {/* Changed to Signup */}
              <Link to="/signup" className="btn-primary w-full">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}