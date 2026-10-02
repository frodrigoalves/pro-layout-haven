import { SectionLabel } from "@/components/ui/SectionLabel";

export function NetworkSection() {
  return (
    <section id="cooperativa" className="overflow-hidden bg-background px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <SectionLabel>Ecossistema Coolaborativa</SectionLabel>
        <h2 className="mt-8 max-w-5xl font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">Uma rede que trabalha <em className="font-normal text-brand-green">em movimento.</em></h2>
        <div className="network-line relative mt-16 grid gap-0 lg:mt-24 lg:grid-cols-3">
          {[['01','Empresas','Operações que precisam de gente preparada.'],['02','Coolaborativa','Organização, cuidado e conexão.'],['03','Profissionais','Talentos prontos para novas oportunidades.']].map(([n,title,text], index) => <div key={title} className="relative border-t border-border px-0 py-7 lg:border-l lg:border-t-0 lg:px-8 lg:py-16 first:lg:border-l-0"><span className="text-[10px] text-muted-foreground">{n}</span><h3 className={index === 1 ? "mt-14 font-display text-4xl text-brand-green" : "mt-14 font-display text-4xl"}>{title}</h3><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">{text}</p></div>)}
        </div>
        <p className="ml-auto mt-12 max-w-xl text-xl leading-8 md:text-2xl">Conectamos quem precisa de uma operação preparada a quem está pronto para fazer acontecer.</p>
      </div>
    </section>
  );
}