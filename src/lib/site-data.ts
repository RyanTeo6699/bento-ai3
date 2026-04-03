import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type Capability = {
  title: string;
  description: string;
  bullets: string[];
};

export type ProjectStatus = "Live" | "Prototype" | "Internal" | "Concept";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  track: string;
  featured: boolean;
  outcome: string;
  disclosure: string;
  detail: {
    problem: string;
    system: string;
    architecture: string[];
    currentFocus: string;
    stage: string;
  };
};

export type CompanyProfile = {
  name: string;
  positioning: string;
  description: string;
  mission: string;
  disclosure: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  note: string;
  href?: string;
};

function same(value: string): LocalizedText {
  return {
    en: value,
    "zh-Hant": value,
    ja: value
  };
}

function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}

const companyProfileContent = {
  name: "Bento AIII",
  positioning: {
    en:
      "A technology company focused on AI applications and large language model systems, building practical products, workflows, and digital experiences.",
    "zh-Hant":
      "一家專注於 AI 應用與大型語言模型系統的科技公司，持續打造實用產品、工作流程與數位體驗。",
    ja:
      "AI アプリケーションと大規模言語モデルシステムに取り組み、実用的なプロダクト、ワークフロー、デジタル体験を構築するテクノロジー企業です。"
  },
  description: {
    en:
      "Bento AIII is a small AI product and systems studio. The work usually sits between interface design, operator workflow, retrieval behavior, and delivery detail.",
    "zh-Hant":
      "Bento AIII 是一間小型 AI 產品與系統工作室，工作通常落在介面設計、操作流程、檢索行為與交付細節的交界處。",
    ja:
      "Bento AIII は小規模な AI プロダクト / システムスタジオです。仕事は、UI 設計、運用ワークフロー、検索挙動、デリバリー設計の交差点にあります。"
  },
  mission: {
    en: "Build AI software that is readable, reviewable, and useful inside real business workflows.",
    "zh-Hant": "打造可閱讀、可審查、並真正能放進業務流程中的 AI 軟體。",
    ja: "実際の業務フローの中で、読みやすく、レビューしやすく、役に立つ AI ソフトウェアをつくること。"
  },
  disclosure: {
    en:
      "This site shows current capability tracks and core delivery roles. Public case studies are intentionally limited while work is still internal, early-stage, or private.",
    "zh-Hant":
      "本網站呈現目前的能力方向與交付角色。若工作仍屬內部、早期或私人範圍，公開案例會刻意保持有限。",
    ja:
      "このサイトでは現在の能力トラックと主要なデリバリー役割を示しています。仕事が内部、初期段階、または非公開である間は、公開事例を意図的に限定しています。"
  }
};

const capabilityDefinitions = [
  {
    title: {
      en: "AI Product Engineering",
      "zh-Hant": "AI 產品工程",
      ja: "AI プロダクトエンジニアリング"
    },
    description: {
      en:
        "Bento AIII frames the workflow, defines the interface, and ships the software layer around the model instead of treating AI as a bolt-on feature.",
      "zh-Hant":
        "Bento AIII 會先定義流程與介面，再交付模型外層真正可用的軟體，而不是把 AI 當成後加功能。",
      ja:
        "Bento AIII は AI を後付け機能として扱わず、ワークフローを定義し、UI を設計し、モデル周辺のソフトウェアレイヤーまで実装します。"
    },
    bullets: {
      en: ["Product scoping", "Operator surfaces", "Frontend delivery"],
      "zh-Hant": ["產品定義", "操作介面", "前端交付"],
      ja: ["プロダクト整理", "運用画面", "フロントエンド実装"]
    }
  },
  {
    title: {
      en: "LLM Systems",
      "zh-Hant": "LLM 系統",
      ja: "LLM システム"
    },
    description: {
      en:
        "The system work covers retrieval, prompt behavior, orchestration, and evaluation so language model features can hold up under real use.",
      "zh-Hant":
        "系統工作涵蓋檢索、提示行為、編排與評估，讓語言模型功能在真實使用下仍能成立。",
      ja:
        "システム設計では、検索、プロンプト挙動、オーケストレーション、評価まで扱い、言語モデル機能を実運用に耐えるものにします。"
    },
    bullets: {
      en: ["RAG systems", "Agent workflows", "Guardrails and evals"],
      "zh-Hant": ["RAG 系統", "Agent 流程", "防護與評估"],
      ja: ["RAG システム", "Agent ワークフロー", "ガードレールと評価"]
    }
  },
  {
    title: {
      en: "Workflow Automation",
      "zh-Hant": "流程自動化",
      ja: "ワークフロー自動化"
    },
    description: {
      en:
        "Repetitive business motion gets translated into reviewable AI-assisted workflows with clear human checkpoints where judgment still matters.",
      "zh-Hant":
        "將重複性的業務動作整理為可審查的 AI 輔助流程，並保留真正需要判斷的人為節點。",
      ja:
        "繰り返し発生する業務を、判断が必要な箇所に人の確認点を残したまま、レビュー可能な AI 支援ワークフローへ置き換えます。"
    },
    bullets: {
      en: ["Approval flows", "Task routing", "Operational tooling"],
      "zh-Hant": ["審批流程", "任務分流", "營運工具"],
      ja: ["承認フロー", "タスク振り分け", "運用ツール"]
    }
  },
  {
    title: {
      en: "Delivery for Real Teams",
      "zh-Hant": "面向真實團隊的交付",
      ja: "実運用チーム向けデリバリー"
    },
    description: {
      en:
        "The delivery model assumes mixed systems, imperfect inputs, and the need to explain decisions to operators and stakeholders.",
      "zh-Hant":
        "交付方式預設要面對混合系統、不完整輸入，以及需要向操作人員與利害關係人說明決策的現實。",
      ja:
        "デリバリーモデルは、混在するシステム、不完全な入力、そして運用者や関係者への説明責任がある現実を前提にしています。"
    },
    bullets: {
      en: ["Incremental rollout", "Auditability", "Maintainable handoff"],
      "zh-Hant": ["漸進上線", "可稽核性", "可維護交接"],
      ja: ["段階的展開", "監査可能性", "保守しやすい引き継ぎ"]
    }
  }
];

