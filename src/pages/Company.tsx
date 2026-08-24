import { Link } from 'react-router-dom';
import {
  Handshake,
  Code2,
  PenTool,
  Megaphone,
  Lightbulb,
  Users,
  Layers,
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import StepCard from '@/components/StepCard';
import { useSeo } from '@/hooks/useSeo';

const benefits = [
  {
    icon: Megaphone,
    heading: 'Digital Skills',
    description:
      'Tap young talent fluent in social media, content, design and the tools modern teams use every day.',
    cta: 'See talent categories',
    accent: 'brand' as const,
  },
  {
    icon: Lightbulb,
    heading: 'Fresh Perspectives',
    description:
      'Bring original ideas and a Gen-Z lens to your campaigns, products and customer conversations.',
    cta: 'Start a brief',
    accent: 'sky' as const,
  },
  {
    icon: Users,
    heading: 'Flexible Talent',
    description:
      'Scale up for campaigns or one-off projects without the overhead of full-time hiring.',
    cta: 'Plan a project',
    accent: 'amber' as const,
  },
  {
    icon: Layers,
    heading: 'Scalable Support',
    description:
      'From a single task to a multi-creator campaign, Funngro helps you find the right number of hands.',
    cta: 'Scale your team',
    accent: 'rose' as const,
  },
];

const steps = [
  { step: '01', title: 'Tell us what you need', description: 'Share your project, the skills you need and the timeline you are working with.' },
  { step: '02', title: 'Discover suitable talent', description: 'Browse young professionals matched to your brief by category, skills and availability.' },
  { step: '03', title: 'Assign the project', description: 'Pick the talent that fits, brief them clearly and kick off the work in a few clicks.' },
  { step: '04', title: 'Get the work done', description: 'Track progress, review deliverables and pay on completion — all in one place.' },
];

const talentCards = [
  { role: 'Digital Creator', skills: 'Content • Design • Social Media', match: 96, icon: PenTool },
  { role: 'Web Developer', skills: 'React • UI • Web Development', match: 92, icon: Code2 },
  { role: 'UI/UX Designer', skills: 'Figma • UX • Visual Design', match: 94, icon: PenTool },
];

export default function Company() {
  useSeo({
    title: 'Funngro for Companies | Find Young Talent',
    description:
      "Connect with motivated young talent and find digital skills for your company's projects with Funngro.",
    path: '/company',
    ogTitle: 'Funngro for Companies — Find Young Talent',
    ogDescription:
      'Hire motivated young creators, developers and designers for digital and project-based work with Funngro.',
  });

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full bg-brand-100/60 blur-3xl" aria-hidden="true" />
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fadeUp">
            <span className="badge">
              <Handshake className="h-3.5 w-3.5" aria-hidden="true" />
              Build your team with young talent
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-ink-900 sm:text-5xl lg:text-6xl">
              Find talent.
              <br />
              <span className="text-brand-600">Get work done.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              Connect with motivated young professionals who bring fresh ideas, digital
              skills and energy to your projects.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#benefits" className="btn-primary">
                Find Young Talent
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#how-companies-work" className="btn-ghost">
                <PlayCircle className="h-4 w-4" aria-hidden="true" />
                How It Works
              </a>
            </div>
          </div>

          <div className="relative animate-fadeUp lg:pl-8">
            <div className="mx-auto max-w-md animate-floaty rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink-900/5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    Talent Match
                  </p>
                  <p className="mt-1 text-lg font-bold text-ink-900">Curated for your brief</p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-200">
                  <TrendingUp className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {talentCards.map(({ role, skills, match, icon: Icon }) => (
                  <li
                    key={role}
                    className="rounded-2xl bg-brand-50/70 p-4 ring-1 ring-brand-100"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 ring-1 ring-brand-200">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-ink-900">{role}</p>
                          <p className="truncate text-xs text-ink-500">{skills}</p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-brand-600 px-2.5 py-1 text-xs font-bold text-white">
                        {match}% match
                      </span>
                    </div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-brand-100">
                      <div
                        className="h-full rounded-full bg-brand-500"
                        style={{ width: `${match}%` }}
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FUNNGRO / BENEFITS */}
      <section id="benefits" className="container-page py-16 scroll-mt-24 sm:py-20">
        <SectionTitle
          label="Why Funngro?"
          heading="Young talent. Fresh ideas. Real results."
          subtext="Bring digital-native skills and fresh thinking into your projects — without the overhead of traditional hiring."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <FeatureCard key={b.heading} {...b} href="#how-companies-work" />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-companies-work" className="bg-brand-50/50 py-16 scroll-mt-24 sm:py-20">
        <div className="container-page">
          <SectionTitle
            heading="From brief to delivery in four steps."
            subtext="A clear, lightweight process to go from an idea to completed work with the right young talent."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <StepCard key={s.step} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container-page py-16 scroll-mt-24 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              label="About"
              heading="Connecting companies with young talent."
              subtext="Funngro helps companies find and work with motivated young talent for digital and project-based requirements — from content and design to development and social media. Whether you need a single creator for a campaign or a small team for a product launch, Funngro makes it easy to discover, assign and pay the right people."
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link to="/login" className="btn-primary">
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/" className="btn-ghost">
                I'm a teen
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: 'Talent', v: 'Creators, developers & designers' },
              { k: 'Projects', v: 'Campaigns, content & product work' },
              { k: 'Pricing', v: 'Pay per project, no hiring overhead' },
              { k: 'Speed', v: 'Matched talent in hours, not weeks' },
            ].map((item) => (
              <div key={item.k} className="card">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{item.k}</p>
                <p className="mt-2 text-sm text-ink-600">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-brand-50/50 py-12">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink-600">
            {['Content & creators', 'Design & UX', 'Web development', 'Social media', 'Surveys & research'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-600" aria-hidden="true" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
