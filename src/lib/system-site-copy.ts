import type { Locale } from "@/lib/i18n";

type LocalizedValue<T> = Record<Locale, T>;
type LocalizedText = LocalizedValue<string>;
type LocalizedStringList = LocalizedValue<readonly string[]>;
type LocalizedObjectList<T> = LocalizedValue<readonly T[]>;

type SystemModule = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

type LabelValueItem = {
  label: string;
  value: string;
};

type ProblemFieldItem = {
  label: string;
  title: string;
  body: string;
};

type ExecutionLoopStep = {
  label: string;
  title: string;
  body: string;
};

type ContrastItem = {
  label: string;
  before: string;
  after: string;
};

type DomainAdaptationItem = {
  label: string;
  title: string;
  body: string;
};

export type SystemSiteCopy = {
  company: {
    positioning: string;
    description: string;
    mission: string;
    disclosure: string;
  };
  header: {
    brandTagline: string;
    systemState: string;
    systemMode: string;
    buildRef: string;
  };
  footer: {
    tagline: string;
    title: string;
    description: string;
    policy: string;
    closingKicker: string;
    closingLine: string;
  };
  home: {
    shellBar: {
      entry: string;
      mode: string;
      railState: string;
      trace: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      lead: string;
      summary: string;
      differentiation: string[];
      primaryLabel: string;
      secondaryLabel: string;
      railTitle: string;
      railModules: string[];
      telemetryTitle: string;
      telemetryItems: LabelValueItem[];
      telemetryTraceTitle: string;
      telemetryTrace: string[];
      terminalContext: string;
      terminalStatus: string;
      terminalNote: string;
    };
    coreStatement: {
      eyebrow: string;
      title: string;
      description: string;
      items: LabelValueItem[];
    };
    problemField: {
      eyebrow: string;
      title: string;
      description: string;
      items: ProblemFieldItem[];
    };
    modules: {
      eyebrow: string;
      title: string;
      description: string;
      items: SystemModule[];
    };
    executionLoop: {
      eyebrow: string;
      title: string;
      description: string;
      steps: ExecutionLoopStep[];
    };
    whyItMatters: {
      eyebrow: string;
      title: string;
      description: string;
      contrasts: ContrastItem[];
    };
    domainAdaptation: {
      eyebrow: string;
      title: string;
      description: string;
      items: DomainAdaptationItem[];
    };
    deploymentVectors: {
      eyebrow: string;
      title: string;
      description: string;
    };
    closing: {
      eyebrow: string;
      title: string;
      description: string;
    };
  };
};

type SystemSiteContent = {
  company: {
    positioning: LocalizedText;
    description: LocalizedText;
    mission: LocalizedText;
    disclosure: LocalizedText;
  };
  header: {
    brandTagline: LocalizedText;
    systemState: LocalizedText;
    systemMode: LocalizedText;
    buildRef: LocalizedText;
  };
  footer: {
    tagline: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    policy: LocalizedText;
    closingKicker: LocalizedText;
    closingLine: LocalizedText;
  };
  home: {
    shellBar: {
      entry: LocalizedText;
      mode: LocalizedText;
      railState: LocalizedText;
      trace: LocalizedText;
    };
    hero: {
      eyebrow: LocalizedText;
      title: LocalizedText;
      lead: LocalizedText;
      summary: LocalizedText;
      differentiation: LocalizedStringList;
      primaryLabel: LocalizedText;
      secondaryLabel: LocalizedText;
      railTitle: LocalizedText;
      railModules: LocalizedStringList;
      telemetryTitle: LocalizedText;
      telemetryItems: LocalizedObjectList<LabelValueItem>;
      telemetryTraceTitle: LocalizedText;
      telemetryTrace: LocalizedStringList;
      terminalContext: LocalizedText;
      terminalStatus: LocalizedText;
      terminalNote: LocalizedText;
    };
    coreStatement: {
      eyebrow: LocalizedText;
      title: LocalizedText;
      description: LocalizedText;
      items: LocalizedObjectList<LabelValueItem>;
    };
    problemField: {
      eyebrow: LocalizedText;
      title: LocalizedText;
      description: LocalizedText;
      items: LocalizedObjectList<ProblemFieldItem>;
    };
    modules: {
      eyebrow: LocalizedText;
      title: LocalizedText;
      description: LocalizedText;
    };
    executionLoop: {
      eyebrow: LocalizedText;
      title: LocalizedText;
      description: LocalizedText;
      steps: LocalizedObjectList<ExecutionLoopStep>;
    };
    whyItMatters: {
      eyebrow: LocalizedText;
      title: LocalizedText;
      description: LocalizedText;
      contrasts: LocalizedObjectList<ContrastItem>;
    };
    domainAdaptation: {
      eyebrow: LocalizedText;
      title: LocalizedText;
      description: LocalizedText;
      items: LocalizedObjectList<DomainAdaptationItem>;
    };
    deploymentVectors: {
      eyebrow: LocalizedText;
      title: LocalizedText;
      description: LocalizedText;
    };
    closing: {
      eyebrow: LocalizedText;
      title: LocalizedText;
      description: LocalizedText;
    };
  };
};

function pick<T>(value: LocalizedValue<T>, locale: Locale): T {
  return value[locale];
}

function cloneList<T>(value: ReadonlyArray<T>): T[] {
  return [...value];
}

function cloneObjects<T extends object>(value: ReadonlyArray<T>): T[] {
  return value.map((item) => ({ ...item }));
}