const projectDefinitions = [
  {
    slug: "shiok",
    name: same("Shiok (食咯)"),
    summary: {
      en: "An AI dining copilot for better ordering decisions, automatic meal logging, and weekly review.",
      "zh-Hant": "一個面向真實外食場景的 AI Copilot，幫使用者在點餐前做更好的選擇，並在餐後自動完成記錄與復盤。",
      ja: "注文前の判断、食後の自動記録、週次レビューまでをつなぐ AI 外食 Copilot。"
    },
    description: {
      en:
        "Shiok is built around the full dining-out loop: constraint-aware ordering, post-meal capture, review, and weekly insight. It is shaped for delivery, dine-in, menu decisions, budget control, and dietary constraints rather than generic wellness tracking.",
      "zh-Hant":
        "Shiok 圍繞完整的外食閉環設計：點餐前的約束判斷、點餐後的自動記錄、審核修正，以及每週復盤洞察。它聚焦外送、堂食、菜單決策、預算控制與飲食限制，而不是泛泛而談的健康管理。",
      ja:
        "Shiok は外食の一連の流れを前提に設計されています。注文前の条件判定、食後の自動記録、レビュー修正、週次インサイトまでを一つの閉ループとして扱い、汎用的な健康管理ではなく、配達、外食、メニュー選択、予算管理、食事制約に焦点を当てています。"
    },
    tags: {
      en: ["AI Copilot", "Dining Workflow", "Reviewable AI", "Web Dashboard"],
      "zh-Hant": ["AI Copilot", "Dining Workflow", "Reviewable AI", "Web Dashboard"],
      ja: ["AI Copilot", "Dining Workflow", "Reviewable AI", "Web Dashboard"]
    },
    status: "Prototype" as const,
    track: {
      en: "Consumer Product",
      "zh-Hant": "消費產品",
      ja: "コンシューマープロダクト"
    },
    featured: true,
    outcome: {
      en:
        "Shiok already behaves like a feedback system rather than a one-off logging tool: it supports guided ordering, automated capture, weekly review, and a return path through pending review work.",
      "zh-Hant":
        "Shiok 已經具備「回饋型系統」的雛形，而不只是一次性的記錄工具：它把輔助點單、自動記錄、週度復盤與待處理審核串成可持續回來使用的閉環。",
      ja:
        "Shiok は単発の記録ツールではなく、フィードバック型システムとしての骨格をすでに備えています。注文支援、自動記録、週次レビュー、未処理レビューへの復帰導線が一つの流れにつながっています。"
    },
    disclosure: {
      en:
        "Current product track. Public descriptions focus on the real workflow and engineering direction; some quality, sync, and operational layers remain under active iteration.",
      "zh-Hant":
        "目前為持續迭代中的產品方向。公開描述聚焦真實工作流與工程骨架；部分品質、同步與營運層能力仍在持續收斂中。",
      ja:
        "現在も継続的に磨いているプロダクトトラックです。公開説明は実際のワークフローと実装方向に基づいており、品質管理、同期、運用レイヤーの一部は引き続き調整中です。"
    },
    detail: {
      problem: {
        en:
          "Dining out creates repeated small failures: overspending, ignoring personal constraints, forgetting what was ordered, and having no useful review loop afterward. Most tools either log meals after the fact or show statistics without helping the decision itself.",
        "zh-Hant":
          "外食場景裡最常見的問題，不是單一一餐吃得好不好，而是反覆出現的小失誤：超出預算、忽略個人限制、吃完就忘了記、記完也沒有後續可用的復盤。多數工具只做事後記錄或統計，卻沒有真正介入點餐決策。",
        ja:
          "外食では、小さな失敗が何度も繰り返されます。予算超過、個人条件の見落とし、注文内容の記録漏れ、記録しても振り返りにつながらないことです。多くのツールは事後記録や集計に留まり、注文判断そのものは支援しません。"
      },
      system: {
        en:
          "The product links pre-order constraint checks, meal import and parsing, human review, weekly insights, and web-based reporting into one operating system for dining-out decisions.",
        "zh-Hant":
          "產品把點餐前的約束判斷、餐食導入與解析、人工審核、週度洞察，以及 Web 報表串成一套面向外食決策的完整系統。",
        ja:
          "このプロダクトは、注文前の条件判定、食事データの取り込みと解析、人によるレビュー、週次インサイト、Web レポートをつなぎ、外食判断のための一つのシステムとして構成されています。"
      },
      architecture: {
        en: [
          "Constraint-aware ordering flow for budget, preferences, unsuitable items, and dining-out risk checks",
          "Import, parse, warning, and review pipeline with low-confidence handling and feedback loops",
          "Weekly insights, progress surfaces, and continue-review states that bring users back into unfinished work",
          "Samples library, regression UI, golden tests, and quality gates for controlled iteration",
          "Web dashboard, exports, and sync-readiness layers for reporting, debugging, and future multi-device growth"
        ],
        "zh-Hant": [
          "面向預算、偏好、不適合項與外食風險的約束式點餐流程",
          "帶有 warnings、低信心處理與 feedback 回流的導入、解析與審核管線",
          "把週度洞察、進度卡與 Continue Reviewing 串起來的留存介面",
          "樣本庫、回歸 UI、golden tests 與 quality gate 所構成的可控迭代基礎",
          "用於報表、除錯與未來多裝置演進的 Web dashboard、匯出與同步前置層"
        ],
        ja: [
          "予算、好み、不適合項目、外食リスクを踏まえた制約付き注文フロー",
          "warnings、低信頼度処理、フィードバック循環を含む取り込み・解析・レビューのパイプライン",
          "週次インサイト、進捗カード、Continue Reviewing をつないで再訪を促す画面群",
          "サンプルライブラリ、回帰 UI、golden tests、quality gate による制御可能な改善基盤",
          "レポート、デバッグ、将来のマルチデバイス展開に向けた Web dashboard、エクスポート、同期準備レイヤー"
        ]
      },
      currentFocus: {
        en:
          "Refine the review loop, weekly feedback surfaces, sync-readiness, and quality validation so the product stays trustworthy as parsing and automation expand.",
        "zh-Hant":
          "目前重點是持續收斂審核回路、週度回饋介面、同步前置能力與品質驗證，讓解析與自動化擴張時仍保持可控與可信。",
        ja:
          "現在の重点は、レビュー循環、週次フィードバック画面、同期準備、品質検証を詰めることです。解析と自動化の範囲が広がっても、信頼性と制御性を保てるようにしています。"
      },
      stage: {
        en: "Prototype product with a working loop across assisted ordering, automated logging, review, weekly insights, dashboard export, and sync-readiness infrastructure.",
        "zh-Hant": "目前為原型產品，已形成從輔助點單、自動記錄、審核修正、週度洞察到 Dashboard 匯出與同步前置的完整閉環。",
        ja: "支援付き注文、自動記録、レビュー修正、週次インサイト、ダッシュボード出力、同期準備までをつなぐ動作ループを備えたプロトタイプ段階です。"
      }
    }
  },
  {
    slug: "internal-copilot-workflow",
    name: same("Internal Copilot Workflow"),
    summary: {
      en: "A structured internal copilot for request intake, draft preparation, and human review.",
      "zh-Hant": "一套面向需求接收、草稿整理與人工審查的結構化內部 Copilot 工作流。",
      ja: "受付、下書き準備、人によるレビューをつなぐ構造化された内部 Copilot ワークフロー。"
    },
    description: {
      en:
        "This project is designed for teams that handle recurring internal requests and lose too much time before useful review can even begin. It turns intake, context assembly, drafting, and review into a staged operational workflow instead of leaving each request to manual prep.",
      "zh-Hant":
        "這個方向面向反覆處理內部需求、卻在正式審查前就耗掉大量整理時間的團隊。它把需求接收、上下文整理、草稿生成與審查狀態整理成分階段工作流，而不是讓每一筆需求都重新手動準備。",
      ja:
        "この方向は、反復する社内依頼を扱いながら、有効なレビューに入る前の準備に多くの時間を失っているチーム向けです。受付、文脈整理、下書き生成、レビュー状態を段階的なワークフローにまとめ、各依頼を毎回手作業で整える状態から離れます。"
    },
    tags: {
      en: ["Workflow Copilot", "Request Intake", "Review Queue", "Internal Tools"],
      "zh-Hant": ["Workflow Copilot", "需求接收", "審查佇列", "內部工具"],
      ja: ["Workflow Copilot", "依頼受付", "レビューキュー", "内部ツール"]
    },
    status: "Internal" as const,
    track: {
      en: "Operational Workflow",
      "zh-Hant": "營運工作流",
      ja: "運用ワークフロー"
    },
    featured: true,
    outcome: {
      en:
        "Established a usable internal pattern for intake triage, context assembly, draft support, and reviewer handoff without pretending it is a public autonomous agent product.",
      "zh-Hant":
        "在不把它包裝成公開自主代理產品的前提下，這個方向已整理出可用於需求分流、上下文整理、草稿輔助與審查交接的內部模式。",
      ja:
        "公開向けの自律エージェント製品を装うことなく、受付の振り分け、文脈整理、下書き支援、レビューへの引き渡しに使える内部パターンを整えています。"
    },
    disclosure: {
      en:
        "Internal operating build. It is shown as a practical capability direction, not as a public launch or a client case study.",
      "zh-Hant": "這是內部運營建置，列出的是能力方向，而不是客戶案例。",
      ja:
        "内部運用向けの構築です。ここでは公開ローンチや顧客事例ではなく、実務的な能力方向として掲載しています。"
    },
    detail: {
      problem: {
        en:
          "The real drag is not the request itself. It is the repeated manual work around every request: incomplete intake, mixed formatting, missing context, and too much prep before a reviewer can even start making decisions.",
        "zh-Hant":
          "真正拖慢效率的，往往不是需求本身，而是每筆需求周邊反覆出現的人工整理：接收資訊不完整、格式混亂、上下文缺漏，以及在審查者真正開始判斷之前就耗掉太多前置時間。",
        ja:
          "遅さの原因は依頼そのものではなく、その周囲で繰り返される手作業です。受付情報の不足、形式のばらつき、文脈の欠落、そしてレビュー担当者が判断を始める前に必要な前処理が重くなりすぎています。"
      },
      system: {
        en:
          "The system turns intake, task typing, context gathering, draft generation, review ownership, and approval checkpoints into one visible internal workflow.",
        "zh-Hant":
          "系統把需求接收、任務分類、上下文整理、草稿生成、審查責任與核准節點整合成一套可視化的內部工作流。",
        ja:
          "このシステムは、受付、タスク分類、文脈収集、下書き生成、レビュー責任、承認ポイントを、一つの見える内部ワークフローにまとめます。"
      },
      architecture: {
        en: [
          "Structured intake layer with typed request fields, request states, and operator-visible status",
          "Context assembly block that gathers the inputs a reviewer would otherwise compile manually",
          "Draft support layer with editable prompts, reference inputs, and controllable output states",
          "Review queue with ownership, approval checkpoints, and handoff visibility across the workflow"
        ],
        "zh-Hant": [
          "具結構化欄位、任務分類與狀態管理的需求接收層",
          "能把審查者原本要手動整理的資料先整理好的上下文組裝模組",
          "帶有可編輯提示、參考輸入與可控輸出狀態的草稿輔助層",
          "具負責人、核准節點與交接可視性的審查佇列"
        ],
        ja: [
          "構造化フィールド、タスク分類、状態管理を備えた受付レイヤー",
          "レビュー担当者が手で集めていた材料を先に揃える文脈組み立てブロック",
          "編集可能なプロンプト、参照入力、制御可能な出力状態を持つ下書き支援レイヤー",
          "担当者、承認ポイント、引き継ぎ可視化を備えたレビューキュー"
        ]
      },
      currentFocus: {
        en:
          "Tighten routing rules, improve draft usefulness, and keep reviewer control explicit so the workflow reduces prep labor without hiding responsibility.",
        "zh-Hant": "在保留審查控制權可見的前提下，降低人工分流時間。",
        ja: "レビュー担当者の制御を画面上で見えるように保ちながら、手作業のトリアージ時間を減らしています。"
      },
      stage: {
        en: "Internal workflow build under active refinement. It is used to prove a bounded operating pattern before any broader external packaging.",
        "zh-Hant": "目前仍是持續收斂中的內部工作流建置，用來先證明一套有邊界、可運作的模式，再決定是否對外延伸。",
        ja: "現在も調整を続けている内部ワークフロー構築です。まずは境界のある実用パターンを成立させ、その後に外向け展開を検討する段階です。"
      }
    }
  },
  {
    slug: "review-operations-layer",
    name: same("Review Operations Layer"),
    summary: {
      en: "A review layer for conversation, draft, and policy-sensitive outputs.",
      "zh-Hant": "面向對話、草稿與敏感輸出的審查層。",
      ja: "会話、下書き、ポリシー影響の大きい出力向けのレビュー層。"
    },
    description: {
      en:
        "A practical track for teams that need a structured way to inspect AI-assisted output before it becomes operational.",
      "zh-Hant":
        "適合需要在 AI 輔助輸出進入實際運作前，先進行有結構檢查的團隊。",
      ja:
        "AI 支援の出力を運用に入れる前に、構造化された確認方法が必要なチーム向けの実務トラックです。"
    },
    tags: {
      en: ["Evaluation", "Transcripts", "Node.js"],
      "zh-Hant": ["Evaluation", "Transcripts", "Node.js"],
      ja: ["Evaluation", "Transcripts", "Node.js"]
    },
    status: "Prototype" as const,
    track: {
      en: "External Track",
      "zh-Hant": "外部方向",
      ja: "外部向けトラック"
    },
    featured: true,
    outcome: {
      en:
        "Showed how quality review could be made faster and more consistent without pretending full automation.",
      "zh-Hant": "展示了如何在不假裝全自動化的前提下，讓品質審查更快也更一致。",
      ja:
        "完全自動化を装わずに、品質レビューをより速く一貫したものにできる形を示しました。"
    },
    disclosure: {
      en:
        "Representative quality-assurance direction. Public deployment details are intentionally withheld.",
      "zh-Hant": "這是一條代表性的品質保證方向，公開部署細節目前刻意保留。",
      ja:
        "代表的な品質保証方向です。公開できる導入詳細は意図的に絞っています。"
    },
    detail: {
      problem: {
        en:
          "Policy-sensitive outputs often need a repeatable review layer, but fully manual checking does not scale well.",
        "zh-Hant":
          "涉及政策或敏感規則的輸出通常需要可重複的審查層，但完全人工檢查很難擴展。",
        ja:
          "ポリシー影響の大きい出力には再現性のあるレビュー層が必要ですが、完全手動の確認は拡張しにくいのが実情です。"
      },
      system: {
        en:
          "The system groups outputs into reviewable units, applies explicit criteria, and surfaces exceptions that need human attention.",
        "zh-Hant":
          "系統把輸出整理成可審查單位，套用明確標準，並把需要人工注意的例外顯示出來。",
        ja:
          "出力をレビュー可能な単位に分け、明示的な基準を適用し、人の確認が必要な例外を浮かび上がらせます。"
      },
      architecture: {
        en: [
          "Input normalization for drafts, conversations, and generated summaries",
          "Criteria engine for policy fit, tone, and escalation triggers",
          "Reviewer dashboard for exception queues and sample inspection"
        ],
        "zh-Hant": [
          "針對草稿、對話與摘要輸入的正規化層",
          "用於政策符合度、語氣與升級條件的判準引擎",
          "管理例外佇列與抽樣檢查的審查儀表板"
        ],
        ja: [
          "下書き、会話、生成要約を対象にした入力正規化",
          "ポリシー適合、トーン、エスカレーション条件の判定エンジン",
          "例外キューとサンプル確認のためのレビューダッシュボード"
        ]
      },
      currentFocus: {
        en: "Tighten rubric calibration and reviewer workflows before wider adoption.",
        "zh-Hant": "在更大範圍採用前，持續收斂評分尺度與審查者工作流。",
        ja: "広い採用の前に、評価基準の調整とレビュー運用を詰めています。"
      },
      stage: {
        en: "Prototype held at a reviewable scope, not marketed as autonomous QA.",
        "zh-Hant": "目前仍維持在可審查的原型範圍，並未包裝成自主 QA 系統。",
        ja: "レビュー可能な範囲に留めたプロトタイプであり、自律 QA としては扱っていません。"
      }
    }
  },
  {
    slug: "ai-delivery-foundation",
    name: same("AI Delivery Foundation"),
    summary: {
      en: "A shared internal layer for interface patterns, prompt primitives, and operating rules.",
      "zh-Hant": "面向介面模式、提示基元與運營規則的共享內部層。",
      ja: "UI パターン、プロンプト基盤、運用ルールのための共有内部レイヤー。"
    },
    description: {
      en:
        "An internal capability block intended to make future Bento AIII builds more consistent and easier to maintain.",
      "zh-Hant":
        "一層內部能力基礎，用來讓後續 Bento AIII 的建置更一致、也更容易維護。",
      ja:
        "今後の Bento AIII の構築を、より一貫性があり、保守しやすいものにするための内部能力ブロックです。"
    },
    tags: {
      en: ["Design System", "Prompt Ops", "Internal Platform"],
      "zh-Hant": ["Design System", "Prompt Ops", "Internal Platform"],
      ja: ["Design System", "Prompt Ops", "Internal Platform"]
    },
    status: "Internal" as const,
    track: {
      en: "Capability Layer",
      "zh-Hant": "能力層",
      ja: "能力レイヤー"
    },
    featured: false,
    outcome: {
      en:
        "Shortened the distance between concept, interface scaffold, and usable system behavior for internal builds.",
      "zh-Hant":
        "縮短了內部建置從概念、介面骨架到可用系統行為之間的距離。",
      ja:
        "内部構築において、構想から画面骨格、使えるシステム挙動までの距離を短くしました。"
    },
    disclosure: {
      en:
        "Internal foundation work. It supports delivery quality rather than serving as a public-facing product.",
      "zh-Hant": "這是內部基礎建設工作，重點在提升交付品質，而不是成為公開產品。",
      ja:
        "内部基盤の整備であり、公開プロダクトではなく、デリバリー品質を支えるためのものです。"
    },
    detail: {
      problem: {
        en:
          "Repeated AI builds were recreating the same chat, search, review, and prompt-control patterns from scratch.",
        "zh-Hant":
          "重複的 AI 建置常常從零開始重做相同的聊天、搜尋、審查與提示控制模式。",
        ja:
          "繰り返される AI 実装で、チャット、検索、レビュー、プロンプト制御の同じパターンを毎回作り直していました。"
      },
      system: {
        en:
          "Bento AIII keeps a shared layer for UI structure, prompt behavior, and system conventions that can be reused across engagements.",
        "zh-Hant":
          "Bento AIII 維護一套可在不同項目中重用的 UI 結構、提示行為與系統慣例共享層。",
        ja:
          "Bento AIII は、UI 構造、プロンプト挙動、システム規約の共有レイヤーを維持し、複数案件で再利用できるようにしています。"
      },
      architecture: {
        en: [
          "Reusable UI blocks for review, context display, and action history",
          "Prompt and evaluation primitives aligned to delivery workflows",
          "Internal documentation for repeatable engineering decisions"
        ],
        "zh-Hant": [
          "供審查、上下文展示與操作歷史使用的可重用 UI 區塊",
          "與交付流程對齊的提示與評估基元",
          "支援可重複工程決策的內部文件"
        ],
        ja: [
          "レビュー、文脈表示、操作履歴向けの再利用 UI ブロック",
          "デリバリーワークフローに沿ったプロンプト / 評価基盤",
          "再現性ある技術判断のための内部ドキュメント"
        ]
      },
      currentFocus: {
        en:
          "Consolidate shared primitives so new projects start from a tighter operational baseline.",
        "zh-Hant": "持續整合共享基元，讓新項目能從更穩定的運營基線開始。",
        ja: "共有基盤を整理し、新しい案件をより安定した運用基線から始められるようにしています。"
      },
      stage: {
        en: "Internal capability layer under active use and continuous cleanup.",
        "zh-Hant": "目前是持續使用與整理中的內部能力層。",
        ja: "現在も継続利用と整理を進めている内部能力レイヤーです。"
      }
    }
  },
  {
    slug: "decision-briefing-study",
    name: same("Decision Briefing Study"),
    summary: {
      en: "A concept track for turning fragmented updates into concise operating briefs.",
      "zh-Hant": "將零散更新整理成簡明決策摘要的概念方向。",
      ja: "分散した更新情報を簡潔な運用ブリーフに変えるための構想トラック。"
    },
    description: {
      en:
        "Kept intentionally exploratory while the expected inputs, review path, and reporting tolerance are still being tested.",
      "zh-Hant":
        "在預期輸入、審查路徑與報告容忍度仍在測試中時，刻意維持為探索型方向。",
      ja:
        "期待する入力、レビュー経路、報告精度の許容度を検証中のため、意図的に探索段階に留めています。"
    },
    tags: {
      en: ["Summarization", "Reporting", "Concept"],
      "zh-Hant": ["Summarization", "Reporting", "Concept"],
      ja: ["Summarization", "Reporting", "Concept"]
    },
    status: "Concept" as const,
    track: {
      en: "Concept Study",
      "zh-Hant": "概念研究",
      ja: "構想検討"
    },
    featured: false,
    outcome: {
      en:
        "Created a realistic concept boundary for a briefing system without pretending it is already a product line.",
      "zh-Hant":
        "為簡報系統建立了更現實的概念邊界，而不是假裝它已經是成熟產品線。",
      ja:
        "すでに製品ラインであるかのように装わず、ブリーフィングシステムの現実的な構想境界を整理しました。"
    },
    disclosure: {
      en:
        "Concept-only direction. It is listed to show problem space coverage, not to imply a finished deployment.",
      "zh-Hant": "這是一條概念性方向，列出是為了呈現問題覆蓋範圍，而不是暗示已經完成部署。",
      ja:
        "構想段階のみの方向です。完成済みの導入を示すのではなく、対象問題領域を示すために掲載しています。"
    },
    detail: {
      problem: {
        en:
          "Leadership reporting often breaks down when updates live across notes, dashboards, and uneven status writeups.",
        "zh-Hant":
          "當更新散落在筆記、儀表板與品質不一的狀態說明中時，管理層報告往往容易失真。",
        ja:
          "更新情報がメモ、ダッシュボード、ばらつきのある進捗文章に散らばると、経営向け報告は崩れやすくなります。"
      },
      system: {
        en:
          "The concept organizes incoming updates by workstream, risk, and decision point before drafting a compact brief for review.",
        "zh-Hant":
          "此概念會先依工作流、風險與決策點整理輸入更新，再生成供審查的精簡摘要。",
        ja:
          "この構想では、更新情報をワークストリーム、リスク、意思決定ポイントごとに整理した上で、レビュー用の簡潔なブリーフを作成します。"
      },
      architecture: {
        en: [
          "Ingestion model for status notes, metrics, and milestone updates",
          "Drafting layer focused on variance, blockers, and next decisions",
          "Human review gate before anything becomes an official brief"
        ],
        "zh-Hant": [
          "用於狀態說明、指標與里程碑更新的匯入模型",
          "聚焦偏差、阻塞點與下一步決策的草稿層",
          "在形成正式摘要前保留人工審查關卡"
        ],
        ja: [
          "進捗メモ、指標、マイルストーン更新の取り込みモデル",
          "差分、詰まり、次の判断に焦点を当てたドラフト層",
          "正式なブリーフになる前に置く人のレビューゲート"
        ]
      },
      currentFocus: {
        en:
          "Validate what a trustworthy briefing workflow would need before any build commitment.",
        "zh-Hant": "在正式投入建置前，先驗證可信的摘要流程需要哪些條件。",
        ja: "実装に踏み切る前に、信頼できるブリーフィングフローに必要な条件を検証しています。"
      },
      stage: {
        en: "Concept study only. No production or commercial rollout is implied.",
        "zh-Hant": "目前僅為概念研究，不代表已投入正式生產或商業部署。",
        ja: "構想検討のみであり、本番運用や商用展開は前提としていません。"
      }
    }
  }
];

