import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/coolaborativa-hero.jpg";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/data/homeContent";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-hero text-hero-foreground md:min-h-screen">
      <img src={heroImage} alt="Equipe de hospitalidade em operação durante o serviço de um restaurante" width={1920} height={1280} className="hero-image absolute inset-0 h-full w-full object-cover object-[63%_center]" />
      <div className="hero-scrim absolute inset-0" />
      <div className="relative mx-auto flex min-h-[760px] max-w-[1480px] flex-col justify-end px-5 pb-7 pt-32 md:min-h-screen md:px-10 md:pb-9 lg:px-16">
        <p className="mb-6 max-w-xs text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-hero-muted md:mb-8">{homeContent.hero.eyebrow}</p>
        <h1 className="max-w-5xl font-display text-[clamp(3.35rem,7.9vw,8.1rem)] font-medium leading-[0.84] tracking-normal">
          {homeContent.hero.title.map((line, index) => <span key={line} className={index === 2 ? "block pl-[10vw] text-brand-green" : "block"}>{line}</span>)}
        </h1>
        <div className="mt-9 grid items-end gap-7 border-t border-hero-foreground/25 pt-6 md:grid-cols-[1fr_auto]">
          <p className="max-w-lg text-sm leading-6 text-hero-muted md:text-base md:leading-7">{homeContent.hero.description}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            <Button asChild className="h-12 rounded-none bg-brand-orange px-5 text-hero hover:bg-brand-orange/90"><a href="#empresas">Preciso de profissionais <ArrowUpRight /></a></Button>
            <Button asChild variant="outline" className="h-12 rounded-none border-hero-foreground/35 bg-hero/20 px-5 text-hero-foreground backdrop-blur-sm hover:bg-hero-foreground hover:text-hero"><a href="#profissionais">Quero ser cooperado <ArrowUpRight /></a></Button>
          </div>
        </div>
        <a href="#cooperativa" aria-label="Descubra a Coolaborativa" className="mt-7 hidden w-fit items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-hero-muted md:flex">Descubra a Coolaborativa <ArrowDown className="size-3" /></a>
      </div>
    </section>
  );
}