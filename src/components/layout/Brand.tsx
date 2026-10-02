import { cn } from "@/lib/utils";
import horizontal from "@/assets/freelas-horizontal.png.asset.json";
import symbol from "@/assets/freelas-symbol.png.asset.json";

export function Brand({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  return (
    <a href="#top" aria-label="Freelas — Cooperativa de Serviços para o Terceiro Setor — início" className={cn("inline-flex items-center", className)}>
      {inverse ? (
        <span className="inline-flex items-center rounded-xl bg-background p-1.5 shadow-sm">
          <img src={symbol.url} alt="Freelas" className="h-9 w-9 object-contain" />
        </span>
      ) : (
        <img src={horizontal.url} alt="Freelas — Cooperativa de Serviços para o Terceiro Setor" className="h-10 w-auto object-contain" />
      )}
    </a>
  );
}
