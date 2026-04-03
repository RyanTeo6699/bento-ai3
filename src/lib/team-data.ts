import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
};

export type TeamSection = {
  id: string;
  title: string;
  subtitle: string;
  members: TeamMember[];
};

type TeamPageCopy = {
  homeTitle: string;
  homeDescription: string;
  pageTitle: string;
  pageDescription: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  overviewTitle: string;
  overviewDescription: string;
};

type TeamMemberDefinition = {
  id: string;
  name: string;
  role: LocalizedText;
  bio: LocalizedText;
  tags: LocalizedList;
};

type TeamSectionDefinition = {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  memberIds: string[];
};

function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}

const teamMemberDefinitions = {
  "ryan-z": {
    id: "ryan-z",
    name: "Ryan Z.",
    role: {
      en: "Cybersecurity",
      "zh-Hant": "網路安全",
      ja: "サイバーセキュリティ"
    },
    bio: {
      en:
        "Ryan Z. holds a Master's degree in Cybersecurity and focuses on applied AI delivery, Web3 development, and system-level product building. His technical work spans intelligent workflows, frontend-backend integration, mobile development, and data security, with an emphasis on turning complex capabilities into executable, deployable, and iteratively maintainable systems.",
      "zh-Hant":
        "Ryan Z. 具備網路安全碩士背景，專注於 AI 應用落地、Web3 開發與系統級產品構建。技術方向涵蓋智慧工作流、前後端整合、行動端開發與資料安全，擅長將複雜技術能力整理為可執行、可部署、可持續迭代的產品系統。",
      ja:
        "Ryan Z. はサイバーセキュリティ修士の背景を持ち、AI の実装、Web3 開発、システムレベルのプロダクト構築に取り組んでいます。技術領域はインテリジェントワークフロー、フロントエンドとバックエンドの統合、モバイル開発、データセキュリティにまたがり、複雑な技術能力を実行可能でデプロイ可能、継続的に改善できるプロダクトシステムへ整理することを得意としています。"
    },
    tags: {
      en: ["AI Systems", "Web3 Development", "Cybersecurity", "iOS / Full Stack"],
      "zh-Hant": ["AI 系統", "Web3 開發", "網路安全", "iOS / 全端"],
      ja: ["AI システム", "Web3 開発", "サイバーセキュリティ", "iOS / フルスタック"]
    }
  },
  "randy-j": {
    id: "randy-j",
    name: "Randy J.",
    role: {
      en: "Systems Engineer",
      "zh-Hant": "系統工程師",
      ja: "システムエンジニア"
    },
    bio: {
      en:
        "Randy J. brings more than a decade of software engineering experience across distributed systems, cloud infrastructure, ERP and web applications, and IoT platforms. His work spans AWS-backed production environments, large-scale system integration, and high-throughput engineering where reliability, performance, and operational scale all matter.",
      "zh-Hant":
        "Randy J. 擁有超過十年的軟體工程經驗，長期處理分散式系統、雲端基礎設施、ERP 與 Web 應用，以及 IoT 平台。其工作涵蓋 AWS 生產環境、大規模系統整合與高吞吐工程，重點放在可靠性、效能與實際運作規模。",
      ja:
        "Randy J. は 10 年を超えるソフトウェア開発経験を持ち、分散システム、クラウド基盤、ERP / Web アプリケーション、IoT プラットフォームに携わってきました。AWS を含む本番環境、大規模なシステム統合、高スループットな実装を扱い、信頼性、性能、運用規模を重視します。"
    },
    tags: {
      en: ["Distributed Systems", "Cloud Infrastructure", "IoT Systems"],
      "zh-Hant": ["分散式系統", "雲端基礎設施", "IoT 系統"],
      ja: ["分散システム", "クラウド基盤", "IoT システム"]
    }
  },
  "jason-n": {
    id: "jason-n",
    name: "Jason N.",
    role: {
      en: "AI Engineer",
      "zh-Hant": "AI 工程師",
      ja: "AI エンジニア"
    },
    bio: {
      en:
        "Jason N. works across AI engineering, full-stack product build, and production-minded system implementation. His focus includes multi-agent LLM workflows, RAG and LLM operations, and the engineering detail needed to ship high-concurrency systems as usable product surfaces.",
      "zh-Hant":
        "Jason N. 專注於 AI 工程、全端產品建置與面向正式運作的系統實作，重點涵蓋 multi-agent LLM 流程、RAG / LLM Ops，以及把高併發系統落成可用產品介面的工程細節。",
      ja:
        "Jason N. は AI エンジニアリング、フルスタックなプロダクト実装、本番運用を見据えたシステム開発を担当します。マルチエージェント LLM ワークフロー、RAG / LLM Ops、高並行システムを実用的なプロダクト画面として仕上げる技術詳細に注力しています。"
    },
    tags: {
      en: ["AI Engineering", "RAG / LLM Ops", "Production Systems"],
      "zh-Hant": ["AI 工程", "RAG / LLM Ops", "生產系統"],
      ja: ["AI エンジニアリング", "RAG / LLM Ops", "本番システム"]
    }
  },
  "john-snow": {
    id: "john-snow",
    name: "John Snow",
    role: {
      en: "Digital Marketing",
      "zh-Hant": "數位行銷",
      ja: "デジタルマーケティング"
    },
    bio: {
      en: "John Snow supports digital marketing, campaign coordination, market outreach, and audience-facing content work. His role is centered on helping communication stay organized, consistent, and useful across external growth efforts.",
      "zh-Hant": "John Snow 參與數位行銷、活動協調、市場拓展與對外內容支援，工作重點在讓外部溝通、受眾接觸與增長推進保持清楚且有一致性。",
      ja: "John Snow はデジタルマーケティング、キャンペーン調整、市場向けアウトリーチ、対外コンテンツ支援を担当します。外向きのコミュニケーションと成長施策を整理し、一貫性のある形で進める役割です。"
    },
    tags: {
      en: ["Campaigns", "Outreach", "Audience Growth"],
      "zh-Hant": ["活動協調", "市場拓展", "受眾增長"],
      ja: ["キャンペーン", "アウトリーチ", "オーディエンス成長"]
    }
  },
  "guo-ng": {
    id: "guo-ng",
    name: "C.Y Guo",
    role: {
      en: "Brand & Marketing",
      "zh-Hant": "品牌與行銷",
      ja: "ブランド・マーケティング"
    },
    bio: {
      en: "C.Y Guo works across brand promotion, brand communication, campaign support, and market-facing coordination. The role focuses on strengthening positioning clarity and keeping multi-channel communication aligned across outward-facing work.",
      "zh-Hant": "C.Y Guo 參與品牌推廣、品牌傳播、活動支援與市場協調，重點在強化定位清晰度，並讓多渠道對外溝通保持一致。",
      ja: "C.Y Guo はブランドプロモーション、ブランド発信、キャンペーン支援、市場向け調整に携わります。ポジショニングの明確さを保ち、複数チャネルの対外コミュニケーションを揃えることに重点を置いています。"
    },
    tags: {
      en: ["Brand Promotion", "Communications", "Marketing Coordination"],
      "zh-Hant": ["品牌推廣", "品牌傳播", "行銷協調"],
      ja: ["ブランド推進", "ブランド発信", "マーケティング調整"]
    }
  }
} as const satisfies Record<string, TeamMemberDefinition>;

