import prepImage from "@/assets/team-preparation.jpg";
import rolesImage from "@/assets/professional-roles.jpg";
import heroImage from "@/assets/coolaborativa-hero.jpg";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const items = [
  { image: prepImage, label: "Bastidores", title: "Antes das portas abrirem" },
  { image: rolesImage, label: "Profissões", title: "Quem faz acontecer" },
  { image: heroImage, label: "Em operação", title: "Hospitalidade em movimento" },
];

export function SocialFeedSection() {
  return (
    <section className="bg-surface px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-[1480px]"><SectionLabel>Da operação para a comunidade</SectionLabel><div className="mt-7 flex items-end justify-between gap-6"><h2 className="max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">Histórias que continuam fora daqui.</h2><ArrowUpRight className="hidden size-8 text-brand-green md:block" /></div><div className="mt-14 grid gap-4 md:grid-cols-3">{items.map((item,index) => <article key={item.title} className={index === 1 ? "md:mt-16" : ""}><div className="overflow-hidden"><img src={item.image} alt="" loading="lazy" width={index === 0 ? 1440 : 1920} height={index === 1 ? 1024 : 1280} className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" /></div><p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p><h3 className="mt-2 font-display text-2xl">{item.title}</h3></article>)}</div></div></section>
  );
}