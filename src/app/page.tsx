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

  return (
    <>
      <section className="site-hero-section">
        <div className="shell">
          <div className="boxed-section site-hero-frame">
            <div className="system-shell-bar">
              <span className="system-shell-chip">{systemCopy.home.shellBar.entry}</span>
              <span className="system-shell-chip">{systemCopy.home.shellBar.mode}</span>
              <span className="system-shell-chip">{systemCopy.home.shellBar.railState}</span>
              <span className="system-shell-chip">{systemCopy.home.shellBar.trace}</span>
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-[14rem_minmax(0,1fr)_18rem]">
              <Reveal className="hidden xl:block">
                <aside className="system-rail h-full">
                  <p className="label-caps text-[rgb(var(--secondary))]">
                    {systemCopy.home.hero.railTitle}
                  </p>
                  <div className="space-y-2">
                    {systemCopy.home.hero.railModules.map((item, index) => (
                      <div key={item} className="system-rail-item">
                        <span>{item}</span>
                        <span className="text-[rgb(var(--ink-muted))]">0{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </aside>
              </Reveal>

              <div className="min-w-0 space-y-5">
                <Reveal className="surface p-6 md:p-8">
                  <span className="section-kicker">{systemCopy.home.hero.eyebrow}</span>

                  <div className="mt-6 max-w-4xl space-y-5">
                    <h1 className="headline-display max-w-[13ch]">{systemCopy.home.hero.title}</h1>
                    <p className="max-w-4xl text-xl leading-8 text-[rgb(var(--ink))] md:text-[1.72rem]">
                      {systemCopy.home.hero.lead}
                    </p>
                    <p className="max-w-4xl text-base leading-8 text-[rgb(var(--ink-soft))]">
                      {systemCopy.home.hero.summary}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 lg:grid-cols-2">
                    {systemCopy.home.hero.differentiation.map((item, index) => (
                      <div
                        key={item}
                        className={`terminal-panel p-4 ${index === 1 ? "border-[rgb(var(--secondary))]" : "border-[rgb(var(--primary))]"}`}
                      >
                        <p className="text-sm leading-7 text-[rgb(var(--ink-soft))]">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link href={buildLocalizedPath(locale, "/contact")} className="button-primary">
                      {systemCopy.home.hero.primaryLabel}
                    </Link>
                    <Link href={buildLocalizedPath(locale, "/projects")} className="button-secondary">
                      {systemCopy.home.hero.secondaryLabel}
                    </Link>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <HeroScene
                    modules={systemCopy.home.modules.items}
                    coreTitle={systemCopy.company.positioning}
                    coreSummary={systemCopy.company.description}
                  />
                </Reveal>

                <Reveal delay={0.12} className="xl:hidden">
                  <div className="system-rail">
                    <p className="label-caps text-[rgb(var(--secondary))]">
                      {systemCopy.home.hero.railTitle}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {systemCopy.home.hero.railModules.map((item, index) => (
                        <div key={item} className="system-rail-item">
                          <span>{item}</span>
                          <span className="text-[rgb(var(--ink-muted))]">0{index + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.12}>
                <aside className="system-rail h-full">
                  <div>
                    <p className="label-caps text-[rgb(var(--primary))]">
                      {systemCopy.home.hero.telemetryTitle}
                    </p>
                    <div className="mt-4 space-y-4">
                      {systemCopy.home.hero.telemetryItems.map((item) => (
                        <div key={item.label} className="system-telemetry-row">
                          <span className="label-caps">{item.label}</span>
                          <span className="text-sm font-semibold text-[rgb(var(--ink-soft))]">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[rgb(var(--outline))] pt-4">
                    <p className="label-caps text-[rgb(var(--secondary))]">
                      {systemCopy.home.hero.telemetryTraceTitle}
                    </p>
                    <ul className="trace-log mt-4">
                      {systemCopy.home.hero.telemetryTrace.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </Reveal>
            </div>

            <div className="terminal-strip">
              <div className="terminal-line">{systemCopy.home.hero.terminalContext}</div>
              <div className="terminal-line">{systemCopy.home.hero.terminalStatus}</div>
              <div className="terminal-line">{systemCopy.home.hero.terminalNote}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <Reveal className="surface p-6 md:p-8">
            <SectionHeading
              eyebrow={systemCopy.home.coreStatement.eyebrow}
              title={systemCopy.home.coreStatement.title}
              description={systemCopy.home.coreStatement.description}
            />
          </Reveal>

          <Reveal delay={0.06} className="surface p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {systemCopy.home.coreStatement.items.map((item) => (
                <div key={item.label} className="terminal-panel p-4">
                  <p className="neo-microcopy text-[rgb(var(--secondary))]">{item.label}</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={systemCopy.home.problemField.eyebrow}
              title={systemCopy.home.problemField.title}
              description={systemCopy.home.problemField.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {systemCopy.home.problemField.items.map((item, index) => (
              <Reveal key={item.label} delay={0.05 * index}>
                <div className="pack-card p-6">
                  <p className="sticker-badge">{item.label}</p>
                  <h3 className="mt-5 text-2xl font-bold leading-[1.02] tracking-[-0.05em] text-[rgb(var(--ink))]">
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
          <Reveal>
            <SectionHeading
              eyebrow={systemCopy.home.modules.eyebrow}
              title={systemCopy.home.modules.title}
              description={systemCopy.home.modules.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-5 xl:grid-cols-2">
            {systemCopy.home.modules.items.map((module, index) => (
              <Reveal key={module.id} delay={0.05 * index}>
                <div className="pack-card p-6 md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="section-kicker">{module.title}</p>
                    <span className="project-chip">RUNTIME</span>
                  </div>
                  <p className="mt-5 text-base leading-8 text-[rgb(var(--ink-soft))]">
                    {module.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {module.bullets.map((item) => (
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

      <section className="site-section-tight">
        <div className="shell grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <Reveal className="surface p-6 md:p-8">
            <SectionHeading
              eyebrow={systemCopy.home.executionLoop.eyebrow}
              title={systemCopy.home.executionLoop.title}
              description={systemCopy.home.executionLoop.description}
            />

            <div className="mt-10 grid gap-4">
              {systemCopy.home.executionLoop.steps.map((step, index) => (
                <div key={step.label} className="terminal-panel p-4 md:p-5">
                  <div className="flex items-center gap-3">
                    <span className="sticker-badge">{step.label}</span>
                    <span className="hud-line" />
                    <span className="label-caps text-[rgb(var(--primary))]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-[-0.05em] text-[rgb(var(--ink))]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">{step.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="surface p-6 md:p-8">
            <SectionHeading
              eyebrow={systemCopy.home.whyItMatters.eyebrow}
              title={systemCopy.home.whyItMatters.title}
              description={systemCopy.home.whyItMatters.description}
            />

            <div className="mt-10 grid gap-4">
              {systemCopy.home.whyItMatters.contrasts.map((item) => (
                <div key={item.label} className="terminal-panel p-5">
                  <p className="neo-microcopy text-[rgb(var(--secondary))]">{item.label}</p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="label-caps">BEFORE</p>
                      <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-muted))]">
                        {item.before}
                      </p>
                    </div>
                    <div className="border-t border-[rgb(var(--outline))] pt-4">
                      <p className="label-caps text-[rgb(var(--primary))]">AFTER</p>
                      <p className="mt-2 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={systemCopy.home.domainAdaptation.eyebrow}
              title={systemCopy.home.domainAdaptation.title}
              description={systemCopy.home.domainAdaptation.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {systemCopy.home.domainAdaptation.items.map((item, index) => (
              <Reveal key={item.label} delay={0.04 * index}>
                <div className="pack-card p-6">
                  <p className="sticker-badge">{item.label}</p>
                  <h3 className="mt-5 text-2xl font-bold leading-[1.02] tracking-[-0.05em] text-[rgb(var(--ink))]">
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
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Link href={buildLocalizedPath(locale, "/projects")} className="button-secondary">
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