const valueDefinitions = [
  {
    title: {
      en: "Practical Intelligence",
      "zh-Hant": "實用智能",
      ja: "実用的な知性"
    },
    description: {
      en: "We focus on useful systems, not demos that collapse outside ideal conditions.",
      "zh-Hant": "我們關注的是有用的系統，而不是離開理想條件就失效的 demo。",
      ja: "理想条件の外で崩れるデモではなく、実際に使えるシステムを重視します。"
    }
  },
  {
    title: {
      en: "Readable Systems",
      "zh-Hant": "可理解的系統",
      ja: "読み解けるシステム"
    },
    description: {
      en: "Operators and stakeholders should be able to understand what the system is doing and why.",
      "zh-Hant": "操作人員與利害關係人都應該能理解系統在做什麼，以及為什麼這樣做。",
      ja: "運用者や関係者が、システムが何をしているのか、なぜそうするのかを理解できるべきです。"
    }
  },
  {
    title: {
      en: "Production Discipline",
      "zh-Hant": "交付紀律",
      ja: "運用品質の規律"
    },
    description: {
      en: "Evaluation, traceability, and rollout strategy matter as much as the model call itself.",
      "zh-Hant": "評估、可追溯性與上線策略，和模型呼叫本身同樣重要。",
      ja: "評価、追跡可能性、展開戦略は、モデル呼び出しそのものと同じくらい重要です。"
    }
  },
  {
    title: {
      en: "Shared Ownership",
      "zh-Hant": "共同承擔",
      ja: "共有された責任"
    },
    description: {
      en: "The best AI products are built with design, engineering, and operations aligned from the start.",
      "zh-Hant": "最好的 AI 產品，從一開始就需要設計、工程與營運站在同一條線上。",
      ja: "良い AI プロダクトは、設計、エンジニアリング、運用が最初から揃った状態でつくられます。"
    }
  }
];

