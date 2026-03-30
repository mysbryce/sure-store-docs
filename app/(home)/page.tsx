import Link from 'next/link';
import { BookOpenText, Compass, Sparkles } from 'lucide-react';
import { mainSiteUrl } from '@/lib/shared';

const highlights = [
  {
    label: 'Focus',
    value: 'FiveM resources, graphics, and practical server-ready assets',
  },
  {
    label: 'Approach',
    value: 'Minimal storefront, clear quality, and support that stays useful',
  },
  {
    label: 'Goal',
    value: 'Help communities ship cleaner experiences with less friction',
  },
];

const sections = [
  {
    icon: BookOpenText,
    title: 'What Sure is building',
    copy:
      'Sure creates practical products for FiveM communities, from usable resources to supporting materials that are easier to adopt and maintain.',
  },
  {
    icon: Compass,
    title: 'What we care about',
    copy:
      'We focus on clean presentation, reliable output, and a smoother experience for teams who want solid assets without unnecessary complexity.',
  },
  {
    icon: Sparkles,
    title: 'Why this docs hub exists',
    copy:
      'This space will become the home for guides, references, and product notes so customers can understand Sure faster and use our work with confidence.',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col gap-8 pb-28 pt-10 md:pb-36">
      <section className="sure-container">
        <div className="glass-panel animate-soft-scale overflow-hidden rounded-[34px] px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end lg:gap-20">
            <div className="max-w-3xl">
              <div className="section-kicker animate-fade-up">Sure Documentation</div>
              <h1 className="section-title animate-fade-up stagger-1 mt-5 max-w-[11ch]">
                Built to explain what Sure makes and why it matters.
              </h1>
              <p className="section-copy animate-fade-up stagger-2 mt-6 max-w-2xl text-base">
                Sure is a storefront and product brand focused on FiveM resources, graphics, and supporting assets for
                communities that want cleaner quality and less overhead. This documentation hub is where we will
                explain our products, workflows, and guidance over time.
              </p>

              <div className="animate-fade-up stagger-3 mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 font-semibold text-zinc-900 hover:scale-[1.01] hover:bg-zinc-100"
                >
                  Open Documentation
                </Link>
                <Link
                  href={mainSiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-white hover:bg-white/[0.08]"
                >
                  Visit Sure Store
                </Link>
              </div>
            </div>

            <div className="glass-panel-soft animate-fade-up stagger-4 rounded-[28px] p-6 sm:p-8 lg:p-9">
              <div className="section-kicker">About Sure</div>
              <div className="mt-6 space-y-5">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-white/8 bg-black/20 px-4 py-5 sm:px-5"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm font-semibold leading-6 text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sure-container mt-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {sections.map(({ icon: Icon, title, copy }, index) => (
            <article
              key={title}
              className={`glass-panel-soft animate-fade-up rounded-[28px] px-5 py-8 sm:px-6 sm:py-9 ${
                index === 1 ? 'stagger-1' : index === 2 ? 'stagger-2' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-white">
                  <Icon className="size-5" />
                </div>
                <h2 className="text-lg font-semibold text-white">{title}</h2>
              </div>
              <p className="section-copy mt-4">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sure-container mt-24 md:mt-28">
        <div className="glass-panel-soft rounded-[30px] px-6 py-10 sm:px-8 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-14">
            <div>
              <div className="section-kicker">Inside The Docs</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Explore the index to follow the next layer of Sure guides, notes, and product references.
              </h2>
              <p className="section-copy mt-4 max-w-2xl">
                We are starting with a clean foundation first, then growing this library into a proper knowledge base
                that explains what we ship, how it works, and how customers can get the best result from it.
              </p>
            </div>

            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-white hover:bg-white/[0.08]"
            >
              Browse the index
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
