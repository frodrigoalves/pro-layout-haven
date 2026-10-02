import { homeContent } from "@/data/homeContent";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-background px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1480px]"><SectionLabel>Como funciona</SectionLabel><h2 className="mt-8 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">Um fluxo simples. Uma operação bem cuidada.</h2>
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
          {Object.entries(homeContent.steps).map(([key, steps]) => <div key={key}><p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green">Para {key}</p><ol>{steps.map((step,index) => <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-border py-7 md:grid-cols-[4rem_1fr]"><span className="font-display text-xl text-muted-foreground">0{index+1}</span><p className="font-display text-2xl md:text-3xl">{step}</p></li>)}</ol></div>)}
        </div>
      </div>
    </section>
  );
}