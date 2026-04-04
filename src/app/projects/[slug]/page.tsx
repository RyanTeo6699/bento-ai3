import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { StatusBadge } from "@/components/status-badge";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import { createPageMetadata } from "@/lib/metadata";
import {
  getProjectBySlug,
  getProjectPresentationCopy,
  getProjectSlugs,
  getProjects
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
    description: project.positioning,
    path: `/projects/${params.slug}`
  });
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const projectCopy = getProjectPresentationCopy(locale);
  const projects = getProjects(locale);
  const project = getProjectBySlug(locale, params.slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((entry) => entry.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(46,232,255,0.16),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(139,96,255,0.12),transparent_20%)]" />
        <div className="shell relative pb-16 pt-8">
          <Link
            href={buildLocalizedPath(locale, "/projects")}
            className="section-kicker inline-flex items-center gap-2 text-accent hover:opacity-100"
          >
            {dictionary.common.backToProjects}
          </Link>

          <Reveal className="mt-8 max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} label={project.statusLabel} />
              <span className="neo-microcopy">{project.platform}</span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              {project.name}
            </h1>
            <p className="text-lg leading-8 text-slate-200">{project.positioning}</p>
            <p className="max-w-3xl text-base leading-8 text-slate-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[0.85rem] border border-white/10 px-3 py-1 text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="surface pixel-corner p-8">
            <span className="section-kicker">{projectCopy.whatItDoes}</span>
            <div className="mt-5 space-y-4">
              {project.detail.whatItDoes.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="surface pixel-corner p-8">
            <span className="section-kicker">{projectCopy.whyItMatters}</span>
            <p className="mt-5 text-base leading-8 text-slate-300">
              {project.detail.whyItMatters}
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="neo-microcopy">{projectCopy.platformLabel}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.platform}</p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="neo-microcopy">{projectCopy.valueCase}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {project.commercial.valueCase}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <span className="section-kicker">{projectCopy.systemHighlights}</span>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              {project.name}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {project.detail.highlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.05 * index}
                className="surface pixel-corner p-6"
              >
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <span className="section-kicker">{projectCopy.howItWorks}</span>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              {project.positioning}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {project.detail.flowSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={0.05 * index}
                className="surface pixel-corner p-6"
              >
                <p className="font-pixel text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface pixel-corner p-8">
            <span className="section-kicker">{projectCopy.systemLayer}</span>
            <p className="mt-5 text-base leading-8 text-slate-300">
              {project.detail.systemLayer}
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="neo-microcopy">{projectCopy.deliveryScope}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {project.commercial.deliveryScope}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="surface pixel-corner p-8">
            <span className="section-kicker">{projectCopy.statusNext}</span>
            <p className="mt-5 text-base leading-8 text-slate-300">{project.detail.stage}</p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="neo-microcopy">{dictionary.common.nextStep}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.detail.nextStep}
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="neo-microcopy">{dictionary.common.disclosure}</p>
              <p className="mt-3 text-sm leading-7 text-slate-500">{project.disclosure}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <span className="section-kicker">{dictionary.common.relatedWork}</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              {projectCopy.relatedTitle}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {related.map((entry, index) => (
              <Reveal key={entry.slug} delay={0.06 * index}>
                <ProjectCard
                  locale={locale}
                  project={entry}
                  variant={entry.comingSoon ? "emerging" : "default"}
                  copy={{
                    viewDetail: projectCopy.viewProject,
                    learnMore: projectCopy.learnMore,
                    idealUsers: projectCopy.idealUsers,
                    deliveryScope: projectCopy.deliveryScope,
                    keyOutcome: projectCopy.keyOutcome,
                    valueCase: projectCopy.valueCase,
                    platformLabel: projectCopy.platformLabel,
                    statusLabels: dictionary.common.statusLabels
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        locale={locale}
        eyebrow={dictionary.common.nextStep}
        title={dictionary.projects.detail.finalCta.title}
        description={dictionary.projects.detail.finalCta.description}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.viewProjects}
        secondaryHref="/projects"
      />
    </>
  );
}
