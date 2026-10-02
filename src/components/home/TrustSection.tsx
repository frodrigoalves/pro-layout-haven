import { SectionLabel } from "@/components/ui/SectionLabel";

export function TrustSection() {
  return (
    <section className="bg-background px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-[1480px]"><SectionLabel>Confiança se constrói</SectionLabel><div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.7fr]"><h2 className="max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">Resultados reais merecem dados reais.</h2><div className="self-end border-l-2 border-brand-orange pl-6"><p className="text-sm font-semibold">Indicadores da operação</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Dados oficiais serão inseridos pela gestão. Nenhum número provisório é apresentado como resultado.</p></div></div></div></section>
  );
}