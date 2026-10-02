import { ArrowDown, Check, Clock3 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function OperationSection() {
  const stages = ["Demanda recebida", "Qualificação", "Profissionais", "Atendimento", "Operação"];
  return (
    <section className="bg-brand-blue px-5 py-24 text-hero-foreground md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div><SectionLabel inverse>Operação em movimento</SectionLabel><h2 className="mt-8 font-display text-5xl leading-[0.95] md:text-7xl">Por trás de cada operação, existe inteligência.</h2><p className="mt-7 max-w-md text-sm leading-7 text-hero-muted">Tecnologia organiza o caminho. Pessoas fazem a experiência acontecer.</p></div>
        <div className="operation-window border border-hero-foreground/20 bg-hero/35 p-4 shadow-2xl backdrop-blur-sm md:p-7">
          <div className="flex items-center justify-between border-b border-hero-foreground/15 pb-4"><div><p className="text-[10px] uppercase tracking-[0.18em] text-hero-muted">Demonstração da operação</p><p className="mt-2 font-display text-2xl">Evento · 120 convidados</p></div><Clock3 className="size-5 text-brand-orange" /></div>
          <div className="mt-5 grid gap-5 md:grid-cols-[1fr_0.8fr]"><div><p className="text-xs text-hero-muted">4 profissionais solicitados</p><div className="mt-5 space-y-0">{stages.map((stage,index) => <div key={stage} className="flex items-center gap-3"><span className={`grid size-7 shrink-0 place-items-center rounded-full ${index < 3 ? "bg-brand-green text-hero" : "border border-hero-foreground/25 text-hero-muted"}`}>{index < 3 ? <Check className="size-3.5" /> : index+1}</span><span className={`text-sm ${index === 2 ? "text-hero-foreground" : "text-hero-muted"}`}>{stage}</span>{index < stages.length-1 && <ArrowDown className="ml-auto size-3 text-hero-muted" />}</div>)}</div></div><div className="border-l border-hero-foreground/15 pl-5"><p className="text-[10px] uppercase tracking-[0.18em] text-hero-muted">Status atual</p><p className="mt-4 font-display text-3xl text-brand-green">Equipe em organização</p><div className="mt-8 h-1 bg-hero-foreground/10"><div className="h-full w-3/5 bg-brand-orange" /></div></div></div>
        </div>
      </div>
    </section>
  );
}