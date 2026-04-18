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
      <h2 className="max-w-[15ch] text-[clamp(1.9rem,3.95vw,3.4rem)] font-semibold leading-[0.96] tracking-[-0.062em] text-[rgb(var(--ink))]">
        {title}
      </h2>
      <p className="max-w-[38rem] text-[0.98rem] leading-8 text-[rgb(var(--ink-soft))]">{lead}</p>
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
  "bottom-5 left-1/2 -translate-x-1/2 md:bottom-6"
] as const;

const previewGridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgb(var(--theme-preview-grid) / 0.3) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--theme-preview-grid) / 0.3) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage: "linear-gradient(180deg, rgba(255,255,255,0.88), transparent 92%)"
};

const sectionPanelStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, rgb(var(--theme-panel-surface) / 0.94), rgb(var(--theme-panel-surface-end) / 0.92))",
  boxShadow: "var(--theme-panel-shadow)"
};

const sectionPanelSoftStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, rgb(var(--theme-panel-soft-surface) / 0.9), rgb(var(--theme-panel-soft-end) / 0.88))",
  boxShadow: "var(--theme-panel-shadow-soft)"
};

const sectionPanelQuietStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, rgb(var(--theme-elevated-surface) / 0.95), rgb(var(--theme-panel-surface-end) / 0.9))",
  boxShadow: "var(--theme-panel-shadow-soft)"
};

const insetSurfaceStyle: CSSProperties = {
  backgroundColor: "rgb(var(--theme-panel-soft-surface) / 0.74)"
};

const supportCardStyle: CSSProperties = {
  backgroundColor: "rgb(var(--theme-elevated-surface) / 0.74)"
};

const previewShellStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, rgb(var(--theme-preview-shell-start) / 0.95), rgb(var(--theme-preview-shell-end) / 0.92))",
  boxShadow: "var(--theme-preview-shadow)"
};

const previewCoreStyle: CSSProperties = {
  backgroundColor: "rgb(var(--theme-preview-core-surface) / 0.62)",
  borderColor: "rgb(var(--theme-preview-core-border) / 0.4)",
  boxShadow: "0 10px 18px rgb(var(--shadow) / 0.14)"
};

const previewNodeStyle: CSSProperties = {
  backgroundColor: "rgb(var(--theme-preview-node-surface) / 0.38)",
  borderColor: "rgb(var(--theme-preview-node-border) / 0.28)",
  boxShadow: "0 6px 12px rgb(var(--shadow) / 0.1)"
};

const ambientGlowStyle: CSSProperties = {
  backgroundImage: "radial-gradient(circle, rgb(var(--theme-preview-glow) / 0.14), rgba(0,0,0,0))"
};

const executionTrackStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(90deg, rgb(var(--theme-connector-active) / 0.18), rgb(var(--theme-connector-muted) / 0.16), rgb(var(--theme-connector-active) / 0.08))"
};

const executionDotStyle: CSSProperties = {
  boxShadow: "0 0 0 5px rgb(var(--theme-step-ring) / 0.96)"
};

const problemFieldConnectorStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, rgb(var(--theme-connector-muted) / 0.22), rgb(var(--theme-connector-muted) / 0.06))"
};

const primaryActionClass =
  "button-primary inline-flex min-h-[3rem] !px-5 !text-[0.78rem] !font-semibold uppercase tracking-[0.16em]";