const modules: LocalizedObjectList<SystemModule> = {
  en: [
    {
      id: "INPUT_STRUCTURING",
      title: "INPUT_STRUCTURING",
      summary:
        "Turn fragmented, ambiguous demand into structured cases with missing-data detection and normalized intake schemas.",
      bullets: ["Raw signal normalization", "Gap detection", "Case schema initialization"]
    },
    {
      id: "CONSTRAINT_ROUTING",
      title: "CONSTRAINT_ROUTING",
      summary:
        "Apply rules, policy thresholds, risk gates, and eligibility checks before the system decides where work can move.",
      bullets: ["Policy rules", "Risk gating", "Routing path determination"]
    },
    {
      id: "DUAL_SIDE_EVALUATION",
      title: "DUAL_SIDE_EVALUATION",
      summary:
        "Score both demand-side and supply-side conditions so matching reflects trust, capacity, compatibility, and execution probability.",
      bullets: ["Demand fit", "Supply fit", "Trust and history signals"]
    },
    {
      id: "WORKFLOW_EXECUTION",
      title: "WORKFLOW_EXECUTION",
      summary:
        "Run real workflows after routing with state control, ownership, task transitions, SLA logic, escalation paths, and audit trails.",
      bullets: ["State transitions", "Ownership control", "Escalation and SLA handling"]
    },
    {
      id: "OUTCOME_MEMORY",
      title: "OUTCOME_MEMORY",
      summary:
        "Capture completions, delays, disputes, failures, and resolution quality as reusable operational intelligence.",
      bullets: ["Outcome capture", "Failure memory", "Learning-weight updates"]
    },
    {
      id: "DOMAIN_ADAPTATION",
      title: "DOMAIN_ADAPTATION",
      summary:
        "Deploy the same core into multiple environments through modular domain packs that swap schemas, policy logic, and workflow states.",
      bullets: ["Domain pack switching", "Schema substitution", "Policy and workflow overlays"]
    }
  ],
  "zh-Hant": [
    {
      id: "INPUT_STRUCTURING",
      title: "INPUT_STRUCTURING",
      summary:
        "把破碎、模糊的需求轉成可執行案件，補足缺失資訊並標準化 intake 結構。",
      bullets: ["原始訊號正規化", "缺口偵測", "案件 schema 初始化"]
    },
    {
      id: "CONSTRAINT_ROUTING",
      title: "CONSTRAINT_ROUTING",
      summary:
        "在任何行動之前先套用規則、政策門檻、風險檢查與 eligibility 條件，決定正確路徑。",
      bullets: ["政策規則", "風險閘門", "路徑判定"]
    },
    {
      id: "DUAL_SIDE_EVALUATION",
      title: "DUAL_SIDE_EVALUATION",
      summary:
        "同時評估需求端與供給端條件，讓匹配建立在信任、容量、相容性與執行機率之上。",
      bullets: ["需求端適配", "供給端適配", "信任與歷史訊號"]
    },
    {
      id: "WORKFLOW_EXECUTION",
      title: "WORKFLOW_EXECUTION",
      summary:
        "匹配後不停止，而是持續執行：維持狀態、所有權、任務轉換、SLA 邏輯、升級路徑與稽核軌跡。",
      bullets: ["狀態轉換", "所有權控制", "升級與 SLA 控制"]
    },
    {
      id: "OUTCOME_MEMORY",
      title: "OUTCOME_MEMORY",
      summary:
        "把完成、延遲、爭議、失敗與解決品質都收進可重用的營運記憶層。",
      bullets: ["結果捕捉", "失敗記憶", "學習權重更新"]
    },
    {
      id: "DOMAIN_ADAPTATION",
      title: "DOMAIN_ADAPTATION",
      summary:
        "透過可替換的 domain packs 把同一套 core 部署到不同產業，切換 schema、政策邏輯與 workflow state。",
      bullets: ["Domain pack 切換", "Schema 替換", "政策與流程覆寫"]
    }
  ],
  ja: [
    {
      id: "INPUT_STRUCTURING",
      title: "INPUT_STRUCTURING",
      summary:
        "断片的で曖昧な需要を、欠落情報を検出しながら実行可能なケースへ構造化します。",
      bullets: ["生データ正規化", "情報欠落検出", "ケース schema 初期化"]
    },
    {
      id: "CONSTRAINT_ROUTING",
      title: "CONSTRAINT_ROUTING",
      summary:
        "行動前にルール、ポリシー閾値、リスクゲート、適格条件を適用し、正しい経路を決定します。",
      bullets: ["ポリシールール", "リスクゲート", "経路判定"]
    },
    {
      id: "DUAL_SIDE_EVALUATION",
      title: "DUAL_SIDE_EVALUATION",
      summary:
        "需要側と供給側の双方を評価し、信頼、容量、適合性、実行確率に基づくマッチングへ変えます。",
      bullets: ["需要側適合", "供給側適合", "信頼と履歴シグナル"]
    },
    {
      id: "WORKFLOW_EXECUTION",
      title: "WORKFLOW_EXECUTION",
      summary:
        "マッチングで止まらず、状態管理、担当者、タスク遷移、SLA、エスカレーション、監査証跡を保持したまま実行を継続します。",
      bullets: ["状態遷移", "担当制御", "エスカレーションと SLA"]
    },
    {
      id: "OUTCOME_MEMORY",
      title: "OUTCOME_MEMORY",
      summary:
        "完了、遅延、紛争、失敗、解決品質を再利用可能な運用インテリジェンスとして保存します。",
      bullets: ["結果取得", "失敗記憶", "学習重み更新"]
    },
    {
      id: "DOMAIN_ADAPTATION",
      title: "DOMAIN_ADAPTATION",
      summary:
        "差し替え可能な domain pack によって、同じ core を複数業界へ展開し、schema、ポリシー、workflow state を入れ替えます。",
      bullets: ["Domain pack 切替", "Schema 置換", "ポリシーと workflow 上書き"]
    }
  ]
};

