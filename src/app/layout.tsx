import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSharedCtas } from "@/lib/cta";
import { getPublicContactChannels } from "@/lib/contact-details";
import { getCurrentLocale } from "@/lib/get-locale";
import { getDictionary } from "@/lib/i18n";
import { getHtmlLang, getSiteMetadataBase } from "@/lib/metadata";
import { getSystemSiteCopy } from "@/lib/system-site-copy";

import "./globals.css";

const headlineFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-headline",
  display: "swap"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap"
});

export function generateMetadata(): Metadata {
  const locale = getCurrentLocale();
  const systemCopy = getSystemSiteCopy(locale);

  return {
    metadataBase: getSiteMetadataBase(),
    title: {
      default: "Bento AIII",
      template: "%s | Bento AIII"
    },
    description: systemCopy.company.positioning
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = getCurrentLocale();
  const dictionary = getDictionary(locale);
  const sharedCtas = getSharedCtas(locale);
  const systemCopy = getSystemSiteCopy(locale);
  const contactChannels = getPublicContactChannels(locale);

  return (
    <html lang={getHtmlLang(locale)}>
      <body className={`${headlineFont.variable} ${bodyFont.variable} site-body`}>
        <div className="site-root">
          <SiteHeader
            locale={locale}
            navItems={dictionary.nav}
            copy={{
              ...dictionary.header,
              cta: sharedCtas.startConversation,
              brandTagline: systemCopy.header.brandTagline,
              systemState: systemCopy.header.systemState,
              systemMode: systemCopy.header.systemMode,
              buildRef: systemCopy.header.buildRef
            }}
          />
          <main className="site-main">{children}</main>
          <SiteFooter
            locale={locale}
            navItems={dictionary.nav}
            copy={{
              ...dictionary.footer,
              cta: sharedCtas.startConversation,
              tagline: systemCopy.footer.tagline,
              title: systemCopy.footer.title,
              policy: systemCopy.footer.policy,
              closingKicker: systemCopy.footer.closingKicker,
              closingLine: systemCopy.footer.closingLine
            }}
            companyDescription={systemCopy.footer.description}
            contactChannels={contactChannels}
          />
        </div>
      </body>
    </html>
  );
}
