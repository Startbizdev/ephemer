import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import Image from "next/image";

const clients = [
  { name: "Consensys", logo: "/partnerlogos/Logo Consensys.png", description: "4 backend engineers deployed in 12 days" },
  { name: "Pluxee", logo: "/partnerlogos/Logo Pluxee .png", description: "Staff engineer for core product path" },
  { name: "Kiln", logo: "/partnerlogos/Logo Kiln .png", description: "Infrastructure team build-out" },
  { name: "Adaptive ML", logo: "/partnerlogos/Logo Adaptive ML.png", description: "ML engineer mission, 6 months" },
];

export function TrustedBySection() {
  return (
    <Section>
      <div className="text-center mb-12">
        <Badge variant="default" className="mb-4">Trusted by</Badge>
        <Heading as="h2" size="md">
          Companies that ship with Ephemer
        </Heading>
      </div>
      <Container className="px-0">
        <div className="border border-carbon rounded-2xl p-8 md:p-12 bg-graphite/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-graphite/60 hover:bg-graphite/80 transition-colors"
              >
                <div className="relative h-10 w-24 flex items-center justify-center mb-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                    priority={false}
                  />
                </div>
                <p className="text-sm text-zinc-300">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