const content: SystemSiteContent = {
  company: {
    positioning: {
      en:
        "Bento AIII builds an adaptive decision-and-execution operating system for complex service networks.",
      "zh-Hant":
        "Bento AIII 正在打造一套面向複雜服務網路的自適應決策與執行 operating system。",
      ja:
        "Bento AIII は、複雑なサービスネットワーク向けの適応型 decision-and-execution operating system を構築しています。"
    },
    description: {
      en:
        "The core structures messy demand, evaluates supply against constraints, runs workflows through execution, and stores outcomes as reusable operational memory.",
      "zh-Hant":
        "這套核心會把混亂需求結構化、在約束條件下評估供給、把流程真正推進到執行，並把結果沉澱成可重用的營運記憶。",
      ja:
        "このコアは、曖昧な需要を構造化し、制約条件のもとで供給を評価し、ワークフローを実行まで進め、その結果を再利用可能な運用記憶として蓄積します。"
    },
    mission: {
      en:
        "Build modular workflow intelligence cores that turn selection into execution and execution into reusable system learning.",
      "zh-Hant":
        "打造能把選擇轉成執行、再把執行轉成可重用系統學習的模組化 workflow intelligence core。",
      ja:
        "選択を実行へ、実行を再利用可能なシステム学習へ変える modular workflow intelligence core を構築すること。"
    },
    disclosure: {
      en:
        "Public material describes the system thesis, deployment directions, and selected project tracks. It does not imply undisclosed client lists, enterprise rollouts, or capabilities that are not yet public.",
      "zh-Hant":
        "公開內容聚焦系統論述、部署方向與部分項目軌跡，不代表未公開客戶名單、企業級上線或尚未公開的能力已經對外承諾。",
      ja:
        "公開情報はシステムの基本方針、展開方向、選択されたプロジェクトトラックを示すものであり、非公開クライアント、企業導入、未公開機能を意味するものではありません。"
    }
  },
  header: {
    brandTagline: {
      en: "Adaptive operating core",
      "zh-Hant": "自適應營運核心",
      ja: "適応型オペレーティングコア"
    },
    systemState: {
      en: "SYSTEM_CORE ONLINE",
      "zh-Hant": "SYSTEM_CORE ONLINE",
      ja: "SYSTEM_CORE ONLINE"
    },
    systemMode: {
      en: "ARCH MODE",
      "zh-Hant": "ARCH MODE",
      ja: "ARCH MODE"
    },
    buildRef: {
      en: "BUILD 26.04",
      "zh-Hant": "BUILD 26.04",
      ja: "BUILD 26.04"
    }
  },
  footer: {
    tagline: {
      en: "AI CORE / WORKFLOW INTELLIGENCE",
      "zh-Hant": "AI CORE / WORKFLOW INTELLIGENCE",
      ja: "AI CORE / WORKFLOW INTELLIGENCE"
    },
    title: {
      en: "Operational memory for environments where matching alone is not enough.",
      "zh-Hant": "為那些單靠匹配遠遠不夠的環境建立 operational memory。",
      ja: "マッチングだけでは足りない環境のための operational memory。"
    },
    description: {
      en:
        "Bento AIII is building a system core that structures intake, routes constraints, keeps execution inside the system, and learns from real outcomes.",
      "zh-Hant":
        "Bento AIII 正在打造一套系統核心：結構化 intake、做出受約束的 routing、把 execution 留在系統裡，並從真實結果中持續學習。",
      ja:
        "Bento AIII は、intake を構造化し、制約を踏まえて routing し、execution をシステム内に保持し、実際の結果から学習する system core を構築しています。"
    },
    policy: {
      en:
        "The public site focuses on architecture direction, deployment logic, and credible operating scope. It does not substitute for a technical review.",
      "zh-Hant":
        "公開網站聚焦架構方向、部署邏輯與可信的運作範圍；它不是技術審查文件的替代品。",
      ja:
        "公開サイトはアーキテクチャ方向、展開ロジック、現実的な運用範囲に焦点を当てています。技術レビューの代替ではありません。"
    },
    closingKicker: {
      en: "SYSTEM_CONTEXT",
      "zh-Hant": "SYSTEM_CONTEXT",
      ja: "SYSTEM_CONTEXT"
    },
    closingLine: {
      en: "selection -> execution -> memory -> better future decisions",
      "zh-Hant": "selection -> execution -> memory -> 更好的未來決策",
      ja: "selection -> execution -> memory -> より良い次回判断"
    }
  },
  home: {
    shellBar: {
      entry: {
        en: "HERO / SYSTEM ENTRY",
        "zh-Hant": "HERO / SYSTEM ENTRY",
        ja: "HERO / SYSTEM ENTRY"
      },
      mode: {
        en: "MODE / ARCHITECTURE REVIEW",
        "zh-Hant": "MODE / ARCHITECTURE REVIEW",
        ja: "MODE / ARCHITECTURE REVIEW"
      },
      railState: {
        en: "ACTIVE NODES / 06",
        "zh-Hant": "ACTIVE NODES / 06",
        ja: "ACTIVE NODES / 06"
      },
      trace: {
        en: "TRACE / OUTCOME-LINKED",
        "zh-Hant": "TRACE / OUTCOME-LINKED",
        ja: "TRACE / OUTCOME-LINKED"
      }
    },
    hero: {
      eyebrow: {
        en: "SYSTEM_ENTRY",
        "zh-Hant": "SYSTEM_ENTRY",
        ja: "SYSTEM_ENTRY"
      },
      title: {
        en: "Adaptive decision-and-execution operating system for complex service networks.",
        "zh-Hant": "面向複雜服務網路的自適應決策與執行 operating system。",
        ja: "複雑なサービスネットワーク向けの適応型 decision-and-execution operating system。"
      },
      lead: {
        en:
          "It structures demand, evaluates supply, routes complexity, runs workflows, and learns from real outcomes.",
        "zh-Hant":
          "它會結構化需求、評估供給、路由複雜性、執行工作流，並從真實結果中持續學習。",
        ja:
          "需要を構造化し、供給を評価し、複雑性を routing し、workflow を実行し、実際の結果から学習します。"
      },
      summary: {
        en:
          "Built for environments where demand is vague, supply is unreliable, matching breaks under pressure, and every unresolved case should become reusable system intelligence.",
        "zh-Hant":
          "它面向這樣的環境而建：需求模糊、供給不穩、匹配在壓力下失效，而且每一個未解決案件本來都應該轉成可重用的系統 intelligence。",
        ja:
          "需要が曖昧で、供給が不安定で、マッチングが圧力下で破綻し、未解決ケースのすべてが再利用可能な system intelligence へ変わるべき環境に向けて設計されています。"
      },
      differentiation: {
        en: [
          "Most AI products generate answers. This system generates operational memory.",
          "Most platforms stop at matching. This system continues into execution, traceability, and learning."
        ],
        "zh-Hant": [
          "多數 AI 產品只生成答案。這套系統生成的是 operational memory。",
          "多數平台停在 matching。這套系統會繼續進入 execution、traceability 與 learning。"
        ],
        ja: [
          "多くの AI 製品は答えを返すだけです。このシステムが生成するのは operational memory です。",
          "多くのプラットフォームは matching で止まります。このシステムは execution、traceability、learning まで続きます。"
        ]
      },
      primaryLabel: {
        en: "Request architecture review",
        "zh-Hant": "申請架構審查",
        ja: "Architecture review を依頼"
      },
      secondaryLabel: {
        en: "See deployment directions",
        "zh-Hant": "查看部署方向",
        ja: "展開方向を見る"
      },
      railTitle: {
        en: "ACTIVE MODULES",
        "zh-Hant": "ACTIVE MODULES",
        ja: "ACTIVE MODULES"
      },
      railModules: {
        en: [
          "INPUT_STRUCTURING",
          "CONSTRAINT_ROUTING",
          "DUAL_SIDE_EVALUATION",
          "WORKFLOW_EXECUTION",
          "OUTCOME_MEMORY",
          "DOMAIN_ADAPTATION"
        ],
        "zh-Hant": [
          "INPUT_STRUCTURING",
          "CONSTRAINT_ROUTING",
          "DUAL_SIDE_EVALUATION",
          "WORKFLOW_EXECUTION",
          "OUTCOME_MEMORY",
          "DOMAIN_ADAPTATION"
        ],
        ja: [
          "INPUT_STRUCTURING",
          "CONSTRAINT_ROUTING",
          "DUAL_SIDE_EVALUATION",
          "WORKFLOW_EXECUTION",
          "OUTCOME_MEMORY",
          "DOMAIN_ADAPTATION"
        ]
      },
      telemetryTitle: {
        en: "TELEMETRY_PANEL",
        "zh-Hant": "TELEMETRY_PANEL",
        ja: "TELEMETRY_PANEL"
      },
      telemetryItems: {
        en: [
          { label: "SYSTEM_STATUS", value: "stable / modular" },
          { label: "ROUTING_HEALTH", value: "constraint-aware" },
          { label: "CASE_MEMORY", value: "outcome-linked" },
          { label: "TRUST_SIGNAL_MAP", value: "dual-side active" },
          { label: "EXECUTION_TRACE", value: "stateful / auditable" }
        ],
        "zh-Hant": [
          { label: "SYSTEM_STATUS", value: "stable / modular" },
          { label: "ROUTING_HEALTH", value: "constraint-aware" },
          { label: "CASE_MEMORY", value: "outcome-linked" },
          { label: "TRUST_SIGNAL_MAP", value: "dual-side active" },
          { label: "EXECUTION_TRACE", value: "stateful / auditable" }
        ],
        ja: [
          { label: "SYSTEM_STATUS", value: "stable / modular" },
          { label: "ROUTING_HEALTH", value: "constraint-aware" },
          { label: "CASE_MEMORY", value: "outcome-linked" },
          { label: "TRUST_SIGNAL_MAP", value: "dual-side active" },
          { label: "EXECUTION_TRACE", value: "stateful / auditable" }
        ]
      },
      telemetryTraceTitle: {
        en: "TRACE_LOG",
        "zh-Hant": "TRACE_LOG",
        ja: "TRACE_LOG"
      },
      telemetryTrace: {
        en: [
          "case.raw_signal -> schema.detect_missing_fields",
          "route.constraints -> policy.risk_gate -> valid_path",
          "match.dual_side -> trust.capacity.compatibility",
          "execution.state -> evidence.owner.escalation",
          "memory.outcome -> update.future_decision_weights"
        ],
        "zh-Hant": [
          "case.raw_signal -> schema.detect_missing_fields",
          "route.constraints -> policy.risk_gate -> valid_path",
          "match.dual_side -> trust.capacity.compatibility",
          "execution.state -> evidence.owner.escalation",
          "memory.outcome -> update.future_decision_weights"
        ],
        ja: [
          "case.raw_signal -> schema.detect_missing_fields",
          "route.constraints -> policy.risk_gate -> valid_path",
          "match.dual_side -> trust.capacity.compatibility",
          "execution.state -> evidence.owner.escalation",
          "memory.outcome -> update.future_decision_weights"
        ]
      },
      terminalContext: {
        en: "SYS_CONTEXT=complex_service_networks",
        "zh-Hant": "SYS_CONTEXT=complex_service_networks",
        ja: "SYS_CONTEXT=complex_service_networks"
      },
      terminalStatus: {
        en: "MODE=architecture_review / OUTCOME_MEMORY=warm",
        "zh-Hant": "MODE=architecture_review / OUTCOME_MEMORY=warm",
        ja: "MODE=architecture_review / OUTCOME_MEMORY=warm"
      },
      terminalNote: {
        en: "deployment vectors remain modular, domain-bound, and reviewable",
        "zh-Hant": "deployment vectors 保持模組化、可受領域約束，也可被審查",
        ja: "deployment vectors は modular / domain-bound / reviewable を維持"
      }
    },
    coreStatement: {
      eyebrow: {
        en: "CORE_STATEMENT",
        "zh-Hant": "CORE_STATEMENT",
        ja: "CORE_STATEMENT"
      },
      title: {
        en: "A modular intelligence layer that does not stop at recommendation logic.",
        "zh-Hant": "一套不會停在 recommendation logic 的模組化 intelligence layer。",
        ja: "recommendation logic で止まらない modular intelligence layer。"
      },
      description: {
        en:
          "The core is designed to absorb uncertain intake, route under constraints, evaluate both sides of a case, keep execution inside the system, and convert outcomes into future operating advantage.",
        "zh-Hant":
          "這套核心被設計來吸收不確定的 intake、在約束條件下做 routing、同時評估案件雙方、把 execution 留在系統內，並把結果轉成下一次的營運優勢。",
        ja:
          "このコアは、不確実な intake を吸収し、制約条件のもとで routing し、ケースの両側を評価し、execution をシステム内に保持し、結果を次回の運用優位へ変えるために設計されています。"
      },
      items: {
        en: [
          { label: "INTAKE", value: "raw demand -> structured case" },
          { label: "ROUTING", value: "constraints before action" },
          { label: "EXECUTION", value: "stateful workflows, not loose handoffs" },
          { label: "LEARNING", value: "outcomes retained as system memory" }
        ],
        "zh-Hant": [
          { label: "INTAKE", value: "raw demand -> structured case" },
          { label: "ROUTING", value: "constraints before action" },
          { label: "EXECUTION", value: "stateful workflows, not loose handoffs" },
          { label: "LEARNING", value: "outcomes retained as system memory" }
        ],
        ja: [
          { label: "INTAKE", value: "raw demand -> structured case" },
          { label: "ROUTING", value: "constraints before action" },
          { label: "EXECUTION", value: "stateful workflows, not loose handoffs" },
          { label: "LEARNING", value: "outcomes retained as system memory" }
        ]
      }
    },
    problemField: {
      eyebrow: {
        en: "PROBLEM_FIELD",
        "zh-Hant": "PROBLEM_FIELD",
        ja: "PROBLEM_FIELD"
      },
      title: {
        en: "Built for environments where ambiguity, overstated supply, and broken handoffs are normal operating conditions.",
        "zh-Hant": "它面向這樣的場域而建：模糊需求、被高估的供給與斷裂交接本來就是常態。",
        ja: "曖昧な需要、過大評価された供給、壊れやすい handoff が通常状態である環境に向けて設計されています。"
      },
      description: {
        en:
          "The system assumes the real field is messy. Demand arrives incomplete. Supply looks stronger on paper than in execution. Ownership gets lost after handoff. And outcomes disappear instead of improving the next decision.",
        "zh-Hant":
          "這套系統預設真實現場本來就很亂：需求不完整、供給在紙面上比在執行上更好看、交接後所有權消失，而且結果並沒有反過來改善下一次判斷。",
        ja:
          "このシステムは、現場がもともと乱れていることを前提にしています。需要は不完全に届き、供給は紙の上では強く見えても execution では弱く、handoff 後に ownership が失われ、結果は次の判断改善に使われません。"
      },
      items: {
        en: [
          {
            label: "FIELD_01",
            title: "Demand enters in fragments.",
            body: "Cases often begin as unclear intake, partial documents, mixed intent, or operator notes that are not yet executable."
          },
          {
            label: "FIELD_02",
            title: "Supply is overstated or unstable.",
            body: "Availability, suitability, trust, and execution capacity are often weaker in practice than they appear in a listing or pitch."
          },
          {
            label: "FIELD_03",
            title: "Matching alone does not survive contact with operations.",
            body: "A recommendation is not enough when tasks, deadlines, evidence, escalation, and accountability still have to be managed."
          },
          {
            label: "FIELD_04",
            title: "Outcomes rarely become reusable intelligence.",
            body: "Delays, disputes, completions, and failures often disappear instead of updating future routing and workflow decisions."
          }
        ],
        "zh-Hant": [
          {
            label: "FIELD_01",
            title: "需求通常以碎片形式進入。",
            body: "案件一開始常常只是模糊 intake、部分文件、混合意圖，或尚未可執行的 operator notes。"
          },
          {
            label: "FIELD_02",
            title: "供給常被高估，且不穩定。",
            body: "可用性、適配性、信任度與執行容量，在真實場景中常比 listing 或介紹裡更弱。"
          },
          {
            label: "FIELD_03",
            title: "單靠 matching 無法撐過實際營運。",
            body: "當任務、期限、證據、升級路徑與責任仍需被管理時，一個 recommendation 本身遠遠不夠。"
          },
          {
            label: "FIELD_04",
            title: "結果很少轉成可重用 intelligence。",
            body: "延遲、爭議、完成與失敗往往直接消失，而不是回流去更新未來的 routing 與 workflow 決策。"
          }
        ],
        ja: [
          {
            label: "FIELD_01",
            title: "需要は断片のまま入ってきます。",
            body: "ケースの開始時点では、曖昧な intake、部分的な書類、混在した意図、未整理の operator notes しかないことが多くあります。"
          },
          {
            label: "FIELD_02",
            title: "供給は過大評価され、不安定です。",
            body: "可用性、適合性、信頼性、実行容量は、listing や pitch に見えるほど実務では強くありません。"
          },
          {
            label: "FIELD_03",
            title: "matching だけでは運用に耐えません。",
            body: "タスク、期限、証拠、エスカレーション、責任が残る以上、recommendation だけでは不十分です。"
          },
          {
            label: "FIELD_04",
            title: "結果は再利用可能な intelligence になりません。",
            body: "遅延、紛争、完了、失敗が次回の routing や workflow 判断へ戻らず、そのまま消えてしまうことが多いのです。"
          }
        ]
      }
    },
    modules: {
      eyebrow: {
        en: "MODULE_MAP",
        "zh-Hant": "MODULE_MAP",
        ja: "MODULE_MAP"
      },
      title: {
        en: "Six operating modules that keep decision, execution, and learning inside one system.",
        "zh-Hant": "六個把 decision、execution 與 learning 留在同一系統中的 operating modules。",
        ja: "decision / execution / learning を一つのシステムに保持する六つの operating modules。"
      },
      description: {
        en:
          "These are not feature cards. They are the core runtime layers that let the system move from intake through execution and back into memory.",
        "zh-Hant":
          "它們不是 feature cards，而是讓系統從 intake 走到 execution，再回流到 memory 的核心 runtime layers。",
        ja:
          "これは feature card ではなく、intake から execution、そして memory までを成立させる core runtime layer です。"
      }
    },
    executionLoop: {
      eyebrow: {
        en: "EXECUTION_LOOP",
        "zh-Hant": "EXECUTION_LOOP",
        ja: "EXECUTION_LOOP"
      },
      title: {
        en: "Selection becomes execution. Execution becomes memory. Memory changes the next decision.",
        "zh-Hant": "selection 變 execution，execution 變 memory，memory 再回頭改變下一次 decision。",
        ja: "selection は execution へ、execution は memory へ、memory は次の decision を変えます。"
      },
      description: {
        en:
          "The loop is designed to continue after matching. That is where the system differentiates itself: state control, task flow, auditability, escalation, and outcome capture remain inside the same architecture.",
        "zh-Hant":
          "這個 loop 被設計成在 matching 之後仍然持續。真正的差異在這裡：state control、task flow、auditability、escalation 與 outcome capture 都留在同一套架構裡。",
        ja:
          "この loop は matching 後も続くように設計されています。差別化の本質はここにあります。state control、task flow、auditability、escalation、outcome capture が同じアーキテクチャ内に残ります。"
      },
      steps: {
        en: [
          {
            label: "STAGE_01",
            title: "Structure the case.",
            body: "Raw demand becomes a case with missing information flags, standardized fields, and a clear execution boundary."
          },
          {
            label: "STAGE_02",
            title: "Route under constraints.",
            body: "Rules, policy gates, and risk checks narrow the set of valid next actions before matching or assignment begins."
          },
          {
            label: "STAGE_03",
            title: "Evaluate both sides.",
            body: "The system scores demand and supply together instead of pretending that one-sided search results are enough."
          },
          {
            label: "STAGE_04",
            title: "Execute with traceability.",
            body: "Tasks, ownership, evidence, escalation, and state transitions stay visible while the case moves through real work."
          },
          {
            label: "STAGE_05",
            title: "Retain the outcome.",
            body: "Completion quality, delay patterns, disputes, and failure states update the operational memory layer for future cases."
          }
        ],
        "zh-Hant": [
          {
            label: "STAGE_01",
            title: "先把 case 結構化。",
            body: "原始需求被整理成帶有缺件標記、標準欄位與清楚執行邊界的案件。"
          },
          {
            label: "STAGE_02",
            title: "在 constraints 下 routing。",
            body: "規則、政策閘門與風險檢查會先收斂合法路徑，再進入 matching 或 assignment。"
          },
          {
            label: "STAGE_03",
            title: "同時評估雙方。",
            body: "系統會把需求端與供給端一起評分，而不是假設單邊搜尋結果就足夠。"
          },
          {
            label: "STAGE_04",
            title: "帶著 traceability 去執行。",
            body: "任務、所有權、證據、升級與狀態轉換在案件推進時都保持可見。"
          },
          {
            label: "STAGE_05",
            title: "把 outcome 留下來。",
            body: "完成品質、延遲模式、爭議與失敗狀態會回寫進 operational memory，影響未來案件。"
          }
        ],
        ja: [
          {
            label: "STAGE_01",
            title: "ケースを構造化する。",
            body: "生の需要は、欠落情報フラグ、標準項目、明確な実行境界を持つケースへ変換されます。"
          },
          {
            label: "STAGE_02",
            title: "制約のもとで routing する。",
            body: "ルール、ポリシーゲート、リスクチェックによって、有効な次の行動だけが残ります。"
          },
          {
            label: "STAGE_03",
            title: "両側を同時に評価する。",
            body: "需要側と供給側を同時にスコアリングし、一方向の検索結果だけで十分とは見なしません。"
          },
          {
            label: "STAGE_04",
            title: "traceability を保ったまま実行する。",
            body: "タスク、担当、証拠、エスカレーション、状態遷移が、ケース進行中も可視のまま残ります。"
          },
          {
            label: "STAGE_05",
            title: "outcome を保持する。",
            body: "完了品質、遅延パターン、紛争、失敗状態が operational memory へ戻り、次のケースへ影響します。"
          }
        ]
      }
    },
    whyItMatters: {
      eyebrow: {
        en: "WHY_IT_MATTERS",
        "zh-Hant": "WHY_IT_MATTERS",
        ja: "WHY_IT_MATTERS"
      },
      title: {
        en: "Because systems that stop at answers still leave operators alone with execution.",
        "zh-Hant": "因為那些停在答案層的系統，最後還是把 execution 留給 operator 自己收拾。",
        ja: "答えを返すだけのシステムでは、execution の負担が結局 operator に残るからです。"
      },
      description: {
        en:
          "In high-friction service environments, the expensive failure is not only a wrong answer. It is a bad handoff, an untracked responsibility, a delayed escalation, or a failure that never teaches the system anything.",
        "zh-Hant":
          "在高摩擦服務環境裡，昂貴的失敗不只是答錯，而是錯誤交接、失去責任追蹤、延遲升級，或一場完全沒被系統學到任何東西的失敗。",
        ja:
          "高摩擦のサービス環境で高くつく失敗は、単なる誤答ではありません。handoff の失敗、追跡されない責任、遅れた escalation、そしてシステムが何も学ばない失敗です。"
      },
      contrasts: {
        en: [
          {
            label: "CONTRAST_01",
            before: "Answer generation without operational trace",
            after: "Operational memory linked to execution results"
          },
          {
            label: "CONTRAST_02",
            before: "Matching that ends at recommendation",
            after: "Routing that continues into accountable workflow execution"
          },
          {
            label: "CONTRAST_03",
            before: "One-off decisions that reset each time",
            after: "Reusable intelligence that compounds through outcomes"
          }
        ],
        "zh-Hant": [
          {
            label: "CONTRAST_01",
            before: "只生成答案，沒有營運 trace",
            after: "把 execution 結果連回 operational memory"
          },
          {
            label: "CONTRAST_02",
            before: "matching 停在 recommendation",
            after: "routing 一路延伸到可問責的 workflow execution"
          },
          {
            label: "CONTRAST_03",
            before: "每次都重新開始的一次性 decision",
            after: "會隨 outcome 持續累積的 reusable intelligence"
          }
        ],
        ja: [
          {
            label: "CONTRAST_01",
            before: "運用 trace を持たない answer generation",
            after: "execution 結果に接続された operational memory"
          },
          {
            label: "CONTRAST_02",
            before: "recommendation で止まる matching",
            after: "accountable な workflow execution まで続く routing"
          },
          {
            label: "CONTRAST_03",
            before: "毎回リセットされる単発 decision",
            after: "outcome とともに蓄積する reusable intelligence"
          }
        ]
      }
    },
    domainAdaptation: {
      eyebrow: {
        en: "DOMAIN_PACKS",
        "zh-Hant": "DOMAIN_PACKS",
        ja: "DOMAIN_PACKS"
      },
      title: {
        en: "One core, multiple deployment environments.",
        "zh-Hant": "同一套 core，對應多種部署環境。",
        ja: "一つの core を複数の展開環境へ。"
      },
      description: {
        en:
          "The architecture is not locked to one vertical. The same system can be adapted through domain packs that swap field schemas, policy logic, workflow states, and operator surfaces while keeping the underlying execution core intact.",
        "zh-Hant":
          "這套架構不綁死在單一 vertical。透過可替換的 domain packs，可以切換欄位 schema、政策邏輯、workflow states 與 operator surfaces，同時保留底層 execution core。",
        ja:
          "このアーキテクチャは一つの vertical に固定されません。field schema、ポリシー、workflow state、operator surface を差し替える domain pack によって、基盤 execution core を保ったまま適応できます。"
      },
      items: {
        en: [
          {
            label: "PACK_01",
            title: "Immigration workflow platforms",
            body: "Case intake, document readiness, risk flags, and guided next steps inside structured processing paths."
          },
          {
            label: "PACK_02",
            title: "Condo / HOA management systems",
            body: "Resident issues, vendor coordination, triage rules, evidence tracking, and escalation control."
          },
          {
            label: "PACK_03",
            title: "Legal service coordination",
            body: "Matter intake, practitioner fit, task routing, timeline pressure, and accountable handoffs."
          },
          {
            label: "PACK_04",
            title: "Healthcare workflow systems",
            body: "Structured intake, eligibility logic, routing urgency, task ownership, and audit-sensitive process state."
          },
          {
            label: "PACK_05",
            title: "Multi-party operational marketplaces",
            body: "Trust signals, dual-side evaluation, task orchestration, and performance memory beyond simple listing logic."
          },
          {
            label: "PACK_06",
            title: "High-friction service delivery environments",
            body: "Any environment where the hard part is not only selection, but accountable execution under uncertainty."
          }
        ],
        "zh-Hant": [
          {
            label: "PACK_01",
            title: "移民工作流平台",
            body: "在結構化處理路徑中管理案件 intake、文件 readiness、風險標記與下一步引導。"
          },
          {
            label: "PACK_02",
            title: "Condo / HOA 管理系統",
            body: "整合住戶問題、供應商協調、分流規則、證據追蹤與升級控制。"
          },
          {
            label: "PACK_03",
            title: "法律服務協調平台",
            body: "處理 matter intake、執業者適配、任務分流、時間壓力與可問責交接。"
          },
          {
            label: "PACK_04",
            title: "醫療工作流系統",
            body: "支援結構化 intake、資格邏輯、緊急度 routing、任務所有權與可稽核流程狀態。"
          },
          {
            label: "PACK_05",
            title: "多方營運型 marketplace",
            body: "把 trust signals、雙側評估、任務編排與表現記憶帶進 listing 之後。"
          },
          {
            label: "PACK_06",
            title: "高摩擦服務交付環境",
            body: "任何真正困難點在於不確定條件下可問責 execution，而不只是 selection 的場景。"
          }
        ],
        ja: [
          {
            label: "PACK_01",
            title: "移民ワークフロープラットフォーム",
            body: "構造化された処理経路の中で、case intake、書類 readiness、リスクフラグ、次の行動を扱います。"
          },
          {
            label: "PACK_02",
            title: "Condo / HOA 管理システム",
            body: "居住者対応、ベンダー調整、トリアージルール、証拠追跡、エスカレーション管理を支えます。"
          },
          {
            label: "PACK_03",
            title: "法務サービス協調プラットフォーム",
            body: "matter intake、担当者適合、タスク routing、期限圧力、accountable な handoff を処理します。"
          },
          {
            label: "PACK_04",
            title: "医療ワークフローシステム",
            body: "構造化 intake、適格ロジック、緊急度 routing、担当、監査感度の高い process state を支えます。"
          },
          {
            label: "PACK_05",
            title: "複数当事者の運用 marketplace",
            body: "単純な listing を超えて、trust signals、両側評価、タスクオーケストレーション、実績 memory を扱います。"
          },
          {
            label: "PACK_06",
            title: "高摩擦サービス提供環境",
            body: "課題が selection だけでなく、不確実性下での accountable な execution にある環境全般です。"
          }
        ]
      }
    },
    deploymentVectors: {
      eyebrow: {
        en: "DEPLOYMENT_VECTORS",
        "zh-Hant": "DEPLOYMENT_VECTORS",
        ja: "DEPLOYMENT_VECTORS"
      },
      title: {
        en: "Current Bento directions that sit closest to this operating thesis.",
        "zh-Hant": "目前最接近這套 operating thesis 的 Bento 方向。",
        ja: "現在の Bento 方向の中で、この operating thesis に最も近いもの。"
      },
      description: {
        en:
          "These tracks are not random demos. They are current Bento vectors that show how the core system logic can move into real product surfaces.",
        "zh-Hant":
          "這些不是隨機 demo，而是目前 Bento 真正在推進的方向，用來展示核心系統邏輯如何落到真實產品表面。",
        ja:
          "これらはランダムな demo ではなく、core system logic が実際のプロダクト面へどう移るかを示す現在の Bento vector です。"
      }
    },
    closing: {
      eyebrow: {
        en: "CLOSING / CTA",
        "zh-Hant": "CLOSING / CTA",
        ja: "CLOSING / CTA"
      },
      title: {
        en: "If the environment is high-friction, the answer is not another layer of soft matching.",
        "zh-Hant": "如果環境本身就是高摩擦，解法就不會是再多一層柔軟的 matching。",
        ja: "環境そのものが高摩擦なら、解決策はもう一段の柔らかい matching ではありません。"
      },
      description: {
        en:
          "Bring Bento AIII a service environment that needs structured intake, constraint-aware routing, accountable execution, and memory that compounds through real outcomes.",
        "zh-Hant":
          "如果你的服務環境需要結構化 intake、受約束的 routing、可問責的 execution，以及會隨真實結果累積的 memory，可以直接帶來和 Bento AIII 討論。",
        ja:
          "構造化 intake、制約を踏まえた routing、accountable な execution、そして実際の結果で蓄積する memory が必要な環境があれば、Bento AIII に持ち込んでください。"
      }
    }
  }
};

