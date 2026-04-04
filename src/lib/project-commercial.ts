import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;
type LocalizedParagraphs = Record<Locale, string[]>;

export type ProjectStatus = "Live" | "Prototype" | "Internal" | "Concept";

export type ProjectHighlight = {
  title: string;
  body: string;
};

export type ProjectFlowStep = {
  title: string;
  body: string;
};

export type CommercialProjectView = {
  slug: string;
  name: string;
  positioning: string;
  platform: string;
  summary: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  comingSoon: boolean;
  outcome: string;
  disclosure: string;
  commercial: {
    idealUsers: string;
    operationalProblem: string;
    deliveryScope: string;
    valueCase: string;
  };
  detail: {
    whatItDoes: string[];
    whyItMatters: string;
    highlights: ProjectHighlight[];
    flowSteps: ProjectFlowStep[];
    systemLayer: string;
    nextStep: string;
    stage: string;
  };
};

type LocalizedProjectDefinition = {
  slug: string;
  status: ProjectStatus;
  featured: boolean;
  comingSoon?: boolean;
  name: LocalizedText;
  positioning: LocalizedText;
  platform: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  tags: LocalizedList;
  statusLabel: LocalizedText;
  outcome: LocalizedText;
  disclosure: LocalizedText;
  commercial: {
    idealUsers: LocalizedText;
    operationalProblem: LocalizedText;
    deliveryScope: LocalizedText;
    valueCase: LocalizedText;
  };
  detail: {
    whatItDoes: LocalizedParagraphs;
    whyItMatters: LocalizedText;
    highlights: Record<Locale, ProjectHighlight[]>;
    flowSteps: Record<Locale, ProjectFlowStep[]>;
    systemLayer: LocalizedText;
    nextStep: LocalizedText;
    stage: LocalizedText;
  };
};

function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}

