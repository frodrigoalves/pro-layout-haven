import teamImage from "@/assets/cooperative-team.jpg";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CooperativeSection() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-hero text-hero-foreground md:min-h-screen"><img src={teamImage} alt="Equipe de hospitalidade compartilhando um momento de união após o serviço" loading="lazy" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" /><div className="cooperative-scrim absolute inset-0" /><div className="relative mx-auto flex min-h-[760px] max-w-[1480px] flex-col justify-between px-5 py-20 md:min-h-screen md:px-10 md:py-28"><SectionLabel inverse>O que nos move</SectionLabel><div><h2 className="max-w-5xl font-display text-5xl leading-[0.92] md:text-7xl lg:text-8xl">Quando todo mundo cresce, <em className="font-normal text-brand-green">a operação muda.</em></h2><p className="mt-7 max-w-lg text-sm leading-7 text-hero-muted">Cooperação é criar oportunidades, fortalecer relações e valorizar quem sustenta cada experiência.</p></div></div></section>
  );
}