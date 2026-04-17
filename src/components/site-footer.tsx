import Link from "next/link";

import { ContactChannelIcon } from "@/components/contact-channel-icon";
import type { Locale, NavItem } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import type { PublicContactChannel } from "@/lib/contact-details";

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
  contactChannels: PublicContactChannel[];
};

export function SiteFooter({
  locale,
  navItems,
  copy,
  companyDescription,
  contactChannels
}: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer-shell">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.7fr)_minmax(0,0.85fr)]">
            <div className="min-w-0 space-y-6">
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
                  <p className="font-[var(--font-headline)] text-[2rem] font-semibold tracking-[-0.06em] text-[rgb(var(--ink))]">
                    Bento AIII
                  </p>
                  <p className="footer-eyebrow mt-1">{copy.tagline}</p>
                </div>
              </div>

              <div className="max-w-2xl space-y-4">
                <h2 className="max-w-3xl text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[rgb(var(--ink))] md:text-[2.8rem]">
                  {copy.title}
                </h2>
                <p className="max-w-2xl text-base leading-8 text-[rgb(var(--ink-soft))]">
                  {companyDescription}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-[rgb(var(--ink-muted))]">
                  {copy.policy}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={buildLocalizedPath(locale, "/contact")}
                  className="button-primary inline-flex w-full max-w-full justify-center text-center sm:w-auto"
                >
                  {copy.cta}
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              <p className="footer-heading">{copy.navTitle}</p>
              <div className="footer-link-list">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={buildLocalizedPath(locale, item.href)}
                    className="footer-link"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <p className="footer-heading">{copy.contactTitle}</p>
              <div className="space-y-3">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    aria-label={`${channel.label}: ${channel.value}`}
                    className="flex items-center gap-3 rounded-[1.2rem] border border-[rgb(var(--outline)/0.76)] bg-[rgba(255,255,255,0.72)] px-3.5 py-3 transition hover:-translate-y-0.5 hover:border-[rgb(var(--outline-strong))] hover:shadow-[0_14px_30px_rgba(15,23,42,0.06)]"
                    target={channel.icon === "linkedin" ? "_blank" : undefined}
                    rel={channel.icon === "linkedin" ? "noreferrer" : undefined}
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[rgb(var(--outline)/0.8)] bg-[rgb(var(--surface-lowest))]">
                      <ContactChannelIcon kind={channel.icon} />
                    </span>
                    <div className="min-w-0">
                      <p className="footer-eyebrow">{channel.label}</p>
                      <p className="mt-1 break-all text-sm font-semibold leading-6 text-[rgb(var(--ink))]">
                        {channel.value}
                      </p>
                    </div>
                  </a>
                ))}
                <p className="text-sm leading-7 text-[rgb(var(--ink-muted))]">{copy.closingLine}</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>{copy.closingKicker}</p>
            <p>{copy.closingLine}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
