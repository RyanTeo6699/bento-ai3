"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type CapabilityModule = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

type CapabilityTone = "primary" | "secondary" | "tertiary";

type CapabilityNode = CapabilityModule & {
  displayTitle: string;
  headline: string;
  descriptor: string;
  focus: string;
  flow: string;
  tone: CapabilityTone;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  path: string;
  dotX: number;
  dotY: number;
  tilt: string;
};

const orbitLayout = [
  {
    top: "5%",
    left: "2.5%",
    path: "M500 380 C432 304 346 214 246 144",
    dotX: 246,
    dotY: 144,
    tilt: "-rotate-2"
  },
  {
    top: "5%",
    right: "2.5%",
    path: "M500 380 C568 304 654 214 754 144",
    dotX: 754,
    dotY: 144,
    tilt: "rotate-[1.5deg]"
  },
  {
    top: "30%",
    left: "0.75%",
    path: "M500 380 C410 366 305 350 188 334",
    dotX: 188,
    dotY: 334,
    tilt: "-rotate-1"
  },
  {
    top: "30%",
    right: "0.75%",
    path: "M500 380 C590 366 695 350 812 334",
    dotX: 812,
    dotY: 334,
    tilt: "rotate-2"
  },
  {
    bottom: "6%",
    left: "6%",
    path: "M500 380 C440 456 368 540 286 608",
    dotX: 286,
    dotY: 608,
    tilt: "rotate-1"
  },
  {
    bottom: "6%",
    right: "6%",
    path: "M500 380 C560 456 632 540 714 608",
    dotX: 714,
    dotY: 608,
    tilt: "-rotate-[1.5deg]"
  }
] as const;

const capabilityMeta: Record<
  string,
  {
    headline: string;
    descriptor: string;
    focus: string;
    flow: string;
    tone: CapabilityTone;
  }
> = {
  INPUT_STRUCTURING: {
    headline: "Normalize raw demand into an executable case.",
    descriptor: "Foundational capability",
    focus: "Turns fragmented intake into a usable operating case before the platform starts deciding.",
    flow: "Raw demand -> structured case -> missing-field map",
    tone: "secondary"
  },
  CONSTRAINT_ROUTING: {
    headline: "Apply policy and risk before any route is chosen.",
    descriptor: "Routing and policy",
    focus: "Protects downstream execution by narrowing the path set before handoff begins.",
    flow: "Constraint layer -> risk gate -> qualified path set",
    tone: "primary"
  },
  DUAL_SIDE_EVALUATION: {
    headline: "Evaluate demand and supply as one operating decision.",
    descriptor: "Decision quality",
    focus: "Scores fit, trust, capacity, and behavioral history on both sides of the exchange.",
    flow: "Demand fit + supply fit -> trust-weighted decision",
    tone: "secondary"
  },
  WORKFLOW_EXECUTION: {
    headline: "Keep execution inside one traceable operating surface.",
    descriptor: "Execution continuity",
    focus: "Maintains ownership, next actions, and escalation rules after a match has been made.",
    flow: "Assignment -> owner state -> evidence -> escalation",
    tone: "primary"
  },
  OUTCOME_MEMORY: {
    headline: "Convert outcomes into reusable operational memory.",
    descriptor: "Learning layer",
    focus: "Captures what actually happened so routing and evaluation improve over time.",
    flow: "Outcome capture -> learning weights -> future routing",
    tone: "primary"
  },
  DOMAIN_ADAPTATION: {
    headline: "Deploy the same core across different service environments.",
    descriptor: "Deployment layer",
    focus: "Allows domain packs, policies, and workflows to change without replacing the underlying core.",
    flow: "Domain pack -> schema overlay -> workflow variant",
    tone: "tertiary"
  }
};

const toneClasses: Record<
  CapabilityTone,
  {
    badge: string;
    dot: string;
    activeRing: string;
    activeBorder: string;
    activeLabel: string;
    pathStroke: string;
    panelGlow: CSSProperties;
  }
