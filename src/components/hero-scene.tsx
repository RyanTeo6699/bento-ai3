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
    top: "5%",
    left: "1.8%",
    path: "M500 380 C430 304 338 226 224 152",
    dotX: 224,
    dotY: 152
  },
  {
    top: "5%",
    right: "1.8%",
    path: "M500 380 C570 304 662 226 776 152",
    dotX: 776,
    dotY: 152
  },
  {
    top: "33%",
    left: "-1.4%",
    path: "M500 380 C402 374 288 362 146 344",
    dotX: 146,
    dotY: 344
  },
  {
    top: "33%",
    right: "-1.4%",
    path: "M500 380 C598 374 712 362 854 344",
    dotX: 854,
    dotY: 344
  },
  {
    bottom: "4.8%",
    left: "2.8%",
    path: "M500 380 C424 470 338 560 232 634",
    dotX: 232,
    dotY: 634
  },
  {
    bottom: "4.8%",
    right: "2.8%",
    path: "M500 380 C576 470 662 560 768 634",
    dotX: 768,
    dotY: 634
  }
] as const;

const overlayGridStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgb(var(--theme-system-grid) / 0.24) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--theme-system-grid) / 0.24) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
  maskImage: "linear-gradient(180deg, rgba(255,255,255,0.82), transparent 92%)"
};

const shellStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, rgb(var(--theme-system-shell-start) / 0.95), rgb(var(--theme-system-shell-end) / 0.92))",
  boxShadow: "var(--theme-system-shell-shadow)"
};

const activeSurfaceStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, rgb(var(--theme-system-surface-start) / 0.82), rgb(var(--theme-system-surface-end) / 0.68))",
  boxShadow: "0 12px 26px rgb(var(--shadow) / 0.14), inset 0 1px 0 rgb(255 255 255 / 0.04)"
};

const nodeInactiveStyle: CSSProperties = {
  backgroundColor: "rgb(var(--theme-system-node-surface) / 0.18)"
};

const nodeActiveStyle: CSSProperties = {
  backgroundColor: "rgb(var(--theme-system-node-active-surface) / 0.56)",
  boxShadow: "0 10px 18px rgb(var(--shadow) / 0.1)"
};

const orbitGlowStyle: CSSProperties = {
  backgroundImage: "radial-gradient(circle, rgb(var(--theme-system-glow) / 0.16), rgba(0,0,0,0))"
};

const orbitPulseStyle: CSSProperties = {
  backgroundImage:
    "radial-gradient(circle, rgb(var(--theme-system-glow) / 0.18), rgb(var(--theme-system-glow) / 0.05) 46%, rgba(255,255,255,0) 76%)"
};

const nodeRailStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, transparent, rgb(var(--theme-connector-muted) / 0.08), transparent)"
};

const nodeRailActiveStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, transparent, rgb(var(--theme-connector-active) / 0.28), transparent)"
};

const nodeDotRingStyle: CSSProperties = {
  boxShadow: "0 0 0 4px rgb(var(--background) / 0.84)"
};

const surfaceGlowInnerStyle: CSSProperties = {
  backgroundImage:
    "radial-gradient(circle at top, rgb(var(--theme-system-glow) / 0.08), rgba(255,255,255,0) 58%)"
};

const surfaceTopLineStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(90deg, transparent, rgb(var(--theme-connector-active) / 0.12), transparent)"
};

const surfaceBottomLineStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(90deg, transparent, rgb(var(--theme-connector-muted) / 0.08), transparent)"
};

const surfaceLeftLineStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, transparent, rgb(var(--theme-connector-active) / 0.14), transparent)"
};

const toneClasses: Record<
  ArchitectureTone,
  {
    chip: string;
    dot: string;
    nodeActiveBorder: string;
    nodeActiveText: string;
    pathStroke: string;
  }
> = {
  primary: {
    chip: "border-[rgb(var(--tone-primary-border)/0.72)] bg-[rgb(var(--tone-primary-surface)/0.82)] text-[rgb(var(--tone-primary-ink))]",
    dot: "bg-[rgb(var(--tone-primary-dot))]",
    nodeActiveBorder: "border-[rgb(var(--tone-primary-border)/0.9)]",
    nodeActiveText: "text-[rgb(var(--tone-primary-ink))]",
    pathStroke: "rgb(var(--tone-primary-path))"
  },
  secondary: {
    chip: "border-[rgb(var(--tone-secondary-border)/0.72)] bg-[rgb(var(--tone-secondary-surface)/0.82)] text-[rgb(var(--tone-secondary-ink))]",
    dot: "bg-[rgb(var(--tone-secondary-dot))]",
    nodeActiveBorder: "border-[rgb(var(--tone-secondary-border)/0.9)]",
    nodeActiveText: "text-[rgb(var(--tone-secondary-ink))]",
    pathStroke: "rgb(var(--tone-secondary-path))"
  },
  tertiary: {
    chip: "border-[rgb(var(--tone-tertiary-border)/0.72)] bg-[rgb(var(--tone-tertiary-surface)/0.82)] text-[rgb(var(--tone-tertiary-ink))]",
    dot: "bg-[rgb(var(--tone-tertiary-dot))]",
    nodeActiveBorder: "border-[rgb(var(--tone-tertiary-border)/0.9)]",
    nodeActiveText: "text-[rgb(var(--tone-tertiary-ink))]",
    pathStroke: "rgb(var(--tone-tertiary-path))"
  }
};

const actionClassName =
  "button-primary inline-flex min-h-8 !px-3 !text-[0.61rem] !font-semibold uppercase tracking-[0.16em]";

