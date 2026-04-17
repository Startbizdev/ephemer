export interface RoleData {
  slug: string;
  title: string;
  plural: string;
  description: string;
  skills: string[];
  seniorityLabel: string;
}

export const roles: RoleData[] = [
  {
    slug: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    plural: "Senior Backend Engineers",
    description: "Server-side architecture, API design, and scalable data pipelines.",
    skills: ["Node.js", "Go", "Python", "PostgreSQL", "Redis", "Kafka"],
    seniorityLabel: "Senior",
  },
  {
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    plural: "Senior Frontend Engineers",
    description: "High-performance UIs, design systems, and complex client-side state.",
    skills: ["React", "Next.js", "TypeScript", "GraphQL", "CSS-in-JS"],
    seniorityLabel: "Senior",
  },
  {
    slug: "senior-fullstack-engineer",
    title: "Senior Fullstack Engineer",
    plural: "Senior Fullstack Engineers",
    description: "End-to-end ownership from data model to user interface.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    seniorityLabel: "Senior",
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    plural: "DevOps Engineers",
    description: "CI/CD pipelines, infrastructure-as-code, and cloud reliability.",
    skills: ["Terraform", "Kubernetes", "AWS", "GCP", "GitHub Actions", "Datadog"],
    seniorityLabel: "Mid–Senior",
  },
  {
    slug: "ml-engineer",
    title: "ML Engineer",
    plural: "ML Engineers",
    description: "Model development, training pipelines, and production inference systems.",
    skills: ["Python", "PyTorch", "TensorFlow", "MLflow", "AWS SageMaker"],
    seniorityLabel: "Senior",
  },
  {
    slug: "platform-engineer",
    title: "Platform Engineer",
    plural: "Platform Engineers",
    description: "Developer tooling, internal platforms, and engineering productivity.",
    skills: ["Kubernetes", "Helm", "Backstage", "Terraform", "Go"],
    seniorityLabel: "Senior",
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    plural: "Data Engineers",
    description: "Data warehousing, ETL pipelines, and analytical infrastructure.",
    skills: ["dbt", "Snowflake", "Airflow", "Spark", "Python"],
    seniorityLabel: "Mid–Senior",
  },
  {
    slug: "security-engineer",
    title: "Security Engineer",
    plural: "Security Engineers",
    description: "Application security, threat modeling, and compliance engineering.",
    skills: ["SAST/DAST", "AWS Security", "SOC 2", "Pen Testing", "Python"],
    seniorityLabel: "Senior",
  },
  {
    slug: "mobile-engineer",
    title: "Mobile Engineer",
    plural: "Mobile Engineers",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    skills: ["React Native", "Swift", "Kotlin", "Flutter", "TypeScript"],
    seniorityLabel: "Senior",
  },
  {
    slug: "staff-engineer",
    title: "Staff Engineer",
    plural: "Staff Engineers",
    description: "Cross-team technical leadership, architecture decisions, and engineering standards.",
    skills: ["System Design", "Technical Strategy", "Mentorship", "Go", "Python"],
    seniorityLabel: "Staff",
  },
  {
    slug: "engineering-manager",
    title: "Engineering Manager",
    plural: "Engineering Managers",
    description: "Team leadership, delivery execution, and engineering culture.",
    skills: ["Team Building", "OKRs", "System Design", "Agile", "Technical Review"],
    seniorityLabel: "Manager",
  },
  {
    slug: "blockchain-engineer",
    title: "Blockchain Engineer",
    plural: "Blockchain Engineers",
    description: "Smart contract development, protocol design, and on-chain infrastructure.",
    skills: ["Solidity", "Rust", "Hardhat", "Ethereum", "Cosmos SDK"],
    seniorityLabel: "Senior",
  },
];

export function getRoleBySlug(slug: string): RoleData | undefined {
  return roles.find((r) => r.slug === slug);
}

export function getRoleSlugs(): string[] {
  return roles.map((r) => r.slug);
}

// All combinations for static generation (role × city + role × remote)
export function getAllLongTailSlugs(): Array<{ role: string; city?: string }> {
  const roleSlugs = getRoleSlugs();
  const citySlugs = [
    "san-francisco", "new-york", "austin", "miami", "seattle",
    "los-angeles", "boston", "chicago", "denver", "atlanta",
    "portland", "raleigh", "nashville", "phoenix", "minneapolis",
    "san-diego", "salt-lake-city", "washington-dc",
  ];

  const pairs: Array<{ role: string; city?: string }> = [];
  for (const role of roleSlugs) {
    pairs.push({ role }); // /hire-[role]-remote
    for (const city of citySlugs) {
      pairs.push({ role, city }); // /hire-[role]-[city]
    }
  }
  return pairs;
}
