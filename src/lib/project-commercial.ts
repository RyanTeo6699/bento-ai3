import type { Locale } from "@/lib/i18n";

type Localized<T> = Record<Locale, T>;

function localize<T>(value: T): Localized<T> {
  return {
    en: value,
    "zh-Hant": value,
    ja: value
  };
}

export type ProjectStatus = "Live" | "Prototype" | "Internal" | "Concept";

export type ProjectFeature = {
  title: string;
  body: string;
};

export type ProjectAngleLayer = {
  title: string;
  body: string;
};

export type ProjectVisualLink = {
  label: string;
  href: string;
};

export type CommercialProjectView = {
  slug: string;
  name: string;
  alternateName?: string;
  definition: string;
  heroLead: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  problem: string;
  whatItDoes: string;
  coreWorkflow: string[];
  coreFeatures: ProjectFeature[];
  differentiation: {
    not: string[];
    value: string;
  };
  bentoAngle: {
    summary: string;
    layers: ProjectAngleLayer[];
    conclusion: string;
  };
  currentStatus: {
    stage: string;
    alreadyLabel: string;
    already: string[];
    nextLabel: string;
    next: string[];
  };
  visual: {
    availableMaterials: string[];
    publicDemo: string;
    projectLink?: ProjectVisualLink;
  };
  closingCta: string;
};

type LocalizedProjectDefinition = {
  slug: string;
  status: ProjectStatus;
  featured: boolean;
  name: Localized<string>;
  alternateName?: Localized<string>;
  definition: Localized<string>;
  heroLead: Localized<string>;
  category: Localized<string>;
  problem: Localized<string>;
  whatItDoes: Localized<string>;
  coreWorkflow: Localized<string[]>;
  coreFeatures: Localized<ProjectFeature[]>;
  differentiation: {
    not: Localized<string[]>;
    value: Localized<string>;
  };
  bentoAngle: {
    summary: Localized<string>;
    layers: Localized<ProjectAngleLayer[]>;
    conclusion: Localized<string>;
  };
  currentStatus: {
    stage: Localized<string>;
    alreadyLabel: Localized<string>;
    already: Localized<string[]>;
    nextLabel: Localized<string>;
    next: Localized<string[]>;
  };
  visual: {
    availableMaterials: Localized<string[]>;
    publicDemo: Localized<string>;
    projectLink?: Localized<ProjectVisualLink>;
  };
  closingCta: Localized<string>;
};

function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

const sharedPresentation = {
  heroEyebrow: "Projects",
  heroTitle: "Project surfaces built on one operating logic.",
  heroDescription:
    "Bento AIII’s projects reflect different application surfaces built on the same broader logic: structured decisions, workflow progression, and compounding operational memory.",
  sharedLogicEyebrow: "Shared operating logic",
  sharedLogicTitle: "Four application surfaces. One broader capability.",
  sharedLogicDescription:
    "Each project addresses a different workflow environment, but all four show the same deeper system pattern: decision framing, execution progression, and retained operational memory.",
  sharedLogic: [
    {
      title: "Decision",
      body: "Each product starts by turning vague user situations into a clearer next-step frame."
    },
    {
      title: "Execution",
      body: "The workflow continues after the answer so activity can be advanced, reviewed, and maintained."
    },
    {
      title: "Memory",
      body: "The result persists as usable state instead of disappearing as a one-time interaction."
    }
  ],
  portfolioEyebrow: "Project portfolio",
  portfolioTitle: "Four product implementations under one company frame.",
  portfolioDescription:
    "These are not separate startup identities. They are four product surfaces that show how Bento AIII turns fragmented input into structured progression across different domains.",
  stageLabel: "Stage",
  viewProject: "View Project",
  problemEyebrow: "Problem",
  whatItDoesEyebrow: "What It Does",
  coreWorkflowEyebrow: "Core Workflow",
  coreFeaturesEyebrow: "Core Features",
  differentiationEyebrow: "Differentiation",
  bentoAngleEyebrow: "Bento AIII Angle",
  currentStatusEyebrow: "Current Status",
  visualDemoEyebrow: "Visual / Demo",
  availableMaterialsLabel: "Available materials",
  publicDemoLabel: "Public demo",
  projectLinkLabel: "Project link",
  closingEyebrow: "Next",
  closingDescription:
    "Bento AIII treats these projects as evidence of a broader operating capability: structure the decision, carry the workflow forward, and retain useful state.",
  indexFinalEyebrow: "Contact",
  indexFinalTitle: "Need a project layer built on the same kind of operating logic?",
  indexFinalDescription:
    "Bento AIII can scope the workflow, interface, and memory model together instead of treating them as separate workstreams."
} as const;

