"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type ArchitectureTone = "primary" | "secondary" | "tertiary";

type ArchitectureModule = {
  id: string;
  title: string;
  displayTitle: string;
  summary: string;
  bullets: string[];
  headline: string;
  descriptor: string;
  status: string;
  focus: string;
  flow: string;
  tone: ArchitectureTone;
};

type ArchitectureCore = {
  label: string;
  headline: string;
  summary: string;
  chips: string[];
  primaryActionLabel?: string;
  primaryActionHref?: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  context: string;
};

type ArchitectureLabels = {
  activeModule: string;
  currentRole: string;
  executionPath: string;
  systemContext: string;
};

type ArchitectureNode = ArchitectureModule & {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  path: string;
  dotX: number;
  dotY: number;
};

const orbitLayout = [
  {
    top: "7%",
    left: "6%",
    path: "M500 380 C432 306 342 228 232 158",
    dotX: 232,
    dotY: 158
  },
  {
    top: "7%",
    right: "6%",
    path: "M500 380 C568 306 658 228 768 158",
    dotX: 768,
    dotY: 158
  },
  {
    top: "33%",
    left: "1.5%",
    path: "M500 380 C404 374 292 364 162 344",
    dotX: 162,
    dotY: 344
  },
  {
    top: "33%",
    right: "1.5%",
    path: "M500 380 C596 374 708 364 838 344",
    dotX: 838,
    dotY: 344
  },
  {
    bottom: "7%",
    left: "7%",
    path: "M500 380 C426 468 340 556 242 626",
    dotX: 242,
    dotY: 626
  },
  {
    bottom: "7%",
    right: "7%",
    path: "M500 380 C574 468 660 556 758 626",
    dotX: 758,
    dotY: 626
  }
] as const;

const overlayGridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(214, 208, 199, 0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(214, 208, 199, 0.7) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
  maskImage: "linear-gradient(180deg, rgba(255,255,255,0.82), transparent 92%)"
};

const toneClasses: Record<
  ArchitectureTone,
  {
    chip: string;
    dot: string;
    nodeActiveBorder: string;
    nodeActiveText: string;
    pathStroke: string;
    surfaceShadow: string;
  }
> = {
  primary: {
    chip: "border-slate-300 bg-slate-100 text-slate-700",
    dot: "bg-slate-600",
    nodeActiveBorder: "border-slate-400/90",
    nodeActiveText: "text-slate-700",
    pathStroke: "rgba(71, 85, 105, 0.74)",
    surfaceShadow:
      "0 20px 46px rgba(15, 23, 42, 0.1), inset 0 1px 0 rgba(255,255,255,0.68), 0 0 0 1px rgba(148, 163, 184, 0.08)"
  },
  secondary: {
    chip: "border-[#c9d2de] bg-[#eef2f7] text-[#556c85]",
    dot: "bg-[#607791]",
    nodeActiveBorder: "border-[#aebccc]",
    nodeActiveText: "text-[#556c85]",
    pathStroke: "rgba(96, 119, 145, 0.72)",
    surfaceShadow:
      "0 20px 46px rgba(15, 23, 42, 0.1), inset 0 1px 0 rgba(255,255,255,0.68), 0 0 0 1px rgba(169, 184, 204, 0.1)"
  },
  tertiary: {
    chip: "border-[#d9d1c3] bg-[#f4efe7] text-[#84725d]",
    dot: "bg-[#9a866d]",
    nodeActiveBorder: "border-[#cdbfaa]",
    nodeActiveText: "text-[#7e6d59]",
    pathStroke: "rgba(154, 134, 109, 0.72)",
    surfaceShadow:
      "0 20px 46px rgba(15, 23, 42, 0.1), inset 0 1px 0 rgba(255,255,255,0.68), 0 0 0 1px rgba(205, 191, 170, 0.1)"
  }
};

const actionClassName =
  "inline-flex min-h-10 items-center justify-center rounded-full border border-[rgb(var(--outline))] bg-[rgba(255,255,255,0.9)] px-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink))] transition hover:-translate-y-0.5 hover:border-[rgb(var(--outline-strong))] hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]";

const secondaryActionClassName =
  "inline-flex min-h-10 items-center justify-center rounded-full border border-[rgb(var(--outline)/0.82)] bg-[rgba(247,244,239,0.82)] px-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-soft))] transition hover:-translate-y-0.5 hover:border-[rgb(var(--outline-strong))] hover:text-[rgb(var(--ink))] hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]";

function buildArchitectureNode(module: ArchitectureModule, index: number): ArchitectureNode {
  return {
    ...module,
    ...orbitLayout[index]
  };
}

