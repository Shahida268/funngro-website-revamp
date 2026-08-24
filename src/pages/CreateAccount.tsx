import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
} from 'lucide-react';

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-2">
        <div className="hidden flex-col justify-between rounded-3xl bg-ink-900 p-10 text-white lg:flex">
          <div>
            <Link to="/" className="flex items-center gap-2 text-lg font-extrabold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
                <Sparkles className="h-4 w-4" />
              </span>
              funngro.
            </Link>

            <h2 className="mt-10 text-3xl font-extrabold leading-tight">
              Start your journey.
              <br />
              <span className="text-brand-400">Create. Earn. Grow.</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Join Funngro and discover real opportunities from brands.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink-900/5">
            <h1 className="text-2xl font-extrabold text-ink-900">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-ink-500">
              Join Funngro and start exploring opportunities.
            </p>

            {submitted && (
              <div className="mt-5 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700">
                Account created successfully! This is a demo.
              </div>
            )}

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-ink-800">
                  Full Name
                </label>

                <div className="relative mt-1.5">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-ink-900/10 py-3 pl-10 pr-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-ink-800">
                  Email
                </label>

                <div className="relative mt-1.5">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-ink-900/10 py-3 pl-10 pr-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-ink-800">
                  Password
                </label>

                <div className="relative mt-1.5">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-ink-900/10 py-3 pl-10 pr-10 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-ink-400"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full">
                Create Account
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-ink-500">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}