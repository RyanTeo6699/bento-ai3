import type { Locale } from "@/lib/i18n";
import {
  getProjectSlugs as getBaseProjectSlugs,
  getProjects as getBaseProjects,
  type Project
} from "@/lib/site-data";

type LocalizedText = Record<Locale, string>;

type CommercialProject = Project & {
  commercial: {
    idealUsers: string;
    operationalProblem: string;
    deliveryScope: string;
    valueCase: string;
  };
};

type CommercialDefinition = CommercialProject["commercial"];

function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}

// Keep business-facing framing separate from the core system data
// so project definitions remain reusable across the site.
const commercialDefinitions = {
  "support-knowledge-console": {
    idealUsers: {
      en: "Support teams, internal operations groups, and service teams working from dense internal documentation.",
      "zh-Hant": "適合支援團隊、內部營運團隊，以及需要大量內部文件依據的服務團隊。",
      ja: "大量の社内ドキュメントを前提に動くサポートチーム、内部オペレーション、サービス部門に適しています。"
    },
    operationalProblem: {
      en: "The expensive failure is not slow search alone. It is inconsistent answers, weak source grounding, and support time lost across fragmented materials.",
      "zh-Hant": "高代價問題不只是搜尋慢，而是答案不一致、來源依據不足，以及在分散資料之間反覆切換造成的支援成本。",
      ja: "高コストなのは検索が遅いことだけではありません。回答のばらつき、根拠の弱さ、分散資料をまたぐ対応時間の損失です。"
    },
    deliveryScope: {
      en: "Scoped around ingestion, retrieval behavior, answer presentation, and reviewer visibility. It is not positioned as a general company-wide knowledge platform.",
      "zh-Hant": "交付範圍聚焦在資料匯入、檢索行為、回答呈現與審查可視性，不把它包裝成泛用的全公司知識平台。",
      ja: "導入範囲は取り込み、検索挙動、回答表示、レビュー可視化に絞っています。全社共通の万能ナレッジ基盤としては位置づけていません。"
    },
    valueCase: {
      en: "More useful than a generic AI chat because the system is shaped around source quality, answer traceability, and operational review.",
      "zh-Hant": "它比泛用 AI 對話工具更有價值，因為系統是圍繞來源品質、答案可追溯性與營運審查來設計的。",
      ja: "汎用 AI チャットより価値があるのは、ソース品質、回答の追跡性、運用レビューを前提に設計しているためです。"
    }
  },
  "internal-copilot-workflow": {
    idealUsers: {
      en: "Internal platform teams, operations leads, and teams handling repeatable request intake with human review downstream.",
      "zh-Hant": "適合內部平台團隊、營運負責人，以及需要處理重複需求接收並保留人工審查的團隊。",
      ja: "内部プラットフォームチーム、運用責任者、人のレビュー前提で反復的な受付業務を扱うチームに適しています。"
    },
    operationalProblem: {
      en: "The real cost sits in repeated manual triage, reformatting, and context assembly before a reviewer can even begin useful work.",
      "zh-Hant": "真正的成本來自人工分流、重整格式，以及在審查者開始工作前反覆整理上下文。",
      ja: "本当のコストは、レビュー担当者が有効な作業を始める前に発生する、手動トリアージ、整形、文脈整理の繰り返しにあります。"
    },
    deliveryScope: {
      en: "Delivered as a bounded internal workflow pattern covering intake, draft support, and review states. It is not sold as an autonomous agent system.",
      "zh-Hant": "交付邊界是有範圍的內部流程模式，涵蓋接收、草稿輔助與審查狀態，不宣稱它是自主代理系統。",
      ja: "提供範囲は、受付、下書き支援、レビュー状態を含む限定的な内部ワークフローパターンです。自律エージェントとしては売りません。"
    },
    valueCase: {
      en: "The value comes from reducing review-prep labor while keeping ownership and approval paths explicit.",
      "zh-Hant": "它的價值在於減少審查前置勞務，同時保留清楚的責任與核准路徑。",
      ja: "価値は、レビュー前の手作業を減らしつつ、責任所在と承認経路を明示したままにできる点にあります。"
    }
  },
  "review-operations-layer": {
    idealUsers: {
      en: "Teams handling policy-sensitive outputs, regulated review flows, or customer-facing language that still needs human oversight.",
      "zh-Hant": "適合處理政策敏感輸出、受規範審查流程，或仍需人工監督的對外語言內容團隊。",
      ja: "ポリシー影響の大きい出力、規制を伴うレビュー業務、人の監督が必要な対外文面を扱うチームに向いています。"
    },
    operationalProblem: {
      en: "The expensive risk is inconsistent review quality. Manual checking alone is slow, while pure automation is often too brittle for sensitive output.",
      "zh-Hant": "高代價風險在於審查品質不一致。純人工太慢，純自動化對敏感輸出又往往過於脆弱。",
      ja: "高コストなリスクはレビュー品質のばらつきです。手作業だけでは遅く、完全自動化では敏感な出力に対して脆すぎます。"
    },
    deliveryScope: {
      en: "Delivered as a review layer with explicit criteria, exception handling, and reviewer workflows. It is not presented as fully autonomous QA.",
      "zh-Hant": "交付內容是具明確判準、例外處理與審查工作流的審查層，不把它表述成全自動 QA。",
      ja: "提供内容は、明示的な基準、例外処理、レビュー運用を備えたレビュー層です。完全自律 QA とは位置づけません。"
    },
    valueCase: {
      en: "It outperforms generic AI tooling by making quality control operational instead of leaving it as an afterthought around model output.",
      "zh-Hant": "它比泛用 AI 工具更有價值，因為它把品質控制做成可運作的流程，而不是事後補救。",
      ja: "汎用 AI ツールより有効なのは、品質管理をモデル出力の後付けではなく、運用プロセスとして組み込むためです。"
    }
  },
  "ai-delivery-foundation": {
    idealUsers: {
      en: "Best understood as internal delivery infrastructure for repeated Bento AIII builds rather than a direct customer-facing offer.",
      "zh-Hant": "這更適合理解為 Bento AIII 反覆建置所使用的內部交付基礎，而不是直接面向客戶的產品。",
      ja: "これは顧客向けオファーというより、Bento AIII の反復実装を支える内部デリバリー基盤として捉えるのが適切です。"
    },
    operationalProblem: {
      en: "Repeated projects lose time when shared interface patterns, prompt controls, and review rules are rebuilt from zero.",
      "zh-Hant": "當共享介面模式、提示控制與審查規則每次都重做時，重複型項目會持續浪費時間。",
      ja: "共有 UI パターン、プロンプト制御、レビュー規則を毎回ゼロから作り直すと、反復案件の速度が落ちます。"
    },
    deliveryScope: {
      en: "This is a bounded internal foundation layer: reusable UI structure, prompt primitives, and operating conventions for future engagements.",
      "zh-Hant": "它是一層有邊界的內部基礎能力：可重用的 UI 結構、提示基元與後續項目可沿用的運作慣例。",
      ja: "これは範囲を限定した内部基盤です。再利用 UI 構造、プロンプト基盤、今後の案件に使う運用規約で構成されます。"
    },
    valueCase: {
      en: "The leverage comes from faster, cleaner delivery quality across future builds rather than from presenting another standalone product.",
      "zh-Hant": "它的價值不在於再推出一個獨立產品，而在於讓後續建置的交付品質更快、更整齊。",
      ja: "価値は別の単体製品を増やすことではなく、今後の実装をより速く、より整った品質で進められる点にあります。"
    }
  },
  "decision-briefing-study": {
    idealUsers: {
      en: "Leadership, operations, or program teams that need concise briefings from fragmented status inputs, but are still testing tolerance for automated drafting.",
      "zh-Hant": "適合需要從零散狀態輸入整理簡明摘要、但仍在測試自動起草容忍度的管理、營運或專案團隊。",
      ja: "分散した進捗入力から簡潔なブリーフを必要としつつ、自動下書きへの許容度をまだ検証中の経営、運用、プログラムチーム向けです。"
    },
    operationalProblem: {
      en: "Fragmented status reporting makes decision-making slower and noisier, especially when updates arrive in mixed formats and uneven quality.",
      "zh-Hant": "零散的狀態回報會讓決策更慢、更吵雜，尤其在更新格式混亂、品質不一時更是如此。",
      ja: "更新情報の形式や品質がばらつくと、分散した進捗報告は意思決定を遅くし、ノイズを増やします。"
    },
    deliveryScope: {
      en: "This remains a concept study bounded around briefing logic, review tolerance, and operating fit. It is not described as a launched reporting product.",
      "zh-Hant": "目前仍是圍繞摘要邏輯、審查容忍度與營運適配所做的概念研究，不描述成已上線的報告產品。",
      ja: "現時点ではブリーフ生成ロジック、レビュー許容度、運用適合を検証する構想段階であり、立ち上がった報告製品としては扱いません。"
    },
    valueCase: {
      en: "The value is in clarifying whether a briefing workflow can be trusted before committing to a heavier reporting system.",
      "zh-Hant": "它的價值在於先釐清摘要流程是否值得信任，再決定是否投入更重的報告系統建置。",
      ja: "価値は、より重いレポーティング基盤へ投資する前に、ブリーフィングフローが信頼できるかを見極められる点にあります。"
    }
  }
} as const satisfies Record<
  string,
  Record<keyof CommercialDefinition, LocalizedText>
