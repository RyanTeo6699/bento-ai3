import type { Metadata } from "next";

import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getSharedCtas } from "@/lib/cta";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import {
  getProjectPresentationCopy,
  getProjects as getCommercialProjects
} from "@/lib/project-commercial";

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const projectCopy = getProjectPresentationCopy(locale);

  return createPageMetadata({
    locale,
    title: dictionary.nav.find((item) => item.href === "/projects")?.label ?? "Projects",
    description: projectCopy.heroDescription,
    path: "/projects"
  });
}

export default function ProjectsPage() {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const projectCopy = getProjectPresentationCopy(locale);
  const projects = getCommercialProjects(locale);
  const featuredProjects = projects.filter((project) => project.featured);
  const emergingProjects = projects.filter((project) => project.comingSoon);

  return (
    <>
      <PageHero
        eyebrow={projectCopy.heroEyebrow}
        title={projectCopy.heroTitle}
        description={projectCopy.heroDescription}
        metrics={[
          {
            label: projectCopy.metrics.published,
            value: `${projects.length}`
          },
          {
            label: projectCopy.metrics.featured,
            value: `${featuredProjects.length}`
          },
          {
            label: projectCopy.metrics.emerging,
            value: `${emergingProjects.length}`
          }
        ]}
      />

      <section className="py-24">
        <div className="shell">
          <Reveal className="surface pixel-corner p-6">
            <p className="section-kicker text-[0.58rem]">{projectCopy.noteKicker}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              {projectCopy.noteBody}
            </p>
          </Reveal>

          <div className="mt-14">
            <Reveal>
              <SectionHeading
                eyebrow={projectCopy.featuredEyebrow}
                title={projectCopy.featuredTitle}
                description={projectCopy.featuredDescription}
              />
            </Reveal>

            <div className="mt-12 grid gap-6 xl:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <Reveal key={project.slug} delay={0.05 * index}>
                  <ProjectCard
                    locale={locale}
                    project={project}
                    variant="featured"
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
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={projectCopy.emergingEyebrow}
              title={projectCopy.emergingTitle}
              description={projectCopy.emergingDescription}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {emergingProjects.map((project, index) => (
              <Reveal key={project.slug} delay={0.06 * index}>
                <ProjectCard
                  locale={locale}
                  project={project}
                  variant="emerging"
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
        eyebrow={dictionary.projects.finalCta.eyebrow}
        title={dictionary.projects.finalCta.title}
        description={dictionary.projects.finalCta.description}
        primaryLabel={sharedCtas.startConversation}
        primaryHref="/contact"
        secondaryLabel={sharedCtas.aboutCompany}
        secondaryHref="/about"
      />
    </>
  );
}
