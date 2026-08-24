import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Sparkles, Eye, EyeOff } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

export default function Login() {
  useSeo({
    title: 'Login | Funngro',
    description: 'Log in to your Funngro account to discover opportunities, manage campaigns and connect with talent.',
    path: '/login',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />
      <div className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-2">
        {/* Left brand panel */}
        <div className="hidden flex-col justify-between rounded-3xl bg-ink-900 p-10 text-white lg:flex">
          <div>
            <Link to="/" className="flex items-center gap-2 text-lg font-extrabold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              funngro.
            </Link>
            <h2 className="mt-10 text-3xl font-extrabold leading-tight">
              Welcome back.
              <br />
              <span className="text-brand-400">Let&apos;s keep building.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Log in to manage your campaigns, track your earnings and discover new
              opportunities from real brands.
            </p>
          </div>
          <ul className="mt-10 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Live brand campaigns</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Track earnings & payouts</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Hire young talent in clicks</li>
          </ul>
        </div>

        {/* Form panel */}
        <div className="mx-auto w-full max-w-md animate-fadeUp">
          <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink-900/5">
            <h1 className="text-2xl font-extrabold text-ink-900">Login to Funngro</h1>
            <p className="mt-2 text-sm text-ink-500">
              Enter your details to access your account.
            </p>

            {submitted && (
              <div
                role="status"
                className="mt-5 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-700 ring-1 ring-brand-200"
              >
                This is a demo login — no real authentication is performed.
              </div>
            )}

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink-800">
                  Email
                </label>
                <div className="mt-1.5 relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" aria-hidden="true" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-ink-900/10 bg-white py-3 pl-10 pr-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-medium text-ink-800">
                  Password
                </label>
                <div className="mt-1.5 relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" aria-hidden="true" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-ink-900/10 bg-white py-3 pl-10 pr-10 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-ink-400 transition hover:bg-brand-50 hover:text-brand-600"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-2 text-ink-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-ink-900/20 text-brand-600 focus:ring-brand-400"
                  />
                  Remember me
                </label>
                <a href="#" className="font-medium text-brand-600 hover:text-brand-700">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn-primary w-full">
                Login
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-ink-500">
              Don&apos;t have an account?{' '}
              <Link to="/company" className="font-semibold text-brand-600 hover:text-brand-700">
                Get Started
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