const secondaryActionClass =
  "button-secondary inline-flex min-h-[3rem] !px-5 !text-[0.78rem] !font-semibold uppercase tracking-[0.16em]";

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
            <div
              className="pointer-events-none absolute -top-16 left-[8%] h-44 w-44 rounded-full blur-3xl"
              style={ambientGlowStyle}
            />
            <div className="grid gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(22rem,0.92fr)] xl:items-center">
              <Reveal className="max-w-[43rem]" y={20}>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                  {homepageCopy.hero.eyebrow}
                </p>
                <h1 className="mt-5 max-w-[11.5ch] text-[clamp(2.65rem,5vw,4.55rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-[rgb(var(--ink))]">
                  {homepageCopy.hero.title}
                </h1>
                <p className="mt-6 max-w-[34rem] text-[1rem] leading-8 text-[rgb(var(--ink-soft))]">
                  {homepageCopy.hero.support}
                </p>

                <div className="mt-7 max-w-[26rem] border-l border-[rgb(var(--outline))] pl-4">
                  <p className="text-[0.86rem] leading-6 text-[rgb(var(--ink-muted))]">
                    {homepageCopy.hero.contrast[0]}
                  </p>
                  <p className="mt-1 text-[0.96rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))]">
                    {homepageCopy.hero.contrast[1]}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`${homePath}#system-core`} className={primaryActionClass}>
                    {homepageCopy.hero.primaryLabel}
                  </Link>
                  <Link href={deploymentDiscussionHref} className={secondaryActionClass}>
                    {homepageCopy.hero.secondaryLabel}
                  </Link>
                </div>
              </Reveal>

              <Reveal
                className="relative min-h-[24.25rem] overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.72)] p-4 md:min-h-[25.75rem] md:p-5"
                delay={0.08}
                y={20}
                style={previewShellStyle}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.46]" style={previewGridStyle} />
                <div
                  className="pointer-events-none absolute inset-x-[22%] top-[12%] h-24 rounded-full blur-3xl"
                  style={ambientGlowStyle}
                />

                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 600 460"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M300 230 C246 186 196 154 130 110"
                    stroke="rgb(var(--theme-preview-connector) / 0.18)"
                    strokeDasharray="10 12"
                    strokeWidth="1.1"
                  />
                  <path
                    d="M300 230 C354 186 404 154 470 110"
                    stroke="rgb(var(--theme-preview-connector) / 0.18)"
                    strokeDasharray="10 12"
                    strokeWidth="1.1"
                  />
                  <path
                    d="M300 230 C300 270 300 300 300 342"
                    stroke="rgb(var(--theme-preview-connector) / 0.18)"
                    strokeDasharray="10 12"
                    strokeWidth="1.1"
                  />
                </svg>

                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[10rem] w-[10rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"
                  style={{ borderColor: "rgb(var(--theme-preview-ring) / 0.18)" }}
                />
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"
                  style={{ borderColor: "rgb(var(--theme-preview-ring) / 0.1)" }}
                />

                <div
                  className="absolute left-1/2 top-1/2 z-10 w-[min(11.75rem,calc(100%-6rem))] -translate-x-1/2 -translate-y-1/2 rounded-[1.2rem] border px-3 py-2.5 backdrop-blur"
                  style={previewCoreStyle}
                >
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                    {homepageCopy.hero.previewLabel}
                  </p>
                  <h2 className="mt-2 max-w-[11ch] text-[0.88rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[rgb(var(--ink))]">
                    {homepageCopy.hero.previewTitle}
                  </h2>
                  <p className="mt-1.5 text-[0.64rem] leading-[1.45] text-[rgb(var(--ink-soft))]">
                    {homepageCopy.hero.previewSummary}
                  </p>
                </div>

                {homepageCopy.hero.previewSignals.slice(0, 3).map((signal, index) => (
                  <div
                    key={signal.label}
                    className={`absolute z-[1] w-[4.3rem] rounded-[999px] border px-2 py-1.5 backdrop-blur ${previewNodePositions[index] ?? ""}`}
                    style={previewNodeStyle}
                  >
                    <p className="text-[0.52rem] font-semibold uppercase tracking-[0.12em] text-[rgb(var(--ink-muted))]">
                      {signal.label}
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
          <div className="overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.82)]" style={sectionPanelStyle}>
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

                <div className="mt-8">
                  {homepageCopy.problemField.signals.map((item, index) => (
                    <div key={item} className={index === 0 ? "relative" : "relative border-t border-[rgb(var(--outline)/0.72)] pt-4"}>
                      {index < homepageCopy.problemField.signals.length - 1 ? (
                        <span
                          className="pointer-events-none absolute left-[0.82rem] top-[2.1rem] h-[calc(100%-0.35rem)] w-px"
                          style={problemFieldConnectorStyle}
                        />
                      ) : null}
                      <div className="flex items-start gap-4">
                        <span
                          className="inline-flex min-w-[2.2rem] items-center justify-center rounded-full border border-[rgb(var(--outline)/0.76)] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--ink-muted))]"
                          style={{ backgroundColor: "rgb(var(--theme-elevated-surface) / 0.88)" }}
                        >
                          0{index + 1}
                        </span>
                        <p className="max-w-[25rem] pt-0.5 text-[0.92rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))]">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal
                className="border-t border-[rgb(var(--outline)/0.72)] px-6 py-8 md:px-10 md:py-10 lg:border-l lg:border-t-0"
                delay={0.06}
                y={18}
                style={insetSurfaceStyle}
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

                <ul className="mt-8 grid gap-3">
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
            className="relative mt-10 overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.82)] p-4 md:p-6"
            delay={0.08}
            y={18}
            style={sectionPanelStyle}
          >
            <div className="pointer-events-none absolute left-12 right-12 top-[3.2rem] hidden h-px xl:block" style={executionTrackStyle} />

            <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-6 xl:gap-0">
              {homepageCopy.executionLoop.steps.map((step, index) => (
                <div
                  key={step.label}
                  className="relative pl-7 xl:px-4 xl:pb-2 xl:pt-10 xl:text-center"
                >
                  <span
                    className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border border-[rgb(var(--outline)/0.72)] bg-[rgb(var(--surface-lowest))] xl:left-1/2 xl:top-[1.55rem] xl:-translate-x-1/2"
                    style={executionDotStyle}
                  />
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--ink-muted))]">
                    0{index + 1}
                  </span>
                  <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                    {step.label}
                  </p>
                  <p className="mt-3 max-w-[18rem] text-[0.9rem] leading-7 text-[rgb(var(--ink-soft))] xl:mx-auto">
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

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.82)]" style={sectionPanelSoftStyle}>
            <div className="grid gap-0 lg:grid-cols-2">
              <Reveal className="px-6 py-8 md:px-10 md:py-10" delay={0.04} y={16}>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                  {homepageCopy.whyItMatters.leftLabel}
                </p>
                <ul className="mt-6 grid gap-4">
                  {homepageCopy.whyItMatters.leftItems.map((item) => (
                    <li
                      key={item}
                      className="border-t border-[rgb(var(--outline)/0.72)] pt-4 text-[0.98rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink-soft))]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                className="border-t border-[rgb(var(--outline)/0.72)] px-6 py-8 md:px-10 md:py-10 lg:border-l lg:border-t-0"
                delay={0.08}
                y={16}
                style={insetSurfaceStyle}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                  {homepageCopy.whyItMatters.rightLabel}
                </p>
                <ul className="mt-6 grid gap-4">
                  {homepageCopy.whyItMatters.rightItems.map((item) => (
                    <li
                      key={item}
                      className="relative border-t border-[rgb(var(--outline)/0.72)] pt-4 pl-4 text-[1rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))]"
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

          <Reveal
            className="mt-10 overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.78)]"
            delay={0.04}
            y={16}
            style={sectionPanelQuietStyle}
          >
            <div className="grid gap-px bg-[rgb(var(--outline)/0.72)] md:grid-cols-2 xl:grid-cols-3">
              {homepageCopy.domainAdaptation.items.map((item, index) => (
                <div key={item} className="px-5 py-5" style={supportCardStyle}>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                    0{index + 1}
                  </p>
                  <p className="mt-4 max-w-[17ch] text-[0.94rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            className="mt-7 grid gap-1 text-[0.94rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))] md:grid-cols-3 md:text-center"
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
            className="overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.8)] p-6 md:p-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.96fr)] lg:gap-10"
            y={18}
            style={sectionPanelStyle}
          >
            <div className="max-w-[34rem]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
                {homepageCopy.companyPosition.eyebrow}
              </p>
              <h2 className="mt-4 max-w-[18ch] text-[clamp(1.65rem,2.7vw,2.35rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[rgb(var(--ink))]">
                {homepageCopy.companyPosition.title}
              </h2>
              <p className="mt-5 max-w-[31rem] text-[0.96rem] leading-8 text-[rgb(var(--ink-soft))]">
                {homepageCopy.companyPosition.lead}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-0">
              {homepageCopy.companyPosition.support.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.2rem] border border-[rgb(var(--outline)/0.66)] p-[1.125rem]"
                  style={supportCardStyle}
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-[0.92rem] font-medium leading-7 tracking-[-0.02em] text-[rgb(var(--ink))]">
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
            className="mx-auto max-w-[52rem] overflow-hidden rounded-[2rem] border border-[rgb(var(--outline)/0.82)] px-6 py-9 text-center md:px-10 md:py-10"
            y={18}
            style={sectionPanelQuietStyle}
          >
            <SectionIntro
              eyebrow={homepageCopy.closing.eyebrow}
              title={homepageCopy.closing.title}
              lead={homepageCopy.closing.lead}
              align="center"
            />

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href={architectureReviewHref} className={primaryActionClass}>
                {homepageCopy.closing.primaryLabel}
              </Link>
              <Link href={deploymentDirectionsHref} className={secondaryActionClass}>
                {homepageCopy.closing.secondaryLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