const roadmapDefinitions = [
  {
    phase: {
      en: "Phase 01",
      "zh-Hant": "階段 01",
      ja: "Phase 01"
    },
    title: {
      en: "Tighten Shared Build Blocks",
      "zh-Hant": "收斂共享建置模組",
      ja: "共有ビルドブロックを磨く"
    },
    description: {
      en:
        "Keep consolidating the interface, prompt, and review primitives reused across Bento AIII delivery work.",
      "zh-Hant": "持續整理在 Bento AIII 交付中重複使用的介面、提示與審查基元。",
      ja:
        "Bento AIII の案件で繰り返し使う UI、プロンプト、レビュー基盤を引き続き整理していきます。"
    }
  },
  {
    phase: {
      en: "Phase 02",
      "zh-Hant": "階段 02",
      ja: "Phase 02"
    },
    title: {
      en: "Publish Only Verifiable Case Material",
      "zh-Hant": "只公開可驗證的案例內容",
      ja: "検証可能な事例だけを公開する"
    },
    description: {
      en:
        "Turn internal notes into public case studies only when the scope, results, and permissions are concrete enough to stand behind.",
      "zh-Hant":
        "只有在範圍、結果與公開權限都足夠明確時，才會把內部筆記整理成公開案例。",
      ja:
        "スコープ、結果、公開許可の条件が十分に整った場合にのみ、内部メモを公開事例へ変換します。"
    }
  },
  {
    phase: {
      en: "Phase 03",
      "zh-Hant": "階段 03",
      ja: "Phase 03"
    },
    title: {
      en: "Expand Evaluation Coverage",
      "zh-Hant": "擴大評估覆蓋範圍",
      ja: "評価カバレッジを広げる"
    },
    description: {
      en:
        "Increase the depth of review and evaluation patterns used across operator-facing AI systems.",
      "zh-Hant":
        "提高在操作人員面向 AI 系統中使用的審查與評估模式深度。",
      ja:
        "運用者向け AI システムで使うレビューと評価パターンの深さを広げていきます。"
    }
  },
  {
    phase: {
      en: "Phase 04",
      "zh-Hant": "階段 04",
      ja: "Phase 04"
    },
    title: {
      en: "Refine Intake and Delivery Ops",
      "zh-Hant": "優化接收與交付流程",
      ja: "受付とデリバリー運用を整える"
    },
    description: {
      en:
        "Improve scoping, reporting, and handoff so the company can stay small without becoming ad hoc.",
      "zh-Hant":
        "改善範圍定義、報告與交接方式，讓公司在保持小團隊的同時不至於變得鬆散。",
      ja:
        "スコープ整理、報告、引き継ぎを改善し、小規模なままでも場当たり的にならない体制を整えます。"
    }
  }
];

