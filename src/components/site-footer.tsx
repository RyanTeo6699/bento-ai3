import Link from "next/link";

import type { Locale, NavItem } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";

type SiteFooterProps = {
  locale: Locale;
  navItems: NavItem[];
  copy: {
    tagline: string;
    title: string;
    cta: string;
    navTitle: string;
    contactTitle: string;
    location: string;
    policy: string;
    closingKicker: string;
    closingLine: string;
  };
  companyDescription: string;
  emailHref: string;
  emailValue: string;
};

export function SiteFooter({
  locale,
  navItems,
  copy,
  companyDescription,
  emailHref,
  emailValue
}: SiteFooterProps) {
  return (
    <footer className="pb-10 pt-8">
      <div className="shell">
        <div className="boxed-section px-6 py-8 md:px-8 md:py-9">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)_minmax(0,0.9fr)]">
            <div className="min-w-0 space-y-5">
              <div className="flex items-center gap-4">
                <span className="brand-mark">
                  <span className="brand-grid">
                    <span className="bg-[rgb(var(--primary-veil))]" />
                    <span className="bg-[rgb(var(--secondary-veil))]" />
                    <span className="bg-[rgb(var(--surface-container-high))]" />
                    <span className="bg-[rgb(var(--tertiary-container))]" />
                  </span>
                </span>
                <div className="min-w-0">
                  <p className="font-[var(--font-headline)] text-3xl font-bold uppercase tracking-[-0.06em] text-[rgb(var(--ink))]">
                    Bento AIII
                  </p>
                  <p className="label-caps mt-1 text-[rgb(var(--primary))]">{copy.tagline}</p>
                </div>
              </div>

              <div className="max-w-2xl space-y-4">
                <div className="hero-marquee">
                  <span className="section-kicker">SYSTEM_CORE</span>
                  <span className="sticker-badge">OUTCOME_MEMORY</span>
                </div>
                <h2 className="max-w-3xl text-4xl font-bold leading-[1] tracking-[-0.06em] text-[rgb(var(--ink))]">
                  {copy.title}
                </h2>
                <p className="max-w-2xl text-base leading-8 text-[rgb(var(--ink-soft))]">
                  {companyDescription}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-[rgb(var(--ink-muted))]">
                  {copy.policy}
                </p>
                <Link
                  href={buildLocalizedPath(locale, "/contact")}
                  className="button-primary inline-flex w-full max-w-full justify-center text-center sm:w-auto"
                >
                  {copy.cta}
                </Link>
              </div>
            </div>

            <div className="terminal-panel p-6">
              <h3 className="label-caps mb-5 text-[rgb(var(--secondary))]">{copy.navTitle}</h3>
              <div className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={buildLocalizedPath(locale, item.href)}
                    className="block w-fit rounded-full border border-transparent px-2 py-1 text-sm font-semibold text-[rgb(var(--ink-soft))] transition hover:border-[rgb(var(--secondary))] hover:text-[rgb(var(--ink))]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="terminal-panel p-6">
              <h3 className="label-caps mb-5 text-[rgb(var(--primary))]">{copy.contactTitle}</h3>
              <div className="space-y-4 break-words text-sm leading-7 text-[rgb(var(--ink-soft))]">
                <a
                  href={emailHref}
                  className="block break-all text-base font-semibold text-[rgb(var(--ink))] hover:text-[rgb(var(--primary))]"
                >
                  {emailValue}
                </a>
                <p>{copy.location}</p>
                <p className="text-[rgb(var(--ink-muted))]">{copy.closingLine}</p>
              </div>
            </div>
          </div>

          <div className="terminal-strip">
            <div className="terminal-line">{copy.closingKicker}</div>
            <div className="terminal-line">{copy.closingLine}</div>
            <div className="terminal-line">PUBLIC_SITE=architecture_direction / build-safe</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
