import Link from "next/link";

import { StatusBadge } from "@/components/status-badge";
import type { Locale } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import type { CommercialProjectView } from "@/lib/project-commercial";

type ProjectCardProps = {
  locale: Locale;
  project: CommercialProjectView;
  copy: {
    stageLabel: string;
    viewProject: string;
  };
};

export function ProjectCard({ locale, project, copy }: ProjectCardProps) {
  return (
    <article className="surface overflow-hidden p-6 md:p-7 lg:grid lg:grid-cols-[minmax(0,1fr)_15.5rem] lg:items-end lg:gap-8">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} label={project.statusLabel} />
          <span className="project-chip bg-[rgb(var(--surface-container-high))] text-[rgb(var(--ink-soft))]">
            {project.category}
          </span>
        </div>

        <div className="mt-6 max-w-3xl space-y-4">
          <div className="space-y-1.5">
            {project.alternateName ? (
              <p className="text-[0.78rem] font-medium tracking-[0.08em] text-[rgb(var(--ink-muted))]">
                {project.alternateName}
              </p>
            ) : null}
            <h3 className="text-[2rem] font-semibold leading-[0.96] tracking-[-0.06em] text-[rgb(var(--ink))] md:text-[2.4rem]">
              {project.name}
            </h3>
          </div>
          <p className="text-[1rem] leading-8 text-[rgb(var(--ink-soft))]">{project.definition}</p>
        </div>
      </div>

      <div className="mt-8 border-t border-[rgb(var(--outline)/0.72)] pt-5 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
          {copy.stageLabel}
        </p>
        <p className="mt-3 text-[0.94rem] leading-7 text-[rgb(var(--ink))]">{project.currentStatus.stage}</p>

        <div className="mt-7">
          <Link
            href={buildLocalizedPath(locale, `/projects/${project.slug}`)}
            className="button-secondary w-full justify-center text-center lg:w-auto"
          >
            {copy.viewProject}
          </Link>
        </div>
      </div>
    </article>
  );
}
