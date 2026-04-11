import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { getCapabilityPillars, getRoadmap, getValues } from "@/lib/site-data";
import { getSystemCompanyProfile } from "@/lib/system-site-copy";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const companyProfile = getSystemCompanyProfile(locale);

  return createPageMetadata({
    locale,
    title: dictionary.nav.find((item) => item.href === "/about")?.label ?? "About",
    description: companyProfile.positioning,
    path: "/about"
  });
}

export default function AboutPage() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const companyProfile = getSystemCompanyProfile(locale);
  const capabilityPillars = getCapabilityPillars(locale);
  const values = getValues(locale);
  const roadmap = getRoadmap(locale);

  return (
    <>
      <PageHero
        eyebrow={dictionary.about.hero.eyebrow}
        title={dictionary.about.hero.title}
        description={companyProfile.positioning}
        metrics={dictionary.about.hero.metrics}
      />

      <section className="py-24">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface p-8">
            <span className="section-kicker sticker-rotate-1">{dictionary.about.brief.kicker}</span>
            <h2 className="mt-5 text-4xl font-black leading-[0.96] tracking-[-0.05em] text-[rgb(var(--ink))]">
              {dictionary.about.brief.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[rgb(var(--ink))]">
              {companyProfile.description}
            </p>
            <p className="mt-4 text-base leading-8 text-[rgb(var(--ink-soft))]">
              {dictionary.about.brief.body}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="surface p-8">
            <span className="section-kicker sticker-rotate-3">{dictionary.about.publicInfo.kicker}</span>
            <h2 className="mt-5 text-4xl font-black leading-[0.96] tracking-[-0.05em] text-[rgb(var(--ink))]">
              {dictionary.about.publicInfo.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[rgb(var(--ink))]">
              {companyProfile.disclosure}
            </p>
            <div className="mt-8 space-y-4">
              <div className="border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-4">
                <p className="neo-microcopy">{dictionary.about.publicInfo.whyLabel}</p>
                <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                  {dictionary.about.publicInfo.whyText}
                </p>
              </div>
              <div className="border-t-[3px] border-dashed border-[rgb(var(--outline))] pt-4">
                <p className="neo-microcopy">{dictionary.about.publicInfo.missionLabel}</p>
                <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                  {companyProfile.mission}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.about.businessDirections.eyebrow}
              title={dictionary.about.businessDirections.title}
              description={dictionary.about.businessDirections.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {capabilityPillars.slice(0, 3).map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.06 * index}>
                <div className={`pack-card p-6 ${index === 1 ? "sticker-rotate-1" : ""}`}>
                  <p className="sticker-badge bg-[rgb(var(--tertiary-container))] text-[rgb(var(--ink))]">
                    {dictionary.about.businessDirections.trackPrefix} 0{index + 1}
                  </p>
                  <h3 className="mt-5 text-3xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.about.technicalCapability.eyebrow}
              title={dictionary.about.technicalCapability.title}
              description={dictionary.about.technicalCapability.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {capabilityPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.05 * index}>
                <div className="surface p-6">
                  <h3 className="text-3xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">{pillar.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {pillar.bullets.map((item) => (
                      <span key={item} className="project-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.about.values.eyebrow}
              title={dictionary.about.values.title}
              description={dictionary.about.values.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={0.05 * index}>
                <div className={`surface p-6 ${index % 2 === 0 ? "sticker-rotate-3" : ""}`}>
                  <h3 className="text-2xl font-black leading-[0.98] tracking-[-0.04em] text-[rgb(var(--ink))]">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={dictionary.about.roadmap.eyebrow}
              title={dictionary.about.roadmap.title}
              description={dictionary.about.roadmap.description}
            />
          </Reveal>

          <div className="mt-12 space-y-5">
            {roadmap.map((item, index) => (
              <Reveal key={item.phase} delay={0.05 * index}>
                <div className="surface grid gap-5 p-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start">
                  <div>
                    <p className="section-kicker text-[0.68rem]">{item.phase}</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black leading-[0.98] tracking-[-0.05em] text-[rgb(var(--ink))]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        locale={locale}
        eyebrow={dictionary.about.finalCta.eyebrow}
        title={dictionary.about.finalCta.title}
        description={dictionary.about.finalCta.description}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.viewProjects}
        secondaryHref="/projects"
      />
    </>
  );
}