const projectDefinitions = [
  {
    slug: "shiok",
    status: "Prototype",
    featured: true,
    name: {
      en: "Shiok",
      "zh-Hant": "Shiok",
      ja: "Shiok"
    },
    positioning: {
      en: "AI dining copilot for better ordering, automatic meal logging, and weekly review.",
      "zh-Hant": "面向更好點餐決策、自動餐食記錄與每週回顧的 AI 外食 Copilot。",
      ja: "より良い注文判断、自動食事記録、週次レビューのための AI 外食 Copilot。"
    },
    platform: {
      en: "Product system",
      "zh-Hant": "產品系統",
      ja: "プロダクトシステム"
    },
    summary: {
      en: "Built around a real dining-out loop: decide before ordering, capture after eating, and review over time.",
      "zh-Hant": "圍繞真實外食閉環打造：在點餐前做判斷、在用餐後完成記錄，並在之後持續回顧。",
      ja: "注文前の判断、食後の記録、その後の継続レビューまでをつなぐ実際の外食ループとして設計されています。"
    },
    description: {
      en: "Shiok is not just a meal log or a budget tracker. It is a closed-loop dining system shaped around constraints, review, and continuous improvement.",
      "zh-Hant": "Shiok 不只是餐食記錄或預算工具，而是一套圍繞限制條件、審核回路與持續改善而設計的外食閉環系統。",
      ja: "Shiok は単なる食事記録や予算管理ではなく、制約、レビュー、継続改善を前提に設計された外食の閉ループシステムです。"
    },
    tags: {
      en: ["AI Dining", "Review Loop", "Web Dashboard", "Quality Gates"],
      "zh-Hant": ["AI 外食", "審核回路", "網頁儀表板", "品質閘門"],
      ja: ["AI 外食", "レビュー循環", "Web ダッシュボード", "品質ゲート"]
    },
    statusLabel: {
      en: "Active Project",
      "zh-Hant": "持續開發中",
      ja: "進行中"
    },
    outcome: {
      en: "A real dining workflow that already connects decision support, meal capture, review, and weekly feedback into one product loop.",
      "zh-Hant": "目前已形成把點餐決策、餐後記錄、審核修正與每週回饋串起來的真實產品閉環。",
      ja: "注文支援、食後記録、レビュー修正、週次フィードバックを一つのプロダクトループとしてつなげる段階まで進んでいます。"
    },
    disclosure: {
      en: "This page reflects the current product system and engineering direction. Sync, operations, and quality layers are still under active refinement.",
      "zh-Hant": "這一頁呈現的是目前的產品系統與工程方向；同步、營運與品質層能力仍在持續收斂中。",
      ja: "このページは現在のプロダクトシステムと実装方向を示しています。同期、運用、品質レイヤーの一部は引き続き調整中です。"
    },
    commercial: {
      idealUsers: {
        en: "People who dine out often and need better ordering discipline, reliable meal capture, and a usable weekly review loop.",
        "zh-Hant": "適合經常外食、需要更好點餐判斷、可靠餐食記錄與可持續每週回顧回路的人。",
        ja: "外食の頻度が高く、注文判断、食事記録、週次レビューを一つの流れで整えたい人に向いています。"
      },
      operationalProblem: {
        en: "Most dining decisions happen too quickly, while review happens too late or not at all. That leaves users with repeated overspending, poor ordering choices, and weak behavior visibility.",
        "zh-Hant": "多數外食決策發生得太快，而回顧往往太晚，甚至根本沒有發生，結果就是重複超支、點錯、也看不清自己的外食行為。",
        ja: "多くの外食判断は短時間で行われる一方、振り返りは遅れるか存在しません。その結果、無駄な出費や判断ミスが繰り返され、行動の見え方も弱くなります。"
      },
      deliveryScope: {
        en: "Ordering support, post-meal parse and review, weekly insight, sample-based quality checks, and dashboard or export foundations.",
        "zh-Hant": "交付範圍聚焦在點餐支援、餐後解析與審核、每週洞察、樣本式品質驗證，以及 dashboard / 匯出前置能力。",
        ja: "提供範囲は、注文支援、食後の解析とレビュー、週次インサイト、サンプルベースの品質検証、ダッシュボードやエクスポート基盤に絞っています。"
      },
      valueCase: {
        en: "It creates leverage before and after the meal, instead of behaving like a generic food log that only records what already happened.",
        "zh-Hant": "它的價值在於同時介入餐前與餐後，而不是像一般食物記錄工具那樣，只記下已經發生的結果。",
        ja: "価値が出るのは、食後の記録だけでなく食前の判断にも関与する点です。単なる食事ログとは役割が異なります。"
      }
    },
    detail: {
      whatItDoes: {
        en: [
          "Shiok is built around a real external dining workflow: decide before ordering, capture after eating, and review over time.",
          "It is not just a meal log or a budget tracker, but a closed-loop dining system designed around constraints, feedback, and continuous improvement."
        ],
        "zh-Hant": [
          "Shiok 圍繞真實外食流程打造：在點餐前做判斷、在吃完後完成記錄，並在之後持續回顧。",
          "它不只是餐食記錄或預算追蹤工具，而是一套以限制條件、回饋與持續改善為核心的閉環外食系統。"
        ],
        ja: [
          "Shiok は、注文前に判断し、食後に記録し、その後に振り返るという実際の外食フローを軸にしています。",
          "単なる食事ログや予算管理ではなく、制約、フィードバック、継続改善を前提にした閉ループの外食システムです。"
        ]
      },
      whyItMatters: {
        en: "Most tools either help after the meal or reduce the experience to statistics. Shiok matters because it supports the decision itself, keeps the capture reviewable, and turns repeated dining behavior into something a user can actually improve.",
        "zh-Hant": "大多數工具不是只在餐後發揮作用，就是把外食簡化成統計數字。Shiok 更有價值的地方，在於它同時支援決策本身、讓記錄可審核，並把重複的外食行為變成真正可以改善的東西。",
        ja: "多くのツールは食後の処理だけを助けるか、外食を単なる統計に落とし込みます。Shiok は判断そのものを支援し、記録をレビュー可能にし、繰り返す外食行動を改善可能な形に変える点に価値があります。"
      },
      highlights: {
        en: [
          {
            title: "Ordering support",
            body: "Helps users make better decisions before ordering instead of only logging afterward."
          },
          {
            title: "Capture and correction",
            body: "Supports parsing, review, and correction after meals so the record stays usable."
          },
          {
            title: "Weekly review",
            body: "Turns repeated dining behavior into a reviewable weekly feedback loop."
          },
          {
            title: "Quality control",
            body: "Uses sample libraries, regression coverage, and quality gates to keep behavior stable."
          },
          {
            title: "Expansion-ready base",
            body: "Already includes foundations for dashboard views, export, and sync-readiness."
          }
        ],
        "zh-Hant": [
          {
            title: "點餐前輔助",
            body: "在點餐前提供更好的判斷支援，而不是只在事後留下記錄。"
          },
          {
            title: "餐後解析與修正",
            body: "支援餐後的解析、審核與修正，讓記錄真正可用。"
          },
          {
            title: "每週回顧",
            body: "把重複外食行為轉成可以被檢視的每週回饋循環。"
          },
          {
            title: "品質驗證",
            body: "以樣本庫、回歸驗證與 quality gate 維持行為穩定。"
          },
          {
            title: "後續擴展基礎",
            body: "已具備 dashboard、匯出與同步前置能力的基礎。"
          }
        ],
        ja: [
          {
            title: "注文前の支援",
            body: "食後の記録だけでなく、注文前の判断そのものを支えます。"
          },
          {
            title: "食後の解析と修正",
            body: "食後に解析、レビュー、修正を行い、記録を使える状態に保ちます。"
          },
          {
            title: "週次レビュー",
            body: "繰り返す外食行動を週次で見直せるフィードバックループに変えます。"
          },
          {
            title: "品質管理",
            body: "サンプルライブラリ、回帰確認、quality gate で挙動を安定させます。"
          },
          {
            title: "拡張準備",
            body: "ダッシュボード、エクスポート、同期準備の基盤をすでに持っています。"
          }
        ]
      },
      flowSteps: {
        en: [
          {
            title: "Decide",
            body: "Check budget, constraints, and fit before the order is placed."
          },
          {
            title: "Capture",
            body: "Parse what happened after the meal and keep it reviewable instead of letting it disappear."
          },
          {
            title: "Review",
            body: "Use weekly patterns and pending review states to improve future decisions."
          }
        ],
        "zh-Hant": [
          {
            title: "Decide",
            body: "在下單前先檢查預算、限制條件與選擇是否合適。"
          },
          {
            title: "Capture",
            body: "在用餐後解析實際發生的內容，並讓記錄保持可審核，而不是直接流失。"
          },
          {
            title: "Review",
            body: "透過每週模式與待審核狀態，回過頭改善下一次的決策。"
          }
        ],
        ja: [
          {
            title: "Decide",
            body: "注文前に予算、制約、適合性を確認します。"
          },
          {
            title: "Capture",
            body: "食後に実際の内容を解析し、記録をレビュー可能な状態で残します。"
          },
          {
            title: "Review",
            body: "週次の傾向と未処理レビューを使って次回の判断を改善します。"
          }
        ]
      },
      systemLayer: {
        en: "The AI layer is applied inside a bounded workflow: menu understanding, post-meal parsing, warning states, and review assistance. The surrounding system layer matters just as much, because sample libraries, regression checks, and quality gates keep the product from drifting as automation expands.",
        "zh-Hant": "AI 層並不是獨立存在，而是被放進一個有邊界的流程裡：它負責菜單理解、餐後解析、warning 狀態與審核輔助。真正讓產品可持續的，還包括周邊的系統層，例如樣本庫、回歸檢查與 quality gate，避免自動化擴張後行為失控。",
        ja: "AI レイヤーは独立して存在するのではなく、制約のあるワークフローの中で使われます。メニュー理解、食後解析、warning 状態、レビュー支援を担い、その周囲ではサンプルライブラリ、回帰確認、quality gate が挙動の逸脱を防ぎます。"
      },
      nextStep: {
        en: "Tighten the review loop, quality coverage, and sync-readiness so the product can scale without losing trust.",
        "zh-Hant": "下一步重點是收斂審核回路、品質覆蓋與同步前置能力，讓產品擴張時仍保持可信。",
        ja: "次の焦点は、レビュー循環、品質カバレッジ、同期準備を詰め、拡張しても信頼性を保つことです。"
      },
      stage: {
        en: "Active product system in progress.",
        "zh-Hant": "持續開發中的產品系統。",
        ja: "継続開発中のプロダクトシステムです。"
      }
    }
  },
  {
    slug: "you-wife-list",
    status: "Prototype",
    featured: true,
    name: {
      en: "You Wife List",
      "zh-Hant": "You Wife List",
      ja: "You Wife List"
    },
    positioning: {
      en: "An offline-first grocery workflow that turns planning, stocking, and replenishment into one continuous loop.",
      "zh-Hant": "一套 offline-first 的購物與儲備工作流，把規劃、補貨與消耗整理成同一個循環。",
      ja: "計画、在庫、補充を一つの連続したループにまとめる offline-first の買い物ワークフロー。"
    },
    platform: {
      en: "Offline-first iOS system",
      "zh-Hant": "離線優先 iOS 系統",
      ja: "オフラインファースト iOS システム"
    },
    summary: {
      en: "A grocery and pantry app organized around List, Purchased, Inventory, and Used up instead of fragmented shopping notes.",
      "zh-Hant": "它把購物與 pantry 管理整理成 List、Purchased、Inventory、Used up 四段閉環，而不是零散購物清單與臨時記憶。",
      ja: "買い物とパントリー管理を List、Purchased、Inventory、Used up の閉ループに整理し、断片的なメモや記憶頼みから離れます。"
    },
    description: {
      en: "You Wife List is designed as a privacy-first household system that reduces fragmented grocery behavior and turns repeated purchase decisions into a more structured cycle.",
      "zh-Hant": "You Wife List 被設計成一套 privacy-first 的家庭工作流系統，目標是降低零散購物行為，並把重複採購決策整理成更有結構的循環。",
      ja: "You Wife List は privacy-first の家庭向けワークフローとして設計されており、断片化した買い物行動を減らし、繰り返しの購入判断をより構造化されたサイクルに変えます。"
    },
    tags: {
      en: ["Offline-first", "iOS Product", "Inventory Signals", "Privacy-first"],
      "zh-Hant": ["離線優先", "iOS 產品", "庫存訊號", "隱私優先"],
      ja: ["オフラインファースト", "iOS プロダクト", "在庫シグナル", "プライバシーファースト"]
    },
    statusLabel: {
      en: "Active Project",
      "zh-Hant": "持續開發中",
      ja: "進行中"
    },
    outcome: {
      en: "A household workflow that connects planning, purchasing, inventory visibility, and replenishment without depending on cloud LLM services.",
      "zh-Hant": "目前已形成把規劃、購買、庫存可見性與補貨串起來的家庭工作流，而且不依賴雲端 LLM 服務。",
      ja: "計画、購入、在庫可視化、補充を一つにつなぐ家庭向けワークフローとして形になっており、クラウド LLM 依存を前提にしていません。"
    },
    disclosure: {
      en: "This page describes the current product direction and system logic. The app is still evolving, but the offline-first and privacy-first boundaries are already explicit.",
      "zh-Hant": "這一頁描述的是目前的產品方向與系統邏輯。應用仍在迭代中，但 offline-first 與 privacy-first 的邊界已經明確。",
      ja: "このページは現在のプロダクト方向とシステム設計を示しています。アプリは継続的に進化していますが、offline-first と privacy-first の境界はすでに明確です。"
    },
    commercial: {
      idealUsers: {
        en: "Households that want a more disciplined loop across planning, shopping, pantry visibility, and replenishment.",
        "zh-Hant": "適合想把規劃、採買、庫存可見性與補貨整理成穩定閉環的家庭使用者。",
        ja: "計画、買い物、在庫の見え方、補充を一つの安定したループとして扱いたい家庭に向いています。"
      },
      operationalProblem: {
        en: "Most grocery behavior is fragmented across temporary lists, memory, and store-time decisions, so stocking and replenishment become noisy and repetitive.",
        "zh-Hant": "多數購物行為散落在臨時清單、記憶與當下決定之間，結果讓備貨與補貨變得反覆又混亂。",
        ja: "多くの買い物行動は一時的なリスト、記憶、その場の判断に分散しており、備蓄と補充がノイズの多い反復作業になります。"
      },
      deliveryScope: {
        en: "Structured item entry, purchase state changes, inventory signals, budget awareness, and local-first assistance across the household loop.",
        "zh-Hant": "交付範圍聚焦在結構化商品輸入、購買狀態流轉、庫存訊號、預算感知，以及貫穿家庭循環的 local-first 輔助。",
        ja: "提供範囲は、構造化された商品入力、購入状態の遷移、在庫シグナル、予算把握、そして家庭ループ全体を支える local-first 補助です。"
      },
      valueCase: {
        en: "It is more useful than a basic grocery list because it keeps planning, stock visibility, and re-buy timing in one repeatable system.",
        "zh-Hant": "它比單純購物清單更有價值，因為它把規劃、庫存可見性與再次購買時機放進同一套可重複使用的系統裡。",
        ja: "単なる買い物リストより有効なのは、計画、在庫の見え方、再購入のタイミングを一つの再利用可能なシステムにまとめているためです。"
      }
    },
    detail: {
      whatItDoes: {
        en: [
          "You Wife List is an offline-first grocery and pantry workflow app designed around a closed-loop household system: List, Purchased, Inventory, and Used up.",
          "It focuses on reducing fragmented shopping behavior and turning repeated household purchase decisions into a more structured cycle."
        ],
        "zh-Hant": [
          "You Wife List 是一套 offline-first 的購物與 pantry 工作流應用，核心是一個家庭閉環：List、Purchased、Inventory、Used up。",
          "它聚焦在降低零散購物行為，並把重複出現的家庭採購決策整理成更有結構的循環。"
        ],
        ja: [
          "You Wife List は、List、Purchased、Inventory、Used up という家庭向けの閉ループを軸にした offline-first の買い物 / パントリーアプリです。",
          "断片的な買い物行動を減らし、繰り返される家庭の購入判断をより構造化されたサイクルへ変えることに重点を置いています。"
        ]
      },
      whyItMatters: {
        en: "Grocery behavior usually breaks down between intention and replenishment. A list alone does not tell a household what was bought, what is still available, what is running low, or what should be bought again next. This system matters because it closes that loop without giving up privacy.",
        "zh-Hant": "家庭購物最容易斷裂的地方，往往是在「想買什麼」與「何時該再買」之間。單純清單無法告訴使用者買了什麼、還剩什麼、哪些快用完、哪些該下次再補。這個系統的價值在於，它能補上這個閉環，同時不犧牲隱私邊界。",
        ja: "家庭の買い物は、『何を買うか』と『いつ補充すべきか』の間で崩れやすくなります。単なるリストでは、何を買ったか、何が残っているか、何が減っているか、次に何を買うべきかが見えません。このシステムの価値は、そのループをプライバシーを保ったまま閉じる点にあります。"
      },
      highlights: {
        en: [
          {
            title: "Smart quick add",
            body: "Supports faster structured item entry without turning grocery capture into manual friction."
          },
          {
            title: "Local suggestions",
            body: "Uses history-based local heuristics instead of depending on third-party AI APIs."
          },
          {
            title: "Inventory signals",
            body: "Surfaces low stock, run-out risk, and expiry awareness inside the workflow."
          },
          {
            title: "Budget support",
            body: "Keeps price and budget estimation visible during planning and replenishment."
          },
          {
            title: "Recipe conversion",
            body: "Turns recipe templates into structured grocery entries when that fits the task."
          }
        ],
        "zh-Hant": [
          {
            title: "Smart quick add",
            body: "讓商品能更快以結構化方式輸入，不把紀錄過程變成新的負擔。"
          },
          {
            title: "在地建議邏輯",
            body: "以歷史資料與本地 heuristics 產生建議，不依賴第三方 AI API。"
          },
          {
            title: "庫存訊號",
            body: "在工作流中顯示低庫存、即將用完與接近過期等訊號。"
          },
          {
            title: "預算支援",
            body: "在規劃與補貨時維持價格與預算估算的可見性。"
          },
          {
            title: "食譜轉清單",
            body: "在合適的場景下，把 recipe template 轉成結構化購物項目。"
          }
        ],
        ja: [
          {
            title: "Smart quick add",
            body: "買い物項目を構造化したまま素早く追加でき、入力自体が負担になりません。"
          },
          {
            title: "ローカル提案",
            body: "外部 AI API ではなく、履歴ベースのローカル heuristics で提案します。"
          },
          {
            title: "在庫シグナル",
            body: "在庫不足、切れそうな項目、期限意識をワークフローの中で見せます。"
          },
          {
            title: "予算サポート",
            body: "計画と補充の段階で価格と予算見積もりを見える状態に保ちます。"
          },
          {
            title: "レシピ変換",
            body: "必要な場面では、レシピテンプレートを構造化された買い物項目へ変換します。"
          }
        ]
      },
      flowSteps: {
        en: [
          {
            title: "List",
            body: "Capture what needs to be bought in a structured way."
          },
          {
            title: "Purchased",
            body: "Move bought items out of intent and into confirmed household stock."
          },
          {
            title: "Inventory",
            body: "Track what is currently available and what is becoming risky or low."
          },
          {
            title: "Used up",
            body: "Mark depletion so replenishment becomes timely instead of reactive."
          }
        ],
        "zh-Hant": [
          {
            title: "List",
            body: "把需要購買的項目以結構化方式先記下來。"
          },
          {
            title: "Purchased",
            body: "把已購買項目從「意圖」轉成已確認的家庭庫存。"
          },
          {
            title: "Inventory",
            body: "持續看見目前有哪些東西、哪些快沒了、哪些開始有風險。"
          },
          {
            title: "Used up",
            body: "標記消耗完成，讓補貨成為及時動作，而不是事後反應。"
          }
        ],
        ja: [
          {
            title: "List",
            body: "買う必要があるものを構造化して記録します。"
          },
          {
            title: "Purchased",
            body: "購入済み項目を『予定』から『確定した在庫』へ移します。"
          },
          {
            title: "Inventory",
            body: "今あるものと、減ってきたもの、注意が必要なものを見えるようにします。"
          },
          {
            title: "Used up",
            body: "使い切りを記録し、補充を後手ではなく適切なタイミングで行えるようにします。"
          }
        ]
      },
      systemLayer: {
        en: "The system deliberately stays privacy-first. Local heuristics, structured item states, and inventory signals do most of the work. That keeps the product useful without requiring a cloud LLM dependency or pushing household data into an unnecessary external stack.",
        "zh-Hant": "這套系統刻意維持 privacy-first。大部分能力來自本地 heuristics、結構化項目狀態與庫存訊號，而不是把家庭資料送進不必要的雲端 LLM 流程。",
        ja: "このシステムは意図的に privacy-first を保っています。ローカル heuristics、構造化された項目状態、在庫シグナルが主な役割を担い、家庭データを不要な外部 LLM スタックへ送る前提にしていません。"
      },
      nextStep: {
        en: "Continue tightening inventory accuracy, local suggestion quality, and recipe or budget flows while keeping the product fully local-first.",
        "zh-Hant": "下一步會持續收斂庫存準確度、本地建議品質，以及 recipe / 預算流程，同時維持 fully local-first 的邊界。",
        ja: "次の焦点は、在庫精度、ローカル提案の質、レシピ / 予算フローを磨きながら、fully local-first の境界を守ることです。"
      },
      stage: {
        en: "Active offline-first product in progress.",
        "zh-Hant": "持續開發中的 offline-first 產品。",
        ja: "継続開発中の offline-first プロダクトです。"
      }
    }
  },
  {
    slug: "tideus",
    status: "Prototype",
    featured: true,
    name: {
      en: "Tideus",
      "zh-Hant": "Tideus",
      ja: "Tideus"
    },
    positioning: {
      en: "A case-first AI workflow platform for Canada immigration preparation.",
      "zh-Hant": "一套以案件為核心、面向加拿大移民準備的 AI 工作流平台。",
      ja: "カナダ移民準備のための、ケースファーストな AI ワークフロープラットフォーム。"
    },
    platform: {
      en: "Workflow platform",
      "zh-Hant": "工作流平台",
      ja: "ワークフロープラットフォーム"
    },
    summary: {
      en: "Built for temporary resident preparation with an initial focus on Visitor Record and Study Permit Extension.",
      "zh-Hant": "面向臨時居民申請準備，初期聚焦在 Visitor Record 與 Study Permit Extension。",
      ja: "一時滞在者向け申請準備を対象とし、初期は Visitor Record と Study Permit Extension に集中しています。"
    },
    description: {
      en: "Tideus does not act like a broad chatbot. It organizes the case itself: facts, document status, missing items, risk flags, timeline pressure, and next steps.",
      "zh-Hant": "Tideus 不是泛用聊天機器人，而是把案件本身整理清楚：事實、文件狀態、缺件、風險標記、時間壓力與下一步。",
      ja: "Tideus は広範なチャットボットとして振る舞うのではなく、案件そのものを整理します。事実関係、書類状態、不足項目、リスクフラグ、期限圧力、次の行動を一つの流れで扱います。"
    },
    tags: {
      en: ["Case Workflow", "Structured Intake", "Risk Review", "Professional Handoff"],
      "zh-Hant": ["案件工作流", "結構化 Intake", "風險審查", "專業交接"],
      ja: ["ケースワークフロー", "構造化 Intake", "リスクレビュー", "専門家への引き継ぎ"]
    },
    statusLabel: {
      en: "Active Project",
      "zh-Hant": "持續開發中",
      ja: "進行中"
    },
    outcome: {
      en: "A case workflow that makes facts, document readiness, and risk review visible before a case becomes rushed or fragmented.",
      "zh-Hant": "目前已形成一套能在案件變得急迫或碎片化之前，先把事實、文件完整度與風險審查整理清楚的流程。",
      ja: "案件が急ぎや断片状態に陥る前に、事実、書類準備度、リスクレビューを見える形で整理できるワークフローになっています。"
    },
    disclosure: {
      en: "This page reflects the current workflow platform direction. It does not claim legal automation or completed public deployment.",
      "zh-Hant": "這一頁描述的是目前的工作流平台方向，並不聲稱法律自動化或已完成公開部署。",
      ja: "このページは現在のワークフロープラットフォームの方向を示しており、法的自動化や公開済み導入を主張するものではありません。"
    },
    commercial: {
      idealUsers: {
        en: "Applicants and professional teams who need a case-first workflow instead of a broad immigration chatbot.",
        "zh-Hant": "適合需要以案件為核心工作流、而不是泛用移民聊天機器人的申請者與專業處理團隊。",
        ja: "広範な移民チャットボットではなく、案件中心のワークフローを必要とする申請者や実務チームに向いています。"
      },
      operationalProblem: {
        en: "Immigration preparation becomes fragile when facts, document readiness, missing items, and deadlines live across disconnected notes or chats.",
        "zh-Hant": "當事實、文件完整度、缺件與期限分散在不同筆記或對話裡時，移民申請準備很容易變得脆弱而混亂。",
        ja: "事実関係、書類準備度、不足項目、期限が別々のメモやチャットに散らばると、移民準備は非常に脆くなります。"
      },
      deliveryScope: {
        en: "Structured intake, document tracking, risk review, checklist output, and case history or handoff support inside bounded workflow steps.",
        "zh-Hant": "交付範圍聚焦在結構化 intake、文件追蹤、風險審查、checklist 輸出，以及案件歷史與交接支援。",
        ja: "提供範囲は、構造化 intake、書類追跡、リスクレビュー、checklist 出力、案件履歴と引き継ぎ支援に絞られています。"
      },
      valueCase: {
        en: "Its value comes from organizing the case itself, not from pretending that open-ended chat is enough for immigration preparation.",
        "zh-Hant": "它的價值在於把案件本身整理清楚，而不是假設開放式聊天就足以處理移民準備。",
        ja: "価値があるのは、案件そのものを整理する点であり、自由会話だけで移民準備が成立すると見なしていないことです。"
      }
    },
    detail: {
      whatItDoes: {
        en: [
          "Tideus is an AI-powered immigration case workflow platform built for Canada temporary resident preparation, with an initial focus on Visitor Record and Study Permit Extension.",
          "Instead of acting like a broad chatbot, it organizes the case itself: facts, document status, missing items, risk flags, timeline pressure, and next steps."
        ],
        "zh-Hant": [
          "Tideus 是一套面向加拿大臨時居民申請準備的 AI 案件工作流平台，初期聚焦在 Visitor Record 與 Study Permit Extension。",
          "它不是泛用聊天機器人，而是把案件本身整理清楚：事實、文件狀態、缺件、風險標記、時間壓力與下一步。"
        ],
        ja: [
          "Tideus はカナダの一時滞在者向け申請準備のための AI ケースワークフロープラットフォームで、初期は Visitor Record と Study Permit Extension に集中しています。",
          "広範なチャットボットとして振る舞うのではなく、案件そのものを整理します。事実、書類状態、不足項目、リスクフラグ、期限圧力、次の行動が対象です。"
        ]
      },
      whyItMatters: {
        en: "Immigration preparation is high-friction because the work is not just about answers. It is about case structure, missing evidence, readiness, and timing. Tideus matters because it makes those things visible and review-ready instead of leaving them hidden inside chat threads.",
        "zh-Hant": "移民準備的高摩擦點，不只是找答案，而是案件結構、證據缺口、準備程度與時間安排本身。Tideus 的價值在於，它讓這些東西變得可見、可審查，而不是埋在零碎對話裡。",
        ja: "移民準備の難しさは、単に答えを得ることではありません。案件構造、証拠の不足、準備度、期限管理そのものが問題です。Tideus はそれらを見える形にし、レビュー可能にする点に価値があります。"
      },
      highlights: {
        en: [
          {
            title: "Case-first intake",
            body: "Starts from real case facts instead of generic prompt exchange."
          },
          {
            title: "Document readiness",
            body: "Tracks completeness, missing items, and readiness inside the case."
          },
          {
            title: "Review-ready output",
            body: "Produces checklist views, risk flags, and next-step guidance for follow-up."
          },
          {
            title: "Bounded AI behavior",
            body: "Keeps AI inside structured workflow boundaries rather than open-ended chat drift."
          },
          {
            title: "Handoff support",
            body: "Preserves case history so the work can be reviewed or handed over cleanly."
          }
        ],
        "zh-Hant": [
          {
            title: "案件優先 intake",
            body: "從真實案件事實開始，而不是從泛用 prompt 對話開始。"
          },
          {
            title: "文件準備度",
            body: "在案件裡追蹤完整度、缺件與 readiness。"
          },
          {
            title: "可審查輸出",
            body: "產出 checklist、風險標記與下一步建議，方便後續處理。"
          },
          {
            title: "有邊界的 AI 行為",
            body: "把 AI 限制在結構化工作流內，而不是讓它漂成開放式聊天。"
          },
          {
            title: "交接支援",
            body: "保留案件歷史，讓審查與專業交接更乾淨。"
          }
        ],
        ja: [
          {
            title: "ケースファースト intake",
            body: "汎用的な prompt のやり取りではなく、実際の案件事実から始めます。"
          },
          {
            title: "書類準備度",
            body: "案件の中で完全性、不足項目、readiness を追跡します。"
          },
          {
            title: "レビュー向け出力",
            body: "checklist、リスクフラグ、次の行動をまとめて後続作業を支えます。"
          },
          {
            title: "境界のある AI",
            body: "AI を構造化ワークフローの中に留め、自由会話へ流れないようにします。"
          },
          {
            title: "引き継ぎ支援",
            body: "案件履歴を保持し、レビューや専門家への引き継ぎをしやすくします。"
          }
        ]
      },
      flowSteps: {
        en: [
          {
            title: "Intake",
            body: "Collect case facts in a structured form instead of scattered notes."
          },
          {
            title: "Documents",
            body: "Track completeness, missing items, and readiness by document state."
          },
          {
            title: "Risk Review",
            body: "Surface gaps, pressure points, and flags that need attention before submission."
          },
          {
            title: "Next Steps",
            body: "Turn the case into review-ready outputs and follow-up actions."
          }
        ],
        "zh-Hant": [
          {
            title: "Intake",
            body: "用結構化方式收集案件事實，而不是讓資訊散落在零碎筆記中。"
          },
          {
            title: "Documents",
            body: "依文件狀態追蹤完整度、缺件與準備程度。"
          },
          {
            title: "Risk Review",
            body: "在送出前先看清缺口、壓力點與需要注意的風險標記。"
          },
          {
            title: "Next Steps",
            body: "把案件整理成可審查輸出與後續處理動作。"
          }
        ],
        ja: [
          {
            title: "Intake",
            body: "情報を断片的なメモではなく構造化された形で収集します。"
          },
          {
            title: "Documents",
            body: "書類状態ごとに完全性、不足、準備度を追跡します。"
          },
          {
            title: "Risk Review",
            body: "提出前に不足、圧力ポイント、注意すべきフラグを可視化します。"
          },
          {
            title: "Next Steps",
            body: "案件をレビュー可能な出力と次の行動へ整理します。"
          }
        ]
      },
      systemLayer: {
        en: "AI is useful here only when it stays inside the case workflow. The system layer constrains intake, document tracking, and risk review so the model helps structure the work instead of replacing the case process with vague chat.",
        "zh-Hant": "這裡的 AI 只有放進案件工作流裡才真正有用。系統層負責限制 intake、文件追蹤與風險審查，讓模型協助整理案件，而不是用模糊聊天取代案件流程。",
        ja: "ここで AI が有効なのは、案件ワークフローの中に置かれた時だけです。システムレイヤーが intake、書類追跡、リスクレビューを制約し、モデルが曖昧な会話ではなく案件整理を支えるようにします。"
      },
      nextStep: {
        en: "Continue strengthening document readiness logic, risk review clarity, and professional handoff support while keeping the workflow tightly bounded.",
        "zh-Hant": "下一步會持續強化文件 readiness 邏輯、風險審查清晰度，以及專業交接支援，同時維持工作流邊界。",
        ja: "次の焦点は、書類 readiness ロジック、リスクレビューの明快さ、専門家への引き継ぎ支援を強めつつ、ワークフローの境界を保つことです。"
      },
      stage: {
        en: "Active review-ready workflow platform in progress.",
        "zh-Hant": "持續開發中的 review-ready 工作流平台。",
        ja: "継続開発中の review-ready ワークフロープラットフォームです。"
      }
    }
  },
  {
    slug: "shopping-assistant",
    status: "Concept",
    featured: false,
    comingSoon: true,
    name: {
      en: "Shopping Assistant",
      "zh-Hant": "Shopping Assistant",
      ja: "Shopping Assistant"
    },
    positioning: {
      en: "A smarter workflow for comparing, organizing, and deciding before you buy.",
      "zh-Hant": "一套在購買前先做好比較、整理與判斷的更聰明工作流。",
      ja: "購入前に比較、整理、判断を行うための、より整理されたショッピングワークフロー。"
    },
    platform: {
      en: "Decision-support workflow",
      "zh-Hant": "購前決策支援工作流",
      ja: "購入前の意思決定支援ワークフロー"
    },
    summary: {
      en: "A commerce-focused assistant designed to reduce scattered tabs, repeated comparison, and last-minute buying mistakes.",
      "zh-Hant": "一套面向購物決策的助手，目標是降低分散分頁、重複比較與最後一刻的購買失誤。",
      ja: "散らかったタブ、繰り返しの比較、直前の購入ミスを減らすためのコマース向けアシスタントです。"
    },
    description: {
      en: "It is being built as a decision-support workflow for online shopping, helping users move from browsing chaos to structured comparison and clearer purchase decisions.",
      "zh-Hant": "它正被建成一套線上購物的決策支援工作流，幫助使用者從瀏覽混亂走向結構化比較與更清楚的購買判斷。",
      ja: "オンラインショッピングのための意思決定支援ワークフローとして構築中であり、閲覧の混乱から構造化された比較とより明確な購入判断へ移れるようにします。"
    },
    tags: {
      en: ["Comparison Flow", "Preference-aware", "Shortlist Review"],
      "zh-Hant": ["比較流程", "偏好導向", "候選清單審視"],
      ja: ["比較フロー", "好み反映", "候補レビュー"]
    },
    statusLabel: {
      en: "In Progress",
      "zh-Hant": "開發中",
      ja: "開発中"
    },
    outcome: {
      en: "Current work is focused on shaping the comparison loop and shortlist review model before any broader product surface is claimed.",
      "zh-Hant": "目前工作重點是先把比較閉環與 shortlist review 模型整理清楚，再決定更完整的產品表面。",
      ja: "現在は、より広い製品面を語る前に、比較ループと shortlist review モデルを整えることに集中しています。"
    },
    disclosure: {
      en: "Coming-soon track. The direction is real, but the product is still being shaped and is not presented as fully shipped.",
      "zh-Hant": "這是一條 coming-soon 方向。問題與方向是真實的，但產品仍在成形中，並不被描述為已完整上線。",
      ja: "coming-soon のトラックです。方向性は実在していますが、製品はまだ形成途中であり、完成済みとしては扱っていません。"
    },
    commercial: {
      idealUsers: {
        en: "People who compare multiple products before buying and want more structure than tabs, screenshots, and memory.",
        "zh-Hant": "適合購買前會比較多個選項、但不想再靠分頁、截圖與記憶做判斷的人。",
        ja: "購入前に複数商品を比較し、タブやスクリーンショットや記憶以上の整理を求める人に向いています。"
      },
      operationalProblem: {
        en: "Pre-purchase decisions often break down across scattered tabs, weak comparison structure, and repeated last-minute re-evaluation.",
        "zh-Hant": "購買前決策常常因為分散分頁、比較結構薄弱與臨時反覆重看而失去清晰度。",
        ja: "購入前の判断は、散らかったタブ、弱い比較構造、直前の再評価の繰り返しで崩れがちです。"
      },
      deliveryScope: {
        en: "Comparison support, preference-aware decision flow, shortlist review, and clearer pre-purchase judgment states.",
        "zh-Hant": "交付範圍聚焦在比較支援、偏好導向決策流程、shortlist review，以及更清楚的購前判斷狀態。",
        ja: "提供範囲は、比較支援、好みを踏まえた意思決定フロー、shortlist review、より明確な購入前判断に絞られています。"
      },
      valueCase: {
        en: "The value is not generic shopping recommendations. It is reducing decision noise before money is spent.",
        "zh-Hant": "價值不在於泛用購物推薦，而是在真正花錢前先降低決策噪音。",
        ja: "価値は汎用的な買い物推薦ではなく、お金を使う前の判断ノイズを減らすことにあります。"
      }
    },
    detail: {
      whatItDoes: {
        en: [
          "Shopping Assistant is a commerce-focused assistant designed to reduce scattered tabs, repeated comparison, and last-minute buying mistakes.",
          "It is being built as a decision-support workflow for online shopping, helping users move from browsing chaos to structured comparison and clearer purchase decisions."
        ],
        "zh-Hant": [
          "Shopping Assistant 是一套面向購物決策的助手，目標是降低分散分頁、重複比較與最後一刻的購買失誤。",
          "它正被建成一套線上購物的決策支援工作流，幫助使用者從瀏覽混亂走向結構化比較與更清楚的購買判斷。"
        ],
        ja: [
          "Shopping Assistant は、散らかったタブ、繰り返し比較、直前の購入ミスを減らすためのコマース向けアシスタントです。",
          "オンラインショッピングの意思決定支援ワークフローとして構築中であり、閲覧の混乱を構造化された比較と明確な判断へ変えていきます。"
        ]
      },
      whyItMatters: {
        en: "Buying mistakes rarely come from missing information alone. They come from poor comparison structure. A better workflow matters because it helps users slow down, compare consistently, and decide with clearer tradeoffs before purchasing.",
        "zh-Hant": "購買失誤很少只是因為資訊不足，更常見的是比較方式本身缺乏結構。更好的工作流有價值，因為它能讓使用者在購買前放慢節奏、穩定比較，並更清楚地看見取捨。",
        ja: "購入ミスは情報不足だけで起こるわけではなく、比較構造の弱さから起こります。より良いワークフローには、購入前にペースを落とし、一貫して比較し、トレードオフを明確に判断できる価値があります。"
      },
      highlights: {
        en: [
          {
            title: "Comparison support",
            body: "Collects and normalizes options so comparison does not restart from zero every time."
          },
          {
            title: "Preference-aware flow",
            body: "Keeps personal priorities visible while evaluating tradeoffs."
          },
          {
            title: "Shortlist review",
            body: "Turns many open tabs into a manageable review set."
          },
          {
            title: "Pre-purchase clarity",
            body: "Creates a clearer path to buy, defer, or reject before money is spent."
          }
        ],
        "zh-Hant": [
          {
            title: "比較支援",
            body: "整理與正規化選項，不讓每次比較都從零開始。"
          },
          {
            title: "偏好導向流程",
            body: "在權衡取捨時，讓個人優先條件保持可見。"
          },
          {
            title: "Shortlist review",
            body: "把大量分頁收斂成可以被審視的一組候選清單。"
          },
          {
            title: "購前清晰度",
            body: "在真正花錢前，建立更清楚的購買、延後或放棄路徑。"
          }
        ],
        ja: [
          {
            title: "比較支援",
            body: "選択肢を整理し、比較を毎回ゼロから始めなくて済むようにします。"
          },
          {
            title: "好みを踏まえたフロー",
            body: "トレードオフを見ながらも個人の優先条件を見失わないようにします。"
          },
          {
            title: "Shortlist review",
            body: "多数のタブをレビュー可能な候補セットへ絞り込みます。"
          },
          {
            title: "購入前の明快さ",
            body: "購入、保留、見送りの判断をより明確にします。"
          }
        ]
      },
      flowSteps: {
        en: [
          {
            title: "Collect",
            body: "Bring candidate products into one structured shortlist."
          },
          {
            title: "Compare",
            body: "Evaluate differences against real preferences instead of raw browsing noise."
          },
          {
            title: "Review",
            body: "Narrow the shortlist and expose unclear tradeoffs."
          },
          {
            title: "Decide",
            body: "Buy, defer, or reject with a clearer pre-purchase state."
          }
        ],
        "zh-Hant": [
          {
            title: "Collect",
            body: "先把候選商品整理進同一個結構化 shortlist。"
          },
          {
            title: "Compare",
            body: "依真實偏好比較差異，而不是被分頁噪音牽著走。"
          },
          {
            title: "Review",
            body: "縮小候選範圍，找出仍然不清楚的取捨點。"
          },
          {
            title: "Decide",
            body: "在更清楚的購前狀態下做出購買、延後或放棄的決定。"
          }
        ],
        ja: [
          {
            title: "Collect",
            body: "候補商品を一つの構造化 shortlist に集めます。"
          },
          {
            title: "Compare",
            body: "タブのノイズではなく、実際の好みに沿って差分を見ます。"
          },
          {
            title: "Review",
            body: "候補を絞り込み、まだ曖昧なトレードオフを見えるようにします。"
          },
          {
            title: "Decide",
            body: "より明快な購入前状態で、購入、保留、見送りを決めます。"
          }
        ]
      },
      systemLayer: {
        en: "The AI or system layer is only useful if it supports comparison structure. That means extracting useful attributes, keeping preference signals stable, and making the shortlist reviewable rather than pretending to replace judgment.",
        "zh-Hant": "這裡的 AI / 系統層只有在它能支撐比較結構時才有價值。重點是提取有用屬性、維持偏好訊號穩定，並讓 shortlist 可審視，而不是假裝取代人的判斷。",
        ja: "ここでの AI / システムレイヤーが有効なのは、比較構造を支える場合だけです。有用な属性を抽出し、好みのシグナルを安定させ、shortlist をレビュー可能にすることが重要で、判断そのものを置き換えるものではありません。"
      },
      nextStep: {
        en: "Continue defining the comparison model, shortlist UX, and purchase-decision states before presenting it as a broader product.",
        "zh-Hant": "下一步會持續定義比較模型、shortlist 體驗與購買決策狀態，在更成熟前不會把它包裝成完整產品。",
        ja: "次の焦点は、比較モデル、shortlist UX、購入判断状態を整理することであり、成熟する前に広い製品として見せることはしません。"
      },
      stage: {
        en: "Coming-soon track under active shaping.",
        "zh-Hant": "持續成形中的 coming-soon 方向。",
        ja: "形成中の coming-soon トラックです。"
      }
    }
  },
  {
    slug: "utility-tools",
    status: "Concept",
    featured: false,
    comingSoon: true,
    name: {
      en: "Utility Tools",
      "zh-Hant": "Utility Tools",
      ja: "Utility Tools"
    },
    positioning: {
      en: "Small focused tools built to solve narrow, repeatable problems with speed.",
      "zh-Hant": "一組用來快速解決狹窄且重複問題的小型工具。",
      ja: "狭く繰り返される問題を素早く解くための、小さく集中したツール群。"
    },
    platform: {
      en: "Experimental track",
      "zh-Hant": "實驗型工具方向",
      ja: "実験的ユーティリティトラック"
    },
    summary: {
      en: "A collection of focused micro-tools for recurring tasks that do not need a full platform but still deserve better workflow design.",
      "zh-Hant": "一組面向重複小任務的 focused micro-tools，處理那些不需要完整平台、但仍值得更好工作流設計的問題。",
      ja: "完全なプラットフォームは不要でも、より良いワークフロー設計が必要な反復タスク向けの focused micro-tools 群です。"
    },
    description: {
      en: "These tools are designed for narrow but recurring jobs where speed, low friction, and task-fit matter more than broad feature coverage.",
      "zh-Hant": "這些工具面向狹窄但會反覆出現的工作，重點是速度、低摩擦與任務適配，而不是做成大而全的平台。",
      ja: "これらのツールは、狭いが繰り返し現れる作業向けに設計されています。重視するのは、広い機能網羅ではなく、速度、低摩擦、タスク適合です。"
    },
    tags: {
      en: ["Micro-tools", "Fast Workflows", "Experimental Track"],
      "zh-Hant": ["微型工具", "快速工作流", "實驗方向"],
      ja: ["マイクロツール", "高速ワークフロー", "実験トラック"]
    },
    statusLabel: {
      en: "Coming Soon",
      "zh-Hant": "即將推出",
      ja: "近日公開"
    },
    outcome: {
      en: "The current direction is to identify which narrow tasks deserve dedicated surfaces before expanding into a larger tool family.",
      "zh-Hant": "目前方向是先辨識哪些狹窄任務值得做成專屬工具，再決定是否往更大的工具群延伸。",
      ja: "現在は、どの狭いタスクに専用ツール面を与える価値があるかを見極め、その後に大きなツール群へ広げるかを判断する段階です。"
    },
    disclosure: {
      en: "Coming-soon experimental track. It is intentionally presented as a direction, not as a shipped suite.",
      "zh-Hant": "這是一條即將推出的實驗方向，刻意只作為方向公開，而不是被描述成已完成套件。",
      ja: "coming-soon の実験トラックです。完成済みスイートではなく、方向として意図的に公開しています。"
    },
    commercial: {
      idealUsers: {
        en: "Teams or individuals with narrow recurring tasks that need speed more than platform breadth.",
        "zh-Hant": "適合面對狹窄重複任務、比起大平台更需要速度與順手性的團隊或個人。",
        ja: "幅広いプラットフォームよりも速度と扱いやすさを必要とする、狭い反復タスクを持つチームや個人に向いています。"
      },
      operationalProblem: {
        en: "Some tasks are too small for a full platform but too frequent to leave as manual friction.",
        "zh-Hant": "有些任務太小，不值得做成完整平台；但又太常出現，不能繼續留在手動摩擦裡。",
        ja: "ある作業はフルプラットフォームにするには小さすぎますが、頻度が高く、手作業の摩擦に放置もできません。"
      },
      deliveryScope: {
        en: "Fast, task-specific surfaces for lightweight productivity utilities and workflow helpers.",
        "zh-Hant": "交付範圍聚焦在快速、任務特定的介面，用來承載輕量 productivity 工具與 workflow helper。",
        ja: "提供範囲は、軽量な productivity ツールや workflow helper のための、速くてタスク特化の画面です。"
      },
      valueCase: {
        en: "The point is not another all-purpose suite. It is making small but repeated work faster and cleaner.",
        "zh-Hant": "價值不在於再做一套萬用工具，而是把小但重複的工作做得更快、更乾淨。",
        ja: "価値は万能スイートを増やすことではなく、小さいが反復する作業をより速く、より整ったものにする点にあります。"
      }
    },
    detail: {
      whatItDoes: {
        en: [
          "Utility Tools is a collection of focused micro-tools built for narrow but recurring problems.",
          "These are tasks that do not need a full platform, but still deserve better workflow design and lower-friction execution."
        ],
        "zh-Hant": [
          "Utility Tools 是一組面向狹窄但會反覆出現問題的 focused micro-tools。",
          "這些任務不需要完整平台，但仍值得更好的工作流設計與更低摩擦的執行介面。"
        ],
        ja: [
          "Utility Tools は、狭いが繰り返し現れる問題のために作る focused micro-tools の集合です。",
          "完全なプラットフォームは不要でも、より良いワークフロー設計と低摩擦の実行面が必要な作業を対象にしています。"
        ]
      },
      whyItMatters: {
        en: "A lot of wasted time lives in small repeat tasks that are too minor for a major system investment. This track matters because it treats those jobs seriously without forcing them into oversized software.",
        "zh-Hant": "很多時間浪費其實發生在那些看似很小、卻反覆出現的任務上。這條方向的價值在於，它認真對待這些工作，但不強行把它們塞進過大的軟體平台。",
        ja: "多くの時間損失は、大きなシステム投資には値しないが繰り返し発生する小さな作業にあります。このトラックの価値は、そうした仕事を過剰なソフトウェアへ押し込まずに真面目に扱う点です。"
      },
      highlights: {
        en: [
          {
            title: "Lightweight utilities",
            body: "Focused tools for narrow jobs that should stay fast."
          },
          {
            title: "Workflow helpers",
            body: "Small surfaces that reduce repetitive friction rather than expanding into full suites."
          },
          {
            title: "Task-specific interaction",
            body: "Interaction stays close to the job instead of hiding behind unnecessary layers."
          },
          {
            title: "Low-friction execution",
            body: "The goal is immediate usefulness and short completion paths."
          }
        ],
        "zh-Hant": [
          {
            title: "輕量工具",
            body: "面向狹窄任務的 focused tools，重點是保持速度。"
          },
          {
            title: "工作流輔助",
            body: "以小型介面降低重複摩擦，而不是膨脹成大套件。"
          },
          {
            title: "任務特定互動",
            body: "互動方式緊貼任務本身，而不是被多餘層級包住。"
          },
          {
            title: "低摩擦執行",
            body: "目標是讓工具立刻有用，並縮短完成路徑。"
          }
        ],
        ja: [
          {
            title: "軽量ツール",
            body: "狭い仕事のための focused tools で、速度を優先します。"
          },
          {
            title: "ワークフローヘルパー",
            body: "大きなスイートに広げるのではなく、反復摩擦を減らす小さな画面を目指します。"
          },
          {
            title: "タスク特化の操作",
            body: "不要な層を増やさず、仕事そのものに近い操作を保ちます。"
          },
          {
            title: "低摩擦の実行",
            body: "すぐ役に立ち、短い完了経路を持つことが目的です。"
          }
        ]
      },
      flowSteps: {
        en: [
          {
            title: "Identify",
            body: "Find narrow recurring tasks that deserve a dedicated tool."
          },
          {
            title: "Shape",
            body: "Define the smallest useful surface for the job."
          },
          {
            title: "Execute",
            body: "Keep the interaction fast, direct, and task-specific."
          },
          {
            title: "Iterate",
            body: "Expand only when repeat usage proves the tool is worth deepening."
          }
        ],
        "zh-Hant": [
          {
            title: "Identify",
            body: "先找出那些值得專屬工具處理的狹窄重複任務。"
          },
          {
            title: "Shape",
            body: "定義這個任務最小但足夠有用的操作介面。"
          },
          {
            title: "Execute",
            body: "讓互動保持快速、直接、任務導向。"
          },
          {
            title: "Iterate",
            body: "只有在重複使用證明值得時，才往更深功能延伸。"
          }
        ],
        ja: [
          {
            title: "Identify",
            body: "専用ツールにする価値がある狭い反復タスクを見つけます。"
          },
          {
            title: "Shape",
            body: "その仕事に必要な最小の有用画面を定義します。"
          },
          {
            title: "Execute",
            body: "操作を速く、直接的で、タスク特化のまま保ちます。"
          },
          {
            title: "Iterate",
            body: "反復利用で価値が証明された時だけ、より深い機能へ広げます。"
          }
        ]
      },
      systemLayer: {
        en: "The system layer here is intentionally light. The value comes from narrow workflow design, low-friction execution, and just enough automation to remove repetition without turning each tool into a platform.",
        "zh-Hant": "這裡的系統層刻意保持輕量。真正的價值來自狹窄工作流設計、低摩擦執行，以及剛剛好的自動化，而不是把每個工具都做成平台。",
        ja: "ここでのシステムレイヤーは意図的に軽く保たれています。価値の中心は、狭いワークフロー設計、低摩擦の実行、そして各ツールをプラットフォーム化しない程度の適切な自動化にあります。"
      },
      nextStep: {
        en: "Keep identifying which repeat tasks deserve their own surfaces and which should stay small instead of turning into a bloated tool family.",
        "zh-Hant": "下一步是持續判斷哪些重複任務值得專屬介面，哪些則應該保持小而精，而不是膨脹成雜亂工具群。",
        ja: "次の焦点は、どの反復タスクに専用画面を与える価値があるかを見極め、無秩序なツール群へ膨らませないことです。"
      },
      stage: {
        en: "Coming-soon experimental track.",
        "zh-Hant": "即將推出的實驗方向。",
        ja: "近日公開予定の実験トラックです。"
      }
    }
  }
] as const satisfies readonly LocalizedProjectDefinition[];

