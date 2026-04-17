import type { CityData } from "./cities";

/** FAQs for /hire-remote-engineers-[city] — answers vary by city to reduce duplicate-content risk. */
export function buildRemoteEngineersCityFaqs(city: CityData) {
  return [
    {
      q: `How does Ephemer work for ${city.name} startups?`,
      a: `${city.name} founders send us a short brief: team size, stack, and what shipping looks like in the next 90 days. We respond with matched senior profiles — typically 2–4 — within 48 hours because our network is pre-vetted, not scraped from job boards. Most ${city.name} clients move from intro call to signed engagement in under two weeks when calendars align.`,
    },
    {
      q: `Do the engineers work on-site in ${city.name}?`,
      a: `Ephemer is remote-first by default. If you need hybrid cadence in ${city.name} — for example investor meetings or regulated environments — we filter for engineers comfortable with that rhythm. For strict on-site roles we are upfront when the market realistically cannot supply them at senior level within your timeline.`,
    },
    {
      q: `What is the cost of hiring through Ephemer in ${city.name}?`,
      a: `You see engineer rates and Ephemer’s engagement terms before you commit — no surprise agency markup layered on top. We benchmark transparently against ${city.name} bands (${city.avgSalary} is a useful anchor) so you can compare total cost against a six-month traditional search plus recruiter fees.`,
    },
    {
      q: `What types of engineers can I hire in ${city.name}?`,
      a: `We staff backend, frontend, fullstack, DevOps, ML, platform, data, security, mobile, staff-level ICs, and engineering leadership — senior profiles only. In ${city.name} we weight matches toward sectors where you compete: ${city.topSectors.slice(0, 4).join(", ")}.`,
    },
  ];
}
