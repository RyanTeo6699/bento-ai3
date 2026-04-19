"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
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
        <div className="site-header-shell">
          <div className="site-header-row">
            <Link href={buildLocalizedPath(locale, "/")} className="site-brand">
              <span className="brand-mark h-11 w-11 shrink-0 md:h-12 md:w-12">
                <span className="brand-grid">
                  <span className="bg-[rgb(var(--primary-veil))]" />
                  <span className="bg-[rgb(var(--secondary-veil))]" />
                  <span className="bg-[rgb(var(--surface-container-high))]" />
                  <span className="bg-[rgb(var(--tertiary-container))]" />
                </span>
              </span>
              <div className="site-brand-lockup">
                <span className="site-brand-name">Bento AIII</span>
                <span className="site-brand-tagline hidden min-[1400px]:block">{copy.brandTagline}</span>
              </div>
            </Link>

            <nav className="site-nav hidden xl:flex" aria-label="Primary">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? logicalPathname === item.href
                    : logicalPathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={buildLocalizedPath(locale, item.href)}
                    className={cn("site-nav-link", active && "site-nav-link-active")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="site-header-utility hidden xl:flex">
              <ThemeSwitcher className="site-header-theme-switcher" />
              <LanguageSwitcher
                locale={locale}
                label={copy.languageLabel}
                className="site-header-language-switcher"
              />
              <Link
                href={buildLocalizedPath(locale, "/contact")}
                className="button-primary site-header-cta whitespace-nowrap"
              >
                {copy.cta}
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="site-header-toggle xl:hidden"
              aria-expanded={open}
              aria-label={copy.mobileToggleLabel}
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-[1.5px] w-4 rounded-full bg-[rgb(var(--ink))]" />
                <span className="h-[1.5px] w-4 rounded-full bg-[rgb(var(--ink-soft))]" />
              </span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="site-mobile-panel xl:hidden"
              >
                <div className="site-mobile-panel-inner">
                  <div className="grid gap-4">
                    {navItems.map((item) => {
                      const active =
                        item.href === "/"
                          ? logicalPathname === item.href
                          : logicalPathname.startsWith(item.href);

                      return (
                        <Link
                          key={item.href}
                          href={buildLocalizedPath(locale, item.href)}
                          className={cn("site-mobile-nav-link", active && "site-mobile-nav-link-active")}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="site-mobile-utility">
                    <div className="grid gap-4">
                      <ThemeSwitcher />
                      <LanguageSwitcher
                        locale={locale}
                        label={copy.languageLabel}
                        stacked
                        onChangeComplete={() => setOpen(false)}
                      />
                    </div>
                  </div>

                  <Link href={buildLocalizedPath(locale, "/contact")} className="button-primary w-full justify-center">
                    {copy.cta}
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
