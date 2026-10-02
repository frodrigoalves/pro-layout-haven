import { ArrowUpRight } from "lucide-react";
import prepImage from "@/assets/team-preparation.jpg";
import teamImage from "@/assets/cooperative-team.jpg";
import { homeContent } from "@/data/homeContent";

const images = { empresas: prepImage, profissionais: teamImage };

export function AudienceSplit() {
  return (
    <section aria-label="Caminhos para empresas e profissionais" className="grid bg-hero lg:grid-cols-2">
      {homeContent.audiences.map((audience) => <article id={audience.id} key={audience.id} className="audience-panel group relative min-h-[620px] overflow-hidden lg:min-h-[820px]">
        <img src={images[audience.id]} alt={audience.id === "empresas" ? "Equipe preparando salão e cozinha para uma operação" : "Profissionais de hospitalidade reunidos em espírito de cooperação"} loading="lazy" width={audience.id === "empresas" ? 1440 : 1920} height={1280} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
        <div className="audience-scrim absolute inset-0" />
        <div className="relative flex h-full min-h-[620px] flex-col justify-between p-6 text-hero-foreground md:p-10 lg:min-h-[820px] lg:p-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-hero-muted">{audience.eyebrow}</p>
          <div><h2 className="max-w-xl font-display text-5xl leading-[0.92] md:text-6xl">{audience.title}</h2><p className="mt-6 max-w-md text-sm leading-7 text-hero-muted">{audience.description}</p><a href="#como-funciona" className="mt-9 inline-flex items-center gap-4 border-b border-hero-foreground/40 pb-2 text-sm font-semibold transition-colors hover:border-brand-green hover:text-brand-green">{audience.action}<ArrowUpRight className="size-4" /></a></div>
        </div>
      </article>)}
    </section>
  );
}