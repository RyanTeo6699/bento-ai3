import type { Locale } from "@/lib/i18n";

export const PUBLIC_CONTACT_EMAIL = "hello@bentoaiii.com";
export const PUBLIC_CONTACT_EMAIL_HREF = `mailto:${PUBLIC_CONTACT_EMAIL}`;
export const PUBLIC_CONTACT_LINKEDIN = "linkedin.com/in/ryanteo101";
export const PUBLIC_CONTACT_LINKEDIN_HREF = "https://www.linkedin.com/in/ryanteo101/";

const LEGACY_CONTACT_EMAIL = "ryanteo0628@gmail.com";

export type PublicContactChannel = {
  icon: "email" | "linkedin";
  label: string;
  value: string;
  note: string;
  href: string;
};

export function getPublicContactChannels(locale: Locale): PublicContactChannel[] {
  return [
    {
      icon: "email",
      label:
        locale === "en" ? "Email" : locale === "zh-Hant" ? "Email" : "メール",
      value: PUBLIC_CONTACT_EMAIL,
      note:
        locale === "en"
          ? "For inquiries, architecture reviews, and deployment conversations."
          : locale === "zh-Hant"
            ? "用於一般洽詢、架構審查與部署討論。"
            : "問い合わせ、アーキテクチャレビュー、導入相談はこちら。",
      href: PUBLIC_CONTACT_EMAIL_HREF
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: PUBLIC_CONTACT_LINKEDIN,
      note:
        locale === "en"
          ? "For background, direct contact context, and professional profile details."
          : locale === "zh-Hant"
            ? "用於查看背景、聯絡脈絡與專業履歷資訊。"
            : "経歴、連絡先の文脈、プロフィール情報はこちら。",
      href: PUBLIC_CONTACT_LINKEDIN_HREF
    }
  ];
}

export function replaceLegacyContactEmail(value: string) {
  return value.replaceAll(LEGACY_CONTACT_EMAIL, PUBLIC_CONTACT_EMAIL);
}