const projectPresentationCopy = {
  en: sharedPresentation,
  "zh-Hant": sharedPresentation,
  ja: sharedPresentation
} as const;

export type ProjectPresentationCopy = (typeof projectPresentationCopy)[Locale];

const projectDefinitions: LocalizedProjectDefinition[] = [
  {
    slug: "immipilot",
    status: "Prototype",
    featured: true,
    name: localize("ImmiPilot"),
    definition: localize(
      "An AI-assisted immigration workflow system for international students and temporary residents in Canada, designed to turn messy status questions into structured case progress, next actions, and export-ready preparation outputs."
    ),
    heroLead: localize(
      "ImmiPilot is built for users who know they need to extend status, maintain continuity, or prepare for a transition, but do not know what to do next, what is missing, or where the real risk lies."
    ),
    category: localize("Immigration workflow system"),
    problem: localize(
      "Immigration support often breaks at the point where a user needs structure, not more information. Government pages, forums, and generic AI tools may provide answers, but they rarely convert a real situation into a case that can be advanced, reviewed, or handed off."
    ),
    whatItDoes: localize(
      "ImmiPilot works as a case progression system, not a generic immigration chatbot. It identifies likely case type, urgency, and missing context, then turns the result into a structured workspace with checklist logic, risk signals, next actions, and exportable case summaries."
    ),
    coreWorkflow: localize([
      "Start from a real immigration scenario",
      "Identify case type, urgency, and missing context",
      "Generate structured guidance and risk-aware next steps",
      "Save the result into a continuing case workspace",
      "Build or update checklist, missing items, and actions",
      "Export a clean summary for review or handoff"
    ]),
    coreFeatures: localize([
      {
        title: "Scenario-Based Entry",
        body: "Users begin from concrete pathways such as Study Permit Extension, Visitor Record, or PGWP preparation."
      },
      {
        title: "Structured AI Response",
        body: "Questions are converted into summary, next steps, support logic, and risk-aware guidance."
      },
      {
        title: "Case Workspace",
        body: "Each case persists as a structured workflow rather than a disposable answer."
      },
      {
        title: "Checklist and Missing-Item Logic",
        body: "User input becomes preparation tasks, requirements, and missing items."
      },
      {
        title: "Risk Flags",
        body: "The system highlights timing pressure, incomplete context, and weak preparation states."
      },
      {
        title: "Export and Handoff Summary",
        body: "Cases can be reviewed, shared, and transferred in a clean structured format."
      }
    ]),
    differentiation: {
      not: localize([
        "a generic immigration chatbot",
        "a content-first policy portal",
        "a static dashboard",
        "a one-time form helper"
      ]),
      value: localize(
        "Its value comes from turning fragmented user input into a workflow that can be advanced, updated, reviewed, and handed off."
      )
    },
    bentoAngle: {
      summary: localize("ImmiPilot reflects Bento AIII’s core model across all three layers:"),
      layers: localize([
        {
          title: "Decision",
          body: "scenario recognition, urgency detection, next-step prioritization"
        },
        {
          title: "Execution",
          body: "workflow progression beyond the answer layer"
        },
        {
          title: "Memory",
          body: "persistent case state that remains usable over time"
        }
      ]),
      conclusion: localize(
        "It is an application-layer product that also points toward a deeper operating layer for structured cases, workflow transitions, and handoff-ready outputs."
      )
    },
    currentStatus: {
      stage: localize("Product definition and workflow architecture stage"),
      alreadyLabel: localize("Already Defined"),
      already: localize([
        "core product direction",
        "workflow-based case logic",
        "first scenarios for V1",
        "entry -> answer -> workspace -> export structure"
      ]),
      nextLabel: localize("Next"),
      next: localize([
        "build V1 workflow for status-continuity scenarios",
        "launch structured scenario-entry flows",
        "add workspace and export / handoff logic",
        "validate movement from asking into maintaining a case state"
      ])
    },
    visual: {
      availableMaterials: localize([
        "workflow diagrams",
        "product architecture diagrams",
        "initial workspace and case-flow concepts"
      ]),
      publicDemo: localize("Not yet publicly released"),
      projectLink: localize({
        label: "ImmiPilot.ca",
        href: "https://immipilot.ca"
      })
    },
    closingCta: localize(
      "See how ImmiPilot turns immigration questions into structured case progression."
    )
  },
  {
    slug: "daigou-helper",
    status: "Prototype",
    featured: true,
    name: localize("Daigou Helper"),
    alternateName: localize("代购神奇"),
    definition: localize(
      "A cross-border daigou operations platform for individual resellers and small teams, designed to manage products, inventory, orders, suppliers, and multi-warehouse workflows in one system."
    ),
    heroLead: localize(
      "Daigou Helper is built for resale operators who have outgrown spreadsheets, chat-based order handling, and manual warehouse coordination, but still need a workflow that matches how daigou businesses actually run."
    ),
    category: localize("Cross-border operations platform"),
    problem: localize(
      "Daigou operations usually run on fragmented tools: chat for customer requests, spreadsheets for stock and orders, memory for SKU details, and ad hoc coordination for suppliers and shipping. This leads to stock mismatch, duplicated records, overselling, slow fulfillment, and weak team control. The problem matters more now because cross-border resale is becoming more operationally complex, not less. Catalogs are larger, customer expectations are faster, and margin pressure is tighter. Once volume grows, manual workflows stop being inconvenient and start becoming destructive."
    ),
    whatItDoes: localize(
      "Daigou Helper works as a cross-border operations system, not a generic commerce dashboard. It connects intake, catalog structure, inventory states, supplier flow, and fulfillment execution into one operating loop built for daigou realities."
    ),
    coreWorkflow: localize([
      "Start from incoming customer demand, supplier links, spreadsheets, chat text, or receipts",
      "Import and structure the input into products, SKU records, and orders",
      "Route inventory impact into the correct warehouse context",
      "Manage purchasing, stock movement, supplier coordination, and warehouse actions",
      "Execute fulfillment with barcode and shipment operations",
      "Keep orders, stock, suppliers, and shipment status synchronized in one backend"
    ]),
    coreFeatures: localize([
      {
        title: "Smart Order Intake",
        body: "Supports Excel import, text-based order parsing, and receipt OCR."
      },
      {
        title: "Product Center with SPU / SKU Structure",
        body: "Handles products through a two-layer structure with SKU-level control for size, color, UPC, pricing, and supplier linkage."
      },
      {
        title: "Multi-Warehouse Inventory Management",
        body: "Tracks overseas stock, domestic stock, and in-transit goods with real-time linkage."
      },
      {
        title: "Supplier and Purchasing Workflow",
        body: "Supports purchase orders, supplier records, and procurement actions."
      },
      {
        title: "Barcode and Fulfillment Operations",
        body: "Enables barcode-based warehouse actions, shipment batching, and tracking updates."
      },
      {
        title: "Multi-Tenant and Role-Based Access",
        body: "Separates team data, supports permissions, and improves auditability."
      }
    ]),
    differentiation: {
      not: localize([
        "a normal shopping app",
        "a simple order form",
        "a standalone warehouse screen",
        "a generic ERP pretending to fit daigou use cases",
        "a product catalog tool with admin pages"
      ]),
      value: localize(
        "Its value comes from coordinating the real operating loop of daigou teams: messy intake sources, SKU-heavy catalogs, multi-location inventory, supplier relationships, and fulfillment execution. Normal tools store information. This system coordinates operations."
      )
    },
    bentoAngle: {
      summary: localize(
        "Daigou Helper demonstrates Bento AIII’s ability to convert fragmented real-world business behavior into structured operational software."
      ),
      layers: localize([
        {
          title: "Execution logic",
          body: "moving order handling, stock movement, procurement, and fulfillment into one controlled workflow"
        },
        {
          title: "Memory logic",
          body: "persistent product, supplier, and inventory records"
        },
        {
          title: "Decision logic",
          body: "secondary but present through stock visibility, purchasing timing, and operational prioritization"
        }
      ]),
      conclusion: localize(
        "It is more than an application-layer admin tool. Underneath, it reveals deeper system logic in structured intake, entity relationships, warehouse state transitions, role isolation, and workflow coordination."
      )
    },
    currentStatus: {
      stage: localize("Functional product prototype / early operational system"),
      alreadyLabel: localize("Already Built"),
      already: localize([
        "working backend / admin interface",
        "dashboard metrics",
        "product management",
        "SKU structure",
        "inventory views",
        "order handling",
        "operational management screens",
        "product materials describing OCR intake, text parsing, multi-warehouse logic, supplier flow, and tenant isolation"
      ]),
      nextLabel: localize("Next"),
      next: localize([
        "harden intake automation",
        "tighten procurement-to-fulfillment linkage",
        "improve reporting",
        "prove support for live daigou teams at higher volume"
      ])
    },
    visual: {
      availableMaterials: localize([
        "backend / admin screenshots",
        "pitch deck PDF / PPT",
        "product overview PDF",
        "dashboard, inventory, product, and order management screens"
      ]),
      publicDemo: localize("None provided yet")
    },
    closingCta: localize(
      "Request a demo to see how Daigou Helper replaces Excel, chat-based order handling, and fragmented stock management with one operational system."
    )
  },
  {
    slug: "shiok",
    status: "Internal",
    featured: true,
    name: localize("Shiok"),
    definition: localize(
      "An AI-assisted dining copilot for frequent diners, built to improve ordering decisions, capture meal events automatically, and turn everyday dining into structured review and spending insight."
    ),
    heroLead: localize(
      "Shiok is designed for people who eat out often and want better control over what they order, what it costs, and what those decisions add up to over time."
    ),
    category: localize("Dining copilot"),
    problem: localize(
      "Dining is a repeated high-friction decision space shaped by menu overload, rising costs, dietary constraints, and weak review loops. Most people rely on memory, impulse, receipts, or generic tracking apps that fail once real-world dining becomes messy."
    ),
    whatItDoes: localize(
      "Shiok works as a dining decision-and-review system. It supports the choice, captures the event, structures the record, allows correction, and feeds the result into continued reflection and behavioral optimization."
    ),
    coreWorkflow: localize([
      "Start from a menu, meal decision, receipt, or completed order",
      "Parse the dining event into structured meal data",
      "Review and correct the result",
      "Surface constraints, warnings, and weekly progress context",
      "Build a closed-loop dining record",
      "Use accumulated history to improve future choices"
    ]),
    coreFeatures: localize([
      {
        title: "Constraint-Aware Ordering Support",
        body: "Helps users make better tradeoffs under budget, preference, and dietary constraints."
      },
      {
        title: "Automatic Meal Capture and Parsing",
        body: "Turns meal-related inputs into structured records without requiring full manual logging."
      },
      {
        title: "Review and Correction Flow",
        body: "Allows users to inspect low-confidence outputs and improve data quality over time."
      },
      {
        title: "Weekly Progress and Insight Layer",
        body: "Surfaces activity, spend totals, pending reviews, and actionable summaries."
      },
      {
        title: "Retention and Follow-Up Surface",
        body: "Brings unfinished items and next actions back through an active Inbox flow."
      },
      {
        title: "WebDashboard and Export Pipeline",
        body: "Supports reporting, filtering, and structured analysis outside the mobile app."
      }
    ]),
    differentiation: {
      not: localize([
        "a calorie tracker",
        "a flat expense tracker",
        "a generic recommendation chatbot",
        "a simple meal diary"
      ]),
      value: localize(
        "Its value comes from the closed loop between decision, capture, correction, review, and future optimization."
      )
    },
    bentoAngle: {
      summary: localize("Shiok reflects Bento AIII’s operating logic across three layers:"),
      layers: localize([
        {
          title: "Decision",
          body: "constrained ordering support at the point of choice"
        },
        {
          title: "Execution",
          body: "structured capture, review, and follow-up flows"
        },
        {
          title: "Memory",
          body: "cumulative meal history, corrections, patterns, and behavioral context"
        }
      ]),
      conclusion: localize(
        "It is a consumer-facing product that also reveals deeper system logic in parsing, correction loops, export infrastructure, and sync-ready architecture."
      )
    },
    currentStatus: {
      stage: localize("Advanced prototype / internal product build"),
      alreadyLabel: localize("Already Built"),
      already: localize([
        "iOS app foundation",
        "parsing and review flows",
        "retention surfaces",
        "usage limiting and paywall framework",
        "weekly insight mechanisms",
        "export pipeline",
        "WebDashboard support",
        "sync-readiness groundwork"
      ]),
      nextLabel: localize("Next"),
      next: localize([
        "stabilize cloud sync architecture",
        "improve cross-device data handling",
        "tighten product polish",
        "strengthen the closed loop between capture, review, and insight"
      ])
    },
    visual: {
      availableMaterials: localize([
        "Inbox screens",
        "review-flow screens",
        "weekly insight surfaces",
        "debug and quality tools",
        "WebDashboard report views"
      ]),
      publicDemo: localize("Internal demo materials / test builds only")
    },
    closingCta: localize(
      "Request a demo to see how Shiok turns everyday dining into structured, reviewable, and compounding user intelligence."
    )
  },
  {
    slug: "you-wife-list",
    status: "Prototype",
    featured: true,
    name: localize("You Wife List"),
    definition: localize(
      "A privacy-first, offline household shopping system that helps individuals and families plan purchases, confirm what was bought, track at-home inventory, and trigger replenishment from actual consumption."
    ),
    heroLead: localize(
      "You Wife List is built for households that want better control over recurring essentials without depending on cloud-heavy shopping automation or fragmented note-taking habits."
    ),
    category: localize("Household shopping system"),
    problem: localize(
      "Household purchasing is usually fragmented across lists, memory, receipts, retailer apps, and ad hoc reminders. As a result, users lose track of what they need, what they bought, and what is still at home. The outcome is duplicate purchases, waste, stock blind spots, and weak spending control."
    ),
    whatItDoes: localize(
      "You Wife List works as a closed-loop household shopping system. It links planning, purchase confirmation, inventory state, and consumption into one persistent local memory model."
    ),
    coreWorkflow: localize([
      "Start with a list from Inbox or a named shopping list",
      "Normalize item identity across modules",
      "Mark items as Purchased",
      "Persist purchase events into Inventory",
      "Track stock changes through Used up actions",
      "Maintain reliable local memory for future replenishment"
    ]),
    coreFeatures: localize([
      {
        title: "List Management",
        body: "Create lists, add items quickly, mark items as Purchased, and remove items."
      },
      {
        title: "Inventory with Consumption Actions",
        body: "Track at-home quantities and decrement stock through Used up actions."
      },
      {
        title: "Offline-First Local Memory",
        body: "Persist lists, inventory, aliases, and purchase records locally."
      },
      {
        title: "Product Identity Normalization",
        body: "Unify item names across modules through normalization and alias logic."
      },
      {
        title: "Purchase-to-Inventory Reconciliation",
        body: "Ensure purchased items are reflected in inventory, including backfill cases."
      },
      {
        title: "Quick Add Omni-Entry",
        body: "Support fast item entry and list creation through one clean input path."
      }
    ]),
    differentiation: {
      not: localize([
        "an ordering app",
        "a retailer-specific cart",
        "a coupon aggregator",
        "a cloud AI shopping assistant",
        "a standard checklist app"
      ]),
      value: localize(
        "Its value comes from turning checklist completion into a persistent household state machine."
      )
    },
    bentoAngle: {
      summary: localize("You Wife List demonstrates Bento AIII’s ability to build compact but complete stateful systems:"),
      layers: localize([
        {
          title: "Memory",
          body: "persistent local inventory and purchase history"
        },
        {
          title: "Execution",
          body: "purchase confirmation, reconciliation, and consumption updates"
        },
        {
          title: "Emerging Decision Logic",
          body: "future budget gates, replenishment rules, and planning automation"
        }
      ]),
      conclusion: localize(
        "It is an application-layer household tool that exposes deeper system logic in identity unification, event reconciliation, and closed-loop state transitions."
      )
    },
    currentStatus: {
      stage: localize("MVP implementation with active UI and logic iteration"),
      alreadyLabel: localize("Already Built"),
      already: localize([
        "lists with Purchased marking",
        "inventory with Used up actions",
        "local persistence",
        "alias normalization",
        "purchase-to-inventory sync and reconciliation",
        "Quick Add single-entry UX"
      ]),
      nextLabel: localize("Next"),
      next: localize([
        "improve Quick Add targeting for active / recent lists",
        "add budget and price constraints",
        "introduce recipes-driven planning",
        "strengthen offline analytics for spend and stock health"
      ])
    },
    visual: {
      availableMaterials: localize([
        "Add Item UI",
        "List Detail with Purchased items",
        "Inventory with Used up actions",
        "omni-input overlay",
        "internal flow and UI iteration captures"
      ]),
      publicDemo: localize("Not yet published")
    },
    closingCta: localize(
      "Request access to the latest build and review the closed-loop workflow from List to Purchased to Inventory to Used up."
    )
  }
];

