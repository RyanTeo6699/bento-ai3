"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type ArchitectureModule = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

type ArchitectureTone = "primary" | "secondary" | "tertiary";

type ArchitectureNode = ArchitectureModule & {
  displayTitle: string;
  headline: string;
  descriptor: string;
  status: string;
  focus: string;
  flow: string;
  tone: ArchitectureTone;
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
    top: "6%",
    left: "3%",
    path: "M500 380 C430 308 346 224 248 150",
    dotX: 248,
    dotY: 150,
    tilt: "-rotate-2"
  },
  {
    top: "6%",
    right: "3%",
    path: "M500 380 C570 308 654 224 752 150",
    dotX: 752,
    dotY: 150,
    tilt: "rotate-[1.5deg]"
  },
  {
    top: "31%",
    left: "0.5%",
    path: "M500 380 C408 366 304 352 190 336",
    dotX: 190,
    dotY: 336,
    tilt: "-rotate-1"
  },
  {
    top: "31%",
    right: "0.5%",
    path: "M500 380 C592 366 696 352 810 336",
    dotX: 810,
    dotY: 336,
    tilt: "rotate-2"
  },
  {
    bottom: "7%",
    left: "6%",
    path: "M500 380 C438 456 366 538 286 606",
    dotX: 286,
    dotY: 606,
    tilt: "rotate-1"
  },
  {
    bottom: "7%",
    right: "6%",
    path: "M500 380 C562 456 634 538 714 606",
    dotX: 714,
    dotY: 606,
    tilt: "-rotate-[1.5deg]"
  }
] as const;

const moduleMeta: Record<
  string,
  {
    headline: string;
    descriptor: string;
    status: string;
    focus: string;
    flow: string;
    tone: ArchitectureTone;
  }
> = {
  INPUT_STRUCTURING: {
    headline: "Normalize fragmented demand before routing begins.",
    descriptor: "Input layer",
    status: "LIVE INTAKE",
    focus: "Transforms vague or incomplete requests into structured operational cases.",
    flow: "Raw demand -> field normalization -> executable case",
    tone: "secondary"
  },
  CONSTRAINT_ROUTING: {
    headline: "Apply constraints before the system commits a path.",
    descriptor: "Policy routing",
    status: "RULES ACTIVE",
    focus: "Protects decisions by filtering route options through policy, risk, and operational limits.",
    flow: "Constraint layer -> route gating -> viable path set",
    tone: "primary"
  },
  DUAL_SIDE_EVALUATION: {
    headline: "Score both sides of the exchange as one decision.",
    descriptor: "Matching intelligence",
    status: "FIT SCORING",
    focus: "Brings demand quality and supply quality into the same evaluation loop.",
    flow: "Demand fit + supply fit -> trust-weighted decision",
    tone: "secondary"
  },
  WORKFLOW_EXECUTION: {
    headline: "Keep work moving after selection, not just at selection.",
    descriptor: "Execution layer",
    status: "FLOW IN MOTION",
    focus: "Maintains ownership, state progression, escalation, and proof through execution.",
    flow: "Assignment -> owner state -> evidence -> escalation",
    tone: "primary"
  },
  OUTCOME_MEMORY: {
    headline: "Turn outcomes into reusable operational memory.",
    descriptor: "Learning loop",
    status: "MEMORY WARM",
    focus: "Captures what actually happened so future routing and evaluation improve with use.",
    flow: "Outcome capture -> learning weights -> next decision",
    tone: "primary"
  },
  DOMAIN_ADAPTATION: {
    headline: "Deploy one core across different service environments.",
    descriptor: "Domain layer",
    status: "PACK READY",
    focus: "Allows workflows, schemas, and policies to adapt without replacing the underlying core.",
    flow: "Domain pack -> schema overlay -> workflow variant",
    tone: "tertiary"
  }
};

