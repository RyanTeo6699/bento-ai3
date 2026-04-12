export const locales = ["en", "zh-Hant", "ja"] as const;

export type Locale = (typeof locales)[number];

export type NavItem = {
  href: string;
  label: string;
};

export const defaultLocale: Locale = "en";
export const localeCookieName = "bento_locale";

export const localeOptions: Array<{ value: Locale; label: string }> = [
  { value: "en", label: "EN" },
  { value: "zh-Hant", label: "繁中" },
  { value: "ja", label: "日本語" }
];

export function resolveLocale(value?: string | null): Locale {
  if (value === "zh-Hant" || value === "ja" || value === "en") {
    return value;
  }

  return defaultLocale;
}

const en = {
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" }
  ] satisfies NavItem[],
  header: {
    brandTagline: "systems, products, workflow software",
    cta: "Start inquiry",
    mobileToggleLabel: "Toggle navigation",
    languageLabel: "Language"
  },
  footer: {
    tagline: "AI applications / LLM systems",
    title: "AI software for actual operating work.",
    cta: "Start scoped inquiry",
    navTitle: "Navigate",
    contactTitle: "Contact",
    location: "Calgary / Vancouver",
    policy:
      "Public material on the site is intentionally limited to information Bento AIII can reasonably stand behind.",
    closingKicker: "build the layer around the model",
    closingLine: "Bento AIII. Practical AI with product discipline."
  },
  common: {
    statusLabels: {
      Live: "Live",
      Prototype: "Prototype",
      Internal: "Internal",
      Concept: "Concept"
    },
    currentFocus: "Current focus",
    viewDetail: "View detail",
    backToProjects: "Back to projects",
    outcome: "Outcome",
    stage: "Stage",
    disclosure: "Disclosure",
    problem: "Problem",
    system: "System",
    architecture: "Architecture",
    relatedWork: "Related work",
    moreProjectDirections: "More Bento AIII project directions",
    nextStep: "Next step"
  },
  home: {
    hero: {
      kicker: "Bento AIII / AI systems company",
      location: "Calgary / Vancouver",
      title: "Bento AIII",
      subtitle: "builds the layer around the model.",
      lead:
        "AI applications, LLM systems, and workflow software for teams that need product discipline, visible review paths, and systems that hold up outside the demo.",
      body:
        "Bento AIII works where product shape, system behavior, and delivery constraints all need to stay in the same frame.",
      ctaPrimary: "Start scoped inquiry",
      ctaSecondary: "See current tracks",
      signals: [
        {
          label: "Build focus",
          value: "AI applications, LLM systems, internal workflow software"
        },
        {
          label: "System concerns",
          value: "Retrieval, prompting, evaluation, review, interface clarity"
        },
        {
          label: "Working mode",
          value: "Small-team delivery with practical scope and visible tradeoffs"
        }
      ]
    },
    heroScene: {
      kicker: "Bento system board",
      chip: "AI / LLM / workflow",
      lanesLabel: "Delivery lanes",
      activeLabel: "active",
      lanes: [
        { label: "Workflow framing", value: "inputs, decisions, review path" },
        { label: "Model layer", value: "retrieval, prompting, evaluation" },
        { label: "Operator surface", value: "context, traceability, actions" },
        { label: "Delivery fit", value: "handoff, ownership, rollout" }
      ],
      productSurfaceLabel: "Product surface",
      productSurfaceText: "Interfaces shaped around operators, not prompt demos.",
      systemLayerLabel: "System layer",
      systemLayerText:
        "Retrieval, prompting, review, and delivery fit kept in one frame.",
      brandFrameLabel: "Brand frame",
      brandDescription:
        "Systems for real operating work. Product shape, model behavior, and review logic kept in one delivery frame.",
      brandPrinciples: ["Product discipline", "System clarity", "Visible review"],
      signalPanelLabel: "Signal panel",
      signals: [
        { label: "Retrieval", value: "grounded answers" },
        { label: "Review", value: "visible checkpoints" },
        { label: "Runtime", value: "practical scope" }
      ],
      runtimeLogLabel: "Runtime log",
      runtimeLog: [
        "scope.workflow -> operator goals + risk points",
        "shape.interface -> readable states + review history",
        "connect.system -> retrieval + prompt behavior",
        "ship.iteration -> controlled rollout + feedback"
      ]
    },
    about: {
      eyebrow: "About",
      title:
        "A small company focused on practical AI delivery rather than polished case-study theater.",
      missionLabel: "Mission",
      publicMaterialLabel: "Public material",
      sitePolicyLabel: "Site policy",
      sitePolicyText:
        "Project pages represent current tracks and capability areas. If a detail is not public or not yet stable, it stays out of the copy."
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Core capability areas across product, system design, and delivery.",
      description:
        "Each track is designed to support AI products that need more than a prototype. Bento AIII builds the layer around the model as carefully as the model interaction itself."
    },
    projects: {
      eyebrow: "Projects",
      title:
        "Current tracks across external work, internal builds, and concept studies.",
      description:
        "The list is intentionally written as project directions rather than inflated public case studies.",
      cta: "See all tracks"
    },
    team: {
      eyebrow: "Team",
      title:
        "A compact five-person team across product systems, engineering, AI, and marketing.",
      description:
        "The team page shows the people currently shaping Bento AIII across product direction, system implementation, delivery, and outreach.",
      cta: "Meet the team"
    },
    finalCta: {
      eyebrow: "Start",
      title:
        "If the workflow is real, the software around the model should be too.",
      description:
        "Bring Bento AIII a process, internal tool, or AI product direction that needs credible scope and dependable implementation.",
      primaryLabel: "Start a project inquiry",
      secondaryLabel: "Read the company brief"
    }
  },
  about: {
    hero: {
      eyebrow: "About",
      title: "Bento AIII is built for practical AI delivery.",
      metrics: [
        { label: "Company model", value: "Small AI product and systems studio" },
        {
          label: "Public material",
          value: "Only what the company can reasonably stand behind"
        },
        { label: "Working style", value: "Scoped, product-led, system-aware delivery" }
      ]
    },
    brief: {
      kicker: "Company brief",
      title: "What Bento AIII does",
      body:
        "The work focuses on AI products that have to survive contact with real data, mixed stakeholders, and ordinary business constraints. That usually means interface design, system architecture, prompt and retrieval behavior, and rollout logic all need to be shaped together."
    },
    publicInfo: {
      kicker: "Public information policy",
      title: "The site stays narrower than the actual work.",
      whyLabel: "Why this matters",
      whyText:
        "It is better to publish less than to make the company look larger, louder, or more deployed than it actually is today.",
      missionLabel: "Mission"
    },
    businessDirections: {
      eyebrow: "Business directions",
      title: "The company is organized around a few high-value build tracks.",
      description:
        "Bento AIII stays deliberately focused: products around the model, systems behind the model, and workflows that make the result usable.",
      trackPrefix: "Track"
    },
    technicalCapability: {
      eyebrow: "Technical capability",
      title: "Capability is not just model access. It is the surrounding system.",
      description:
        "Bento AIII works across product, engineering, and system operations so that AI features become stable software instead of isolated demos."
    },
    values: {
      eyebrow: "Values",
      title: "A few principles shape how the company works.",
      description:
        "These are the operating values behind product decisions, technical choices, and project execution."
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Current roadmap markers.",
      description:
        "These markers are directional and operational. They are not meant to read like a fundraising deck or expansion fantasy."
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Need a company that can shape both the interface and the system?",
      description:
        "Bento AIII works best on projects where product clarity, technical rigor, and operational realism all matter at the same time.",
      primaryLabel: "Talk to Bento AIII",
      secondaryLabel: "View projects"
    }
  },
  projects: {
    hero: {
      eyebrow: "Projects",
      title:
        "Current tracks across external work, internal builds, and concept studies.",
      description:
        "This page shows project directions and system tracks, not inflated public case studies. Some work remains internal, early-stage, or private.",
      metrics: [
        { label: "Tracks", value: "published directions" },
        { label: "Status model", value: "Prototype / Internal / Concept" },
        { label: "Disclosure", value: "Public detail stays intentionally limited" }
      ]
    },
    portfolio: {
      eyebrow: "Portfolio view",
      title: "A compact view of current Bento AIII project directions.",
      description:
        "The list spans applied tracks, internal capability work, and concept studies that illustrate the problems Bento AIII is set up to handle."
    },
    readAsIntended: {
      kicker: "Read this page as intended"
    },
    stageUnit: "tracks",
    howToRead: {
      eyebrow: "How to read the tracks",
      title: "The page mixes external, internal, and concept work on purpose.",
      description: "That split makes the portfolio more honest and easier to evaluate.",
      cards: [
        {
          title: "External tracks",
          copy:
            "Applied directions for customer-facing or partner-facing work where the workflow and outcomes matter more than a flashy demo."
        },
        {
          title: "Internal builds",
          copy:
            "Reusable operating layers and tooling Bento AIII uses to make future product work more structured and maintainable."
        },
        {
          title: "Concept studies",
          copy:
            "Exploratory directions that are intentionally marked as concept-only until scope and operating fit are better proven."
        }
      ]
    },
    detail: {
      finalCta: {
        title: "Need a system with this kind of structure?",
        description:
          "Bento AIII can shape the interface, workflow, and system layer together instead of treating them as separate tracks.",
        primaryLabel: "Talk about your workflow",
        secondaryLabel: "See all projects"
      }
    },
    finalCta: {
      eyebrow: "Contact",
      title: "If one of these tracks matches your workflow, start there.",
      description:
        "Bento AIII can take a concept, a rough internal tool, or a broken workflow and shape it into a more reliable product direction.",
      primaryLabel: "Discuss a project",
      secondaryLabel: "Learn about the company"
    }
  },
  team: {
    hero: {
      eyebrow: "Team",
      title: "A small team covering product systems, engineering, AI, and market reach.",
      description:
        "Bento AIII publishes the people currently shaping the company across product direction, technical execution, delivery, and marketing.",
      metrics: [
        { label: "Team size", value: "5 published members" },
        { label: "Working model", value: "Cross-functional, compact delivery" },
        { label: "Coverage", value: "Product / Engineering / AI / Marketing" }
      ]
    },
    overview: {
      eyebrow: "Team",
      title: "A five-person team with clear coverage across product, build, and outreach.",
      description:
        "The page stays factual: no padded biographies, no empty profile links, and no invented credentials."
    },
    introCard: {
      kicker: "How this page is structured",
      body:
        "Each card focuses on role, current scope, and areas of contribution. External links are omitted unless there is a real public profile worth linking."
    },
    workingModel: {
      eyebrow: "How we work",
      title: "The team stays small, but the working model is structured.",
      description:
        "Bento AIII projects move through connected lanes across product framing, engineering execution, and operational follow-through.",
      cards: [
        {
          title: "Frame the product",
          copy:
            "Clarify the workflow, users, operating constraints, and success conditions before building the system."
        },
        {
          title: "Build the system",
          copy:
            "Define application logic, model behavior, integrations, evaluation, and review controls with the interface."
        },
        {
          title: "Ship and refine",
          copy:
            "Roll out with staged delivery, operational visibility, and adjustments based on actual usage."
        }
      ]
    },
    fit: {
      kicker: "Who this setup fits",
      title: "Teams building AI products for actual business motion.",
      body:
        "The best fit is usually a company that already knows where the friction is: knowledge bottlenecks, repetitive decision paths, fragmented internal tools, or a product direction that needs sharper structure."
    },
    collaboration: {
      kicker: "Collaboration style",
      title: "Close to the problem, not detached from it.",
      body:
        "Bento AIII works well with founders, product leads, operations teams, and internal platform groups that want product judgment and technical depth in the same loop."
    },
    finalCta: {
      eyebrow: "Connect",
      title: "Need a team that can bridge product, engineering, and AI systems?",
      description:
        "Bring Bento AIII into the conversation when the project needs more than a prototype and less than a disconnected vendor chain.",
      primaryLabel: "Contact Bento AIII",
      secondaryLabel: "Browse project work"
    }
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Bring the workflow, the problem, or the product direction.",
      description:
        "Bento AIII is best engaged on practical AI product work, language model systems, internal tooling, and delivery partnerships.",
      metrics: [
        { label: "General", value: "ryanteo0628@gmail.com" },
        { label: "Response", value: "Usually within 1-2 business days" },
        { label: "Base", value: "Calgary / Vancouver" }
      ]
    },
    reachOut: {
      eyebrow: "Reach out",
      title: "A few ways to start the conversation.",
      description:
        "Use the contact form for structure, or jump directly to the right channel below."
    },
    submissionPath: {
      kicker: "Submission path",
      steps: [
        {
          label: "01 Intake",
          body:
            "Submit a short brief, current workflow, or the constraint that is blocking delivery."
        },
        {
          label: "02 Review",
          body:
            "Bento AIII reviews fit, delivery shape, and whether the problem should be treated as product, systems, or workflow work."
        },
        {
          label: "03 Follow-up",
          body:
            "If the fit is good, the next step is a scoped conversation rather than a generic sales chain."
        }
      ]
    }
  },
  contactForm: {
    kicker: "Contact form",
    title: "Tell us what needs to work.",
    description:
      "This form posts to the site backend. Email forwarding can be connected later through Resend without changing the frontend structure.",
    statuses: {
      clientValidationError:
        "Please correct the highlighted fields and submit again.",
      submitting: "Submitting inquiry...",
      fallbackError:
        "The form could not reach the site backend. Please try again or email ryanteo0628@gmail.com.",
      reference: "Reference",
      successFollowUpPrefix: "If the request is time-sensitive, send the same reference to",
      successFollowUpLink: "ryanteo0628@gmail.com"
    },
    labels: {
      name: "Name",
      company: "Company or team",
      email: "Email",
      projectType: "Inquiry type",
      message: "Project brief"
    },
    placeholders: {
      name: "Your name",
      company: "Company or team",
      email: "name@company.com",
      projectType: "Select a track",
      message:
        "What is the workflow, team, or business problem you want to solve?"
    },
    hints: {
      message:
        "Enough detail to explain the workflow, the constraint, and what needs to change.",
      range: "24-2400 characters",
      preferredInput:
        "Preferred input: a real workflow, a rough scope, or the current constraint you need to unblock."
    },
    buttons: {
      idle: "Send inquiry",
      loading: "Submitting..."
    },
    options: [
      { value: "ai-application", label: "AI application" },
      { value: "llm-system", label: "LLM system" },
      { value: "workflow-design", label: "Workflow tooling" },
      { value: "platform-delivery", label: "Platform delivery" },
      { value: "advisory", label: "Scoping and advisory" }
    ],
    validation: {
      name: "Enter a name with at least 2 characters.",
      email: "Enter a valid email address.",
      projectType: "Select the inquiry type that fits best.",
      company: "Keep the company or team field under 120 characters.",
      messageMin: "Describe the workflow or problem in at least 24 characters.",
      messageMax: "Keep the project brief under 2400 characters."
    },
    api: {
      invalidPayload: "Invalid request payload.",
      inquiryReceived: "Inquiry received.",
      rateLimited:
        "Too many inquiries from this connection. Please wait a few minutes and try again.",
      validationFailed: "Validation failed.",
      loggedOnly:
        "Inquiry reached the site backend. Email forwarding is not configured yet, so also email ryanteo0628@gmail.com if the request is time-sensitive.",
      forwardFailed:
        "Inquiry reached the site backend, but email forwarding is not configured correctly. Please email ryanteo0628@gmail.com if this continues.",
      success: "Inquiry received. Bento AIII will review it and follow up by email.",
      name: "Name must be at least 2 characters.",
      company: "Company or team field is too long.",
      email: "A valid email address is required.",
      projectType: "Select a valid inquiry type.",
      messageMin: "Project brief must be at least 24 characters.",
      messageMax: "Project brief is too long."
    }
  },
  notFound: {
    title: "This route does not exist in the current Bento AIII map.",
    description:
      "The page may have moved, or the link may still be a placeholder while the site structure evolves.",
    primaryLabel: "Return home",
    secondaryLabel: "Browse projects"
  }
};

