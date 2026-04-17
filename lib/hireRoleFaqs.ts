import type { CityData } from "./cities";
import type { RoleData } from "./roles";

/** FAQs for /hire-[role]-[city] — seniority and remote answers vary by role (and city where relevant). */
export function buildRoleCityFaqs(role: RoleData, city: CityData) {
  return [
    {
      q: `How do I hire a ${role.title} in ${city.name} through Ephemer?`,
      a: `Share your roadmap slice: services you own, on-call expectations, and how ${city.name} factors into customer or compliance reality. We match against ${role.plural} who have shipped similar systems — not generic résumés. Profiles usually land within 48 hours; deployment targets 5–10 business days once you select a candidate.`,
    },
    {
      q: `What does a ${role.title} cost in ${city.name}?`,
      a: `Cash comp in ${city.name} often clusters around ${city.avgSalary} for senior engineers, but contract engagements flex with scope and duration. Ephemer quotes all-in economics before you interview so you can compare against the cost of an unfilled role while your team carries the work.`,
    },
    {
      q: `How does Ephemer vet ${role.plural}?`,
      a: `Every ${role.title} we introduce has at least six years of production experience. Beyond that, we assess domain fit for your stack (${role.skills.slice(0, 4).join(", ")}) and review execution evidence — outages owned, migrations led, not just titles. You will not get junior profiles dressed as senior.`,
    },
    {
      q: `Can a ${role.title} work remotely with our ${city.name}-based team?`,
      a: `Yes. Engagements are remote-first. If you need US time-zone overlap with ${city.name} standups or occasional travel, we set that expectation up front so candidates self-select. ${city.ecosystem.split("—")[0].trim()} shapes who thrives here — we factor that into fit.`,
    },
  ];
}

/** FAQs for /hire-[role]-remote */
export function buildRoleRemoteFaqs(role: RoleData) {
  return [
    {
      q: `How do I hire a remote ${role.title} through Ephemer?`,
      a: `Send stack, team topology, and the outcomes you need in the next two sprints. We match ${role.plural} from our network who have remote-native collaboration habits — async discipline, clear written specs, and comfort with your toolchain.`,
    },
    {
      q: `What makes Ephemer ${role.plural} different from agency placements?`,
      a: `We do not optimize for send volume. Each ${role.title} is technical-vetted for depth in ${role.skills.slice(0, 3).join(", ")} and reviewed for startup execution — shipping under ambiguity, not ticket-churning.`,
    },
    {
      q: `Can a remote ${role.title} integrate with my existing team?`,
      a: `Yes. We prioritize engineers who have joined mid-flight on remote teams: code review culture, incident participation, and constructive feedback. You get a professional who ramps on your repos and rituals without needing a six-week assimilation project.`,
    },
    {
      q: `What is the typical engagement length for a remote ${role.title}?`,
      a: `Contract engagements usually start at three months for full-time velocity; fractional arrangements can be shorter. Most teams extend once the ${role.title} is embedded because replacing domain context is more expensive than continuing a proven engagement.`,
    },
    {
      q: `What tech stack experience do your ${role.plural} have?`,
      a: `Core strengths include ${role.skills.join(", ")}. We align matches to your production stack — versions, cloud account, and compliance needs — rather than keyword-stuffing a generic job description.`,
    },
  ];
}
