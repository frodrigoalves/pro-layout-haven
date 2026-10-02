import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contato" className="bg-brand-green px-5 py-24 text-hero md:px-10 md:py-32"><div className="mx-auto max-w-[1480px]"><p className="text-[10px] font-semibold uppercase tracking-[0.18em]">O próximo movimento</p><h2 className="mt-8 max-w-5xl font-display text-5xl leading-[0.92] md:text-7xl lg:text-8xl">Qual lado da operação trouxe você até aqui?</h2><div className="mt-14 grid border-y border-hero/25 lg:grid-cols-2">{[["Sou uma empresa","#empresas"],["Quero ser cooperado","#profissionais"]].map(([label,href],index) => <a key={label} href={href} className={`group flex items-center justify-between py-7 text-lg font-semibold transition-colors hover:text-background lg:p-9 ${index === 0 ? "border-b border-hero/25 lg:border-b-0 lg:border-r" : ""}`}><span>{label}</span><ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>)}</div></div></section>
  );
}