const dictionaries: Record<Locale, typeof en> = {
  en,
  "zh-Hant": {
    nav: [
      { href: "/", label: "首頁" },
      { href: "/about", label: "公司介紹" },
      { href: "/projects", label: "項目" },
      { href: "/team", label: "團隊" },
      { href: "/contact", label: "聯絡" }
    ],
    header: {
      brandTagline: "系統、產品、工作流程軟體",
      cta: "開始洽詢",
      mobileToggleLabel: "切換導覽",
      languageLabel: "語言"
    },
    footer: {
      tagline: "AI 應用 / LLM 系統",
      title: "為真實營運場景打造的 AI 軟體。",
      cta: "開始洽詢",
      navTitle: "導覽",
      contactTitle: "聯絡方式",
      location: "卡爾加里 / 溫哥華",
      policy: "網站公開內容僅保留 Bento AIII 目前可以負責任對外說明的資訊。",
      closingKicker: "build the layer around the model",
      closingLine: "Bento AIII。以產品紀律落地實用 AI。"
    },
    common: {
      statusLabels: {
        Live: "已上線",
        Prototype: "原型",
        Internal: "內部",
        Concept: "概念"
      },
      currentFocus: "目前重點",
      viewDetail: "查看詳情",
      backToProjects: "返回項目列表",
      outcome: "目前成果",
      stage: "階段",
      disclosure: "公開說明",
      problem: "問題背景",
      system: "系統方向",
      architecture: "架構要點",
      relatedWork: "相關方向",
      moreProjectDirections: "更多 Bento AIII 項目方向",
      nextStep: "下一步"
    },
    home: {
      hero: {
        kicker: "Bento AIII / AI 系統公司",
        location: "Calgary / Vancouver",
        title: "Bento AIII",
        subtitle: "打造模型之外真正可用的一層。",
        lead:
          "面向需要產品紀律、清楚審查節點與可落地系統的團隊，提供 AI 應用、LLM 系統與工作流程軟體。",
        body:
          "Bento AIII 的工作重點，是讓產品結構、系統行為與交付限制始終放在同一個框架內處理。",
        ctaPrimary: "開始洽詢",
        ctaSecondary: "查看目前方向",
        signals: [
          {
            label: "建構重點",
            value: "AI 應用、LLM 系統、內部流程軟體"
          },
          {
            label: "系統關注",
            value: "檢索、提示設計、評估、審查、介面清晰度"
          },
          {
            label: "合作方式",
            value: "小團隊交付，範圍務實，取捨清楚可見"
          }
        ]
      },
      heroScene: {
        kicker: "Bento 系統面板",
        chip: "AI / LLM / workflow",
        lanesLabel: "交付區塊",
        activeLabel: "運作中",
        lanes: [
          { label: "流程定義", value: "輸入、決策、審查路徑" },
          { label: "模型層", value: "檢索、提示、評估" },
          { label: "操作介面", value: "上下文、可追溯性、動作" },
          { label: "交付適配", value: "交接、責任、上線節奏" }
        ],
        productSurfaceLabel: "產品介面",
        productSurfaceText: "介面是為了操作人員而設計，不是提示詞展示板。",
        systemLayerLabel: "系統層",
        systemLayerText: "檢索、提示、審查與交付適配放在同一個框架裡處理。",
        brandFrameLabel: "品牌框架",
        brandDescription:
          "面向真實營運工作的系統。產品結構、模型行為與審查邏輯在同一套交付框架內被設計。",
        brandPrinciples: ["產品紀律", "系統清晰", "可見審查"],
        signalPanelLabel: "訊號面板",
        signals: [
          { label: "檢索", value: "有依據的回答" },
          { label: "審查", value: "可見的檢查節點" },
          { label: "執行", value: "務實的系統範圍" }
        ],
        runtimeLogLabel: "運行紀錄",
        runtimeLog: [
          "scope.workflow -> 操作者目標 + 風險點",
          "shape.interface -> 清楚狀態 + 審查歷程",
          "connect.system -> 檢索 + 提示行為",
          "ship.iteration -> 控制式上線 + 回饋"
        ]
      },
      about: {
        eyebrow: "公司介紹",
        title: "一家專注於實際 AI 交付的小型公司，而不是為案例包裝而存在的展示頁。",
        missionLabel: "使命",
        publicMaterialLabel: "公開內容",
        sitePolicyLabel: "網站原則",
        sitePolicyText:
          "頁面呈現的是目前可公開的方向與能力範圍。若某項資訊尚未穩定或不適合公開，就不會寫進文案。"
      },
      capabilities: {
        eyebrow: "能力方向",
        title: "橫跨產品、系統設計與交付的核心能力。",
        description:
          "每一條能力線都不是只為了做出原型，而是為了支撐真正可用的 AI 產品。Bento AIII 對模型外層的設計與對模型互動本身同樣重視。"
      },
      projects: {
        eyebrow: "項目",
        title: "目前公開的外部方向、內部建置與概念研究。",
        description: "這份列表刻意以項目方向來呈現，而不是把它包裝成誇張的公開案例。",
        cta: "查看全部方向"
      },
      team: {
        eyebrow: "團隊",
        title: "五人小團隊，涵蓋產品系統、工程、AI 與市場。",
        description:
          "團隊頁聚焦目前實際參與 Bento AIII 的成員，涵蓋產品方向、系統實作、交付與對外拓展。",
        cta: "查看團隊"
      },
      finalCta: {
        eyebrow: "開始",
        title: "如果流程是真實存在的，模型外層的軟體也應該同樣真實可用。",
        description:
          "若你手上的流程、內部工具或 AI 產品方向需要可信的範圍定義與穩定實作，可以從這裡開始。",
        primaryLabel: "開始項目洽詢",
        secondaryLabel: "閱讀公司介紹"
      }
    },
    about: {
      hero: {
        eyebrow: "公司介紹",
        title: "Bento AIII 為實際 AI 交付而建立。",
        metrics: [
          { label: "公司型態", value: "小型 AI 產品與系統工作室" },
          { label: "公開資訊", value: "只公開公司能負責任說明的內容" },
          { label: "合作方式", value: "有範圍、有產品判斷、有系統意識的交付" }
        ]
      },
      brief: {
        kicker: "公司簡介",
        title: "Bento AIII 在做什麼",
        body:
          "我們聚焦在需要面對真實資料、跨部門協作與一般商業限制的 AI 產品。這通常代表介面設計、系統架構、提示與檢索行為，以及上線邏輯，都需要一起被定義。"
      },
      publicInfo: {
        kicker: "公開資訊原則",
        title: "網站呈現的範圍，比實際工作更窄。",
        whyLabel: "為什麼這很重要",
        whyText:
          "與其讓公司看起來比實際更大、更響亮或部署更多，不如公開更少但更準確的內容。",
        missionLabel: "使命"
      },
      businessDirections: {
        eyebrow: "業務方向",
        title: "公司圍繞少數高價值的建構方向運作。",
        description:
          "Bento AIII 刻意保持聚焦：模型外層的產品、模型背後的系統，以及讓結果真正可用的工作流程。",
        trackPrefix: "方向"
      },
      technicalCapability: {
        eyebrow: "技術能力",
        title: "能力不只是接入模型，而是模型周邊的整體系統。",
        description:
          "Bento AIII 橫跨產品、工程與系統運營，讓 AI 功能成為可維持的軟體，而不是孤立的展示功能。"
      },
      values: {
        eyebrow: "價值觀",
        title: "幾個核心原則，決定我們如何工作。",
        description: "這些原則影響產品判斷、技術選擇與項目執行方式。"
      },
      roadmap: {
        eyebrow: "發展路線",
        title: "目前的發展標記。",
        description:
          "這些標記是方向性的營運節點，不是募資簡報或擴張幻想。"
      },
      finalCta: {
        eyebrow: "聯絡",
        title: "如果你需要一家公司，同時能處理介面與系統，歡迎聯絡。",
        description:
          "當一個項目同時要求產品清晰度、技術嚴謹性與營運可行性時，Bento AIII 會是更合適的合作方式。",
        primaryLabel: "聯絡 Bento AIII",
        secondaryLabel: "查看項目"
      }
    },
    projects: {
      hero: {
        eyebrow: "項目",
        title: "目前公開的外部方向、內部建置與概念研究。",
        description:
          "這一頁展示的是項目方向與系統軌道，而不是經過包裝的公開案例。有些工作仍屬內部、早期或私人範圍。",
        metrics: [
          { label: "方向數量", value: "已公開方向" },
          { label: "狀態模型", value: "原型 / 內部 / 概念" },
          { label: "公開程度", value: "公開細節刻意保持有限" }
        ]
      },
      portfolio: {
        eyebrow: "項目總覽",
        title: "以更緊湊的方式查看 Bento AIII 目前的項目方向。",
        description:
          "內容涵蓋應用型方向、內部能力建置，以及概念研究，對應 Bento AIII 能處理的問題範圍。"
      },
      readAsIntended: {
        kicker: "閱讀方式"
      },
      stageUnit: "個方向",
      howToRead: {
        eyebrow: "如何理解這些方向",
        title: "這一頁刻意同時呈現外部、內部與概念工作。",
        description: "這樣的區分能讓作品列表更誠實，也更容易被評估。",
        cards: [
          {
            title: "外部方向",
            copy: "面向客戶或合作場景的應用方向，重點是流程與結果，而不是炫目的 demo。"
          },
          {
            title: "內部建置",
            copy: "Bento AIII 內部持續整理的能力層與工具，用來讓後續產品工作更有結構、也更易維護。"
          },
          {
            title: "概念研究",
            copy: "仍在探索中的方向，只有在範圍與營運適配更清楚時，才會往前推進。"
          }
        ]
      },
      detail: {
        finalCta: {
          title: "如果你也需要這種結構的系統，歡迎從這裡開始。",
          description:
            "Bento AIII 可以把介面、流程與系統層一起規劃，而不是把它們拆成互不相干的工作。",
          primaryLabel: "討論你的流程",
          secondaryLabel: "查看全部項目"
        }
      },
      finalCta: {
        eyebrow: "聯絡",
        title: "如果其中一條方向對應到你的流程，就從那裡開始。",
        description:
          "Bento AIII 可以把概念、粗略的內部工具，或失靈的流程，整理成更可靠的產品方向。",
        primaryLabel: "討論項目",
        secondaryLabel: "了解公司"
      }
    },
    team: {
      hero: {
        eyebrow: "團隊",
        title: "一個涵蓋產品系統、工程、AI 與市場拓展的小型團隊。",
        description:
          "Bento AIII 對外公開的是目前實際參與公司方向的人，包含產品、技術、交付與市場角色。",
        metrics: [
          { label: "團隊規模", value: "5 位公開成員" },
          { label: "合作模式", value: "跨職能、小團隊交付" },
          { label: "覆蓋範圍", value: "產品 / 工程 / AI / 市場" }
        ]
      },
      overview: {
        eyebrow: "團隊",
        title: "五人團隊，清楚覆蓋產品、建置與對外拓展。",
        description:
          "頁面只保留可公開、可解釋的資訊：沒有灌水履歷、沒有空殼連結，也沒有虛構資歷。"
      },
      introCard: {
        kicker: "頁面結構",
        body:
          "每張卡片只聚焦於角色、目前職責與貢獻方向。若沒有真實可用的公開連結，就不會顯示。"
      },
      workingModel: {
        eyebrow: "工作方式",
        title: "團隊規模不大，但合作方式有結構。",
        description:
          "Bento AIII 的項目通常在產品定義、工程實作與營運跟進之間緊密協作，而不是切成彼此分離的部門流程。",
        cards: [
          {
            title: "定義產品",
            copy: "先釐清流程、使用者、營運限制與成功條件，再開始建構系統。"
          },
          {
            title: "建構系統",
            copy: "把應用邏輯、模型行為、整合、評估與審查控制和介面一起設計。"
          },
          {
            title: "交付與調整",
            copy: "以分階段方式上線，保留可見的營運狀態，並依據實際使用持續修正。"
          }
        ]
      },
      fit: {
        kicker: "適合的合作方",
        title: "正在把 AI 產品放進真實業務流程的團隊。",
        body:
          "最適合的情況，通常是已經知道摩擦點在哪裡的團隊：知識瓶頸、重複決策流程、分散的內部工具，或一條需要更清晰結構的產品方向。"
      },
      collaboration: {
        kicker: "合作方式",
        title: "貼近問題本身，而不是脫離問題來做。",
        body:
          "Bento AIII 很適合與創辦人、產品負責人、營運團隊與內部平台團隊合作，在同一個迴路裡處理產品判斷與技術深度。"
      },
      finalCta: {
        eyebrow: "聯繫",
        title: "如果你需要能連接產品、工程與 AI 系統的團隊，歡迎聯絡。",
        description:
          "當一個項目需要的不只是原型，也不想落入鬆散外包鏈條時，Bento AIII 是更合理的合作方式。",
        primaryLabel: "聯絡 Bento AIII",
        secondaryLabel: "查看項目方向"
      }
    },
    contact: {
      hero: {
        eyebrow: "聯絡",
        title: "帶著流程、問題，或產品方向來談。",
        description:
          "Bento AIII 最適合參與實際 AI 產品、語言模型系統、內部工具與交付合作相關的討論。",
        metrics: [
          { label: "一般聯絡", value: "ryanteo0628@gmail.com" },
          { label: "回覆時間", value: "通常 1 至 2 個工作天" },
          { label: "據點", value: "卡爾加里 / 溫哥華" }
        ]
      },
      reachOut: {
        eyebrow: "聯絡方式",
        title: "幾種可以開始對話的方式。",
        description: "如果想有更完整的上下文，建議使用表單；也可以直接選擇對應管道。"
      },
      submissionPath: {
        kicker: "提交流程",
        steps: [
          {
            label: "01 提交",
            body: "提交簡短說明、現有流程，或目前真正卡住交付的限制。"
          },
          {
            label: "02 評估",
            body: "Bento AIII 會判斷是否合適，以及這個問題應該被當成產品、系統，或流程工作來處理。"
          },
          {
            label: "03 後續",
            body: "如果方向吻合，下一步會是有範圍的討論，而不是制式銷售流程。"
          }
        ]
      }
    },
    contactForm: {
      kicker: "聯絡表單",
      title: "告訴我們，什麼需要真正運作。",
      description:
        "此表單會直接提交到網站後端。之後若要接入 Resend，不需要重做前端結構。",
      statuses: {
        clientValidationError: "請先修正標示欄位後再提交。",
        submitting: "正在送出洽詢...",
        fallbackError: "表單無法連線到網站後端。請稍後再試，或直接寄信到 ryanteo0628@gmail.com。",
        reference: "編號",
        successFollowUpPrefix: "如果此需求較急，請將相同編號一併寄到",
        successFollowUpLink: "ryanteo0628@gmail.com"
      },
      labels: {
        name: "姓名",
        company: "公司或團隊",
        email: "Email",
        projectType: "洽詢類型",
        message: "項目說明"
      },
      placeholders: {
        name: "你的名字",
        company: "公司或團隊名稱",
        email: "name@company.com",
        projectType: "選擇一個方向",
        message: "你想解決的是哪一段流程、哪一個團隊問題，或哪一個業務瓶頸？"
      },
      hints: {
        message: "請提供足夠資訊，讓我們理解目前流程、限制條件，以及你希望改變的部分。",
        range: "24-2400 字",
        preferredInput: "建議提交內容：真實流程、初步範圍，或目前必須解開的限制。"
      },
      buttons: {
        idle: "送出洽詢",
        loading: "送出中..."
      },
      options: [
        { value: "ai-application", label: "AI 應用" },
        { value: "llm-system", label: "LLM 系統" },
        { value: "workflow-design", label: "流程工具" },
        { value: "platform-delivery", label: "平台交付" },
        { value: "advisory", label: "範圍規劃與顧問" }
      ],
      validation: {
        name: "姓名至少需要 2 個字元。",
        email: "請輸入有效的 Email。",
        projectType: "請選擇最接近的洽詢類型。",
        company: "公司或團隊欄位請控制在 120 個字元內。",
        messageMin: "請至少用 24 個字元描述流程或問題。",
        messageMax: "項目說明請控制在 2400 個字元內。"
      },
      api: {
        invalidPayload: "請求內容格式無效。",
        inquiryReceived: "已收到洽詢。",
        rateLimited: "此連線的提交次數過多，請稍後幾分鐘再試。",
        validationFailed: "欄位驗證失敗。",
        loggedOnly:
          "網站後端已收到洽詢，但尚未設定郵件轉寄。如果需求較急，也請同步寄信到 ryanteo0628@gmail.com。",
        forwardFailed:
          "網站後端已收到洽詢，但郵件轉寄設定異常。若此問題持續，請直接寄信到 ryanteo0628@gmail.com。",
        success: "已收到洽詢。Bento AIII 會先行檢視，再透過 Email 回覆。",
        name: "姓名至少需要 2 個字元。",
        company: "公司或團隊欄位過長。",
        email: "需要有效的 Email。",
        projectType: "請選擇有效的洽詢類型。",
        messageMin: "項目說明至少需要 24 個字元。",
        messageMax: "項目說明過長。"
      }
    },
    notFound: {
      title: "目前的 Bento AIII 網站結構中沒有這個頁面。",
      description: "這個頁面可能已移動，或連結仍是網站整理中的暫時占位。",
      primaryLabel: "回到首頁",
      secondaryLabel: "查看項目"
    }
  },
  ja: {
    nav: [
      { href: "/", label: "ホーム" },
      { href: "/about", label: "会社紹介" },
      { href: "/projects", label: "プロジェクト" },
      { href: "/team", label: "チーム" },
      { href: "/contact", label: "お問い合わせ" }
    ],
    header: {
      brandTagline: "システム / プロダクト / ワークフロー",
      cta: "相談を始める",
      mobileToggleLabel: "ナビゲーションを切り替える",
      languageLabel: "言語"
    },
    footer: {
      tagline: "AI アプリケーション / LLM システム",
      title: "実際の業務で機能する AI ソフトウェア。",
      cta: "相談を始める",
      navTitle: "ナビゲーション",
      contactTitle: "連絡先",
      location: "カルガリー / バンクーバー",
      policy:
        "公開情報は、Bento AIII が現時点で責任を持って説明できる内容に限定しています。",
      closingKicker: "build the layer around the model",
      closingLine: "Bento AIII。プロダクト規律のある実務的な AI。"
    },
    common: {
      statusLabels: {
        Live: "稼働中",
        Prototype: "プロトタイプ",
        Internal: "内部",
        Concept: "構想"
      },
      currentFocus: "現在の重点",
      viewDetail: "詳細を見る",
      backToProjects: "プロジェクト一覧へ戻る",
      outcome: "現在の到達点",
      stage: "段階",
      disclosure: "公開範囲",
      problem: "課題",
      system: "システム",
      architecture: "アーキテクチャ",
      relatedWork: "関連する方向",
      moreProjectDirections: "Bento AIII の他のプロジェクト方向",
      nextStep: "次の一歩"
    },
    home: {
      hero: {
        kicker: "Bento AIII / AI systems company",
        location: "Calgary / Vancouver",
        title: "Bento AIII",
        subtitle: "モデルの外側に必要なレイヤーをつくる。",
        lead:
          "プロダクト規律、見えるレビュー経路、デモの外でも持つシステムを必要とするチーム向けに、AI アプリケーション、LLM システム、ワークフローソフトウェアを構築します。",
        body:
          "Bento AIII は、プロダクト構造、システム挙動、デリバリー上の制約を同じ枠組みの中で扱います。",
        ctaPrimary: "相談を始める",
        ctaSecondary: "現在の方向を見る",
        signals: [
          {
            label: "構築対象",
            value: "AI アプリケーション、LLM システム、内部ワークフローソフト"
          },
          {
            label: "システム関心",
            value: "検索、プロンプト設計、評価、レビュー、UI の明快さ"
          },
          {
            label: "進め方",
            value: "小さなチームで、現実的な範囲と見えるトレードオフを重視"
          }
        ]
      },
      heroScene: {
        kicker: "Bento システムボード",
        chip: "AI / LLM / workflow",
        lanesLabel: "デリバリーレーン",
        activeLabel: "稼働中",
        lanes: [
          { label: "ワークフロー設計", value: "入力、判断、レビュー経路" },
          { label: "モデル層", value: "検索、プロンプト、評価" },
          { label: "運用画面", value: "文脈、追跡性、操作" },
          { label: "導入適合", value: "引き継ぎ、責任、展開" }
        ],
        productSurfaceLabel: "プロダクト画面",
        productSurfaceText: "UI はプロンプトの見せ場ではなく、運用者のために設計します。",
        systemLayerLabel: "システム層",
        systemLayerText: "検索、プロンプト、レビュー、導入適合を一つの枠で扱います。",
        brandFrameLabel: "ブランドフレーム",
        brandDescription:
          "実際の業務のためのシステム。プロダクト構造、モデル挙動、レビュー設計を同じデリバリーフレームで扱います。",
        brandPrinciples: ["プロダクト規律", "システムの明快さ", "見えるレビュー"],
        signalPanelLabel: "シグナルパネル",
        signals: [
          { label: "検索", value: "根拠ある回答" },
          { label: "レビュー", value: "見える確認ポイント" },
          { label: "実行", value: "現実的なスコープ" }
        ],
        runtimeLogLabel: "ランタイムログ",
        runtimeLog: [
          "scope.workflow -> 運用者の目的 + リスク点",
          "shape.interface -> 読みやすい状態 + レビュー履歴",
          "connect.system -> 検索 + プロンプト挙動",
          "ship.iteration -> 制御された展開 + フィードバック"
        ]
      },
      about: {
        eyebrow: "会社紹介",
        title:
          "見栄えのよいケーススタディより、実務に耐える AI デリバリーに集中する小さな会社です。",
        missionLabel: "ミッション",
        publicMaterialLabel: "公開情報",
        sitePolicyLabel: "サイト方針",
        sitePolicyText:
          "このサイトに載せるのは、現時点で公開できる方向と能力範囲のみです。公開できない情報や、まだ固まっていない内容は書きません。"
      },
      capabilities: {
        eyebrow: "ケイパビリティ",
        title: "プロダクト、システム設計、デリバリーをまたぐ中核能力。",
        description:
          "各トラックは単なる試作ではなく、実際に使える AI プロダクトを支えるためのものです。Bento AIII は、モデルとの対話だけでなく、その周辺レイヤーも同じだけ丁寧に設計します。"
      },
      projects: {
        eyebrow: "プロジェクト",
        title: "外部向け方向、内部構築、構想検討として公開している現在のトラック。",
        description: "一覧は、誇張した導入事例ではなく、現在のプロジェクト方向として記述しています。",
        cta: "すべての方向を見る"
      },
      team: {
        eyebrow: "チーム",
        title: "プロダクトシステム、エンジニアリング、AI、マーケティングを担う 5 名体制。",
        description:
          "チームページでは、現在 Bento AIII を形づくっているメンバーを、役割と実務範囲に沿って紹介します。",
        cta: "チームを見る"
      },
      finalCta: {
        eyebrow: "開始",
        title: "ワークフローが現実のものなら、モデルの外側のソフトウェアも現実的であるべきです。",
        description:
          "実際の業務プロセス、内部ツール、AI プロダクトの方向に対して、信頼できるスコープ設定と実装が必要なら、ここから始めてください。",
        primaryLabel: "プロジェクト相談を始める",
        secondaryLabel: "会社紹介を読む"
      }
    },
    about: {
      hero: {
        eyebrow: "会社紹介",
        title: "Bento AIII は実務的な AI デリバリーのための会社です。",
        metrics: [
          { label: "会社モデル", value: "小規模な AI プロダクト / システムスタジオ" },
          { label: "公開情報", value: "責任を持って説明できる内容のみ公開" },
          { label: "進め方", value: "スコープ明確、プロダクト主導、システム志向の実装" }
        ]
      },
      brief: {
        kicker: "会社概要",
        title: "Bento AIII が扱う仕事",
        body:
          "対象は、実データ、複数の関係者、通常の業務制約に耐える必要がある AI プロダクトです。そのため、UI 設計、システム設計、プロンプトと検索の振る舞い、展開ロジックを一緒に設計します。"
      },
      publicInfo: {
        kicker: "公開情報ポリシー",
        title: "サイトに載せる情報は、実際の仕事よりも意図的に狭くしています。",
        whyLabel: "その理由",
        whyText:
          "会社を実態以上に大きく、派手に、あるいは展開済みに見せるより、少なくても正確な情報を出す方が健全だからです。",
        missionLabel: "ミッション"
      },
      businessDirections: {
        eyebrow: "事業方向",
        title: "会社は、価値の高い少数の構築トラックに集中しています。",
        description:
          "Bento AIII は意図的に焦点を絞っています。モデルの周辺にあるプロダクト、モデルを支えるシステム、そして結果を使える形にするワークフローです。",
        trackPrefix: "方向"
      },
      technicalCapability: {
        eyebrow: "技術能力",
        title: "能力とは、モデルに触れることではなく、その周辺システムも含めた設計です。",
        description:
          "Bento AIII は、プロダクト、エンジニアリング、システム運用を横断し、AI 機能を孤立したデモではなく安定したソフトウェアにします。"
      },
      values: {
        eyebrow: "価値観",
        title: "仕事の進め方を決める、いくつかの原則。",
        description: "プロダクト判断、技術選択、プロジェクト実行の背景にある考え方です。"
      },
      roadmap: {
        eyebrow: "ロードマップ",
        title: "現在のロードマーク。",
        description:
          "これらは実務上の方向指標であり、資金調達資料や拡大幻想のためのものではありません。"
      },
      finalCta: {
        eyebrow: "お問い合わせ",
        title: "UI とシステムの両方を扱える会社が必要なら、ご相談ください。",
        description:
          "プロダクトの明快さ、技術的な厳密さ、運用上の現実性が同時に求められる案件に、Bento AIII は向いています。",
        primaryLabel: "Bento AIII に相談する",
        secondaryLabel: "プロジェクトを見る"
      }
    },
    projects: {
      hero: {
        eyebrow: "プロジェクト",
        title: "外部向け方向、内部構築、構想検討として公開している現在のトラック。",
        description:
          "このページは、誇張された公開事例ではなく、プロジェクト方向とシステムトラックを示します。内部、初期段階、非公開の仕事も含まれます。",
        metrics: [
          { label: "トラック数", value: "公開している方向" },
          { label: "ステータス", value: "プロトタイプ / 内部 / 構想" },
          { label: "公開範囲", value: "公開できる詳細は意図的に限定" }
        ]
      },
      portfolio: {
        eyebrow: "ポートフォリオ表示",
        title: "Bento AIII の現在のプロジェクト方向を一覧で確認できます。",
        description:
          "内容は、実装トラック、内部能力づくり、構想検討を含み、Bento AIII が扱う問題領域を示しています。"
      },
      readAsIntended: {
        kicker: "このページの見方"
      },
      stageUnit: "件",
      howToRead: {
        eyebrow: "トラックの読み方",
        title: "外部、内部、構想の仕事を意図的に混在させています。",
        description: "その分け方の方が、ポートフォリオとして正直で評価しやすいからです。",
        cards: [
          {
            title: "外部向けトラック",
            copy:
              "顧客向け、またはパートナー向けの実装方向。派手なデモより、ワークフローと成果を重視します。"
          },
          {
            title: "内部構築",
            copy:
              "将来のプロダクト実装を、より構造的で保守しやすくするための内部基盤や運用レイヤーです。"
          },
          {
            title: "構想検討",
            copy:
              "まだ探索段階にある方向で、スコープや運用適合が見えるまで構想扱いのままにしています。"
          }
        ]
      },
      detail: {
        finalCta: {
          title: "同じような構造のシステムが必要なら、ご相談ください。",
          description:
            "Bento AIII は、UI、ワークフロー、システム層を別々に切り離さず、一体で設計できます。",
          primaryLabel: "ワークフローについて相談する",
          secondaryLabel: "すべてのプロジェクトを見る"
        }
      },
      finalCta: {
        eyebrow: "お問い合わせ",
        title: "この方向のどれかが自社の課題に近いなら、そこから始めるのが自然です。",
        description:
          "Bento AIII は、構想、粗い内部ツール、あるいは壊れたワークフローを、より信頼できるプロダクト方向へ整理できます。",
        primaryLabel: "プロジェクトを相談する",
        secondaryLabel: "会社について知る"
      }
    },
    team: {
      hero: {
        eyebrow: "チーム",
        title: "プロダクトシステム、エンジニアリング、AI、マーケティングを担う小さなチーム。",
        description:
          "Bento AIII では、現在会社の方向を形づくっている人を、プロダクト、技術、デリバリー、マーケティングの実務に沿って公開しています。",
        metrics: [
          { label: "チーム規模", value: "公開メンバー 5 名" },
          { label: "進め方", value: "小さく横断的なデリバリー" },
          { label: "カバー範囲", value: "プロダクト / エンジニアリング / AI / マーケ" }
        ]
      },
      overview: {
        eyebrow: "チーム",
        title: "プロダクト、構築、対外展開を 5 名でカバーする体制。",
        description:
          "ここでは、確認できる役割と担当範囲だけを載せています。誇張した経歴や空のプロフィールリンクは載せません。"
      },
      introCard: {
        kicker: "ページの考え方",
        body:
          "各カードは、役割、現在の担当範囲、主な貢献領域に絞っています。公開できる実在プロフィールがない場合、外部リンクは表示しません。"
      },
      workingModel: {
        eyebrow: "進め方",
        title: "チームは小規模でも、進め方には構造があります。",
        description:
          "Bento AIII の案件は、プロダクト設計、実装、運用フォローが分断されず、つながったレーンで進みます。",
        cards: [
          {
            title: "プロダクトを定義する",
            copy:
              "ワークフロー、利用者、運用制約、成功条件を先に明確にしてからシステムを組みます。"
          },
          {
            title: "システムをつくる",
            copy:
              "アプリケーションロジック、モデル挙動、連携、評価、レビュー制御を UI と並行して設計します。"
          },
          {
            title: "出して磨く",
            copy:
              "段階的に展開し、運用状況を見えるようにしながら、実際の利用に合わせて調整します。"
          }
        ]
      },
      fit: {
        kicker: "向いている相手",
        title: "AI プロダクトを実際の業務に入れようとしているチーム。",
        body:
          "最も相性が良いのは、すでに摩擦点が見えているチームです。ナレッジの滞り、繰り返し判断、分断された内部ツール、あるいは構造を絞り直したいプロダクト方向などです。"
      },
      collaboration: {
        kicker: "協業スタイル",
        title: "問題から離れず、問題の近くで進める。",
        body:
          "Bento AIII は、創業者、プロダクト責任者、オペレーションチーム、内部プラットフォームチームと、プロダクト判断と技術深度を同じループで扱う協業に向いています。"
      },
      finalCta: {
        eyebrow: "連絡",
        title: "プロダクト、エンジニアリング、AI システムをまたげるチームが必要なら、ご相談ください。",
        description:
          "単なるプロトタイプ以上が必要で、分断された外注チェーンは避けたい案件に、Bento AIII は適しています。",
        primaryLabel: "Bento AIII に連絡する",
        secondaryLabel: "プロジェクトを見る"
      }
    },
    contact: {
      hero: {
        eyebrow: "お問い合わせ",
        title: "ワークフロー、課題、あるいはプロダクト方向を持ってきてください。",
        description:
          "Bento AIII は、実務的な AI プロダクト、言語モデルシステム、内部ツール、デリバリーパートナーシップの相談に向いています。",
        metrics: [
          { label: "一般窓口", value: "ryanteo0628@gmail.com" },
          { label: "返信目安", value: "通常 1〜2 営業日" },
          { label: "拠点", value: "カルガリー / バンクーバー" }
        ]
      },
      reachOut: {
        eyebrow: "連絡方法",
        title: "会話を始めるためのいくつかの方法。",
        description: "構造的に伝えるならフォームが最適です。状況に応じて直接の窓口も使えます。"
      },
      submissionPath: {
        kicker: "送信の流れ",
        steps: [
          {
            label: "01 受付",
            body:
              "短い概要、現状のワークフロー、あるいは今デリバリーを止めている制約を送ってください。"
          },
          {
            label: "02 確認",
            body:
              "Bento AIII が適合性を確認し、その課題をプロダクト、システム、ワークフローのどこで扱うべきかを見ます。"
          },
          {
            label: "03 次の連絡",
            body:
              "適合する場合、次は汎用的な営業フローではなく、スコープのある会話に進みます。"
          }
        ]
      }
    },
    contactForm: {
      kicker: "お問い合わせフォーム",
      title: "何を確実に動かしたいのかを教えてください。",
      description:
        "このフォームはサイトのバックエンドへ送信されます。後から Resend をつないでも、フロントエンド構造は変えずに済みます。",
      statuses: {
        clientValidationError: "強調表示された項目を修正してから再送信してください。",
        submitting: "問い合わせを送信中...",
        fallbackError:
          "サイトのバックエンドに接続できませんでした。時間をおいて再試行するか、ryanteo0628@gmail.com へ直接メールしてください。",
        reference: "受付番号",
        successFollowUpPrefix: "急ぎの案件であれば、同じ受付番号を",
        successFollowUpLink: "ryanteo0628@gmail.com"
      },
      labels: {
        name: "お名前",
        company: "会社名またはチーム名",
        email: "メールアドレス",
        projectType: "問い合わせ種別",
        message: "プロジェクト概要"
      },
      placeholders: {
        name: "お名前",
        company: "会社名またはチーム名",
        email: "name@company.com",
        projectType: "トラックを選択",
        message: "解決したいワークフロー、チーム課題、または事業上の問題は何ですか。"
      },
      hints: {
        message:
          "現在のワークフロー、制約、何を変えたいのかが分かる程度の情報を入れてください。",
        range: "24-2400 文字",
        preferredInput:
          "望ましい入力: 実際のワークフロー、ラフなスコープ、または今すぐ解消したい制約。"
      },
      buttons: {
        idle: "問い合わせを送る",
        loading: "送信中..."
      },
      options: [
        { value: "ai-application", label: "AI アプリケーション" },
        { value: "llm-system", label: "LLM システム" },
        { value: "workflow-design", label: "ワークフローツール" },
        { value: "platform-delivery", label: "プラットフォーム実装" },
        { value: "advisory", label: "スコープ整理 / アドバイザリー" }
      ],
      validation: {
        name: "2 文字以上のお名前を入力してください。",
        email: "有効なメールアドレスを入力してください。",
        projectType: "最も近い問い合わせ種別を選択してください。",
        company: "会社名またはチーム名は 120 文字以内で入力してください。",
        messageMin: "ワークフローや課題を 24 文字以上で説明してください。",
        messageMax: "プロジェクト概要は 2400 文字以内で入力してください。"
      },
      api: {
        invalidPayload: "リクエスト内容が正しくありません。",
        inquiryReceived: "お問い合わせを受け付けました。",
        rateLimited:
          "この接続からの送信回数が多すぎます。数分待ってから再試行してください。",
        validationFailed: "入力内容の検証に失敗しました。",
        loggedOnly:
          "サイトのバックエンドには届きましたが、メール転送はまだ設定されていません。急ぎの場合は ryanteo0628@gmail.com にも送ってください。",
        forwardFailed:
          "サイトのバックエンドには届きましたが、メール転送設定に問題があります。問題が続く場合は ryanteo0628@gmail.com に直接ご連絡ください。",
        success: "お問い合わせを受け付けました。Bento AIII が確認のうえ、メールでご連絡します。",
        name: "お名前は 2 文字以上必要です。",
        company: "会社名またはチーム名が長すぎます。",
        email: "有効なメールアドレスが必要です。",
        projectType: "有効な問い合わせ種別を選択してください。",
        messageMin: "プロジェクト概要は 24 文字以上必要です。",
        messageMax: "プロジェクト概要が長すぎます。"
      }
    },
    notFound: {
      title: "現在の Bento AIII サイトマップにはこのページは存在しません。",
      description:
        "ページが移動したか、サイト構成の整理中に一時的なリンクが残っている可能性があります。",
      primaryLabel: "ホームへ戻る",
      secondaryLabel: "プロジェクトを見る"
    }
  }
};

export type SiteDictionary = typeof en;

export function getDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale];
}
