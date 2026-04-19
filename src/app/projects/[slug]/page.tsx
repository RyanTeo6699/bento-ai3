import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import { createPageMetadata } from "@/lib/metadata";
import {
  getProjectBySlug,
  getProjectPresentationCopy,
  getProjectSlugs
} from "@/lib/project-commercial";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({
    slug
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const project = getProjectBySlug(locale, params.slug);

  if (!project) {
    return createPageMetadata({
      locale,
      title: dictionary.notFound.title,
      description: dictionary.notFound.description,
      path: `/projects/${params.slug}`
    });
  }

  return createPageMetadata({
    locale,
    title: project.name,
    description: project.definition,
    path: `/projects/${params.slug}`
  });
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const projectCopy = getProjectPresentationCopy(locale);
  const project = getProjectBySlug(locale, params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="site-hero-section">
        <div className="shell">
          <div className="boxed-section site-hero-frame">
            <Link
              href={buildLocalizedPath(locale, "/projects")}
              className="button-secondary inline-flex w-fit"
            >
              {dictionary.common.backToProjects}
            </Link>

            <Reveal className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={project.status} label={project.statusLabel} />
                  <span className="project-chip bg-[rgb(var(--surface-container-high))] text-[rgb(var(--ink-soft))]">
                    {project.category}
                  </span>
                </div>

                <div className="mt-6 space-y-5">
                  {project.alternateName ? (
                    <p className="text-[0.82rem] font-medium tracking-[0.08em] text-[rgb(var(--ink-muted))]">
                      {project.alternateName}
                    </p>
                  ) : null}
                  <h1 className="headline-page max-w-4xl">{project.name}</h1>
                  <p className="max-w-3xl text-lg leading-8 text-[rgb(var(--ink))]">
                    {project.definition}
                  </p>
                  <p className="max-w-3xl text-base leading-8 text-[rgb(var(--ink-soft))]">
                    {project.heroLead}
                  </p>
                </div>
              </div>

              <div className="surface p-6">
                <p className="neo-microcopy">{projectCopy.stageLabel}</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink))]">
                  {project.currentStatus.stage}
                </p>

                <div className="mt-6 border-t border-[rgb(var(--outline)/0.72)] pt-5">
                  <p className="neo-microcopy">{projectCopy.publicDemoLabel}</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                    {project.visual.publicDemo}
                  </p>
                </div>

                {project.visual.projectLink ? (
                  <div className="mt-6 border-t border-[rgb(var(--outline)/0.72)] pt-5">
                    <p className="neo-microcopy">{projectCopy.projectLinkLabel}</p>
                    <a
                      href={project.visual.projectLink.href}
                      className="mt-3 inline-flex text-sm font-medium leading-7 text-[rgb(var(--ink))] underline decoration-[rgb(var(--outline))] underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.visual.projectLink.label}
                    </a>
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={projectCopy.problemEyebrow}
              title="Where the current workflow breaks."
              description={project.problem}
              compact
            />
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={projectCopy.whatItDoesEyebrow}
              title="What the product is designed to carry forward."
              description={project.whatItDoes}
              compact
            />
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={projectCopy.coreWorkflowEyebrow}
              title="A structured progression from entry to usable state."
              description="Each project moves from fragmented input toward an updated workflow state that can be reviewed and continued."
              compact
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {project.coreWorkflow.map((step, index) => (
              <Reveal key={step} delay={0.05 * index}>
                <div className="surface p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
                    Step 0{index + 1}
                  </p>
                  <p className="mt-4 text-[0.98rem] leading-7 text-[rgb(var(--ink))]">{step}</p>
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
              eyebrow={projectCopy.coreFeaturesEyebrow}
              title="Core features in the current product shape."
              description="The feature layer stays focused on workflow clarity, retained state, and usable follow-through."
              compact
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {project.coreFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={0.05 * index}>
                <div className="surface h-full p-6">
                  <h3 className="text-[1.08rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[rgb(var(--ink))]">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="surface p-8">
            <span className="section-kicker sticker-rotate-1">{projectCopy.differentiationEyebrow}</span>
            <h2 className="mt-5 text-[2rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[rgb(var(--ink))]">
              What this product is not trying to be.
            </h2>

            <div className="mt-6 space-y-3">
              {project.differentiation.not.map((item) => (
                <div
                  key={item}
                  className="border-t border-[rgb(var(--outline)/0.72)] pt-3 text-sm leading-7 text-[rgb(var(--ink-soft))] first:border-t-0 first:pt-0"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="surface p-8">
            <span className="section-kicker sticker-rotate-3">{projectCopy.differentiationEyebrow}</span>
            <h2 className="mt-5 text-[2rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[rgb(var(--ink))]">
              Where the value actually comes from.
            </h2>
            <p className="mt-6 text-base leading-8 text-[rgb(var(--ink-soft))]">
              {project.differentiation.value}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={projectCopy.bentoAngleEyebrow}
              title="The product surface sits on a broader operating model."
              description={project.bentoAngle.summary}
              compact
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {project.bentoAngle.layers.map((layer, index) => (
              <Reveal key={layer.title} delay={0.05 * index}>
                <div className="surface h-full p-6">
                  <p className="neo-microcopy">{layer.title}</p>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">{layer.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="mt-6 surface p-7">
            <p className="text-base leading-8 text-[rgb(var(--ink-soft))]">{project.bentoAngle.conclusion}</p>
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={projectCopy.currentStatusEyebrow}
              title="What is already in place and what comes next."
              description={project.currentStatus.stage}
              compact
            />
          </Reveal>

          <Reveal delay={0.08} className="mt-10 surface p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="project-chip bg-[rgb(var(--surface-container-high))] text-[rgb(var(--ink-soft))]">
                {projectCopy.stageLabel}
              </span>
              <p className="text-sm leading-7 text-[rgb(var(--ink))]">{project.currentStatus.stage}</p>
            </div>

            <div className="mt-8 grid gap-8 border-t border-[rgb(var(--outline)/0.72)] pt-8 md:grid-cols-2">
              <StatusList
                label={project.currentStatus.alreadyLabel}
                items={project.currentStatus.already}
              />
              <StatusList label={project.currentStatus.nextLabel} items={project.currentStatus.next} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={projectCopy.visualDemoEyebrow}
              title="What is currently available for review."
              description="Public demo availability stays explicit. Where material is not public, the page only shows the current reviewable assets."
              compact
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="surface p-8">
              <p className="neo-microcopy">{projectCopy.availableMaterialsLabel}</p>
              <div className="mt-6 space-y-3">
                {project.visual.availableMaterials.map((item) => (
                  <div
                    key={item}
                    className="border-t border-[rgb(var(--outline)/0.72)] pt-3 text-sm leading-7 text-[rgb(var(--ink-soft))] first:border-t-0 first:pt-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="surface p-8">
              <p className="neo-microcopy">{projectCopy.publicDemoLabel}</p>
              <p className="mt-4 text-sm leading-7 text-[rgb(var(--ink-soft))]">
                {project.visual.publicDemo}
              </p>

              {project.visual.projectLink ? (
                <div className="mt-8 border-t border-[rgb(var(--outline)/0.72)] pt-6">
                  <p className="neo-microcopy">{projectCopy.projectLinkLabel}</p>
                  <a
                    href={project.visual.projectLink.href}
                    className="mt-3 inline-flex text-sm font-medium leading-7 text-[rgb(var(--ink))] underline decoration-[rgb(var(--outline))] underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.visual.projectLink.label}
                  </a>
                </div>
              ) : null}
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta
        locale={locale}
        eyebrow={projectCopy.closingEyebrow}
        title={project.closingCta}
        description={projectCopy.closingDescription}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.viewProjects}
        secondaryHref="/projects"
      />
    </>
  );
}

function StatusList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="neo-microcopy">{label}</p>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="border-t border-[rgb(var(--outline)/0.72)] pt-3 text-sm leading-7 text-[rgb(var(--ink-soft))] first:border-t-0 first:pt-0"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
