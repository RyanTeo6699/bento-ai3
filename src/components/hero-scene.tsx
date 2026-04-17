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
    top: "6%",
    left: "4.5%",
    path: "M500 380 C430 304 338 226 224 152",
    dotX: 224,
    dotY: 152
  },
  {
    top: "6%",
    right: "4.5%",
    path: "M500 380 C570 304 662 226 776 152",
    dotX: 776,
    dotY: 152
  },
  {
    top: "33%",
    left: "0%",
    path: "M500 380 C402 374 288 362 146 344",
    dotX: 146,
    dotY: 344
  },
  {
    top: "33%",
    right: "0%",
    path: "M500 380 C598 374 712 362 854 344",
    dotX: 854,
    dotY: 344
  },
  {
    bottom: "6%",
    left: "5.5%",
    path: "M500 380 C424 470 338 560 232 634",
    dotX: 232,
    dotY: 634
  },
  {
    bottom: "6%",
    right: "5.5%",
    path: "M500 380 C576 470 662 560 768 634",
    dotX: 768,
    dotY: 634
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
      "0 12px 28px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255,255,255,0.74), 0 0 0 1px rgba(148, 163, 184, 0.06)"
  },
  secondary: {
    chip: "border-[#c9d2de] bg-[#eef2f7] text-[#556c85]",
    dot: "bg-[#607791]",
    nodeActiveBorder: "border-[#aebccc]",
    nodeActiveText: "text-[#556c85]",
    pathStroke: "rgba(96, 119, 145, 0.72)",
    surfaceShadow:
      "0 12px 28px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255,255,255,0.74), 0 0 0 1px rgba(169, 184, 204, 0.08)"
  },
  tertiary: {
    chip: "border-[#d9d1c3] bg-[#f4efe7] text-[#84725d]",
    dot: "bg-[#9a866d]",
    nodeActiveBorder: "border-[#cdbfaa]",
    nodeActiveText: "text-[#7e6d59]",
    pathStroke: "rgba(154, 134, 109, 0.72)",
    surfaceShadow:
      "0 12px 28px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255,255,255,0.74), 0 0 0 1px rgba(205, 191, 170, 0.08)"
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
        "group relative w-full overflow-hidden rounded-[1.25rem] border bg-[rgba(255,255,255,0.46)] text-left backdrop-blur transition",
        compact ? "px-3.5 py-3" : "px-3.5 py-3 xl:px-4 xl:py-3.5",
        active
          ? cn(
              tone.nodeActiveBorder,
              "opacity-100 bg-[rgba(255,255,255,0.8)] shadow-[0_12px_24px_rgba(15,23,42,0.05)]"
            )
          : "border-[rgb(var(--outline)/0.54)] opacity-[0.34] shadow-[0_4px_12px_rgba(15,23,42,0.02)] hover:opacity-[0.75] hover:shadow-[0_10px_18px_rgba(15,23,42,0.04)]"
      )}
      animate={{
        y: active ? [0, -1.5, 0] : [0, -0.35, 0],
        scale: active ? 1.01 : 0.985,
        opacity: active ? 1 : 0.34
      }}
      whileHover={{ y: active ? -1.5 : -0.8, scale: active ? 1.01 : 0.99, opacity: 0.88 }}
      transition={{
        duration: active ? 6.2 : 8.4,
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
                "text-[0.76rem] font-semibold leading-5 tracking-[-0.03em] text-[rgb(var(--ink))]",
                active && tone.nodeActiveText
              )}
            >
              {module.displayTitle}
            </p>
            <p className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
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
  const activeSignals = activeModule.bullets.slice(0, 2);

  const ActiveModuleSurface = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={activeModule.id}
        initial={{ opacity: 0, y: 10, scale: 0.992 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.992 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2.35rem] border border-[rgb(var(--outline)/0.56)] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(247,243,237,0.52))] px-5 py-5 backdrop-blur-[10px] xl:px-6 xl:py-6"
        style={{ boxShadow: activeTone.surfaceShadow }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,255,255,0)_56%)]" />
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(132,145,166,0.24),transparent)]" />
        <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(132,145,166,0.18),transparent)]" />
        <div className="pointer-events-none absolute inset-y-6 left-5 w-px rounded-full bg-[linear-gradient(180deg,transparent,rgba(96,119,145,0.22),transparent)]" />

        <div className="relative flex items-start justify-between gap-4 pl-4">
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

          <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--outline)/0.64)] bg-[rgba(255,255,255,0.74)] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--ink-soft))]">
            <motion.span
              className={cn("inline-flex h-2 w-2 rounded-full", activeTone.dot)}
              animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <span>{activeModule.status}</span>
          </div>
        </div>

        <div className="relative mt-7 space-y-4 pl-4">
          <h3 className="max-w-[12ch] text-[1.24rem] font-semibold leading-[1.03] tracking-[-0.05em] text-[rgb(var(--ink))] xl:text-[1.38rem]">
            {activeModule.displayTitle}
          </h3>
          <p className="max-w-[28ch] text-[0.84rem] leading-6 text-[rgb(var(--ink-soft))]">
            {activeModule.focus}
          </p>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-2 pl-4">
          {activeSignals.map((item) => (
            <span
              key={item}
              className={cn(
                "inline-flex items-center justify-center rounded-full border px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em]",
                activeTone.chip
              )}
            >
              {item}
            </span>
          ))}
        </div>

        {(core.primaryActionLabel && core.primaryActionHref) || (core.secondaryActionLabel && core.secondaryActionHref) ? (
          <div className="relative mt-5 flex flex-wrap gap-2.5 pl-4">
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
      <div className="pointer-events-none absolute inset-0 opacity-[0.52]" style={overlayGridStyle} />
      <div className="pointer-events-none absolute inset-x-[22%] top-[5%] h-24 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.96),rgba(255,255,255,0))] blur-3xl" />

      <div className="relative space-y-4 lg:hidden">
        <div className="px-1">
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
              stroke="rgba(181, 188, 197, 0.16)"
              strokeWidth="0.85"
              strokeDasharray="6 20"
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
            strokeWidth="3.2"
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

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.99),rgba(247,243,237,0.92)_44%,rgba(255,255,255,0.42)_64%,rgba(255,255,255,0)_80%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[18.5rem] w-[18.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(165,171,180,0.14)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(165,171,180,0.08)]" />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.96),rgba(247,243,237,0.74)_46%,rgba(255,255,255,0)_76%)]"
          animate={{ scale: [0.985, 1.018, 0.985], opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-1/2 z-20 w-[18.8rem] -translate-x-1/2 -translate-y-1/2 xl:w-[19.6rem]">
          {ActiveModuleSurface}
        </div>

        {architectureNodes.map((module, index) => (
          <motion.div
            key={module.id}
            className="absolute w-[8.95rem] xl:w-[9.35rem]"
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