function materializeProject(
  definition: LocalizedProjectDefinition,
  locale: Locale
): CommercialProjectView {
  return {
    slug: definition.slug,
    name: pick(definition.name, locale),
    alternateName: definition.alternateName ? pick(definition.alternateName, locale) : undefined,
    definition: pick(definition.definition, locale),
    heroLead: pick(definition.heroLead, locale),
    category: pick(definition.category, locale),
    status: definition.status,
    statusLabel: definition.status === "Internal" ? "Internal Build" : definition.status === "Prototype" ? "Prototype" : definition.status,
    featured: definition.featured,
    problem: pick(definition.problem, locale),
    whatItDoes: pick(definition.whatItDoes, locale),
    coreWorkflow: pick(definition.coreWorkflow, locale),
    coreFeatures: pick(definition.coreFeatures, locale),
    differentiation: {
      not: pick(definition.differentiation.not, locale),
      value: pick(definition.differentiation.value, locale)
    },
    bentoAngle: {
      summary: pick(definition.bentoAngle.summary, locale),
      layers: pick(definition.bentoAngle.layers, locale),
      conclusion: pick(definition.bentoAngle.conclusion, locale)
    },
    currentStatus: {
      stage: pick(definition.currentStatus.stage, locale),
      alreadyLabel: pick(definition.currentStatus.alreadyLabel, locale),
      already: pick(definition.currentStatus.already, locale),
      nextLabel: pick(definition.currentStatus.nextLabel, locale),
      next: pick(definition.currentStatus.next, locale)
    },
    visual: {
      availableMaterials: pick(definition.visual.availableMaterials, locale),
      publicDemo: pick(definition.visual.publicDemo, locale),
      projectLink: definition.visual.projectLink ? pick(definition.visual.projectLink, locale) : undefined
    },
    closingCta: pick(definition.closingCta, locale)
  };
}

export function getProjectPresentationCopy(locale: Locale) {
  return projectPresentationCopy[locale];
}

export function getProjects(locale: Locale): CommercialProjectView[] {
  const projectOrder = ["immipilot", "shiok", "you-wife-list", "daigou-helper"];

  return projectDefinitions
    .map((project) => materializeProject(project, locale))
    .sort((left, right) => projectOrder.indexOf(left.slug) - projectOrder.indexOf(right.slug));
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projectDefinitions.map((project) => project.slug);
}
