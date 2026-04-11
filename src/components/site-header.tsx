"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { type Locale, type NavItem } from "@/lib/i18n";
import { buildLocalizedPath, getLogicalPathname } from "@/lib/locale-routing";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  locale: Locale;
  navItems: NavItem[];
  copy: {
    brandTagline: string;
    cta: string;
    mobileToggleLabel: string;
    languageLabel: string;
    systemState: string;
    systemMode: string;
    buildRef: string;
  };
};

export function SiteHeader({ locale, navItems, copy }: SiteHeaderProps) {
  const pathname = usePathname();
  const logicalPathname = getLogicalPathname(pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-4 md:pt-5">
        <div className="overflow-hidden rounded-[1.3rem] border border-[rgb(var(--outline-strong))] bg-[rgb(var(--surface-lowest))] shadow-[0_20px_60px_rgba(0,0,0,0.42)] backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgb(var(--outline))] px-4 py-2 md:px-5">
            <p className="label-caps text-[rgb(var(--primary))]">{copy.systemState}</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="system-shell-chip">{copy.systemMode}</span>
              <span className="system-shell-chip">{copy.buildRef}</span>
            </div>
          </div>

          <div className="px-4 py-4 md:px-5">
            <div className="flex items-center justify-between gap-4 xl:grid xl:grid-cols-[minmax(0,17rem)_minmax(0,1fr)_auto] xl:items-center xl:gap-5">
              <Link
                href={buildLocalizedPath(locale, "/")}
                className="flex min-w-0 items-center gap-3"
              >
                <span className="brand-mark h-11 w-11 shrink-0 md:h-12 md:w-12">
                  <span className="brand-grid">
                    <span className="bg-[rgb(var(--primary-veil))]" />
                    <span className="bg-[rgb(var(--secondary-veil))]" />
                    <span className="bg-[rgb(var(--surface-container-high))]" />
                    <span className="bg-[rgb(var(--tertiary-container))]" />
                  </span>
                </span>
                <div className="min-w-0">
                  <span className="block truncate font-[var(--font-headline)] text-[1.3rem] font-bold uppercase tracking-[-0.06em] text-[rgb(var(--ink))] sm:text-[1.5rem]">
                    Bento AIII
                  </span>
                  <span className="hidden truncate font-[var(--font-label)] text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-[rgb(var(--ink-muted))] md:block xl:max-w-[13rem] 2xl:max-w-none">
                    {copy.brandTagline}
                  </span>
                </div>
              </Link>

              <nav className="hidden min-w-0 items-center justify-center gap-1 xl:flex">
                {navItems.map((item) => {
                  const active =
                    item.href === "/"
                      ? logicalPathname === item.href
                      : logicalPathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={buildLocalizedPath(locale, item.href)}
                      className={cn(
                        "rounded-full border px-3 py-2 font-[var(--font-label)] text-[0.72rem] font-extrabold uppercase tracking-[0.14em] transition",
                        active
                          ? "border-[rgb(var(--primary))] bg-[rgb(var(--primary-veil))] text-[rgb(var(--primary))] shadow-[0_0_20px_rgba(111,255,176,0.1)]"
                          : "border-transparent text-[rgb(var(--ink-soft))] hover:border-[rgb(var(--secondary))] hover:bg-[rgb(var(--surface-container-low))] hover:text-[rgb(var(--ink))]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden shrink-0 items-center gap-3 xl:flex">
                <LanguageSwitcher locale={locale} label={copy.languageLabel} />
                <Link
                  href={buildLocalizedPath(locale, "/contact")}
                  className="button-primary h-12 shrink-0 whitespace-nowrap px-5 py-0"
                >
                  {copy.cta}
                </Link>
              </div>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgb(var(--outline-strong))] bg-[rgb(var(--surface-container-low))] text-[rgb(var(--ink))] shadow-[0_12px_32px_rgba(0,0,0,0.28)] xl:hidden"
                aria-expanded={open}
                aria-label={copy.mobileToggleLabel}
              >
                <span className="flex flex-col gap-1.5">
                  <span className="h-[2px] w-5 rounded-full bg-[rgb(var(--primary))]" />
                  <span className="h-[2px] w-5 rounded-full bg-[rgb(var(--ink))]" />
                  <span className="h-[2px] w-5 rounded-full bg-[rgb(var(--secondary))]" />
                </span>
              </button>
            </div>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="overflow-hidden xl:hidden"
                >
                  <div className="mt-5 space-y-3 border-t border-[rgb(var(--outline))] pt-5">
                    {navItems.map((item) => {
                      const active =
                        item.href === "/"
                          ? logicalPathname === item.href
                          : logicalPathname.startsWith(item.href);

                      return (
                        <Link
                          key={item.href}
                          href={buildLocalizedPath(locale, item.href)}
                          className={cn(
                            "block rounded-[1rem] border px-4 py-3 font-[var(--font-label)] text-[0.8rem] font-extrabold uppercase tracking-[0.12em] transition",
                            active
                              ? "border-[rgb(var(--primary))] bg-[rgb(var(--primary-veil))] text-[rgb(var(--primary))]"
                              : "border-[rgb(var(--outline))] bg-[rgb(var(--surface-container-low))] text-[rgb(var(--ink-soft))]"
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    })}

                    <div className="rounded-[1rem] border border-[rgb(var(--outline-strong))] bg-[rgb(var(--surface-container-low))] p-4">
                      <LanguageSwitcher
                        locale={locale}
                        label={copy.languageLabel}
                        stacked
                        onChangeComplete={() => setOpen(false)}
                      />
                    </div>

                    <Link
                      href={buildLocalizedPath(locale, "/contact")}
                      className="button-primary mt-1 w-full"
                    >
                      {copy.cta}
                    </Link>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