export function getSystemSiteCopy(locale: Locale): SystemSiteCopy {
  return {
    company: {
      positioning: pick(content.company.positioning, locale),
      description: pick(content.company.description, locale),
      mission: pick(content.company.mission, locale),
      disclosure: pick(content.company.disclosure, locale)
    },
    header: {
      brandTagline: pick(content.header.brandTagline, locale),
      systemState: pick(content.header.systemState, locale),
      systemMode: pick(content.header.systemMode, locale),
      buildRef: pick(content.header.buildRef, locale)
    },
    footer: {
      tagline: pick(content.footer.tagline, locale),
      title: pick(content.footer.title, locale),
      description: pick(content.footer.description, locale),
      policy: pick(content.footer.policy, locale),
      closingKicker: pick(content.footer.closingKicker, locale),
      closingLine: pick(content.footer.closingLine, locale)
    },
    home: {
      shellBar: {
        entry: pick(content.home.shellBar.entry, locale),
        mode: pick(content.home.shellBar.mode, locale),
        railState: pick(content.home.shellBar.railState, locale),
        trace: pick(content.home.shellBar.trace, locale)
      },
      hero: {
        eyebrow: pick(content.home.hero.eyebrow, locale),
        title: pick(content.home.hero.title, locale),
        lead: pick(content.home.hero.lead, locale),
        summary: pick(content.home.hero.summary, locale),
        differentiation: cloneList(pick(content.home.hero.differentiation, locale)),
        primaryLabel: pick(content.home.hero.primaryLabel, locale),
        secondaryLabel: pick(content.home.hero.secondaryLabel, locale),
        railTitle: pick(content.home.hero.railTitle, locale),
        railModules: cloneList(pick(content.home.hero.railModules, locale)),
        telemetryTitle: pick(content.home.hero.telemetryTitle, locale),
        telemetryItems: cloneObjects(pick(content.home.hero.telemetryItems, locale)),
        telemetryTraceTitle: pick(content.home.hero.telemetryTraceTitle, locale),
        telemetryTrace: cloneList(pick(content.home.hero.telemetryTrace, locale)),
        terminalContext: pick(content.home.hero.terminalContext, locale),
        terminalStatus: pick(content.home.hero.terminalStatus, locale),
        terminalNote: pick(content.home.hero.terminalNote, locale)
      },
      coreStatement: {
        eyebrow: pick(content.home.coreStatement.eyebrow, locale),
        title: pick(content.home.coreStatement.title, locale),
        description: pick(content.home.coreStatement.description, locale),
        items: cloneObjects(pick(content.home.coreStatement.items, locale))
      },
      problemField: {
        eyebrow: pick(content.home.problemField.eyebrow, locale),
        title: pick(content.home.problemField.title, locale),
        description: pick(content.home.problemField.description, locale),
        items: cloneObjects(pick(content.home.problemField.items, locale))
      },
      modules: {
        eyebrow: pick(content.home.modules.eyebrow, locale),
        title: pick(content.home.modules.title, locale),
        description: pick(content.home.modules.description, locale),
        items: modules[locale].map((item) => ({
          ...item,
          bullets: [...item.bullets]
        }))
      },
      executionLoop: {
        eyebrow: pick(content.home.executionLoop.eyebrow, locale),
        title: pick(content.home.executionLoop.title, locale),
        description: pick(content.home.executionLoop.description, locale),
        steps: cloneObjects(pick(content.home.executionLoop.steps, locale))
      },
      whyItMatters: {
        eyebrow: pick(content.home.whyItMatters.eyebrow, locale),
        title: pick(content.home.whyItMatters.title, locale),
        description: pick(content.home.whyItMatters.description, locale),
        contrasts: cloneObjects(pick(content.home.whyItMatters.contrasts, locale))
      },
      domainAdaptation: {
        eyebrow: pick(content.home.domainAdaptation.eyebrow, locale),
        title: pick(content.home.domainAdaptation.title, locale),
        description: pick(content.home.domainAdaptation.description, locale),
        items: cloneObjects(pick(content.home.domainAdaptation.items, locale))
      },
      deploymentVectors: {
        eyebrow: pick(content.home.deploymentVectors.eyebrow, locale),
        title: pick(content.home.deploymentVectors.title, locale),
        description: pick(content.home.deploymentVectors.description, locale)
      },
      closing: {
        eyebrow: pick(content.home.closing.eyebrow, locale),
        title: pick(content.home.closing.title, locale),
        description: pick(content.home.closing.description, locale)
      }
    }
  };
}

export function getSystemCompanyProfile(locale: Locale) {
  return getSystemSiteCopy(locale).company;
}

export function getSystemHomeModules(locale: Locale): SystemModule[] {
  return modules[locale].map((item) => ({
    ...item,
    bullets: [...item.bullets]
  }));
}
