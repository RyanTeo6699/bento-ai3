"use client";

import { usePathname, useRouter } from "next/navigation";

import { localeCookieName, localeOptions, type Locale } from "@/lib/i18n";
import { replaceLocaleInPathname } from "@/lib/locale-routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  className?: string;
  stacked?: boolean;
  onChangeComplete?: () => void;
};

export function LanguageSwitcher({
  locale,
  label,
  className,
  stacked = false,
  onChangeComplete
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLocaleChange(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `${localeCookieName}=${encodeURIComponent(
      nextLocale
    )}; path=/; max-age=31536000; samesite=lax`;

    const nextPathname = replaceLocaleInPathname(pathname, nextLocale);

    if (nextPathname !== pathname) {
      router.push(nextPathname);
    }

    router.refresh();
    onChangeComplete?.();
  }

  return (
    <div
      className={cn(
        "inline-flex max-w-full shrink-0 items-center gap-2.5 whitespace-nowrap",
        stacked && "w-full flex-col items-start gap-3 whitespace-normal",
        className
      )}
    >
      <span
        className={cn(
          "label-caps shrink-0 whitespace-nowrap leading-none text-[0.62rem]",
          stacked && "pl-0.5 text-[0.66rem]"
        )}
      >
        {label}
      </span>
      <div
        className={cn(
          "grid h-12 w-[13.4rem] max-w-full shrink-0 grid-cols-3 items-center gap-1 rounded-full border border-[rgb(var(--outline-strong))] bg-[rgb(var(--surface-container-low))] p-1",
          stacked && "w-full max-w-[15rem]"
        )}
      >
        {localeOptions.map((option, index) => {
          const active = option.value === locale;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleLocaleChange(option.value)}
              className={cn(
                "inline-flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-full px-2 font-[var(--font-label)] text-[0.75rem] font-extrabold leading-none tracking-[0.08em] transition",
                active
                  ? "border border-[rgb(var(--primary))] bg-[rgb(var(--primary-veil))] text-[rgb(var(--primary))] shadow-[0_0_18px_rgba(111,255,176,0.12)]"
                  : "text-[rgb(var(--ink-muted))] hover:border hover:border-[rgb(var(--secondary))] hover:bg-[rgb(var(--surface-container))] hover:text-[rgb(var(--ink))]",
                !active && index === 1 && "hover:text-[rgb(var(--secondary))]"
              )}
              aria-pressed={active}
            >
              <span className="block leading-none">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