> = {
  primary: {
    badge: "border-[rgb(var(--primary))] bg-[rgba(31,36,48,0.06)] text-[rgb(var(--ink))]",
    dot: "bg-[rgb(var(--primary))]",
    activeRing: "shadow-[0_0_0_1px_rgba(31,36,48,0.12),0_22px_42px_rgba(31,36,48,0.12)]",
    activeBorder: "border-[rgb(var(--primary))]",
    activeLabel: "text-[rgb(var(--ink))]",
    pathStroke: "rgba(31, 36, 48, 0.48)",
    panelGlow: {
      boxShadow:
        "0 1px 2px rgba(15,23,42,0.04), 0 24px 52px rgba(15,23,42,0.09), 0 0 0 1px rgba(31,36,48,0.08)"
    }
  },
  secondary: {
    badge: "border-[rgb(var(--secondary))] bg-[rgba(109,120,141,0.08)] text-[rgb(var(--ink-soft))]",
    dot: "bg-[rgb(var(--secondary))]",
    activeRing: "shadow-[0_0_0_1px_rgba(109,120,141,0.18),0_20px_40px_rgba(109,120,141,0.1)]",
    activeBorder: "border-[rgb(var(--secondary))]",
    activeLabel: "text-[rgb(var(--ink-soft))]",
    pathStroke: "rgba(109, 120, 141, 0.52)",
    panelGlow: {
      boxShadow:
        "0 1px 2px rgba(15,23,42,0.04), 0 24px 52px rgba(15,23,42,0.08), 0 0 0 1px rgba(109,120,141,0.1)"
    }
  },
  tertiary: {
    badge: "border-[rgb(var(--tertiary))] bg-[rgba(147,123,93,0.08)] text-[rgb(var(--ink-soft))]",
    dot: "bg-[rgb(var(--tertiary))]",
    activeRing: "shadow-[0_0_0_1px_rgba(147,123,93,0.18),0_20px_40px_rgba(147,123,93,0.1)]",
    activeBorder: "border-[rgb(var(--tertiary))]",
    activeLabel: "text-[rgb(var(--ink-soft))]",
    pathStroke: "rgba(147, 123, 93, 0.54)",
    panelGlow: {
      boxShadow:
        "0 1px 2px rgba(15,23,42,0.04), 0 24px 52px rgba(15,23,42,0.08), 0 0 0 1px rgba(147,123,93,0.1)"
    }
  }
};