const contactChannelDefinitions = [
  {
    label: {
      en: "General email",
      "zh-Hant": "一般 Email",
      ja: "一般窓口"
    },
    value: same("hello@bentoaiii.com"),
    href: "mailto:hello@bentoaiii.com",
    note: {
      en: "General inquiries, project introductions, and first-contact conversations",
      "zh-Hant": "一般洽詢、項目介紹與初步對話",
      ja: "一般問い合わせ、案件紹介、最初の相談に対応します"
    }
  },
  {
    label: {
      en: "Project intake",
      "zh-Hant": "項目提交",
      ja: "案件受付"
    },
    value: {
      en: "Use the form below",
      "zh-Hant": "請使用下方表單",
      ja: "下のフォームをご利用ください"
    },
    note: {
      en: "Best for structured briefs, workflow notes, or a scoped description of the problem",
      "zh-Hant": "最適合提交有結構的說明、流程筆記或問題範圍描述",
      ja: "構造化した概要、ワークフローメモ、課題範囲の説明に適しています"
    }
  },
  {
    label: {
      en: "Base",
      "zh-Hant": "據點",
      ja: "拠点"
    },
    value: {
      en: "Edmonton, Alberta / remote",
      "zh-Hant": "加拿大亞伯達省愛德蒙頓 / 遠端",
      ja: "エドモントン / リモート"
    },
    note: {
      en: "Distributed delivery across product, engineering, and AI systems work",
      "zh-Hant": "跨產品、工程與 AI 系統工作的分散式交付",
      ja: "プロダクト、エンジニアリング、AI システムをまたぐ分散型のデリバリー"
    }
  }
];