function OrbitNode({
  module,
  index,
  active,
  onSelect,
  compact = false
}: {
  module: ArchitectureNode;
  index: number;
  active: boolean;
  onSelect: () => void;
  compact?: boolean;
}) {
  const tone = toneClasses[module.tone];

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        "group relative w-full overflow-hidden rounded-[1.45rem] border bg-[rgba(255,255,255,0.58)] text-left backdrop-blur transition",
        compact ? "px-4 py-3.5" : "px-4 py-3.5 xl:px-[1.125rem] xl:py-4",
        active
          ? cn(
              tone.nodeActiveBorder,
              "opacity-100 bg-[rgba(255,255,255,0.9)] shadow-[0_18px_34px_rgba(15,23,42,0.08)]"
            )
          : "border-[rgb(var(--outline)/0.6)] opacity-42 shadow-[0_6px_18px_rgba(15,23,42,0.035)] hover:opacity-78 hover:shadow-[0_12px_24px_rgba(15,23,42,0.05)]"
      )}
      animate={{
        y: active ? [0, -2, 0] : [0, -0.6, 0],
        scale: active ? 1.015 : 0.98,
        opacity: active ? 1 : 0.44
      }}
      whileHover={{ y: active ? -2 : -1.2, scale: active ? 1.015 : 0.99, opacity: 0.92 }}
      transition={{
        duration: active ? 6 : 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.18
      }}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-y-3 left-3 w-px rounded-full bg-[linear-gradient(180deg,transparent,rgba(109,120,141,0.16),transparent)]",
          active &&
            "bg-[linear-gradient(180deg,transparent,rgba(96,119,145,0.42),transparent)]"
        )}
      />

      <div className="relative pl-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p
              className={cn(
                "text-[0.78rem] font-semibold leading-5 tracking-[-0.03em] text-[rgb(var(--ink))]",
                active && tone.nodeActiveText
              )}
            >
              {module.displayTitle}
            </p>
            <p className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
              {module.descriptor}
            </p>
          </div>
          <span
            className={cn(
              "mt-1 inline-flex h-2.5 w-2.5 rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.78)]",
              active ? tone.dot : "bg-[rgba(148,163,184,0.76)]"
            )}
          />
        </div>
      </div>
    </motion.button>
  );
}

type HeroSceneProps = {
  modules: ArchitectureModule[];
  core: ArchitectureCore;
  labels: ArchitectureLabels;
};

