import Link from "next/link";
import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { HeroScene } from "@/components/hero-scene";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import { createPageMetadata } from "@/lib/metadata";
import { getProjectPresentationCopy, getProjects as getCommercialProjects } from "@/lib/project-commercial";
import { getSystemSiteCopy } from "@/lib/system-site-copy";

function formatModuleTitle(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const systemCopy = getSystemSiteCopy(locale);

  return createPageMetadata({
    locale,
    title:
      locale === "en"
        ? "Adaptive Decision-and-Execution System Core"
        : locale === "zh-Hant"
          ? "自適應決策與執行系統核心"
          : "適応型 Decision-and-Execution System Core",
    description: systemCopy.company.positioning,
    path: "/"
  });
}

export default function HomePage() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const projectPresentationCopy = getProjectPresentationCopy(locale);
  const systemCopy = getSystemSiteCopy(locale);
  const featuredProjects = getCommercialProjects(locale).filter((project) => project.featured);
  const aboutLabel = dictionary.nav.find((item) => item.href === "/about")?.label ?? "About";
  const teamLabel = dictionary.nav.find((item) => item.href === "/team")?.label ?? "Team";
  const heroNotes = [
    systemCopy.home.hero.terminalContext,
    systemCopy.home.hero.terminalStatus,
    systemCopy.home.hero.terminalNote
  ];

  return (
    <>
      <section className="site-hero-section">
        <div className="shell">
          <div className="home-hero">
            <div className="home-hero-layout">
              <Reveal className="home-hero-copy">
                <span className="section-kicker">{systemCopy.home.hero.eyebrow}</span>

                <div className="home-hero-copy-stack">
                  <h1 className="headline-display max-w-[11.5ch]">{systemCopy.home.hero.title}</h1>
                  <p className="max-w-3xl text-lg leading-8 text-[rgb(var(--ink))] md:text-[1.42rem] md:leading-8">
                    {systemCopy.home.hero.lead}
                  </p>
                  <p className="max-w-3xl text-[0.98rem] leading-7 text-[rgb(var(--ink-soft))] md:text-[1.02rem] md:leading-8">
                    {systemCopy.home.hero.summary}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href={buildLocalizedPath(locale, "/contact")} className="home-action-primary">
                    {systemCopy.home.hero.primaryLabel}
                  </Link>
                  <Link href={buildLocalizedPath(locale, "/projects")} className="home-action-secondary">
                    {systemCopy.home.hero.secondaryLabel}
                  </Link>
                </div>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  <Link href={buildLocalizedPath(locale, "/about")} className="home-chip-action">
                    {aboutLabel}
                  </Link>
                  <Link href={buildLocalizedPath(locale, "/team")} className="home-chip-action">
                    {teamLabel}
                  </Link>
                  <Link href={buildLocalizedPath(locale, "/projects")} className="home-chip-action">
                    {sharedCtas.viewProjects}
                  </Link>
                </div>
              </Reveal>

              <div className="home-hero-sidebar">
                <Reveal delay={0.06} className="home-info-card">
                  <p className="home-meta-label">{systemCopy.home.hero.railTitle}</p>
                  <div className="home-capability-list">
                    {systemCopy.home.hero.railModules.map((item, index) => (
                      <div key={item} className="home-capability-item">
                        <span>{formatModuleTitle(item)}</span>
                        <span className="text-[rgb(var(--ink-muted))]">0{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.12} className="home-info-card">
                  <p className="home-meta-label">{systemCopy.home.hero.telemetryTitle}</p>
                  <div className="home-proof-list">
                    {systemCopy.home.hero.telemetryItems.map((item) => (
                      <div key={item.label} className="home-proof-row">
                        <span className="neo-microcopy">{item.label}</span>
                        <span className="home-proof-value">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="home-hero-support">
              {systemCopy.home.hero.differentiation.map((item, index) => (
                <Reveal key={item} delay={0.08 + index * 0.04}>
                  <div className="home-note-card">
                    <p className="home-meta-label">0{index + 1}</p>
                    <p className="mt-3 text-[0.92rem] leading-7 text-[rgb(var(--ink-soft))]">{item}</p>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.16} className="lg:col-span-2">
                <div className="home-note-card home-note-card-wide">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="home-meta-label">{systemCopy.home.hero.telemetryTraceTitle}</p>
                      <ul className="home-bullet-list mt-4">
                        {systemCopy.home.hero.telemetryTrace.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="home-context-list">
                      {heroNotes.map((note) => (
                        <div key={note} className="home-context-item">
                          {note}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell home-split-layout">
          <Reveal className="home-section-intro">
            <SectionHeading
              eyebrow={systemCopy.home.coreStatement.eyebrow}
              title={systemCopy.home.coreStatement.title}
              description={systemCopy.home.coreStatement.description}
              compact
            />
          </Reveal>

          <div className="home-value-grid">
            {systemCopy.home.coreStatement.items.map((item, index) => (
              <Reveal key={item.label} delay={0.05 * index}>
                <div className="home-value-card">
                  <p className="neo-microcopy text-[rgb(var(--ink-muted))]">{item.label}</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={systemCopy.home.problemField.eyebrow}
              title={systemCopy.home.problemField.title}
              description={systemCopy.home.problemField.description}
              compact
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {systemCopy.home.problemField.items.map((item, index) => (
              <Reveal key={item.label} delay={0.05 * index}>
                <div className="pack-card p-6">
                  <p className="sticker-badge">{item.label}</p>
                  <h3 className="mt-4 text-[1.35rem] font-bold leading-[1.04] tracking-[-0.045em] text-[rgb(var(--ink))] md:text-[1.55rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="shell">
          <div className="home-architecture-block">
            <Reveal>
              <SectionHeading
                eyebrow={systemCopy.home.modules.eyebrow}
                title={systemCopy.home.modules.title}
                description={systemCopy.home.modules.description}
                compact
                className="home-architecture-heading"
              />
            </Reveal>

            <Reveal delay={0.08} className="mt-12">
              <HeroScene
                modules={systemCopy.home.modules.items}
                title={systemCopy.home.modules.title}
                summary={systemCopy.company.description}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell home-split-layout home-split-layout-wide">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow={systemCopy.home.executionLoop.eyebrow}
                title={systemCopy.home.executionLoop.title}
                description={systemCopy.home.executionLoop.description}
                compact
              />
            </Reveal>

            <div className="mt-10 grid gap-4">
              {systemCopy.home.executionLoop.steps.map((step, index) => (
                <Reveal key={step.label} delay={0.05 * index}>
                  <div className="home-process-card">
                    <div className="flex items-center gap-3">
                      <span className="sticker-badge">{step.label}</span>
                      <span className="hud-line" />
                      <span className="label-caps">0{index + 1}</span>
                    </div>
                    <h3 className="mt-4 text-[1.35rem] font-bold tracking-[-0.045em] text-[rgb(var(--ink))] md:text-[1.55rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal delay={0.08}>
              <SectionHeading
                eyebrow={systemCopy.home.whyItMatters.eyebrow}
                title={systemCopy.home.whyItMatters.title}
                description={systemCopy.home.whyItMatters.description}
                compact
              />
            </Reveal>

            <div className="mt-10 grid gap-4">
              {systemCopy.home.whyItMatters.contrasts.map((item, index) => (
                <Reveal key={item.label} delay={0.05 * index}>
                  <div className="home-contrast-card">
                    <p className="neo-microcopy text-[rgb(var(--ink-muted))]">{item.label}</p>
                    <div className="mt-4 space-y-4">
                      <div>
                        <p className="label-caps">Before</p>
                        <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-muted))]">
                          {item.before}
                        </p>
                      </div>
                      <div className="border-t border-[rgb(var(--outline))] pt-4">
                        <p className="label-caps text-[rgb(var(--ink-soft))]">After</p>
                        <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                          {item.after}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={systemCopy.home.domainAdaptation.eyebrow}
              title={systemCopy.home.domainAdaptation.title}
              description={systemCopy.home.domainAdaptation.description}
              compact
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {systemCopy.home.domainAdaptation.items.map((item, index) => (
              <Reveal key={item.label} delay={0.04 * index}>
                <div className="pack-card p-6">
                  <p className="sticker-badge">{item.label}</p>
                  <h3 className="mt-4 text-[1.35rem] font-bold leading-[1.04] tracking-[-0.045em] text-[rgb(var(--ink))] md:text-[1.55rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow={systemCopy.home.deploymentVectors.eyebrow}
                title={systemCopy.home.deploymentVectors.title}
                description={systemCopy.home.deploymentVectors.description}
                compact
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Link href={buildLocalizedPath(locale, "/projects")} className="home-panel-action">
                {sharedCtas.viewProjects}
              </Link>
            </Reveal>
          </div>

          <div className="deck-grid mt-12 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={0.05 * index}>
                <div className={index === 1 ? "card-stack md:translate-y-4" : "card-stack"}>
                  <ProjectCard
                    locale={locale}
                    project={project}
                    variant="featured"
                    copy={{
                      viewDetail: projectPresentationCopy.viewProject,
                      learnMore: projectPresentationCopy.learnMore,
                      idealUsers: projectPresentationCopy.idealUsers,
                      deliveryScope: projectPresentationCopy.deliveryScope,
                      keyOutcome: projectPresentationCopy.keyOutcome,
                      valueCase: projectPresentationCopy.valueCase,
                      platformLabel: projectPresentationCopy.platformLabel,
                      statusLabels: dictionary.common.statusLabels
                    }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        locale={locale}
        eyebrow={systemCopy.home.closing.eyebrow}
        title={systemCopy.home.closing.title}
        description={systemCopy.home.closing.description}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.viewProjects}
        secondaryHref="/projects"
      />
    </>
  );
}
