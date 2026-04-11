import type { ProjectStatus } from "@/lib/project-commercial";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "border-[rgb(var(--primary))] bg-[rgb(var(--primary-veil))] text-[rgb(var(--primary))]",
  Prototype:
    "border-[rgb(var(--secondary))] bg-[rgb(var(--secondary-veil))] text-[rgb(var(--secondary))]",
  Internal:
    "border-[rgb(var(--outline-strong))] bg-[rgb(var(--surface-container-high))] text-[rgb(var(--ink-soft))]",
  Concept:
    "border-[rgb(var(--tertiary))] bg-[rgb(var(--tertiary-container))] text-[rgb(var(--ink))]"
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
        "inline-flex items-center rounded-full border px-3 py-2 font-[var(--font-label)] text-[0.68rem] font-extrabold uppercase tracking-[0.14em]",
        statusStyles[status]
      )}
    >
      {label ?? status}
    </span>
  );
}