// Grouping lives in the data layer so the page can render by section
// without hardcoding which members belong together.
const teamSectionDefinitions = [
  {
    id: "technical-founders",
    title: {
      en: "Technical Founding Team",
      "zh-Hant": "技術創始團隊",
      ja: "技術創業チーム"
    },
    subtitle: {
      en: "Leads product direction, system architecture, applied AI delivery, and engineering execution.",
      "zh-Hant": "負責產品方向、系統架構、AI 應用落地與工程執行。",
      ja: "プロダクト方針、システム設計、AI 実装、エンジニアリング実行を担当します。"
    },
    memberIds: ["ryan-z", "randy-j", "jason-n"]
  },
  {
    id: "market-founders",
    title: {
      en: "Market Founding Team",
      "zh-Hant": "市場創始團隊",
      ja: "市場創業チーム"
    },
    subtitle: {
      en: "Leads brand communication, market development, growth partnerships, and external relationships.",
      "zh-Hant": "負責品牌傳播、市場拓展、增長合作與外部連結。",
      ja: "ブランド発信、市場開拓、成長提携、対外的な接続を担当します。"
    },
    memberIds: ["john-snow", "guo-ng"]
  }
] as const satisfies readonly TeamSectionDefinition[];

const teamPageCopy = {
  en: {
    homeTitle: "Founding team across product systems, engineering, and applied AI delivery.",
    homeDescription:
      "Bento AIII presents a compact founding team with clear ownership across product direction, engineering execution, and AI system delivery.",
    pageTitle:
      "A five-person founding team organized across technical delivery and market growth.",
    pageDescription:
      "The team page is grouped by function so responsibility stays readable: technical founders on one side, market founders on the other.",
    metrics: [
      { label: "Team model", value: "Five-person founding team" },
      { label: "Coverage", value: "Product / Engineering / AI / Market" },
      { label: "Working mode", value: "Grouped by technical and market leadership" }
    ],
    overviewTitle:
      "The founding team is grouped by function so direction, execution, and market work stay clear.",
    overviewDescription:
      "This page keeps the current team readable instead of flattening everyone into one undifferentiated wall. The structure matches how the company actually operates."
  },
  "zh-Hant": {
    homeTitle: "創始團隊涵蓋產品系統、工程與應用 AI 交付。",
    homeDescription:
      "Bento AIII 對外呈現的是一個分工清楚的創始團隊，負責產品方向、工程執行與 AI 系統交付。",
    pageTitle: "一個由技術與市場職能構成的五人創始團隊。",
    pageDescription:
      "團隊頁改以職能分組呈現，讓技術創始團隊與市場創始團隊的責任邊界更清楚，也更符合實際運作方式。",
    metrics: [
      { label: "團隊模式", value: "5 人創始團隊" },
      { label: "覆蓋範圍", value: "產品 / 工程 / AI / 市場" },
      { label: "組織方式", value: "依技術與市場職能分組" }
    ],
    overviewTitle: "創始團隊按職能分組呈現，讓方向、執行與市場工作更清楚。",
    overviewDescription:
      "這一頁不再把所有成員攤平成單一牆面，而是依實際工作分工整理成技術與市場兩個 section，讓角色與責任更可信。"
  },
  ja: {
    homeTitle: "プロダクトシステム、エンジニアリング、応用 AI デリバリーを担う創業チーム。",
    homeDescription:
      "Bento AIII は、プロダクト方針、実装、AI システムデリバリーを担う創業チームを、責任範囲が見える形で公開しています。",
    pageTitle:
      "技術デリバリーと市場成長の役割で整理された 5 名の創業チームです。",
    pageDescription:
      "チームページは職能ごとに整理しています。技術創業チームと市場創業チームを分けて、責任範囲が読み取りやすい構成にしています。",
    metrics: [
      { label: "チーム構成", value: "5 名の創業チーム" },
      { label: "担当領域", value: "プロダクト / エンジニアリング / AI / 市場" },
      { label: "構成方針", value: "技術と市場の役割で分割" }
    ],
    overviewTitle:
      "創業チームを職能で分けることで、方向性、実装、市場側の役割が読みやすくなります。",
    overviewDescription:
      "全員を一枚の壁に並べるのではなく、実際の働き方に合わせて技術と市場の 2 つのセクションへ整理しています。"
  }
} as const satisfies Record<Locale, TeamPageCopy>;

function materializeMember(member: TeamMemberDefinition, locale: Locale): TeamMember {
  return {
    id: member.id,
    name: member.name,
    role: pick(member.role, locale),
    bio: pick(member.bio, locale),
    tags: pick(member.tags, locale)
  };
}

export function getTeamSections(locale: Locale): TeamSection[] {
  return teamSectionDefinitions.map((section) => ({
    id: section.id,
    title: pick(section.title, locale),
    subtitle: pick(section.subtitle, locale),
    members: section.memberIds.map((memberId) =>
      materializeMember(teamMemberDefinitions[memberId], locale)
    )
  }));
}

export function getTeamMembers(locale: Locale): TeamMember[] {
  return getTeamSections(locale).flatMap((section) => section.members);
}

// Keep the homepage preview focused on the technical founders so the
// preview section preserves its existing visual density.
export function getFeaturedTeamMembers(locale: Locale): TeamMember[] {
  return getTeamSections(locale)[0]?.members ?? [];
}

export function getTeamPageCopy(locale: Locale) {
  return teamPageCopy[locale];
}