const projectPresentationCopy = {
  en: {
    heroEyebrow: "Projects",
    heroTitle: "Featured product systems first, emerging tracks kept explicitly honest.",
    heroDescription:
      "The page prioritizes current project work, then shows in-progress directions that are not being presented as fully shipped products.",
    metrics: {
      published: "Published projects",
      featured: "Featured projects",
      emerging: "Emerging tracks"
    },
    featuredEyebrow: "Featured projects",
    featuredTitle: "Current product systems with clearer delivery shape.",
    featuredDescription:
      "These projects are the main focus on the page: current product work with real workflow definitions, bounded systems, and dedicated detail pages.",
    emergingEyebrow: "Emerging tracks",
    emergingTitle: "In-progress directions that are still being shaped.",
    emergingDescription:
      "These are intentionally lighter. They are real directions, but they are not framed as fully shipped products yet.",
    noteKicker: "Read this page as intended",
    noteBody:
      "Featured work gets more weight because it has stronger product shape today. Emerging tracks stay explicitly lighter until scope and operating fit are further proven.",
    idealUsers: "Best fit",
    deliveryScope: "Delivery scope",
    keyOutcome: "Current direction",
    valueCase: "Why it matters",
    platformLabel: "Platform / system type",
    viewProject: "View project",
    learnMore: "Learn more",
    whatItDoes: "What it does",
    whyItMatters: "Why it matters",
    systemHighlights: "System highlights",
    howItWorks: "How it works",
    systemLayer: "AI / system layer",
    statusNext: "Status / next",
    relatedTitle: "More project directions"
  },
  "zh-Hant": {
    heroEyebrow: "項目",
    heroTitle: "先呈現目前最具體的產品系統，再誠實標示仍在成形中的方向。",
    heroDescription:
      "這一頁先展示目前較清楚的項目，再補充仍在推進中的方向，且不把它們包裝成已完整上線的產品。",
    metrics: {
      published: "已公開項目",
      featured: "主要展示項目",
      emerging: "新興方向"
    },
    featuredEyebrow: "主要項目",
    featuredTitle: "目前已有較清楚交付輪廓的產品系統。",
    featuredDescription:
      "這一區優先展示目前最值得被當作主項目閱讀的產品方向：有真實工作流定義、有邊界清楚的系統層，也各自對應獨立子頁。",
    emergingEyebrow: "新興方向",
    emergingTitle: "仍在推進中的方向，刻意保持較輕量呈現。",
    emergingDescription:
      "這些方向是真實存在的，但目前仍在成形中，因此不會被描述成已完全交付的產品。",
    noteKicker: "閱讀方式",
    noteBody:
      "主要項目會被給予更高權重，因為它們目前已具備更清楚的產品輪廓。新興方向則刻意保持輕量，直到範圍與運作適配更成熟。",
    idealUsers: "適合對象",
    deliveryScope: "交付範圍",
    keyOutcome: "目前方向",
    valueCase: "為什麼重要",
    platformLabel: "平台 / 系統類型",
    viewProject: "查看項目",
    learnMore: "了解更多",
    whatItDoes: "它在做什麼",
    whyItMatters: "為什麼重要",
    systemHighlights: "系統重點",
    howItWorks: "如何運作",
    systemLayer: "AI / 系統層",
    statusNext: "目前狀態 / 下一步",
    relatedTitle: "更多項目方向"
  },
  ja: {
    heroEyebrow: "プロジェクト",
    heroTitle: "現在の主力プロジェクトを先に見せ、形成途中の方向は正直に軽く扱います。",
    heroDescription:
      "このページでは、現在の主力プロジェクトを優先して見せた上で、まだ形成途中の方向を、完成済み製品のようには見せずに補足しています。",
    metrics: {
      published: "公開中のプロジェクト",
      featured: "主力プロジェクト",
      emerging: "新興トラック"
    },
    featuredEyebrow: "主力プロジェクト",
    featuredTitle: "現在の形がより明確なプロダクトシステム。",
    featuredDescription:
      "このセクションでは、現時点で主力として読めるプロジェクトを優先して掲載しています。実際のワークフロー定義、境界のあるシステム設計、個別詳細ページを備えています。",
    emergingEyebrow: "新興トラック",
    emergingTitle: "まだ形成途中の方向は、意図的に軽く見せます。",
    emergingDescription:
      "これらは実在する方向ですが、まだ開発中のため、完成済み製品のようには扱いません。",
    noteKicker: "このページの見方",
    noteBody:
      "主力プロジェクトは、現時点でより明確なプロダクト形状を持つため、表示上の優先度を高くしています。新興トラックは、スコープと運用適合がさらに固まるまで軽めに見せています。",
    idealUsers: "適した相手",
    deliveryScope: "提供範囲",
    keyOutcome: "現在の方向",
    valueCase: "なぜ重要か",
    platformLabel: "プラットフォーム / システム種別",
    viewProject: "プロジェクトを見る",
    learnMore: "詳細を見る",
    whatItDoes: "何をするか",
    whyItMatters: "なぜ重要か",
    systemHighlights: "システムの要点",
    howItWorks: "どう動くか",
    systemLayer: "AI / システムレイヤー",
    statusNext: "現在の状態 / 次の焦点",
    relatedTitle: "その他のプロジェクト方向"
  }
} as const;

