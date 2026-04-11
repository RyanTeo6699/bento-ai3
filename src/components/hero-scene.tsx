"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type SystemModuleNode = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

const desktopNodeLayout = [
  { top: "7%", left: "4%" },
  { top: "7%", right: "4%" },
  { top: "34%", left: "0%" },
  { top: "34%", right: "0%" },
  { bottom: "7%", left: "8%" },
  { bottom: "7%", right: "8%" }
] as const;

export function HeroScene({
  modules,
  coreTitle,
  coreSummary
}: {
  modules: SystemModuleNode[];
  coreTitle: string;
  coreSummary: string;
}) {
  const featuredModules = modules.slice(0, 6);

  return (
    <div className="terminal-panel relative min-h-[24rem] overflow-hidden p-4 md:p-5 lg:min-h-[38rem]">
      <div className="absolute inset-0 outline-grid opacity-40" />
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "radial-gradient(circle at top, rgba(80, 212, 255, 0.14), transparent 68%)"
        }}
      />

      <div className="relative lg:hidden">
        <div className="system-node system-node-core">
          <p className="label-caps text-[rgb(var(--primary))]">SYSTEM_CORE</p>
          <h3 className="mt-3 text-2xl font-bold tracking-[-0.05em] text-[rgb(var(--ink))]">
            {coreTitle}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">
            {coreSummary}
          </p>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {featuredModules.map((module) => (
            <div key={module.id} className="system-node">
              <p className="label-caps text-[rgb(var(--secondary))]">{module.title}</p>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">{module.summary}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative hidden h-[35rem] lg:block">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 760"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="system-path" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(80,212,255,0.55)" />
              <stop offset="100%" stopColor="rgba(111,255,176,0.75)" />
            </linearGradient>
          </defs>

          <path d="M500 380 L245 145" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M500 380 L755 145" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M500 380 L205 315" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M500 380 L795 315" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M500 380 L275 595" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M500 380 L725 595" stroke="url(#system-path)" strokeWidth="2" strokeDasharray="8 10" />

          <circle cx="500" cy="380" r="7" fill="rgb(var(--primary))" />
          <circle cx="245" cy="145" r="5" fill="rgb(var(--secondary))" />
          <circle cx="755" cy="145" r="5" fill="rgb(var(--secondary))" />
          <circle cx="205" cy="315" r="5" fill="rgb(var(--primary))" />
          <circle cx="795" cy="315" r="5" fill="rgb(var(--primary))" />
          <circle cx="275" cy="595" r="5" fill="rgb(var(--secondary))" />
          <circle cx="725" cy="595" r="5" fill="rgb(var(--secondary))" />
        </svg>

        <motion.div
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgb(var(--primary))]"
          style={{
            background:
              "radial-gradient(circle, rgba(111, 255, 176, 0.14), rgba(17, 33, 25, 0.1) 55%, transparent 70%)"
          }}
          animate={{ scale: [0.96, 1.02, 0.96], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-1/2 w-[18.5rem] -translate-x-1/2 -translate-y-1/2">
          <div className="system-node system-node-core p-5">
            <p className="label-caps text-[rgb(var(--primary))]">SYSTEM_CORE</p>
            <h3 className="mt-3 text-[1.9rem] font-bold tracking-[-0.06em] text-[rgb(var(--ink))]">
              {coreTitle}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">
              {coreSummary}
            </p>
          </div>
        </div>

        {featuredModules.map((module, index) => (
          <motion.div
            key={module.id}
            className="absolute w-[13.75rem]"
            style={desktopNodeLayout[index] as CSSProperties}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              delay: index * 0.28,
              ease: "easeInOut"
            }}
          >
            <div className="system-node">
              <p className="label-caps text-[rgb(var(--secondary))]">{module.title}</p>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--ink-soft))]">{module.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {module.bullets.map((item) => (
                  <span key={item} className="project-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