>;

type CommercialSlug = keyof typeof commercialDefinitions;
type CommercialSourceProject = Project & { slug: CommercialSlug };

function isCommercialSlug(slug: string): slug is CommercialSlug {
  return slug in commercialDefinitions;
}

function isCommercialProject(project: Project): project is CommercialSourceProject {
  return isCommercialSlug(project.slug);
}

const projectPresentationCopy = {
  en: {
    idealUsers: "Best fit",
    operationalProblem: "Operational problem",
    deliveryScope: "Delivery scope",
    valueCase: "Why this has more leverage",
    keyOutcome: "Key outcome"
  },
  "zh-Hant": {
    idealUsers: "適合對象",
    operationalProblem: "營運問題",
    deliveryScope: "交付邊界",
    valueCase: "比泛用 AI 更有價值的原因",
    keyOutcome: "目前成果"
  },
  ja: {
    idealUsers: "適した相手",
    operationalProblem: "業務上の問題",
    deliveryScope: "提供範囲",
    valueCase: "汎用 AI より価値が出る理由",
    keyOutcome: "現在の到達点"
  }
} as const;

export type ProjectPresentationCopy = (typeof projectPresentationCopy)[Locale];
export type CommercialProjectView = CommercialProject;

export function getProjectPresentationCopy(locale: Locale) {
  return projectPresentationCopy[locale];
}

export function getProjects(locale: Locale): CommercialProjectView[] {
  return getBaseProjects(locale).flatMap((project): CommercialProjectView[] => {
    if (!isCommercialSlug(project.slug)) {
      return [];
    }

      const commercial = commercialDefinitions[project.slug];

      return [{
        ...project,
        commercial: {
          idealUsers: pick(commercial.idealUsers, locale),
          operationalProblem: pick(commercial.operationalProblem, locale),
          deliveryScope: pick(commercial.deliveryScope, locale),
          valueCase: pick(commercial.valueCase, locale)
        }
      }];
    });
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return getBaseProjectSlugs().filter(isCommercialSlug);
}
