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

  return (
    <>
      <PageHero
        eyebrow={dictionary.contact.hero.eyebrow}
        title={dictionary.contact.hero.title}
        description={dictionary.contact.hero.description}
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
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(var(--outline)/0.62)] bg-[rgb(var(--theme-contact-dock-surface)/0.52)] p-2 shadow-[0_18px_32px_rgb(var(--shadow)/0.12)] backdrop-blur-md">
                  {contactChannels.map((channel) => (
                    <a
                      key={channel.icon}
                      href={channel.href}
                      aria-label={channel.ariaLabel}
                      className="grid h-[3.7rem] w-[3.7rem] place-items-center rounded-[1.05rem] border border-[rgb(var(--outline)/0.56)] bg-[rgb(var(--theme-contact-button-surface)/0.78)] transition duration-200 hover:-translate-y-px hover:border-[rgb(var(--outline-strong)/0.78)] hover:bg-[rgb(var(--theme-contact-button-hover)/0.86)] hover:shadow-[0_12px_20px_rgb(var(--shadow)/0.12)]"
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noreferrer" : undefined}
                    >
                      <ContactChannelIcon kind={channel.icon} className="h-[1.35rem] w-[1.35rem]" />
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