export type ProjectPresentationCopy = (typeof projectPresentationCopy)[Locale];

function materializeProject(
  definition: LocalizedProjectDefinition,
  locale: Locale
): CommercialProjectView {
  return {
    slug: definition.slug,
    name: pick(definition.name, locale),
    positioning: pick(definition.positioning, locale),
    platform: pick(definition.platform, locale),
    summary: pick(definition.summary, locale),
    description: pick(definition.description, locale),
    tags: pick(definition.tags, locale),
    status: definition.status,
    statusLabel: pick(definition.statusLabel, locale),
    featured: definition.featured,
    comingSoon: definition.comingSoon ?? false,
    outcome: pick(definition.outcome, locale),
    disclosure: pick(definition.disclosure, locale),
    commercial: {
      idealUsers: pick(definition.commercial.idealUsers, locale),
      operationalProblem: pick(definition.commercial.operationalProblem, locale),
      deliveryScope: pick(definition.commercial.deliveryScope, locale),
      valueCase: pick(definition.commercial.valueCase, locale)
    },
    detail: {
      whatItDoes: pick(definition.detail.whatItDoes, locale),
      whyItMatters: pick(definition.detail.whyItMatters, locale),
      highlights: pick(definition.detail.highlights, locale),
      flowSteps: pick(definition.detail.flowSteps, locale),
      systemLayer: pick(definition.detail.systemLayer, locale),
      nextStep: pick(definition.detail.nextStep, locale),
      stage: pick(definition.detail.stage, locale)
    }
  };
}

export function getProjectPresentationCopy(locale: Locale) {
  return projectPresentationCopy[locale];
}

export function getProjects(locale: Locale): CommercialProjectView[] {
  return projectDefinitions.map((project) => materializeProject(project, locale));
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projectDefinitions.map((project) => project.slug);
}
