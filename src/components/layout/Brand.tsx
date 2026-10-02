import { cn } from "@/lib/utils";

export function Brand({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  return (
    <a href="#top" aria-label="Coolaborativa — início" className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span className={cn("font-display text-xl font-semibold", inverse ? "text-hero-foreground" : "text-foreground")}>Coolaborativa</span>
    </a>
  );
}