export function getCompanyProfile(locale: Locale): CompanyProfile {
  return {
    name: companyProfileContent.name,
    positioning: pick(companyProfileContent.positioning, locale),
    description: pick(companyProfileContent.description, locale),
    mission: pick(companyProfileContent.mission, locale),
    disclosure: pick(companyProfileContent.disclosure, locale)
  };
}

export function getCapabilityPillars(locale: Locale): Capability[] {
  return capabilityDefinitions.map((pillar) => ({
    title: pick(pillar.title, locale),
    description: pick(pillar.description, locale),
    bullets: pick(pillar.bullets, locale)
  }));
}

export function getProjects(locale: Locale): Project[] {
  return projectDefinitions.map((project) => ({
    slug: project.slug,
    name: pick(project.name, locale),
    summary: pick(project.summary, locale),
    description: pick(project.description, locale),
    tags: pick(project.tags, locale),
    status: project.status,
    track: pick(project.track, locale),
    featured: project.featured,
    outcome: pick(project.outcome, locale),
    disclosure: pick(project.disclosure, locale),
    detail: {
      problem: pick(project.detail.problem, locale),
      system: pick(project.detail.system, locale),
      architecture: pick(project.detail.architecture, locale),
      currentFocus: pick(project.detail.currentFocus, locale),
      stage: pick(project.detail.stage, locale)
    }
  }));
}

export function getProjectSlugs() {
  return projectDefinitions.map((project) => project.slug);
}

export function getValues(locale: Locale): ValueItem[] {
  return valueDefinitions.map((value) => ({
    title: pick(value.title, locale),
    description: pick(value.description, locale)
  }));
}

export function getRoadmap(locale: Locale): RoadmapItem[] {
  return roadmapDefinitions.map((item) => ({
    phase: pick(item.phase, locale),
    title: pick(item.title, locale),
    description: pick(item.description, locale)
  }));
}

export function getContactChannels(locale: Locale): ContactChannel[] {
  return contactChannelDefinitions.map((channel) => ({
    label: pick(channel.label, locale),
    value: pick(channel.value, locale),
    note: pick(channel.note, locale),
    href: channel.href
  }));
}