export function HeroScene({ modules, core, labels }: HeroSceneProps) {
  const architectureNodes = modules.slice(0, 6).map(buildArchitectureNode);
  const [activeId, setActiveId] = useState(architectureNodes[0]?.id ?? "");
  const rawActiveIndex = architectureNodes.findIndex((module) => module.id === activeId);
  const activeIndex = rawActiveIndex >= 0 ? rawActiveIndex : 0;
  const activeModule = architectureNodes[activeIndex] ?? architectureNodes[0];

  if (!activeModule) {
    return null;
  }

  const activeTone = toneClasses[activeModule.tone];
  const activeSignals = activeModule.bullets.slice(0, 3);

  const ActiveModuleSurface = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={activeModule.id}
        initial={{ opacity: 0, y: 10, scale: 0.992 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.992 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2.1rem] border border-[rgb(var(--outline)/0.78)] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,243,237,0.74))] px-5 py-5 xl:px-6 xl:py-6"
        style={{ boxShadow: activeTone.surfaceShadow }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(255,255,255,0)_58%)]" />
        <div className="pointer-events-none absolute inset-y-5 left-4 w-px rounded-full bg-[linear-gradient(180deg,transparent,rgba(96,119,145,0.28),transparent)]" />

        <div className="relative flex items-start justify-between gap-4 pl-3">
          <div className="space-y-3">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--ink-muted))]">
              {labels.activeModule}
            </p>
            <p
              className={cn(
                "text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]",
                activeTone.nodeActiveText
              )}
            >
              {activeModule.title}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--outline)/0.74)] bg-[rgba(255,255,255,0.84)] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--ink-soft))]">
            <motion.span
              className={cn("inline-flex h-2.5 w-2.5 rounded-full", activeTone.dot)}
              animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <span>{activeModule.status}</span>
          </div>
        </div>

        <div className="relative mt-7 space-y-4 pl-3">
          <h3 className="max-w-[12ch] text-[1.34rem] font-semibold leading-[1.03] tracking-[-0.05em] text-[rgb(var(--ink))] xl:text-[1.48rem]">
            {activeModule.displayTitle}
          </h3>
          <p className="max-w-[30ch] text-[0.88rem] leading-6 text-[rgb(var(--ink-soft))]">
            {activeModule.focus}
          </p>
        </div>

        <div className="relative mt-6 flex flex-wrap gap-2.5 pl-3">
          {activeSignals.map((item) => (
            <span
              key={item}
              className={cn(
                "inline-flex items-center justify-center rounded-full border px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.14em]",
                activeTone.chip
              )}
            >
              {item}
            </span>
          ))}
        </div>

        {(core.primaryActionLabel && core.primaryActionHref) || (core.secondaryActionLabel && core.secondaryActionHref) ? (
          <div className="relative mt-6 flex flex-wrap gap-2.5 pl-3">
            {core.primaryActionLabel && core.primaryActionHref ? (
              <Link href={core.primaryActionHref} className={actionClassName}>
                {core.primaryActionLabel}
              </Link>
            ) : null}
            {core.secondaryActionLabel && core.secondaryActionHref ? (
              <Link href={core.secondaryActionHref} className={secondaryActionClassName}>
                {core.secondaryActionLabel}
              </Link>
            ) : null}
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="relative overflow-hidden rounded-[2.2rem] border border-[rgb(var(--outline)/0.82)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,240,233,0.9))] p-4 shadow-[0_30px_72px_rgba(15,23,42,0.08)] md:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-52" style={overlayGridStyle} />
      <div className="pointer-events-none absolute inset-x-[22%] top-[5%] h-24 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.96),rgba(255,255,255,0))] blur-3xl" />

      <div className="relative space-y-4 lg:hidden">
        <div className="rounded-[2rem] border border-[rgb(var(--outline)/0.82)] bg-[rgba(255,255,255,0.88)] p-4 shadow-[0_20px_48px_rgba(15,23,42,0.08)]">
          {ActiveModuleSurface}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {architectureNodes.map((module, index) => (
            <OrbitNode
              key={module.id}
              module={module}
              index={index}
              active={module.id === activeModule.id}
              onSelect={() => setActiveId(module.id)}
              compact
            />
          ))}
        </div>
      </div>

      <div className="relative hidden h-[40rem] lg:block xl:h-[42rem]">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 760" fill="none" aria-hidden="true">
          {architectureNodes.map((module) => (
            <path
              key={`${module.id}-base`}
              d={module.path}
              stroke="rgba(181, 188, 197, 0.22)"
              strokeWidth="0.9"
              strokeDasharray="6 18"
              strokeLinecap="round"
            />
          ))}

          <path
            d={activeModule.path}
            stroke={activeTone.pathStroke}
            strokeOpacity="0.32"
            strokeWidth="2.25"
            strokeLinecap="round"
          />

          <motion.path
            key={`${activeModule.id}-active-path`}
            d={activeModule.path}
            stroke={activeTone.pathStroke}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="12 18"
            animate={{ opacity: [0.42, 1, 0.42], strokeDashoffset: [0, -18] }}
            transition={{
              opacity: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
              strokeDashoffset: { duration: 2.2, repeat: Infinity, ease: "linear" }
            }}
          />

          {architectureNodes.map((module) => {
            const tone = toneClasses[module.tone];
            const isActive = module.id === activeModule.id;

            return (
              <circle
                key={`${module.id}-dot`}
                cx={module.dotX}
                cy={module.dotY}
                r={isActive ? 5.9 : 2.8}
                fill={isActive ? tone.pathStroke : "rgba(177, 184, 194, 0.72)"}
              />
            );
          })}

          <motion.circle
            key={`${activeModule.id}-pulse`}
            cx={activeModule.dotX}
            cy={activeModule.dotY}
            r="7"
            fill="none"
            stroke={activeTone.pathStroke}
            strokeOpacity="0.42"
            animate={{ r: [6, 11, 6], opacity: [0.22, 0.58, 0.22] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <circle cx="500" cy="380" r="6" fill="rgba(71, 85, 105, 0.82)" />
        </svg>

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[25.5rem] w-[25.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.98),rgba(247,243,237,0.94)_44%,rgba(255,255,255,0.52)_62%,rgba(255,255,255,0)_79%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(165,171,180,0.16)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[29.5rem] w-[29.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(165,171,180,0.1)]" />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.96),rgba(247,243,237,0.74)_46%,rgba(255,255,255,0)_76%)]"
          animate={{ scale: [0.985, 1.018, 0.985], opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-1/2 z-20 w-[19.8rem] -translate-x-1/2 -translate-y-1/2 xl:w-[20.7rem]">
          {ActiveModuleSurface}
        </div>

        {architectureNodes.map((module, index) => (
          <motion.div
            key={module.id}
            className="absolute w-[9.6rem] xl:w-[9.95rem]"
            style={{
              top: module.top,
              left: module.left,
              right: module.right,
              bottom: module.bottom
            }}
          >
            <OrbitNode
              module={module}
              index={index}
              active={module.id === activeModule.id}
              onSelect={() => setActiveId(module.id)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
