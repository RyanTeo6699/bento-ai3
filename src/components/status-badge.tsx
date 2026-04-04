import type { ProjectStatus } from "@/lib/project-commercial";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
  Prototype:
    "border-[rgba(46,232,255,0.4)] bg-[rgba(46,232,255,0.1)] text-[rgb(var(--accent))]",
  Internal: "border-violet/30 bg-violet/10 text-violet-100",
  Concept: "border-amber-300/30 bg-amber-300/10 text-amber-100"
};

export function StatusBadge({
  status,
  label
}: {
  status: ProjectStatus;
  label?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[0.85rem] border px-3 py-1.5 font-pixel text-[0.66rem] uppercase tracking-[0.18em]",
        statusStyles[status]
      )}
    >
      {label ?? status}
    </span>
  );
}