const secondaryActionClassName =
  "button-secondary inline-flex min-h-8 !px-3 !text-[0.61rem] !font-semibold uppercase tracking-[0.16em]";

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
        "group relative w-full overflow-hidden rounded-[1rem] border text-left backdrop-blur transition",
        compact ? "px-2.5 py-2" : "px-2.5 py-2 xl:px-[0.6875rem] xl:py-[0.5625rem]",
        active
          ? cn(tone.nodeActiveBorder, "opacity-100")
          : "border-[rgb(var(--outline)/0.24)] opacity-[0.18] shadow-none hover:opacity-[0.52]"
      )}
      animate={{
        y: active ? [0, -0.8, 0] : [0, -0.12, 0],
        scale: active ? 1.004 : 0.986,
        opacity: active ? 1 : 0.18
      }}
      whileHover={{ y: active ? -0.9 : -0.35, scale: active ? 1.004 : 0.99, opacity: 0.72 }}
      transition={{
        duration: active ? 6.2 : 8.4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.18
      }}
      style={active ? nodeActiveStyle : nodeInactiveStyle}
    >
      <span
        className="pointer-events-none absolute inset-y-2.5 left-3 w-px rounded-full"
        style={active ? nodeRailActiveStyle : nodeRailStyle}
      />

      <div className="relative pl-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p
              className={cn(
                "text-[0.7rem] font-semibold leading-5 tracking-[-0.03em] text-[rgb(var(--ink))]",
                active && tone.nodeActiveText
              )}
            >
              {module.displayTitle}
            </p>
            <p className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-[0.54rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))]">
              {module.descriptor}
            </p>
          </div>
          <span
            className={cn(
              "mt-1 inline-flex h-2 w-2 rounded-full",
              active ? tone.dot : "bg-[rgb(var(--theme-signal-muted)/0.76)]"
            )}
            style={nodeDotRingStyle}
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
        className="relative overflow-hidden rounded-[2.15rem] border border-[rgb(var(--outline)/0.3)] px-[1.125rem] py-[1.125rem] backdrop-blur-[10px] xl:px-5 xl:py-5"
        style={activeSurfaceStyle}
      >
        <div className="pointer-events-none absolute inset-0" style={surfaceGlowInnerStyle} />
        <div className="pointer-events-none absolute inset-x-7 top-0 h-px" style={surfaceTopLineStyle} />
        <div className="pointer-events-none absolute inset-x-7 bottom-0 h-px" style={surfaceBottomLineStyle} />
        <div className="pointer-events-none absolute inset-y-7 left-5 w-px rounded-full" style={surfaceLeftLineStyle} />

        <div className="relative flex items-start justify-between gap-4 pl-3.5">
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

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--outline)/0.38)] bg-[rgb(var(--theme-system-node-surface)/0.52)] px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--ink-muted))]">
            <motion.span
              className={cn("inline-flex h-1.5 w-1.5 rounded-full", activeTone.dot)}
              animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <span>{activeModule.status}</span>
          </div>
        </div>

        <div className="relative mt-6 space-y-3.5 pl-3.5">
          <h3 className="max-w-[12ch] text-[1.08rem] font-semibold leading-[1.03] tracking-[-0.05em] text-[rgb(var(--ink))] xl:text-[1.2rem]">
            {activeModule.displayTitle}
          </h3>
          <p className="max-w-[26ch] text-[0.78rem] leading-6 text-[rgb(var(--ink-soft))]">
            {activeModule.focus}
          </p>
        </div>

        <div className="relative mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 pl-3.5 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--ink-muted))]">
          {activeSignals.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <span className={cn("inline-flex h-1.25 w-1.25 rounded-full", activeTone.dot)} />
              {item}
            </span>
          ))}
        </div>

        {(core.primaryActionLabel && core.primaryActionHref) || (core.secondaryActionLabel && core.secondaryActionHref) ? (
          <div className="relative mt-[1.125rem] flex flex-wrap gap-2 pl-3.5">
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
    <div
      className="relative overflow-hidden rounded-[2.2rem] border border-[rgb(var(--outline)/0.82)] p-4 md:p-6"
      style={shellStyle}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.52]" style={overlayGridStyle} />
      <div className="pointer-events-none absolute inset-x-[22%] top-[5%] h-24 rounded-full blur-3xl" style={orbitGlowStyle} />

      <div className="relative space-y-4 lg:hidden">
        <div className="px-1">{ActiveModuleSurface}</div>

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
              stroke="rgb(var(--theme-connector-muted) / 0.1)"
              strokeWidth="0.7"
              strokeDasharray="5 22"
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
            strokeWidth="3.35"
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
                fill={isActive ? tone.pathStroke : "rgb(var(--theme-signal-muted) / 0.74)"}
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

          <circle cx="500" cy="380" r="6" fill="rgb(var(--theme-system-core) / 0.82)" />
        </svg>

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[27.8rem] w-[27.8rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={orbitGlowStyle}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[18.25rem] w-[18.25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: "rgb(var(--theme-system-ring) / 0.16)" }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: "rgb(var(--theme-system-ring) / 0.08)" }}
        />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={orbitPulseStyle}
          animate={{ scale: [0.985, 1.018, 0.985], opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-1/2 z-20 w-[16.25rem] -translate-x-1/2 -translate-y-1/2 xl:w-[16.9rem]">
          {ActiveModuleSurface}
        </div>

        {architectureNodes.map((module, index) => (
          <motion.div
            key={module.id}
            className="absolute w-[7.45rem] xl:w-[7.8rem]"
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
