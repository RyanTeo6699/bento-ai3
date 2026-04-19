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
              <p className="sr-only">{copy.contactTitle}</p>
              <div
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--outline)/0.52)] bg-[rgb(var(--theme-contact-dock-surface)/0.34)] p-[0.3125rem]"
                aria-label={copy.contactTitle}
                role="group"
              >
                {contactChannels.map((channel) => (
                  <a
                    key={channel.icon}
                    href={channel.href}
                    aria-label={channel.ariaLabel}
                    className="grid h-10 w-10 place-items-center rounded-full border border-[rgb(var(--outline)/0.48)] bg-[rgb(var(--theme-contact-button-surface)/0.66)] transition duration-200 hover:border-[rgb(var(--outline-strong)/0.64)] hover:bg-[rgb(var(--theme-contact-button-hover)/0.74)] hover:shadow-[0_8px_16px_rgb(var(--shadow)/0.1)]"
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noreferrer" : undefined}
                  >
                    <ContactChannelIcon kind={channel.icon} className="h-[0.98rem] w-[0.98rem]" />
                  </a>
                ))}
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
