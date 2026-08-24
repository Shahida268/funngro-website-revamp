import { Link } from 'react-router-dom';
import {
  Rocket,
  Video,
  Share2,
  Users,
  ListChecks,
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import StepCard from '@/components/StepCard';
import { useSeo } from '@/hooks/useSeo';

const opportunities = [
  {
    icon: Video,
    heading: 'Content Creation',
    description:
      'Create reels, posts, blogs, photos and other content for real brand campaigns that match your style.',
    cta: 'Explore campaigns',
    accent: 'brand' as const,
  },
  {
    icon: Share2,
    heading: 'Brand Promotion',
    description:
      'Promote brands through social media and authentic recommendations to your network and audience.',
    cta: 'Start promoting',
    accent: 'sky' as const,
  },
  {
    icon: Users,
    heading: 'Referrals',
    description:
      'Refer friends to useful brands and earn from eligible actions when they sign up or engage.',
    cta: 'Refer & earn',
    accent: 'amber' as const,
  },
  {
    icon: ListChecks,
    heading: 'Micro Tasks',
    description:
      'Surveys, sampling, app testing and other small brand tasks you can complete in minutes.',
    cta: 'See micro tasks',
    accent: 'rose' as const,
  },
];

const steps = [
  { step: '01', title: 'Sign up', description: 'Create your free Funngro profile in under two minutes and tell us what you love doing.' },
  { step: '02', title: 'Pick a campaign', description: 'Browse live brand campaigns and choose the ones that match your interests and skills.' },
  { step: '03', title: 'Complete the work', description: 'Follow simple instructions, submit your work, and get feedback from the brand.' },
  { step: '04', title: 'Get paid', description: 'Once approved, your earnings are sent straight to your UPI or bank account.' },
];

const heroCardItems = [
  { icon: Video, label: 'Content' },
  { icon: Share2, label: 'Promotion' },
  { icon: Users, label: 'Referrals' },
  { icon: ListChecks, label: 'Micro Tasks' },
];

export default function Teen() {
  useSeo({
    title: 'Funngro for Teens | Discover Opportunities & Earn',
    description:
      'Discover flexible opportunities, brand campaigns and practical ways to build skills and earn with Funngro.',
    path: '/',
    ogTitle: 'Funngro for Teens — Discover Opportunities & Earn',
    ogDescription:
      'Content creation, brand promotion, referrals and micro tasks. Build real skills and get paid with Funngro.',
  });

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-brand-100/60 blur-3xl" aria-hidden="true" />
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fadeUp">
            <span className="badge">
              <Rocket className="h-3.5 w-3.5" aria-hidden="true" />
              Real brands. Real opportunities.
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-ink-900 sm:text-5xl lg:text-6xl">
              Get paid.
              <br />
              <span className="text-brand-600">Get started.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              Discover flexible opportunities from real brands. Create content, promote
              brands, complete tasks, refer friends and build experience while earning.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#opportunities" className="btn-primary">
                Explore Opportunities
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#how-it-works" className="btn-ghost">
                <PlayCircle className="h-4 w-4" aria-hidden="true" />
                How It Works
              </a>
            </div>
          </div>

          <div className="relative animate-fadeUp lg:pl-8">
            <div className="mx-auto max-w-md animate-floaty">
              <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink-900/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                      Brand Campaigns
                    </p>
                    <p className="mt-1 text-lg font-bold text-ink-900">Your earning menu</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-200">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <ul className="mt-5 grid grid-cols-2 gap-3">
                  {heroCardItems.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2 rounded-2xl bg-brand-50/70 px-3 py-3 text-sm font-medium text-ink-800 ring-1 ring-brand-100"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FUNNGRO */}
      <section className="container-page py-16 sm:py-20">
        <SectionTitle
          label="Why Funngro?"
          heading="Your skills can create real opportunities."
          subtext="Young people can discover flexible opportunities involving content creation, promotion, referrals, sampling, surveys, app testing and similar activities — all in one place."
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            'Flexible work you can do from your phone',
            'Real brand campaigns, not busywork',
            'Build a portfolio while you earn',
          ].map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-2xl bg-brand-50/70 p-4 text-sm text-ink-700 ring-1 ring-brand-100"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section id="opportunities" className="bg-brand-50/50 py-16 scroll-mt-24 sm:py-20">
        <div className="container-page">
          <SectionTitle
            label="What you can do"
            heading="Choose work that fits you."
            subtext="Four flexible ways to earn with Funngro — pick what matches your skills, your time and your interests."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((o) => (
              <FeatureCard key={o.heading} {...o} href="#how-it-works" />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="container-page py-16 scroll-mt-24 sm:py-20">
        <SectionTitle
          heading="From first tap to first payout."
          subtext="A simple, transparent process — no experience required to get started."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-brand-50/50 py-16 scroll-mt-24 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              label="About"
              heading="Built for India's young earners."
              subtext="Funngro connects young people with brands and opportunities that match their skills and interests. We believe the next generation deserves real work, real earnings and real experience — without needing a degree or a desk job to get started."
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link to="/company" className="btn-primary">
                I'm a company
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href="#opportunities" className="btn-ghost">
                Browse opportunities
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: 'Opportunities', v: 'Content, promotion, referrals & micro tasks' },
              { k: 'Payouts', v: 'UPI or bank transfer on approval' },
              { k: 'Eligibility', v: 'Teens who want to earn and learn' },
              { k: 'Cost', v: 'Free to join, no hidden fees' },
            ].map((item) => (
              <div key={item.k} className="card">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{item.k}</p>
                <p className="mt-2 text-sm text-ink-600">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
