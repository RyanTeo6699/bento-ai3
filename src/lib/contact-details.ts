import type { Locale } from "@/lib/i18n";

export const PUBLIC_CONTACT_EMAIL = "ryanteo0628@gmail.com";
export const PUBLIC_CONTACT_EMAIL_HREF = `mailto:${PUBLIC_CONTACT_EMAIL}`;
export const PUBLIC_CONTACT_LINKEDIN_HREF = "https://www.linkedin.com/in/ryanteo101/";

const LEGACY_CONTACT_EMAIL = "hello@bentoaiii.com";
const PUBLIC_CONTACT_PATTERN =
  /hello@bentoaiii\.com|ryanteo0628@gmail\.com|https?:\/\/(www\.)?linkedin\.com\/in\/ryanteo101\/?|linkedin\.com\/in\/ryanteo101\/?/i;

export type PublicContactChannel = {
  icon: "email" | "linkedin";
  ariaLabel: string;
  href: string;
  external?: boolean;
};

export function getPublicContactChannels(locale: Locale): PublicContactChannel[] {
  return [
    {
      icon: "email",
      ariaLabel:
        locale === "en"
          ? `Email Bento AIII at ${PUBLIC_CONTACT_EMAIL}`
          : locale === "zh-Hant"
            ? `寄信聯絡 Bento AIII：${PUBLIC_CONTACT_EMAIL}`
            : `Bento AIII にメールする: ${PUBLIC_CONTACT_EMAIL}`,
      href: PUBLIC_CONTACT_EMAIL_HREF
    },
    {
      icon: "linkedin",
      ariaLabel:
        locale === "en"
          ? "Open Bento AIII on LinkedIn at linkedin.com/in/ryanteo101"
          : locale === "zh-Hant"
            ? "在 LinkedIn 開啟 Bento AIII：linkedin.com/in/ryanteo101"
            : "LinkedIn で Bento AIII を開く: linkedin.com/in/ryanteo101",
      href: PUBLIC_CONTACT_LINKEDIN_HREF,
      external: true
    }
  ];
}

export function replaceLegacyContactEmail(value: string) {
  return value.replaceAll(LEGACY_CONTACT_EMAIL, PUBLIC_CONTACT_EMAIL);
}

export function hasDirectContactDetail(value: string) {
  return PUBLIC_CONTACT_PATTERN.test(replaceLegacyContactEmail(value));
}
