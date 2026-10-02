import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/HomePage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Coolaborativa — Pessoas certas. Operações que acontecem." },
      { name: "description", content: "A cooperativa que conecta profissionais e empresas para movimentar bares, restaurantes e eventos com organização, oportunidade e confiança." },
      { property: "og:title", content: "Coolaborativa — Cooperação que movimenta" },
      { property: "og:description", content: "Profissionais e empresas conectados para fazer a hospitalidade acontecer." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Coolaborativa", description: "Cooperativa voltada ao ecossistema de bares, restaurantes, gastronomia, hospitalidade e eventos." }) }],
  }),
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <HomePage />;
}