const toneClasses: Record<
  ArchitectureTone,
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
    badge: "border-[rgba(111,255,176,0.42)] bg-[rgba(111,255,176,0.08)] text-[rgb(var(--architecture-primary))]",
    dot: "bg-[rgb(var(--architecture-primary))]",
    activeRing: "shadow-[0_0_0_1px_rgba(111,255,176,0.18),0_0_28px_rgba(111,255,176,0.14),0_22px_42px_rgba(0,0,0,0.35)]",
    activeBorder: "border-[rgba(111,255,176,0.5)]",
    activeLabel: "text-[rgb(var(--architecture-primary))]",
    pathStroke: "rgba(111, 255, 176, 0.78)",
    panelGlow: {
      boxShadow:
        "0 0 0 1px rgba(111,255,176,0.12), 0 0 34px rgba(111,255,176,0.12), 0 26px 56px rgba(0,0,0,0.42)"
    }
  },
  secondary: {
    badge: "border-[rgba(80,212,255,0.4)] bg-[rgba(80,212,255,0.08)] text-[rgb(var(--architecture-secondary))]",
    dot: "bg-[rgb(var(--architecture-secondary))]",
    activeRing: "shadow-[0_0_0_1px_rgba(80,212,255,0.18),0_0_28px_rgba(80,212,255,0.12),0_22px_42px_rgba(0,0,0,0.35)]",
    activeBorder: "border-[rgba(80,212,255,0.48)]",
    activeLabel: "text-[rgb(var(--architecture-secondary))]",
    pathStroke: "rgba(80, 212, 255, 0.78)",
    panelGlow: {
      boxShadow:
        "0 0 0 1px rgba(80,212,255,0.12), 0 0 34px rgba(80,212,255,0.12), 0 26px 56px rgba(0,0,0,0.42)"
    }
  },
  tertiary: {
    badge: "border-[rgba(150,173,255,0.34)] bg-[rgba(150,173,255,0.08)] text-[rgb(var(--architecture-ink))]",
    dot: "bg-[rgb(var(--architecture-tertiary))]",
    activeRing: "shadow-[0_0_0_1px_rgba(150,173,255,0.16),0_0_24px_rgba(150,173,255,0.1),0_22px_42px_rgba(0,0,0,0.35)]",
    activeBorder: "border-[rgba(150,173,255,0.42)]",
    activeLabel: "text-[rgb(var(--architecture-ink))]",
    pathStroke: "rgba(150, 173, 255, 0.72)",
    panelGlow: {
      boxShadow:
        "0 0 0 1px rgba(150,173,255,0.1), 0 0 30px rgba(150,173,255,0.08), 0 26px 56px rgba(0,0,0,0.42)"
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

function buildArchitectureNode(module: ArchitectureModule, index: number): ArchitectureNode {
  const layout = orbitLayout[index];
  const meta = moduleMeta[module.id] ?? {
    headline: formatModuleTitle(module.title),
    descriptor: "Core capability",
    status: "LIVE",
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
        "architecture-node architecture-node-button w-full text-left",
        compact ? "p-3.5" : "p-3.5 xl:p-4",
        active ? cn("z-20", tone.activeBorder, tone.activeRing) : "z-10 opacity-65"
      )}
      animate={{
        y: active ? [0, -4, 0] : [0, -2, 0],
        scale: active ? 1.01 : 0.965,
        opacity: active ? 1 : 0.65
      }}
      whileHover={{
        y: active ? -4 : -3,
        scale: active ? 1.02 : 0.985,
        opacity: 1
      }}
      transition={{
        duration: active ? 4 : 5.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.18
      }}
      style={active ? tone.panelGlow : undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className={cn("architecture-node-id", active ? tone.activeLabel : "")}>{module.title}</p>
          <p className="architecture-node-name">{module.displayTitle}</p>
        </div>
        <span className={cn("architecture-node-signal", active ? tone.dot : "bg-[rgba(92,115,139,0.72)]")} />
      </div>

      <p className={cn("architecture-node-descriptor", compact && "text-[0.72rem] leading-5")}>
        {module.descriptor}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className={cn("architecture-node-chip", active && tone.badge)}>{module.bullets[0]}</span>
      </div>
    </motion.button>
  );
}

export function HeroScene({
  modules,
  title,
  summary
}: {
  modules: ArchitectureModule[];
  title: string;
  summary: string;
}) {
  const architectureNodes = modules.slice(0, 6).map(buildArchitectureNode);
  const [activeId, setActiveId] = useState(architectureNodes[0]?.id ?? "");
  const activeIndex = architectureNodes.findIndex((module) => module.id === activeId);
  const activeModule = architectureNodes[activeIndex] ?? architectureNodes[0];

  if (!activeModule) {
    return null;
  }

  const activeTone = toneClasses[activeModule.tone];

  return (
    <div className="architecture-map-shell" aria-label={`${title} architecture map`}>
      <div className="architecture-map-grid" />

      <div className="relative space-y-4 lg:hidden">
        <div className="architecture-core-panel p-5" style={activeTone.panelGlow}>
          <div className="architecture-core-header">
            <div>
              <p className="architecture-kicker">ACTIVE MODULE</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className={cn("architecture-module-pill", activeTone.badge)}>{activeModule.title}</span>
                <span className="architecture-core-index">0{activeIndex + 1}</span>
              </div>
            </div>
            <div className="architecture-state-pill">
              <span className={cn("architecture-state-dot", activeTone.dot)} />
              <span>{activeModule.status}</span>
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-5 space-y-4"
            >
              <div className="space-y-2">
                <p className="architecture-core-name">{activeModule.displayTitle}</p>
                <h3 className="architecture-core-headline">{activeModule.headline}</h3>
              </div>

              <p className="architecture-core-summary">{activeModule.summary}</p>

              <div className="architecture-core-readouts">
                <div className="architecture-core-readout">
                  <p className="architecture-readout-label">CURRENT ROLE</p>
                  <p className="architecture-readout-value">{activeModule.focus}</p>
                </div>
                <div className="architecture-core-readout">
                  <p className="architecture-readout-label">EXECUTION PATH</p>
                  <p className="architecture-readout-value architecture-readout-flow">{activeModule.flow}</p>
                </div>
              </div>

              <div className="architecture-core-functions">
                {activeModule.bullets.map((item) => (
                  <span key={item} className={cn("architecture-function-chip", activeTone.badge)}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="architecture-core-footer">
            <p className="architecture-readout-label">SYSTEM CONTEXT</p>
            <p className="architecture-context-copy">{summary}</p>
          </div>
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

      <div className="relative hidden h-[36rem] lg:block xl:h-[38rem]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 760" fill="none" aria-hidden="true">
          {architectureNodes.map((module) => (
            <path
              key={`${module.id}-base`}
              d={module.path}
              stroke="rgba(64, 87, 110, 0.6)"
              strokeWidth="1.2"
              strokeDasharray="8 12"
            />
          ))}

          <motion.path
            key={`${activeModule.id}-active-path`}
            d={activeModule.path}
            stroke={activeTone.pathStroke}
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeDasharray="10 10"
            animate={{
              opacity: [0.35, 0.92, 0.35],
              strokeDashoffset: [0, -20]
            }}
            transition={{
              opacity: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
              strokeDashoffset: { duration: 2.5, repeat: Infinity, ease: "linear" }
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
                r={isActive ? 5.25 : 4}
                fill={isActive ? tone.pathStroke : "rgba(80, 104, 128, 0.85)"}
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
            strokeOpacity="0.5"
            animate={{ r: [6, 10, 6], opacity: [0.2, 0.58, 0.2] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <circle cx="500" cy="380" r="6.5" fill="rgb(var(--architecture-primary))" />
        </svg>

        <div className="architecture-map-ring architecture-map-ring-inner" />
        <div className="architecture-map-ring architecture-map-ring-outer" />

        <motion.div
          className="architecture-map-halo"
          animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.56, 0.86, 0.56] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-1/2 z-20 w-[23rem] -translate-x-1/2 -translate-y-1/2 xl:w-[24rem]">
          <div className="architecture-core-panel px-5 py-5 xl:px-6 xl:py-6" style={activeTone.panelGlow}>
            <div className="architecture-core-header">
              <div>
                <p className="architecture-kicker">ACTIVE MODULE</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className={cn("architecture-module-pill", activeTone.badge)}>{activeModule.title}</span>
                  <span className="architecture-core-index">0{activeIndex + 1}</span>
                </div>
              </div>
              <div className="architecture-state-pill">
                <span className={cn("architecture-state-dot", activeTone.dot)} />
                <span>{activeModule.status}</span>
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="mt-5 space-y-4"
              >
                <div className="space-y-2">
                  <p className="architecture-core-name">{activeModule.displayTitle}</p>
                  <h3 className="architecture-core-headline">{activeModule.headline}</h3>
                </div>

                <p className="architecture-core-summary">{activeModule.summary}</p>

                <div className="architecture-core-readouts">
                  <div className="architecture-core-readout">
                    <p className="architecture-readout-label">CURRENT ROLE</p>
                    <p className="architecture-readout-value">{activeModule.focus}</p>
                  </div>
                  <div className="architecture-core-readout">
                    <p className="architecture-readout-label">EXECUTION PATH</p>
                    <p className="architecture-readout-value architecture-readout-flow">{activeModule.flow}</p>
                  </div>
                </div>

                <div className="architecture-core-functions">
                  {activeModule.bullets.map((item) => (
                    <span key={item} className={cn("architecture-function-chip", activeTone.badge)}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="architecture-core-footer">
              <p className="architecture-readout-label">SYSTEM CONTEXT</p>
              <p className="architecture-context-copy">{summary}</p>
            </div>
          </div>
        </div>

        {architectureNodes.map((module, index) => (
          <motion.div
            key={module.id}
            className={cn("absolute w-[9.6rem] xl:w-[10.25rem]", module.tilt)}
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
