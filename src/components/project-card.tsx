import Link from "next/link";

import { StatusBadge } from "@/components/status-badge";
import type { Locale } from "@/lib/i18n";
import { buildLocalizedPath } from "@/lib/locale-routing";
import type { CommercialProjectView } from "@/lib/project-commercial";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  locale: Locale;
  project: CommercialProjectView;
  copy: {
    viewDetail: string;
    learnMore?: string;
    idealUsers: string;
    deliveryScope: string;
    keyOutcome: string;
    valueCase: string;
    platformLabel?: string;
    statusLabels: Record<string, string>;
  };
  variant?: "default" | "featured" | "emerging";
};

export function ProjectCard({
  locale,
  project,
  copy,
  variant = "default"
}: ProjectCardProps) {
  const actionLabel = variant === "emerging" ? copy.learnMore ?? copy.viewDetail : copy.viewDetail;

  return (
    <article
      className={cn(
        "surface pixel-corner flex h-full flex-col",
        variant === "featured" ? "p-8" : variant === "emerging" ? "p-5" : "p-6"
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <StatusBadge
          status={project.status}
          label={project.statusLabel ?? copy.statusLabels[project.status]}
        />
        <span className="neo-microcopy text-right">{project.platform}</span>
      </div>

      <div className={cn("space-y-3", variant === "emerging" ? "mt-5" : "mt-6")}>
        <h3
          className={cn(
            "font-semibold text-white",
            variant === "featured" ? "text-3xl leading-tight" : "text-2xl"
          )}
        >
          {project.name}
        </h3>
        <p className="text-sm leading-7 text-slate-200">{project.positioning}</p>
        <p className="text-sm leading-7 text-slate-400">{project.summary}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[0.85rem] border border-white/10 px-3 py-1 text-xs text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {variant === "emerging" ? (
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-sm leading-7 text-slate-500">{project.disclosure}</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
          {copy.platformLabel ? (
            <div>
              <p className="neo-microcopy">{copy.platformLabel}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{project.platform}</p>
            </div>
          ) : null}

          <div className={cn(copy.platformLabel && "border-t border-white/10 pt-4")}>
            <p className="neo-microcopy">{copy.valueCase}</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              {project.commercial.valueCase}
            </p>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="neo-microcopy">{copy.keyOutcome}</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">{project.outcome}</p>
          </div>

          {variant === "featured" ? (
            <div className="border-t border-white/10 pt-4">
              <p className="neo-microcopy">{copy.deliveryScope}</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                {project.commercial.deliveryScope}
              </p>
            </div>
          ) : null}
        </div>
      )}

      <div className="mt-auto pt-8">
        <Link
          href={buildLocalizedPath(locale, `/projects/${project.slug}`)}
          className="button-secondary"
        >
          {actionLabel}
        </Link>
      </div>
    </article>
  );
}
