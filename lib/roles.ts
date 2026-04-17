export interface RoleData {
  slug: string;
  title: string;
  plural: string;
  description: string;
  skills: string[];
  seniorityLabel: string;
  /** What this senior role actually does in a startup (~120 words). */
  whatTheyDo: string;
  /** What strong signals look like in interviews (~100 words). */
  hiringSignals: string;
  /** Common startup hiring mistakes for this role (~100 words). */
  commonMistakes: string;
}

export const roles: RoleData[] = [
  {
    slug: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    plural: "Senior Backend Engineers",
    description: "Server-side architecture, API design, and scalable data pipelines.",
    skills: ["Node.js", "Go", "Python", "PostgreSQL", "Redis", "Kafka"],
    seniorityLabel: "Senior",
    whatTheyDo:
      "A senior backend engineer at a Series A–C startup owns APIs, data models, and the reliability path between them. They design for load you do not have yet, instrument what breaks in production, and partner with frontend and infra to keep deploys boring. In the first ninety days they usually harden auth and billing paths, reduce p99 latency on hot endpoints, and introduce patterns so the next five hires do not fork your architecture accidentally.",
    hiringSignals:
      "Look for concrete ownership of outages and migrations — not just feature lists. Strong candidates explain tradeoffs between consistency and availability, show how they version APIs, and discuss how they reviewed others’ code for security and data integrity. Ask how they would roll back a bad deploy and how they structure feature flags for risky changes.",
    commonMistakes:
      "Teams hire a backend generalist when they need a data-pipeline specialist — or the reverse. Another failure mode is optimizing for Leetcode speed instead of operational judgment. Under-leveling senior ICs into execution-only roles burns them out; over-hiring a principal for CRUD work wastes equity. Skip candidates who cannot articulate how their code failed in production and what they changed afterward.",
  },
  {
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    plural: "Senior Frontend Engineers",
    description: "High-performance UIs, design systems, and complex client-side state.",
    skills: ["React", "Next.js", "TypeScript", "GraphQL", "CSS-in-JS"],
    seniorityLabel: "Senior",
    whatTheyDo:
      "A senior frontend engineer ships performant UIs that stay maintainable as design systems evolve. They own client-side architecture — state, routing, accessibility, and build performance — and partner tightly with design and backend on API contracts. Early on they usually cut bundle size, stabilize core flows like onboarding and checkout, and set standards for components so product velocity does not create UI debt.",
    hiringSignals:
      "Strong candidates discuss accessibility, performance budgets, and how they split server versus client rendering. Ask for a story where they debugged a production performance regression. Look for opinions on design systems and how they mentored juniors through refactors without freezing the roadmap.",
    commonMistakes:
      "Hiring a pixel-perfect implementer when you need a systems-minded frontend owner. Another trap is expecting one person to own brand, UX research, and frontend infra. Under-investing in performance and a11y until customers complain is expensive — prioritize candidates who treat those as day-one requirements.",
  },
  {
    slug: "senior-fullstack-engineer",
    title: "Senior Fullstack Engineer",
    plural: "Senior Fullstack Engineers",
    description: "End-to-end ownership from data model to user interface.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    seniorityLabel: "Senior",
    whatTheyDo:
      "A senior fullstack engineer spans your data model through the UI — useful when the team is small and ownership must be end-to-end. They unblock product by choosing boring technology where it fits and custom solutions where it does not. Expect them to simplify deployment paths, align API shapes with UX needs, and be the glue between infrastructure pain and customer-facing fixes.",
    hiringSignals:
      "Ask how they split responsibilities with specialists — good fullstack engineers know when to pull in platform or design. Look for balanced depth: one strong story on each side of the stack. Red flag: only toy projects or inability to discuss tradeoffs at the database layer.",
    commonMistakes:
      "Using fullstack as a code word for two juniors in one salary. Another mistake is hiring fullstack when you actually need separate frontend and backend capacity at scale — be honest about concurrency of projects. Avoid candidates who touch everything but own nothing in production.",
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    plural: "DevOps Engineers",
    description: "CI/CD pipelines, infrastructure-as-code, and cloud reliability.",
    skills: ["Terraform", "Kubernetes", "AWS", "GCP", "GitHub Actions", "Datadog"],
    seniorityLabel: "Mid–Senior",
    whatTheyDo:
      "A senior DevOps engineer is not only keeping the lights on — they define how code becomes reliable software in the cloud. They own CI/CD, infrastructure as code, observability, and incident response patterns that let product teams ship without fear. In the first months they typically audit your pipelines, reduce flaky builds, tighten secrets handling, and make deploys and rollbacks routine rather than heroic.",
    hiringSignals:
      "Look for experience with incident retrospectives, SLO thinking, and cost-aware architecture. Strong candidates explain how they reduced MTTR or blast radius. Ask how they would onboard a new service from repo to production with guardrails.",
    commonMistakes:
      "Hiring a pure sysadmin when you need automation and culture change — or a tools-only person who avoids ownership of production outcomes. Another mistake is starving DevOps with headcount while expecting zero downtime; invest in the role early if releases are your bottleneck.",
  },
  {
    slug: "ml-engineer",
    title: "ML Engineer",
    plural: "ML Engineers",
    description: "Model development, training pipelines, and production inference systems.",
    skills: ["Python", "PyTorch", "TensorFlow", "MLflow", "AWS SageMaker"],
    seniorityLabel: "Senior",
    whatTheyDo:
      "An ML engineer turns models into dependable production systems — training pipelines, feature stores, evaluation, and inference that scale. They work with data scientists on reproducibility and with backend engineers on latency and cost. Early engagements focus on monitoring drift, packaging models safely, and making experimentation fast without destabilizing customers.",
    hiringSignals:
      "Ask how they handled a model that degraded in production and what metrics they used. Strong answers cover offline versus online evaluation, data quality, and rollback strategies. Look for pragmatism about when not to use deep learning.",
    commonMistakes:
      "Hiring a researcher who cannot ship — or a backend engineer with only notebook experience. Another failure is skipping MLOps until after launch; bake observability in from the first customer-facing model.",
  },
  {
    slug: "platform-engineer",
    title: "Platform Engineer",
    plural: "Platform Engineers",
    description: "Developer tooling, internal platforms, and engineering productivity.",
    skills: ["Kubernetes", "Helm", "Backstage", "Terraform", "Go"],
    seniorityLabel: "Senior",
    whatTheyDo:
      "Platform engineers build the internal products that make other engineers productive — clusters, service templates, CI glue, and golden paths that reduce cognitive load. They partner with security and SRE to set defaults that are safe by default. Their success shows up as faster service onboarding, fewer snowflake environments, and clearer ownership boundaries.",
    hiringSignals:
      "Look for experience driving adoption — platform work fails if nobody uses it. Strong candidates discuss developer experience metrics and how they prioritized a roadmap. Ask how they handled breaking changes across many teams.",
    commonMistakes:
      "Building a platform team before you have enough services to justify it — or the opposite, letting every team reinvent Kubernetes. Another mistake is measuring output in tickets instead of reduced toil for product engineers.",
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    plural: "Data Engineers",
    description: "Data warehousing, ETL pipelines, and analytical infrastructure.",
    skills: ["dbt", "Snowflake", "Airflow", "Spark", "Python"],
    seniorityLabel: "Mid–Senior",
    whatTheyDo:
      "Data engineers own reliable pipelines from ingestion through transformation to the warehouse — so analytics and product teams trust the numbers. They handle schema evolution, backfills, SLAs on freshness, and cost control on compute. In startups they often eliminate duplicate sources of truth and make reporting auditable for finance and ops.",
    hiringSignals:
      "Ask about a pipeline failure that caused a bad business decision and how they fixed governance afterward. Strong candidates discuss idempotency, testing strategies for transforms, and how they collaborate with analysts versus scientists.",
    commonMistakes:
      "Treating data engineering as pure SQL without ownership of orchestration and quality. Another trap is letting every team spin up its own warehouse without conventions — hire someone who can standardize early without blocking exploration.",
  },
  {
    slug: "security-engineer",
    title: "Security Engineer",
    plural: "Security Engineers",
    description: "Application security, threat modeling, and compliance engineering.",
    skills: ["SAST/DAST", "AWS Security", "SOC 2", "Pen Testing", "Python"],
    seniorityLabel: "Senior",
    whatTheyDo:
      "Security engineers embed threat modeling, secure SDLC practices, and pragmatic controls into how you build software. They prioritize risks based on your stage — not every startup needs a full red team on day one. They work with engineering leads on dependency hygiene, secrets, identity, and incident readiness so sales can pass enterprise security reviews.",
    hiringSignals:
      "Look for experience shipping alongside product — not only audits. Strong candidates explain tradeoffs between friction and safety. Ask how they would approach SOC 2 readiness with a ten-person engineering team.",
    commonMistakes:
      "Hiring a checkbox compliance person who slows every release — or delaying security until a big customer forces a rushed audit. Balance with someone who can say no with alternatives.",
  },
  {
    slug: "mobile-engineer",
    title: "Mobile Engineer",
    plural: "Mobile Engineers",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    skills: ["React Native", "Swift", "Kotlin", "Flutter", "TypeScript"],
    seniorityLabel: "Senior",
    whatTheyDo:
      "Mobile engineers ship apps that survive app store review, offline modes, push notifications, and performance on low-end devices. They own release trains, crash analytics, and native bridges when cross-platform stacks hit limits. For consumer startups they are often closest to retention metrics and UX polish.",
    hiringSignals:
      "Ask for App Store / Play release war stories and how they reduced crash rates. Strong candidates discuss profiling, battery impact, and accessibility on mobile. Red flag: only web experience with a thin mobile wrapper.",
    commonMistakes:
      "Assuming React Native alone covers native edge cases — or hiring iOS-only when you need Android parity fast. Another mistake is skipping instrumentation; mobile bugs without analytics are expensive to reproduce.",
  },
  {
    slug: "staff-engineer",
    title: "Staff Engineer",
    plural: "Staff Engineers",
    description: "Cross-team technical leadership, architecture decisions, and engineering standards.",
    skills: ["System Design", "Technical Strategy", "Mentorship", "Go", "Python"],
    seniorityLabel: "Staff",
    whatTheyDo:
      "Staff engineers multiply output across teams — architecture alignment, RFCs, mentoring, and unblocking ambiguous technical bets. They still code on critical paths but optimize for durable decisions. In startups they often arbitrate between speed and debt, and they make implicit tradeoffs explicit for leadership.",
    hiringSignals:
      "Look for cross-team impact narratives, not only individual output. Strong candidates describe how they changed technical direction with data and empathy. Ask how they handle disagreement with founders on technical bets.",
    commonMistakes:
      "Hiring staff too early when what you need is execution ICs — or expecting staff to manage people without clarity. Another failure is using the title for seniority alone without scope to influence multiple teams.",
  },
  {
    slug: "engineering-manager",
    title: "Engineering Manager",
    plural: "Engineering Managers",
    description: "Team leadership, delivery execution, and engineering culture.",
    skills: ["Team Building", "OKRs", "System Design", "Agile", "Technical Review"],
    seniorityLabel: "Manager",
    whatTheyDo:
      "Engineering managers align people and delivery — hiring, performance, roadmap sequencing, and cross-functional communication — while keeping technical credibility. In startups they often still review architecture and unblock escalations. Success means predictable shipping without burning the team.",
    hiringSignals:
      "Ask how they scaled a team through a failure or pivot. Strong managers describe systems for feedback, delegation, and when to hire versus train. Look for curiosity about the business, not only velocity metrics.",
    commonMistakes:
      "Promoting the strongest IC without management desire — or hiring a big-company manager who needs heavy process. Another mistake is expecting managers to own deep IC work indefinitely; clarify IC versus people leadership split.",
  },
  {
    slug: "blockchain-engineer",
    title: "Blockchain Engineer",
    plural: "Blockchain Engineers",
    description: "Smart contract development, protocol design, and on-chain infrastructure.",
    skills: ["Solidity", "Rust", "Hardhat", "Ethereum", "Cosmos SDK"],
    seniorityLabel: "Senior",
    whatTheyDo:
      "Blockchain engineers build smart contracts, protocol logic, and on-chain integrations with security as the primary constraint. They understand gas economics, upgrade patterns, and audit cycles. In startups they often bridge product goals with conservative deployment practices — shipping features without gambling user funds.",
    hiringSignals:
      "Look for audit experience, formal verification awareness, or disciplined test practices for contracts. Ask how they would respond to a critical vulnerability report under time pressure. Red flag: hype without war stories from mainnet incidents or testnets at scale.",
    commonMistakes:
      "Treating blockchain as standard backend — or hiring ideologues who ignore UX and compliance realities. Another failure is skipping external audits and monitoring for financial-adjacent code paths.",
  },
];

export function getRoleBySlug(slug: string): RoleData | undefined {
  return roles.find((r) => r.slug === slug);
}

export function getRoleSlugs(): string[] {
  return roles.map((r) => r.slug);
}
