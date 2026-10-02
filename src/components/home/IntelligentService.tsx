import { Instagram, MessageCircle, Monitor } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function IntelligentService() {
  return (
    <section className="bg-surface px-5 py-24 md:px-10 md:py-36"><div className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-2 lg:items-center">
      <div><SectionLabel>Atendimento integrado</SectionLabel><h2 className="mt-8 max-w-xl font-display text-5xl leading-[0.95] md:text-7xl">Uma conversa pode iniciar toda a operação.</h2><p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">Onde quer que a conversa comece, ela segue organizada, humana e pronta para avançar.</p><div className="mt-10 flex gap-3" aria-label="Canais de atendimento"><span className="channel-icon"><Monitor /></span><span className="channel-icon"><MessageCircle /></span><span className="channel-icon"><Instagram /></span></div></div>
      <div className="chat-stage"><div className="chat-bubble chat-bubble-user"><span>Visitante</span><p>Preciso de uma equipe para sábado.</p></div><div className="chat-bubble chat-bubble-agent"><span>Coolaborativa</span><p>Posso ajudar. Que tipo de operação você está organizando?</p></div><p className="mt-8 text-center text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Atendimento rápido · Contexto preservado</p></div>
    </div></section>
  );
}