import type { Metadata } from "next";

import { ContactChannelIcon } from "@/components/contact-channel-icon";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { getPublicContactChannels } from "@/lib/contact-details";
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
  const heroMetrics = dictionary.contact.hero.metrics.filter(
    (metric) => !metric.value.includes("@")
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
              <Reveal delay={0.04}>
                <div className="surface flex items-center gap-3 p-5">
                  {contactChannels.map((channel) => (
                    <a
                      key={channel.icon}
                      href={channel.href}
                      aria-label={channel.ariaLabel}
                      className="grid h-12 w-12 place-items-center rounded-full border border-[rgb(var(--outline)/0.76)] bg-[rgb(var(--surface-lowest))] transition hover:-translate-y-0.5 hover:border-[rgb(var(--outline-strong))] hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]"
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noreferrer" : undefined}
                    >
                      <ContactChannelIcon kind={channel.icon} />
                    </a>
                  ))}
                </div>
              </Reveal>

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
