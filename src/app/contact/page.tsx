import type { Metadata } from "next";

import { ContactChannelIcon } from "@/components/contact-channel-icon";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import {
  PUBLIC_CONTACT_EMAIL,
  getPublicContactChannels,
  replaceLegacyContactEmail
} from "@/lib/contact-details";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);

  return createPageMetadata({
    locale,
    title: dictionary.nav.find((item) => item.href === "/contact")?.label ?? "Contact",
    description: dictionary.contact.hero.description,
    path: "/contact"
  });
}

export default function ContactPage() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const contactChannels = getPublicContactChannels(locale);
  const heroMetrics = dictionary.contact.hero.metrics.map((metric) =>
    metric.value.includes("@") ? { ...metric, value: PUBLIC_CONTACT_EMAIL } : metric
  );

  return (
    <>
      <PageHero
        eyebrow={dictionary.contact.hero.eyebrow}
        title={dictionary.contact.hero.title}
        description={dictionary.contact.hero.description}
        metrics={heroMetrics}
      />

      <section className="py-24">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow={dictionary.contact.reachOut.eyebrow}
                title={dictionary.contact.reachOut.title}
                description={dictionary.contact.reachOut.description}
              />
            </Reveal>

            <div className="grid gap-4">
              {contactChannels.map((channel, index) => (
                <Reveal key={channel.label} delay={0.06 * index}>
                  <a
                    href={channel.href}
                    className="surface flex items-start gap-4 p-5 transition hover:-translate-y-0.5 hover:border-[rgb(var(--outline-strong))] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
                    aria-label={`${channel.label}: ${channel.value}`}
                    target={channel.icon === "linkedin" ? "_blank" : undefined}
                    rel={channel.icon === "linkedin" ? "noreferrer" : undefined}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[rgb(var(--outline)/0.8)] bg-[rgb(var(--surface-lowest))] shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                      <ContactChannelIcon kind={channel.icon} />
                    </span>
                    <div className="min-w-0">
                      <p className="neo-microcopy">{channel.label}</p>
                      <p className="mt-3 break-all text-[1rem] font-semibold leading-6 tracking-[-0.03em] text-[rgb(var(--ink))]">
                        {channel.value}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                        {replaceLegacyContactEmail(channel.note)}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}

              <Reveal delay={0.18} className="surface p-6">
                <p className="section-kicker sticker-rotate-3 text-[0.68rem]">
                  {dictionary.contact.submissionPath.kicker}
                </p>
                <div className="mt-5 space-y-4">
                  {dictionary.contact.submissionPath.steps.map((step) => (
                    <div
                      key={step.label}
                      className="border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-4 first:border-t-0 first:pt-0"
                    >
                      <p className="neo-microcopy">{step.label}</p>
                      <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.08}>
            <ContactForm locale={locale} copy={dictionary.contactForm} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
