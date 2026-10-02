import { Brand } from "./Brand";

const groups = [
  { title: "Explore", links: ["Cooperativa", "Empresas", "Profissionais", "Como funciona"] },
  { title: "Conecte-se", links: ["Instagram", "LinkedIn", "WhatsApp"] },
  { title: "Legal", links: ["Privacidade", "Termos", "LGPD"] },
];

export function Footer() {
  return (
    <footer className="bg-hero px-5 pb-8 pt-16 text-hero-foreground md:px-10 md:pt-24">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-14 border-b border-hero-foreground/15 pb-16 lg:grid-cols-[1.5fr_1fr]">
          <div><Brand inverse /><p className="mt-7 max-w-sm text-sm leading-7 text-hero-muted">Pessoas, negócios e oportunidades trabalhando em cooperação.</p></div>
          <div className="grid grid-cols-2 gap-9 sm:grid-cols-3">{groups.map((group) => <div key={group.title}><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-hero-muted">{group.title}</p><ul className="mt-5 space-y-3">{group.links.map((link) => <li key={link}><a href="#top" className="text-sm transition-colors hover:text-brand-green">{link}</a></li>)}</ul></div>)}</div>
        </div>
        <div className="flex flex-col gap-2 pt-7 text-[11px] text-hero-muted sm:flex-row sm:justify-between"><p>© 2026 Coolaborativa. Todos os direitos reservados.</p><p>Cooperação que movimenta.</p></div>
      </div>
    </footer>
  );
}