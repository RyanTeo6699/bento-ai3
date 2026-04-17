import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";

import { HeroScene } from "@/components/hero-scene";
import { Reveal } from "@/components/motion/reveal";
import { getCurrentLocale } from "@/lib/get-locale";
import { getHomepageCoreCopy } from "@/lib/homepage-core-copy";
import { buildLocalizedPath } from "@/lib/locale-routing";
import { createPageMetadata } from "@/lib/metadata";
import { getSystemSiteCopy } from "@/lib/system-site-copy";

function formatModuleTitle(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function SectionIntro({
  eyebrow,
  title,
  lead,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  lead: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto flex max-w-[46rem] flex-col items-center gap-4 text-center"
          : "flex max-w-[42rem] flex-col gap-4"
      }
    >
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
        {eyebrow}
      </p>
      <h2 className="max-w-[15ch] text-[clamp(2.05rem,4.2vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[rgb(var(--ink))]">
        {title}
      </h2>
      <p className="max-w-[42rem] text-[1rem] leading-8 text-[rgb(var(--ink-soft))]">{lead}</p>
    </div>
  );
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

const previewNodePositions = [
  "left-4 top-5 md:left-6 md:top-6",
  "right-4 top-5 md:right-6 md:top-6",
  "bottom-5 left-3 md:bottom-6 md:left-5",
  "bottom-5 right-3 md:bottom-6 md:right-5"
] as const;

const previewGridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(214, 208, 199, 0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(214, 208, 199, 0.7) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage: "linear-gradient(180deg, rgba(255,255,255,0.88), transparent 92%)"
};

export default function HomePage() {
  const locale = getCurrentLocale();
  const systemCopy = getSystemSiteCopy(locale);
  const homepageCopy = getHomepageCoreCopy(locale);
  const homePath = buildLocalizedPath(locale, "/");
  const architectureReviewHref = buildLocalizedPath(locale, homepageCopy.closing.primaryHref);
  const deploymentDirectionsHref = buildLocalizedPath(locale, homepageCopy.closing.secondaryHref);
  const deploymentDiscussionHref = buildLocalizedPath(locale, homepageCopy.hero.secondaryHref);

  const architectureModules = systemCopy.home.modules.items.map((module) => {
    const meta = homepageCopy.architecture.moduleMeta[module.id];

    return {
      ...module,
      displayTitle: meta?.displayTitle ?? formatModuleTitle(module.title),
      descriptor: meta?.descriptor ?? "Core module",
      status: meta?.status ?? "LIVE",
      headline: meta?.headline ?? module.summary,
      focus: meta?.focus ?? module.summary,
      flow: meta?.flow ?? module.bullets.join(" -> "),
      tone: meta?.tone ?? "secondary"
    };
  });

  return (
    <div className="relative">
      <section className="site-hero-section" id="system-entry">
        <div className="shell">
          <div className="relative">
            <div className="pointer-events-none absolute -top-16 left-[8%] h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.95),rgba(255,255,255,0))] blur-3xl" />
            <div className="grid gap-12 xl:grid-cols-[minmax(0,1.04fr)_minmax(24rem,0.96fr)] xl:items-center">
              <Reveal className="max-w-[43rem]" y={20}>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                  {homepageCopy.hero.eyebrow}
                </p>
                <h1 className="mt-5 max-w-[11ch] text-[clamp(2.85rem,5.5vw,5.05rem)] font-semibold leading-[0.93] tracking-[-0.072em] text-[rgb(var(--ink))]">
                  {homepageCopy.hero.title}
                </h1>
                <p className="mt-6 max-w-[39rem] text-[1.03rem] leading-8 text-[rgb(var(--ink-soft))] md:text-[1.08rem]">
                  {homepageCopy.hero.support}
                </p>

                <div className="mt-7 max-w-[31rem] border-l border-[rgb(var(--outline-strong))] pl-4 text-[0.98rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))]">
                  {homepageCopy.hero.contrast.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`${homePath}#system-core`}
                    className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-[rgb(var(--primary))] px-5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--surface-lowest))] shadow-[0_20px_44px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5 hover:bg-[rgb(21,25,35)]"
                  >
                    {homepageCopy.hero.primaryLabel}
                  </Link>
                  <Link
                    href={deploymentDiscussionHref}
                    className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-[rgb(var(--outline))] bg-[rgb(var(--surface-lowest))] px-5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink))] transition hover:-translate-y-0.5 hover:border-[rgb(var(--outline-strong))] hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                  >
                    {homepageCopy.hero.secondaryLabel}
                  </Link>
                </div>
              </Reveal>

              <Reveal
                className="relative min-h-[29rem] overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.82)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,240,233,0.92))] p-4 shadow-[0_28px_72px_rgba(15,23,42,0.08)] md:min-h-[31rem] md:p-6"
                delay={0.08}
                y={20}
              >
                <div className="pointer-events-none absolute inset-0 opacity-70" style={previewGridStyle} />
                <div className="pointer-events-none absolute inset-x-[20%] top-[12%] h-28 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.95),rgba(255,255,255,0))] blur-3xl" />

                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 600 460"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M300 230 C246 186 196 154 130 110"
                    stroke="rgba(128, 143, 163, 0.42)"
                    strokeDasharray="10 12"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M300 230 C354 186 404 154 470 110"
                    stroke="rgba(128, 143, 163, 0.42)"
                    strokeDasharray="10 12"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M300 230 C244 256 194 286 124 336"
                    stroke="rgba(128, 143, 163, 0.42)"
                    strokeDasharray="10 12"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M300 230 C356 256 406 286 476 336"
                    stroke="rgba(128, 143, 163, 0.42)"
                    strokeDasharray="10 12"
                    strokeWidth="1.3"
                  />
                </svg>

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[12.5rem] w-[12.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(165,171,180,0.26)]" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(165,171,180,0.18)]" />

                <div className="absolute left-1/2 top-1/2 z-10 w-[min(21rem,calc(100%-2.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] border border-[rgb(var(--outline)/0.9)] bg-[rgba(255,255,255,0.88)] p-6 shadow-[0_26px_60px_rgba(15,23,42,0.1)] backdrop-blur">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                    {homepageCopy.hero.previewLabel}
                  </p>
                  <h2 className="mt-4 max-w-[13ch] text-[1.45rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[rgb(var(--ink))]">
                    {homepageCopy.hero.previewTitle}
                  </h2>
                  <p className="mt-4 text-[0.9rem] leading-7 text-[rgb(var(--ink-soft))]">
                    {homepageCopy.hero.previewSummary}
                  </p>
                </div>

                {homepageCopy.hero.previewSignals.map((signal, index) => (
                  <div
                    key={signal.label}
                    className={`absolute z-[1] w-[8.75rem] rounded-[1.2rem] border border-[rgb(var(--outline)/0.78)] bg-[rgba(255,255,255,0.82)] p-4 shadow-[0_18px_36px_rgba(15,23,42,0.07)] backdrop-blur ${previewNodePositions[index] ?? ""}`}
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                      {signal.label}
                    </p>
                    <p className="mt-3 text-[0.82rem] font-medium leading-6 tracking-[-0.02em] text-[rgb(var(--ink))]">
                      {signal.value}
                    </p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section-tight" id="problem-core">
        <div className="shell">
          <div className="overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.82)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,242,237,0.86))] shadow-[0_24px_64px_rgba(15,23,42,0.06)]">
            <div className="grid gap-0 lg:grid-cols-2">
              <Reveal className="px-6 py-8 md:px-10 md:py-10" y={18}>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                  {homepageCopy.problemField.eyebrow}
                </p>
                <h2 className="mt-4 max-w-[16ch] text-[clamp(1.7rem,3vw,2.45rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[rgb(var(--ink))]">
                  {homepageCopy.problemField.title}
                </h2>
                <p className="mt-5 max-w-[31rem] text-[0.98rem] leading-8 text-[rgb(var(--ink-soft))]">
                  {homepageCopy.problemField.lead}
                </p>

                <ul className="mt-8 grid gap-4">
                  {homepageCopy.problemField.signals.map((item) => (
                    <li
                      key={item}
                      className="border-t border-[rgb(var(--outline)/0.72)] pt-4 text-[0.92rem] font-medium tracking-[-0.02em] text-[rgb(var(--ink))]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                className="border-t border-[rgb(var(--outline)/0.72)] bg-[rgba(252,250,247,0.72)] px-6 py-8 md:px-10 md:py-10 lg:border-l lg:border-t-0"
                delay={0.06}
                y={18}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                  {homepageCopy.coreStatement.eyebrow}
                </p>
                <h2 className="mt-4 max-w-[17ch] text-[clamp(1.7rem,3vw,2.45rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[rgb(var(--ink))]">
                  {homepageCopy.coreStatement.title}
                </h2>
                <p className="mt-5 max-w-[31rem] text-[0.98rem] leading-8 text-[rgb(var(--ink-soft))]">
                  {homepageCopy.coreStatement.lead}
                </p>

                <ul className="mt-8 grid gap-4">
                  {homepageCopy.coreStatement.support.map((item) => (
                    <li
                      key={item}
                      className="relative border-t border-[rgb(var(--outline)/0.72)] pt-4 pl-4 text-[0.92rem] leading-7 text-[rgb(var(--ink))]"
                    >
                      <span className="absolute left-0 top-[1.45rem] h-1.5 w-1.5 rounded-full bg-[rgb(var(--primary))]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="system-core">
        <div className="shell">
          <Reveal>
            <SectionIntro
              eyebrow={homepageCopy.architecture.eyebrow}
              title={homepageCopy.architecture.title}
              lead={homepageCopy.architecture.description}
            />
          </Reveal>

          <Reveal className="mt-12" delay={0.08} y={20}>
            <HeroScene
              modules={architectureModules}
              core={{
                label: homepageCopy.architecture.coreLabel,
                headline: homepageCopy.architecture.coreHeadline,
                summary: homepageCopy.architecture.coreText,
                chips: homepageCopy.architecture.coreChips,
                primaryActionLabel: homepageCopy.architecture.primaryActionLabel,
                primaryActionHref: homepageCopy.architecture.primaryActionHref,
                secondaryActionLabel: homepageCopy.architecture.secondaryActionLabel,
                secondaryActionHref: homepageCopy.architecture.secondaryActionHref,
                context: systemCopy.company.description
              }}
              labels={{
                activeModule: homepageCopy.architecture.activeModuleLabel,
                currentRole: homepageCopy.architecture.currentRoleLabel,
                executionPath: homepageCopy.architecture.executionPathLabel,
                systemContext: homepageCopy.architecture.systemContextLabel
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight" id="execution-loop">
        <div className="shell">
          <Reveal>
            <SectionIntro
              eyebrow={homepageCopy.executionLoop.eyebrow}
              title={homepageCopy.executionLoop.title}
              lead={homepageCopy.executionLoop.lead}
            />
          </Reveal>

          <Reveal
            className="relative mt-10 overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.82)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,242,237,0.9))] p-4 shadow-[0_24px_64px_rgba(15,23,42,0.06)] md:p-6"
            delay={0.08}
            y={18}
          >
            <div className="pointer-events-none absolute left-10 right-10 top-[4.1rem] hidden h-px bg-[linear-gradient(90deg,rgba(31,36,48,0.2),rgba(109,120,141,0.16),rgba(31,36,48,0.08))] xl:block" />

            <div className="relative grid gap-3 xl:grid-cols-6">
              {homepageCopy.executionLoop.steps.map((step, index) => (
                <div
                  key={step.label}
                  className="rounded-[1.35rem] border border-[rgb(var(--outline)/0.74)] bg-[rgba(255,255,255,0.82)] p-5 shadow-[0_14px_32px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex min-w-[2.2rem] items-center justify-center rounded-full border border-[rgb(var(--outline)/0.78)] bg-[rgb(var(--surface-lowest))] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--ink-muted))]">
                      0{index + 1}
                    </span>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                      {step.label}
                    </p>
                  </div>
                  <p className="mt-5 text-[0.92rem] leading-7 text-[rgb(var(--ink-soft))]">
                    {step.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-1 border-t border-[rgb(var(--outline)/0.72)] pt-6 text-[0.98rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))] md:grid-cols-3 md:text-center">
              {homepageCopy.executionLoop.closing.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight" id="why-it-matters">
        <div className="shell">
          <Reveal>
            <SectionIntro
              eyebrow={homepageCopy.whyItMatters.eyebrow}
              title={homepageCopy.whyItMatters.title}
              lead={homepageCopy.whyItMatters.lead}
            />
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.82)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,244,239,0.84))] shadow-[0_24px_64px_rgba(15,23,42,0.06)]">
            <div className="grid gap-0 lg:grid-cols-2">
              <Reveal className="px-6 py-8 md:px-10 md:py-10" delay={0.04} y={16}>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                  {homepageCopy.whyItMatters.leftLabel}
                </p>
                <ul className="mt-6 grid gap-4">
                  {homepageCopy.whyItMatters.leftItems.map((item) => (
                    <li
                      key={item}
                      className="border-t border-[rgb(var(--outline)/0.72)] pt-4 text-[0.94rem] leading-7 text-[rgb(var(--ink-soft))]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                className="border-t border-[rgb(var(--outline)/0.72)] bg-[rgba(249,250,252,0.8)] px-6 py-8 md:px-10 md:py-10 lg:border-l lg:border-t-0"
                delay={0.08}
                y={16}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                  {homepageCopy.whyItMatters.rightLabel}
                </p>
                <ul className="mt-6 grid gap-4">
                  {homepageCopy.whyItMatters.rightItems.map((item) => (
                    <li
                      key={item}
                      className="relative border-t border-[rgb(var(--outline)/0.72)] pt-4 pl-4 text-[0.94rem] leading-7 text-[rgb(var(--ink))]"
                    >
                      <span className="absolute left-0 top-[1.45rem] h-1.5 w-1.5 rounded-full bg-[rgb(var(--primary))]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="domain-adaptation">
        <div className="shell">
          <Reveal>
            <SectionIntro
              eyebrow={homepageCopy.domainAdaptation.eyebrow}
              title={homepageCopy.domainAdaptation.title}
              lead={homepageCopy.domainAdaptation.lead}
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homepageCopy.domainAdaptation.items.map((item, index) => (
              <Reveal key={item} delay={0.04 * index} y={16}>
                <div className="rounded-[1.55rem] border border-[rgb(var(--outline)/0.78)] bg-[rgba(255,255,255,0.78)] p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                    0{index + 1}
                  </p>
                  <p className="mt-5 text-[1rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            className="mt-8 grid gap-1 text-[0.98rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))] md:grid-cols-3 md:text-center"
            delay={0.1}
            y={12}
          >
            {homepageCopy.domainAdaptation.closing.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight" id="company-position">
        <div className="shell">
          <Reveal
            className="overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.82)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,240,233,0.86))] p-6 shadow-[0_24px_64px_rgba(15,23,42,0.06)] md:p-8 lg:grid lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10"
            y={18}
          >
            <div className="max-w-[34rem]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                {homepageCopy.companyPosition.eyebrow}
              </p>
              <h2 className="mt-4 max-w-[17ch] text-[clamp(1.8rem,3vw,2.65rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[rgb(var(--ink))]">
                {homepageCopy.companyPosition.title}
              </h2>
              <p className="mt-5 text-[0.98rem] leading-8 text-[rgb(var(--ink-soft))]">
                {homepageCopy.companyPosition.lead}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-0">
              {homepageCopy.companyPosition.support.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.35rem] border border-[rgb(var(--outline)/0.72)] bg-[rgba(255,255,255,0.72)] p-5"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                    {item.label}
                  </p>
                  <p className="mt-4 text-[0.94rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section" id="next-action">
        <div className="shell">
          <Reveal
            className="overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.82)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,241,235,0.9))] px-6 py-10 text-center shadow-[0_26px_70px_rgba(15,23,42,0.07)] md:px-10 md:py-12"
            y={18}
          >
            <SectionIntro
              eyebrow={homepageCopy.closing.eyebrow}
              title={homepageCopy.closing.title}
              lead={homepageCopy.closing.lead}
              align="center"
            />

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={architectureReviewHref}
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-[rgb(var(--primary))] px-5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--surface-lowest))] shadow-[0_20px_44px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5 hover:bg-[rgb(21,25,35)]"
              >
                {homepageCopy.closing.primaryLabel}
              </Link>
              <Link
                href={deploymentDirectionsHref}
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-[rgb(var(--outline))] bg-[rgb(var(--surface-lowest))] px-5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink))] transition hover:-translate-y-0.5 hover:border-[rgb(var(--outline-strong))] hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                {homepageCopy.closing.secondaryLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
