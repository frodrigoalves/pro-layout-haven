import { cn } from "@/lib/utils";
import light from "@/assets/freelas-logo-light.png.asset.json";
import dark from "@/assets/freelas-logo-dark.png.asset.json";

/** inverse = dark backgrounds (white "Free"); default = light backgrounds (navy "Free"). */
export function Brand({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  return (
    <a href="#top" aria-label="Freelas — Cooperativa de Serviços para o Terceiro Setor — início" className={cn("inline-flex shrink-0 items-center justify-self-start", className)}>
      <img
        src={inverse ? light.url : dark.url}
        alt="Freelas — Cooperativa de Serviços para o Terceiro Setor"
        className="h-10 w-auto max-w-none object-contain sm:h-12"
      />
    </a>
  );
}
