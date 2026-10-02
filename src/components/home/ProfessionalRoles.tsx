import rolesImage from "@/assets/professional-roles.jpg";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { homeContent } from "@/data/homeContent";

export function ProfessionalRoles() {
  return (
    <section className="overflow-hidden bg-surface-dark py-24 text-hero-foreground md:py-32">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10"><SectionLabel inverse>Profissionais em cena</SectionLabel><div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end"><h2 className="font-display text-5xl leading-[0.95] md:text-7xl">Toda função move a experiência.</h2><p className="max-w-lg text-sm leading-7 text-hero-muted lg:justify-self-end">Do primeiro preparo ao último atendimento, cada pessoa faz parte de uma operação maior.</p></div></div>
      <div className="mx-auto mt-16 max-w-[1680px] overflow-hidden px-5 md:px-10"><img src={rolesImage} alt="Bartender, profissional de cozinha e atendente em suas funções" loading="lazy" width={1920} height={1024} className="aspect-[1.75] min-h-[420px] w-full object-cover" /></div>
      <div className="roles-marquee mt-8 flex w-max gap-8 border-y border-hero-foreground/15 py-5 text-3xl text-hero-muted md:text-5xl" aria-label={homeContent.roles.join(", ")}><div className="flex gap-8">{[...homeContent.roles, ...homeContent.roles].map((role, index) => <span key={`${role}-${index}`} className="flex items-center gap-8 whitespace-nowrap font-display">{role}<i className="size-2 rounded-full bg-brand-orange" /></span>)}</div></div>
    </section>
  );
}