function formatModuleTitle(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function buildCapabilityNode(module: CapabilityModule, index: number): CapabilityNode {
  const layout = orbitLayout[index];
  const meta = capabilityMeta[module.id] ?? {
    headline: formatModuleTitle(module.title),
    descriptor: "Core capability",
    focus: module.summary,
    flow: module.bullets.join(" -> "),
    tone: "secondary" as const
  };

  return {
    ...module,
    ...meta,
    ...layout,
    displayTitle: formatModuleTitle(module.title)
  };
}

function CapabilitySelector({
  module,
  index,
  active,
  onSelect,
  compact = false
}: {
  module: CapabilityNode;
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
        "capability-node capability-node-button w-full text-left",
        compact ? "p-4" : "p-4 xl:p-[0.95rem]",
        active ? cn("z-20", tone.activeBorder, tone.activeRing) : "z-10 opacity-70"
      )}
      animate={{
        y: active ? [0, -5, 0] : [0, -2, 0],
        scale: active ? 1.02 : 0.975,
        opacity: active ? 1 : 0.72
      }}
      whileHover={{
        y: active ? -5 : -3,
        scale: active ? 1.03 : 0.99,
        opacity: 1
      }}
      transition={{
        duration: active ? 4.4 : 5.4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.16
      }}
      style={active ? tone.panelGlow : undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5">
          <p className={cn("label-caps", active ? tone.activeLabel : "text-[rgb(var(--ink-muted))]")}>
            {module.title}
          </p>
          <p className="text-[0.76rem] font-semibold tracking-[-0.02em] text-[rgb(var(--ink))]">
            {module.displayTitle}
          </p>
        </div>
        <span
          className={cn(
            "mt-0.5 h-2.5 w-2.5 rounded-full",
            active ? tone.dot : "bg-[rgb(var(--outline-strong))]"
          )}
        />
      </div>

      <p
        className={cn(
          "capability-node-summary mt-3",
          compact ? "text-[0.82rem] leading-6" : "text-[0.8rem] leading-6 xl:text-[0.84rem]"
        )}
      >
        {module.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <span className={cn("project-chip", active ? tone.badge : "")}>{module.bullets[0]}</span>
      </div>
    </motion.button>
  );
}

export function HeroScene({
  modules,
  title,
  summary
}: {
  modules: CapabilityModule[];
  title: string;
  summary: string;
}) {
  const capabilityNodes = modules.slice(0, 6).map(buildCapabilityNode);
  const [activeId, setActiveId] = useState(capabilityNodes[0]?.id ?? "");
  const activeModule = capabilityNodes.find((module) => module.id === activeId) ?? capabilityNodes[0];

  if (!activeModule) {
    return null;
  }

  const activeTone = toneClasses[activeModule.tone];

  return (
    <div className="capability-map-shell" aria-label={`${title} capability map`}>
      <div className="relative space-y-4 lg:hidden">
        <div className="capability-center-card p-5" style={activeTone.panelGlow}>
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <p className="label-caps">{title}</p>
              <span className={cn("sticker-badge", activeTone.badge)}>{activeModule.title}</span>
            </div>
            <div className="capability-focus-chip">{activeModule.descriptor}</div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-5 space-y-4"
            >
              <h3 className="max-w-[14ch] text-[1.48rem] font-bold tracking-[-0.055em] text-[rgb(var(--ink))] md:text-[1.72rem]">
                {activeModule.headline}
              </h3>
              <p className="max-w-[34ch] text-[0.9rem] leading-6 text-[rgb(var(--ink-soft))] md:text-[0.94rem] md:leading-7">
                {activeModule.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {activeModule.bullets.map((item) => (
                  <span key={item} className={cn("project-chip", activeTone.badge)}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="capability-detail-grid">
                <div className="capability-detail-card">
                  <p className="label-caps">Primary role</p>
                  <p className="mt-2 text-[0.82rem] leading-6 text-[rgb(var(--ink-soft))]">
                    {activeModule.focus}
                  </p>
                </div>
                <div className="capability-detail-card">
                  <p className="label-caps">Platform flow</p>
                  <p className="mt-2 text-[0.8rem] leading-6 text-[rgb(var(--ink-muted))]">
                    {activeModule.flow}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 border-t border-[rgb(var(--outline))] pt-4">
            <p className="label-caps">Platform context</p>
            <p className="mt-2 text-[0.82rem] leading-6 text-[rgb(var(--ink-muted))]">{summary}</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {capabilityNodes.map((module, index) => (
            <CapabilitySelector
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

      <div className="relative hidden h-[35rem] lg:block xl:h-[37rem]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 760" fill="none" aria-hidden="true">
          {capabilityNodes.map((module) => (
            <path
              key={`${module.id}-base`}
              d={module.path}
              stroke="rgba(198, 192, 181, 0.46)"
              strokeWidth="1.25"
              strokeDasharray="8 12"
            />
          ))}

          <motion.path
            key={`${activeModule.id}-active-path`}
            d={activeModule.path}
            stroke={activeTone.pathStroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="10 10"
            animate={{
              opacity: [0.35, 0.8, 0.35],
              strokeDashoffset: [0, -18]
            }}
            transition={{
              opacity: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
              strokeDashoffset: { duration: 2.6, repeat: Infinity, ease: "linear" }
            }}
          />

          {capabilityNodes.map((module) => {
            const tone = toneClasses[module.tone];
            const isActive = module.id === activeModule.id;

            return (
              <circle
                key={`${module.id}-dot`}
                cx={module.dotX}
                cy={module.dotY}
                r={isActive ? 5.5 : 4}
                fill={isActive ? tone.pathStroke : "rgba(198, 192, 181, 0.9)"}
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
            strokeOpacity="0.45"
            animate={{ r: [6, 10, 6], opacity: [0.22, 0.52, 0.22] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        <div className="capability-map-ring capability-map-ring-inner" />
        <div className="capability-map-ring capability-map-ring-outer" />

        <motion.div
          className="capability-map-halo"
          animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.5, 0.82, 0.5] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-1/2 z-20 w-[22rem] -translate-x-1/2 -translate-y-1/2 xl:w-[23rem]">
          <div className="capability-center-card px-5 py-5 xl:px-6 xl:py-6" style={activeTone.panelGlow}>
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-2">
                <p className="label-caps">{title}</p>
                <span className={cn("sticker-badge", activeTone.badge)}>{activeModule.title}</span>
              </div>
              <div className="capability-focus-chip">{activeModule.descriptor}</div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mt-5 space-y-4"
              >
                <h3 className="max-w-[15ch] text-[1.5rem] font-bold tracking-[-0.055em] text-[rgb(var(--ink))] xl:text-[1.72rem]">
                  {activeModule.headline}
                </h3>
                <p className="max-w-[34ch] text-[0.88rem] leading-6 text-[rgb(var(--ink-soft))] xl:text-[0.92rem] xl:leading-7">
                  {activeModule.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeModule.bullets.map((item) => (
                    <span key={item} className={cn("project-chip", activeTone.badge)}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="capability-detail-grid">
                  <div className="capability-detail-card">
                    <p className="label-caps">Primary role</p>
                    <p className="mt-2 text-[0.82rem] leading-6 text-[rgb(var(--ink-soft))]">
                      {activeModule.focus}
                    </p>
                  </div>
                  <div className="capability-detail-card">
                    <p className="label-caps">Platform flow</p>
                    <p className="mt-2 text-[0.8rem] leading-6 text-[rgb(var(--ink-muted))]">
                      {activeModule.flow}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 border-t border-[rgb(var(--outline))] pt-4">
              <p className="label-caps">Platform context</p>
              <p className="mt-2 text-[0.82rem] leading-6 text-[rgb(var(--ink-muted))]">{summary}</p>
            </div>
          </div>
        </div>

        {capabilityNodes.map((module, index) => (
          <motion.div
            key={module.id}
            className={cn("absolute w-[10.85rem] xl:w-[11.5rem]", module.tilt)}
            style={{
              top: module.top,
              left: module.left,
              right: module.right,
              bottom: module.bottom
            }}
          >
            <CapabilitySelector
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
