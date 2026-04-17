export interface CityData {
  slug: string;
  name: string;
  state: string;
  ecosystem: string;
  hiringDifficulty: string;
  techScene: string;
  avgSalary: string;
  topSectors: string[];
  /** Why hiring senior engineers is structurally hard for startups here (~150–200 words). */
  hiringNarrative: string;
  /** Why a startup in this market would use Ephemer specifically (~100 words). */
  startupsUseCase: string;
  /** What local engineering culture values; distinct from ecosystem/techScene (~100 words). */
  marketInsight: string;
}

/** Three geographically or economically related city slugs for internal linking (not array order). */
export const REGIONAL_NEARBY: Record<string, string[]> = {
  "san-francisco": ["los-angeles", "seattle", "portland"],
  "new-york": ["boston", "washington-dc", "chicago"],
  austin: ["denver", "phoenix", "nashville"],
  miami: ["atlanta", "nashville", "washington-dc"],
  seattle: ["san-francisco", "portland", "los-angeles"],
  "los-angeles": ["san-francisco", "san-diego", "austin"],
  boston: ["new-york", "washington-dc", "pittsburgh"],
  chicago: ["minneapolis", "detroit", "nashville"],
  denver: ["austin", "salt-lake-city", "phoenix"],
  atlanta: ["miami", "nashville", "raleigh"],
  portland: ["seattle", "san-francisco", "salt-lake-city"],
  raleigh: ["atlanta", "nashville", "washington-dc"],
  nashville: ["atlanta", "raleigh", "chicago"],
  phoenix: ["denver", "los-angeles", "austin"],
  minneapolis: ["chicago", "detroit", "denver"],
  "san-diego": ["los-angeles", "phoenix", "san-francisco"],
  "salt-lake-city": ["denver", "phoenix", "portland"],
  detroit: ["chicago", "minneapolis", "pittsburgh"],
  pittsburgh: ["detroit", "washington-dc", "boston"],
  "washington-dc": ["new-york", "boston", "raleigh"],
};

export const cities: CityData[] = [
  {
    slug: "san-francisco",
    name: "San Francisco",
    state: "CA",
    ecosystem: "Silicon Valley epicenter — dense VC activity, highest engineer concentration in the US",
    hiringDifficulty: "Extreme. Competition from FAANG, unicorns, and well-funded Series B+ companies drives 12–18 month hiring cycles for senior roles.",
    techScene: "The world's most competitive engineering talent market. Every major AI lab, cloud provider, and fintech challenger competes here.",
    avgSalary: "$180k–$240k for senior engineers",
    topSectors: ["AI/ML", "Fintech", "Web3", "SaaS", "Infrastructure"],
    hiringNarrative:
      "San Francisco startups face a compounding talent problem: the engineers you want are often employed at companies with RSU refresh packages and compensation bands your Series A cannot match. FAANG and late-stage firms run retention programs that keep senior engineers off the open market for years. When strong candidates do appear, you compete against well-funded rivals with dedicated recruiting teams and faster interview loops. The result is hiring cycles measured in quarters or years for principal-level roles — and the cost is not just recruiter fees but delayed roadmaps, stalled infrastructure work, and burnout on your existing team. For venture-backed companies that need execution now, the local market rarely rewards patience.",
    startupsUseCase:
      "Ephemer exists so Bay Area startups can skip the six-month search spiral. You brief us on the technical problem — API scale, infra hardening, ML deployment — and we match you with senior engineers who have already passed our bar. No contingency recruiters, no volume CV drops. You get a short list of operators who can ship in your stack within days of contract start, with pricing transparent against local market bands.",
    marketInsight:
      "Engineers in this market expect equity fluency, high technical standards, and clear ownership. They are skeptical of vague job titles and process-heavy interviews. What wins here is signal: concrete system design discussion, evidence of production impact, and teams that move from intro to offer without theater. Startups that respect engineer time and pay competitively on total comp — not just base — close candidates faster.",
  },
  {
    slug: "new-york",
    name: "New York",
    state: "NY",
    ecosystem: "The US's second-largest tech hub — strong in fintech, adtech, and enterprise SaaS",
    hiringDifficulty: "Very high. Competing with Wall Street compensation packages and a dense startup ecosystem.",
    techScene: "Fintech, media tech, and enterprise software dominate. NYC engineers move fast and expect competitive equity.",
    avgSalary: "$160k–$220k for senior engineers",
    topSectors: ["Fintech", "AdTech", "Enterprise SaaS", "Media", "Healthcare Tech"],
    hiringNarrative:
      "New York startups compete on two fronts: Wall Street-level cash for quantitative talent, and a dense ecosystem of well-funded tech companies that can outbid you on title and brand. Senior engineers in fintech and enterprise SaaS are accustomed to aggressive packages and short job tenures. For Seed and Series A teams, posting a role often means months of screens before a single hire closes — while your burn clock runs and competitors ship. The density of opportunity here means candidates ghost less often than in smaller markets, but they also negotiate harder and expect clarity on equity and path to liquidity.",
    startupsUseCase:
      "Ephemer helps NYC founders deploy senior engineers without building an internal recruiting function. We maintain relationships with engineers who want contract or fractional work specifically to avoid big-company politics. You get matched profiles within days, aligned to your stack and your stage — whether you are in Manhattan, Brooklyn, or remote-first with a NYC anchor.",
    marketInsight:
      "NYC engineers value pace, compensation transparency, and teams that respect boundaries. They have seen enough startup hype to ignore vague missions. What resonates is a clear technical challenge, credible leadership, and proof that your runway matches your ambition. Hybrid expectations are common; remote-first policies need to be stated explicitly.",
  },
  {
    slug: "austin",
    name: "Austin",
    state: "TX",
    ecosystem: "Fastest-growing US tech hub — Tesla, Apple, and Oracle relocations transformed the market",
    hiringDifficulty: "High and accelerating. Rapid population growth has outpaced talent supply.",
    techScene: "A magnet for engineers leaving California's cost-of-living pressures. Strong in SaaS, semiconductors, and hardware.",
    avgSalary: "$140k–$190k for senior engineers",
    topSectors: ["SaaS", "Semiconductors", "Hardware", "Fintech", "Clean Tech"],
    hiringNarrative:
      "Austin’s growth pulled in headquarters relocations and remote workers faster than the senior engineering pool could expand. What was once a relief valve from Bay Area costs is now its own competitive market: big tech payrolls set comp floors, and startups fight the same candidates as growth-stage SaaS. Hiring timelines stretch when every senior engineer has multiple offers. Local candidates also weigh Texas tax advantages against equity upside — which shifts negotiation dynamics compared to coastal hubs.",
    startupsUseCase:
      "Ephemer gives Austin startups a way to add senior capacity without a permanent headcount bet. Whether you need infra, backend, or fullstack depth for a product push, we deploy vetted engineers who integrate with your team on contract terms that match your runway — critical when you are scaling between rounds.",
    marketInsight:
      "Austin engineers often prioritize quality of life, housing costs, and straightforward culture over brand prestige alone. They respond well to hybrid flexibility and honest roadmaps. Technical interviews that respect time — and offers that do not lowball on equity — convert better than hype-driven pitches.",
  },
  {
    slug: "miami",
    name: "Miami",
    state: "FL",
    ecosystem: "Emerging Latin American tech gateway — rapidly attracting crypto, fintech, and remote-first companies",
    hiringDifficulty: "Moderate to high. Growing faster than the local talent pool can fill.",
    techScene: "Web3, fintech, and Latin American market plays. Miami offers cost advantages over NYC/SF with strong access to international talent.",
    avgSalary: "$120k–$170k for senior engineers",
    topSectors: ["Web3/Crypto", "Fintech", "LatAm SaaS", "Real Estate Tech", "HealthTech"],
    hiringNarrative:
      "Miami’s tech scene expanded quickly on fintech and LatAm-facing products, but the senior talent pool is still catching up. Startups here often hire remotely by necessity — yet local presence still matters for certain regulated or relationship-driven businesses. Competing for engineers means contending with remote offers from higher-paying markets unless you differentiate on mission, equity, or lifestyle. Turnover can be high when funding cycles tighten and teams shrink.",
    startupsUseCase:
      "Ephemer helps Miami founders blend local context with national-caliber senior talent. We place engineers who are comfortable with async collaboration and US time zones, while filtering for any on-site or hybrid needs you define — so you are not stuck between underqualified local screens and endless remote searches.",
    marketInsight:
      "Miami engineers often value international exposure, multilingual teams, and entrepreneurial energy. Cost-of-living versus coastal hubs is a selling point, but candidates still expect professional growth and credible equity. Clarity on visa and work authorization avoids wasted cycles.",
  },
  {
    slug: "seattle",
    name: "Seattle",
    state: "WA",
    ecosystem: "AWS, Microsoft, and a generation of ex-FAANG founders define the talent landscape",
    hiringDifficulty: "Very high. Amazon and Microsoft set compensation benchmarks that make competing expensive.",
    techScene: "Cloud-native engineering culture. Deep expertise in distributed systems, developer tools, and enterprise infrastructure.",
    avgSalary: "$170k–$230k for senior engineers",
    topSectors: ["Cloud Infrastructure", "Developer Tools", "E-commerce", "AI/ML", "Gaming"],
    hiringNarrative:
      "Seattle’s compensation benchmarks are set by Amazon and Microsoft at a scale few startups can match on cash alone. Senior engineers with cloud and distributed-systems depth are constantly recruited. For smaller companies, the challenge is not finding smart people — it is closing them before Big Tech counters. Hiring cycles drag when every candidate compares your package to RSU-heavy incumbents and AI labs expanding in the region.",
    startupsUseCase:
      "Ephemer lets Seattle-area startups augment teams with senior engineers on contract without competing dollar-for-dollar on the same full-time packages. You brief the technical scope; we surface operators who have shipped at scale and can ramp on your codebase quickly — preserving velocity while you raise or restructure comp bands.",
    marketInsight:
      "Pacific Northwest engineers often care about sustainable pace, technical rigor, and leadership that understands distributed systems. They are sensitive to on-call burden and debt-heavy roadmaps. Strong candidates expect interview loops that reflect real production problems, not Leetcode theater.",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "CA",
    ecosystem: "Media tech, creator economy, and a growing B2B SaaS corridor in Santa Monica",
    hiringDifficulty: "High. Strong competition from entertainment tech and a dispersed talent pool.",
    techScene: "Creator platforms, streaming tech, and consumer apps dominate. LA's engineering culture blends product intuition with technical depth.",
    avgSalary: "$150k–$210k for senior engineers",
    topSectors: ["Media Tech", "Creator Economy", "E-commerce", "HealthTech", "B2B SaaS"],
    hiringNarrative:
      "Los Angeles spreads talent across media tech, consumer apps, and health — which means senior engineers are fragmented and often commute-sensitive. Startups compete with studios and large platforms for the same product-minded builders. Hiring can stall when candidates weigh equity in unproven startups against cash-heavy entertainment offers. The market rewards visible product taste, which is harder to screen for than pure algorithms.",
    startupsUseCase:
      "Ephemer connects LA founders with senior engineers who understand consumer scale, content workflows, and performance-sensitive UIs. Contract engagements let you validate a lead or staff a launch without permanent hires while you prove retention and revenue.",
    marketInsight:
      "LA engineers blend creative and technical judgment. They respond to missions with cultural relevance and teams that respect cross-functional collaboration with design and content. Remote flexibility is common; traffic and geography still influence who will join on-site.",
  },
  {
    slug: "boston",
    name: "Boston",
    state: "MA",
    ecosystem: "MIT and Harvard pipelines feed one of the US's strongest deep-tech ecosystems",
    hiringDifficulty: "High. Life sciences and biotech compete aggressively for engineering talent.",
    techScene: "Deep-tech, biotech software, and enterprise SaaS are dominant. Boston engineers skew toward research-intensive, technically complex roles.",
    avgSalary: "$150k–$200k for senior engineers",
    topSectors: ["BioTech SaaS", "Deep Tech", "HealthTech", "Enterprise SaaS", "Cybersecurity"],
    hiringNarrative:
      "Boston startups sit beside elite universities and biotech giants, which drives intense competition for engineers who can bridge research and production software. Life sciences and deep-tech companies absorb a large share of senior talent, pushing salaries and lengthening searches for generalist SaaS roles. Series A teams often lose candidates to better-funded neighbors or to AI labs expanding in the region. The cost of a slow hire here is measured in missed grant milestones and delayed clinical or technical validation.",
    startupsUseCase:
      "Ephemer helps Boston founders staff technically demanding roles — backend, platform, ML adjacent — with engineers who have thrived in ambiguity. Contract deployment fits grant-driven or milestone-based roadmaps where permanent headcount is hard to justify early.",
    marketInsight:
      "Boston engineers respect intellectual depth and evidence-based decisions. They tolerate process when it serves quality but resent bureaucracy without purpose. Equity literacy is high; candidates compare your cap table and liquidation preferences carefully.",
  },
  {
    slug: "chicago",
    name: "Chicago",
    state: "IL",
    ecosystem: "Midwest's largest tech hub — fintech, proptech, and enterprise software",
    hiringDifficulty: "Moderate to high. Lower cost than coasts but growing quickly.",
    techScene: "Chicago's engineering market centers on fintech, trading systems, and enterprise software. Strong DevOps and backend culture.",
    avgSalary: "$130k–$180k for senior engineers",
    topSectors: ["Fintech", "PropTech", "Enterprise SaaS", "HealthTech", "Trading Tech"],
    hiringNarrative:
      "Chicago offers Midwest cost advantages but still faces tight competition in fintech and trading tech, where compensation can approach coastal levels for the right specialists. Startups here often hire across time zones, which complicates team cohesion if you need synchronous collaboration. Senior hiring cycles extend when candidates weigh remote offers from coastal pay bands against local stability and lower living costs.",
    startupsUseCase:
      "Ephemer gives Chicago startups access to senior engineers who can own trading systems, enterprise integrations, or data pipelines without a six-month search. Contract models align well with revenue-sensitive scaling and enterprise sales cycles.",
    marketInsight:
      "Chicago engineers value pragmatism, direct communication, and teams that ship. They are less impressed by hype than by references and production metrics. Hybrid expectations vary by neighborhood commute; clarity upfront saves everyone time.",
  },
  {
    slug: "denver",
    name: "Denver",
    state: "CO",
    ecosystem: "Colorado's tech scene grew substantially post-2020 with remote-first migration",
    hiringDifficulty: "Moderate. Growing talent pool, but demand is outpacing supply in senior roles.",
    techScene: "SaaS, cybersecurity, and aerospace tech are strong. Denver engineers value work-life balance alongside technical rigor.",
    avgSalary: "$125k–$170k for senior engineers",
    topSectors: ["Cybersecurity", "SaaS", "Aerospace Tech", "Clean Tech", "HealthTech"],
    hiringNarrative:
      "Denver attracted remote workers and satellite offices, tightening the market for senior hires who want local presence. Aerospace and cybersecurity employers set specialized comp expectations. Startups must move quickly: candidates often evaluate multiple offers across Boulder, Denver, and fully remote roles. Seasonal lifestyle appeal helps attraction but does not replace salary realism.",
    startupsUseCase:
      "Ephemer helps Colorado startups plug senior gaps in security, platform, and backend roles when local networks run dry. You get engineers who are used to regulated environments and cloud-native delivery — without paying contingency fees on every attempt.",
    marketInsight:
      "Denver-area engineers prioritize outdoor access, reasonable hours, and technical leadership they respect. They are wary of burnout cultures imported from coastal startups. Remote flexibility is a strong draw; on-site requirements narrow the pool fast.",
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    state: "GA",
    ecosystem: "Fastest-growing Southern tech hub — driven by payments, logistics, and enterprise software",
    hiringDifficulty: "Moderate and rising. The payments corridor attracts serious engineering talent.",
    techScene: "Atlanta is the world's payment processing capital. Deep expertise in fintech infrastructure, logistics, and enterprise platforms.",
    avgSalary: "$120k–$165k for senior engineers",
    topSectors: ["Payments/Fintech", "Logistics Tech", "Enterprise SaaS", "HealthTech", "Cybersecurity"],
    hiringNarrative:
      "Atlanta’s payments and logistics tech corridor pulls in strong infrastructure talent, but startups still fight incumbents and well-funded growth companies for the same senior engineers. Diversity of industry means candidates have options — fintech, health, and B2B SaaS all recruit aggressively. Hiring delays often come from unclear leveling and comp bands relative to national remote competitors.",
    startupsUseCase:
      "Ephemer helps Atlanta founders scale engineering capacity for product launches and compliance-heavy integrations. We match you with senior talent comfortable in high-throughput, enterprise-adjacent environments — on timelines your roadmap actually needs.",
    marketInsight:
      "Atlanta engineers appreciate entrepreneurial energy and lower cost of living than the coasts, but they still benchmark pay against remote national offers. Community and mentorship matter; candidates often ask about team diversity and leadership stability.",
  },
  {
    slug: "portland",
    name: "Portland",
    state: "OR",
    ecosystem: "Tech extension of the Pacific Northwest — strong open-source culture and developer tooling",
    hiringDifficulty: "Moderate. Smaller market with strong senior talent but limited volume.",
    techScene: "Open-source contributors, developer tools, and sustainability tech. Portland engineers tend toward opinionated, principled technical cultures.",
    avgSalary: "$130k–$175k for senior engineers",
    topSectors: ["Developer Tools", "Open Source SaaS", "Clean Tech", "E-commerce", "HealthTech"],
    hiringNarrative:
      "Portland’s market is smaller than Seattle’s, which means fewer senior engineers in absolute numbers — but those who stay are highly opinionated and selective. Startups compete with remote offers from California pay scales while offering local lifestyle benefits. Hiring can stall when candidates prioritize mission alignment and sustainable pace over equity upside alone.",
    startupsUseCase:
      "Ephemer helps Portland teams find senior engineers who care about craft — developer tooling, sustainability tech, and principled engineering cultures. Contract engagements let you staff spikes without over-hiring in a thin market.",
    marketInsight:
      "Portland engineers value open-source ethos, work-life balance, and leadership authenticity. They often reject extractive growth narratives. Remote flexibility is widely expected; on-site mandates shrink the pool dramatically.",
  },
  {
    slug: "raleigh",
    name: "Raleigh",
    state: "NC",
    ecosystem: "Research Triangle anchors one of the Southeast's strongest engineering pipelines",
    hiringDifficulty: "Moderate. Strong pipeline from NC State, Duke, and UNC keeps supply competitive.",
    techScene: "Enterprise software, cloud infrastructure, and pharma tech dominate. Raleigh is emerging as a serious alternative to coastal markets.",
    avgSalary: "$115k–$160k for senior engineers",
    topSectors: ["Enterprise SaaS", "Pharma Tech", "Cloud Infrastructure", "Cybersecurity", "BioTech"],
    hiringNarrative:
      "The Research Triangle produces a steady pipeline of engineers, but enterprise and pharma tech employers absorb much of the senior talent. Startups must differentiate on equity and impact — otherwise candidates default to stable, cash-heavy roles. Hiring timelines stretch when every candidate compares your offer to remote national benchmarks and local anchor employers.",
    startupsUseCase:
      "Ephemer helps Triangle startups move fast on platform, backend, and security needs without running a full recruiting org. We place engineers who are used to regulated environments and B2B delivery — critical when your customers are enterprises with long sales cycles.",
    marketInsight:
      "Raleigh-Durham engineers value technical depth, mentorship, and reasonable commutes. They respond to data about runway and customer traction more than vision decks alone. Hybrid culture is common; clarity on office expectations avoids late-stage dropouts.",
  },
  {
    slug: "nashville",
    name: "Nashville",
    state: "TN",
    ecosystem: "Healthcare tech capital of the US — growing B2B SaaS layer on top of a strong enterprise base",
    hiringDifficulty: "Moderate. Healthcare domain expertise commands premiums.",
    techScene: "HealthTech and revenue cycle management dominate. Nashville is developing a broader SaaS corridor beyond healthcare.",
    avgSalary: "$115k–$160k for senior engineers",
    topSectors: ["HealthTech", "Revenue Cycle", "Enterprise SaaS", "Logistics", "Fintech"],
    hiringNarrative:
      "Nashville’s healthcare tech cluster sets domain expectations that generalist startups struggle to meet without specialized hires. Revenue cycle and compliance-heavy products need engineers who understand HIPAA-adjacent workflows — a smaller pool than generic web dev. Competing for talent means contending with established health enterprises and remote roles from national pay bands.",
    startupsUseCase:
      "Ephemer helps Nashville startups staff senior roles in data, backend, and security with engineers who can navigate regulated domains. Contract models help when you need depth for an integration push or audit cycle without permanent overhead.",
    marketInsight:
      "Nashville engineers appreciate entrepreneurial momentum and lower living costs than coastal hubs. They value straightforward leadership and community involvement. Remote flexibility is increasingly standard; music and culture are part of the lifestyle pitch for some candidates.",
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    state: "AZ",
    ecosystem: "Fast-growing Western hub — semiconductor manufacturing and financial services tech",
    hiringDifficulty: "Moderate. Intel and semiconductor presence sets the engineering standard.",
    techScene: "Semiconductors, financial services software, and logistics tech. Phoenix benefits from lower cost and large university talent pipelines.",
    avgSalary: "$115k–$160k for senior engineers",
    topSectors: ["Semiconductors", "Financial Services Tech", "Logistics", "HealthTech", "SaaS"],
    hiringNarrative:
      "Phoenix benefits from semiconductor investment and inbound migration, but senior engineering depth in cutting-edge software still lags larger hubs. Startups compete with remote offers priced to coastal markets while candidates weigh heat, sprawl, and school districts. Hiring cycles extend when roles require specialized cloud or hardware-adjacent experience.",
    startupsUseCase:
      "Ephemer helps Arizona startups add senior capacity for infra, backend, and data roles during product sprints or manufacturing-adjacent software pushes. You get vetted engineers who can work US hours and align with your release cadence — without agency markup.",
    marketInsight:
      "Phoenix engineers often prioritize affordability and family-friendly living. They respond to growth stories backed by revenue, not just funding. Remote flexibility is a major lever; summer heat and commute distance shape on-site willingness.",
  },
  {
    slug: "minneapolis",
    name: "Minneapolis",
    state: "MN",
    ecosystem: "Midwest tech hub with strong retail, healthcare, and financial services engineering",
    hiringDifficulty: "Moderate. Legacy enterprise presence competes with startups for talent.",
    techScene: "Healthcare software, retail tech, and financial services platforms. Minneapolis engineers are deeply product-oriented and reliable.",
    avgSalary: "$120k–$165k for senior engineers",
    topSectors: ["HealthTech", "Retail Tech", "Financial Services", "Agri-Tech", "Enterprise SaaS"],
    hiringNarrative:
      "Minneapolis blends retail, health, and financial services engineering — incumbents with deep benches. Startups fight brand recognition and winter weather perception when recruiting nationally. Senior hiring slows when candidates compare total comp to remote coastal offers while weighing local stability and community ties.",
    startupsUseCase:
      "Ephemer helps Minnesota startups inject senior execution for modernization projects, data pipelines, and compliance-heavy integrations. Contract engagements align with enterprise sales rhythms and budget cycles common in the region.",
    marketInsight:
      "Twin Cities engineers value reliability, collaboration, and leadership humility. They are skeptical of hype and appreciate clear product-market context. Hybrid and remote flexibility matter for retention; harsh winters amplify commute sensitivity.",
  },
  {
    slug: "san-diego",
    name: "San Diego",
    state: "CA",
    ecosystem: "Defense tech, biotech, and a growing consumer app scene",
    hiringDifficulty: "High. Defense clearances and biotech compete for the same engineering pool.",
    techScene: "Biotech software, defense systems, and wireless technology. San Diego engineers often have specialized domain expertise.",
    avgSalary: "$140k–$195k for senior engineers",
    topSectors: ["BioTech", "Defense Tech", "Wireless/Telecom", "HealthTech", "Consumer Apps"],
    hiringNarrative:
      "San Diego couples high defense and biotech salaries with a smaller pure-software startup scene. Clearance requirements and specialized domain knowledge shrink the pool for certain roles. Consumer and mobile startups compete with well-funded life-science software teams. Hiring stretches when candidates weigh equity in early-stage companies against stable defense-adjacent compensation.",
    startupsUseCase:
      "Ephemer helps San Diego founders access senior engineers for mobile, backend, and infra work — including talent comfortable with regulated or export-controlled contexts when needed. Contract models help you staff around SBIR-style milestones or product launches.",
    marketInsight:
      "San Diego engineers often prioritize lifestyle, weather, and mission-driven work. Defense and biotech backgrounds create different interview norms than pure internet startups. Remote flexibility is common; traffic along the 5/805 corridors influences hybrid choices.",
  },
  {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    state: "UT",
    ecosystem: "'Silicon Slopes' — Utah's tech corridor rivals established hubs in SaaS density",
    hiringDifficulty: "Moderate. Strong BYU and University of Utah pipeline keeps supply healthy.",
    techScene: "B2B SaaS is the dominant sector. Salt Lake City companies often scale remote-first with a strong in-state engineering core.",
    avgSalary: "$115k–$160k for senior engineers",
    topSectors: ["B2B SaaS", "Fintech", "EdTech", "HealthTech", "E-commerce"],
    hiringNarrative:
      "Silicon Slopes scaled quickly on B2B SaaS revenue, which raised the bar for senior talent — and compensation expectations. Startups compete with profitable local anchors and remote employers paying national rates. The talent pool is growing but still finite; long searches are common when you need experienced platform or growth-stage engineers.",
    startupsUseCase:
      "Ephemer helps Utah startups staff senior GTM-critical engineering — billing systems, integrations, platform reliability — without months of outbound recruiting. Contract engagements match the revenue-led growth style common in the corridor.",
    marketInsight:
      "Provo–SLC engineers often value family, outdoor access, and entrepreneurial networks. Many have mission or faith-adjacent motivations; respect for values diversity helps close candidates. Remote-first policies are widespread; cost of living remains a draw versus coastal hubs.",
  },
  {
    slug: "detroit",
    name: "Detroit",
    state: "MI",
    ecosystem: "Automotive tech transformation — legacy OEM investment in software-defined vehicles",
    hiringDifficulty: "Moderate. Automotive domain expertise is highly specialized and valued.",
    techScene: "Mobility tech, embedded systems, and automotive software dominate. Detroit is undergoing a deep technical transformation.",
    avgSalary: "$110k–$155k for senior engineers",
    topSectors: ["Mobility Tech", "Embedded Systems", "Automotive SaaS", "Manufacturing Tech", "SupplyChain"],
    hiringNarrative:
      "Detroit’s transformation toward software-defined vehicles pulls embedded and systems talent into OEMs and tier-one suppliers. Startups in mobility tech compete for engineers who understand safety standards, long validation cycles, and union-adjacent realities. Pure web startups face a thinner senior pool and must often recruit nationally.",
    startupsUseCase:
      "Ephemer helps Detroit-area startups blend software velocity with domain seriousness — placing senior engineers who can navigate regulated environments and partner with hardware teams. Contract staffing helps you bridge to the next funding milestone without over-hiring.",
    marketInsight:
      "Detroit engineers value tangible impact on physical products and supply chains. They respect leaders who understand manufacturing constraints. Remote flexibility varies; plant-adjacent roles often need hybrid presence.",
  },
  {
    slug: "pittsburgh",
    name: "Pittsburgh",
    state: "PA",
    ecosystem: "Robotics and AI research hub anchored by Carnegie Mellon University",
    hiringDifficulty: "Moderate. CMU pipeline feeds world-class AI/robotics talent.",
    techScene: "Robotics, autonomous systems, and applied AI are Pittsburgh's engineering identity. Bridging academia and production engineering is a local specialty.",
    avgSalary: "$120k–$165k for senior engineers",
    topSectors: ["Robotics", "Autonomous Systems", "Applied AI", "HealthTech", "EdTech"],
    hiringNarrative:
      "Pittsburgh’s CMU pipeline feeds robotics and AI labs, but many graduates leave for coastal salaries. Startups here compete with academia spinouts and well-funded autonomy companies. Hiring senior engineers who can ship production systems — not just research prototypes — requires differentiated equity and mission. Long cycles happen when candidates weigh publication-friendly roles against startup risk.",
    startupsUseCase:
      "Ephemer helps Pittsburgh founders pair research-grade talent with delivery discipline — ML, robotics software, and platform engineers who have passed our execution screen. Contract models help you staff around grants, pilots, and defense-adjacent timelines.",
    marketInsight:
      "Pittsburgh engineers value intellectual honesty, mentorship, and affordable living. They respond to missions with technical depth and real-world deployment stories. Remote offers from national employers set comp expectations; transparency on cash versus equity is essential.",
  },
  {
    slug: "washington-dc",
    name: "Washington DC",
    state: "DC",
    ecosystem: "GovTech and cybersecurity capital — defense, intelligence, and federal contractor engineering",
    hiringDifficulty: "High. Security clearances create significant talent scarcity.",
    techScene: "Federal IT modernization, cybersecurity, and defense software define the market. Commercial tech is growing rapidly in NoVa.",
    avgSalary: "$140k–$195k for senior engineers",
    topSectors: ["GovTech", "Cybersecurity", "Defense Software", "HealthTech", "Enterprise SaaS"],
    hiringNarrative:
      "The DMV market is shaped by cleared work, systems integrators, and cybersecurity primes — which siphons senior engineers into stable, high-cash roles. Commercial startups without clearance pathways face a thinner pool for certain stacks. Competing for talent means contending with federal contracting timelines, hybrid office expectations in Northern Virginia, and national remote pay bands.",
    startupsUseCase:
      "Ephemer helps DC-area startups staff senior engineering for commercial SaaS, fintech, and health products — with engineers who understand compliance-heavy environments even when your product is not classified. We accelerate hiring when your internal pipeline is saturated by government-adjacent recruiting.",
    marketInsight:
      "DMV engineers care about mission, stability, and commute predictability along Metro corridors. Many juggle clearance considerations; clarity on sponsorship and work location avoids wasted loops. Commercial startups win on speed and equity upside when they cannot match contractor cash.",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getNearbyCitiesForSlug(slug: string): CityData[] {
  const nearbySlugs = REGIONAL_NEARBY[slug];
  if (nearbySlugs?.length) {
    const resolved = nearbySlugs
      .map((s) => getCityBySlug(s))
      .filter((c): c is CityData => Boolean(c));
    if (resolved.length >= 1) return resolved.slice(0, 3);
  }
  return cities.filter((c) => c.slug !== slug).slice(0, 3);
}
