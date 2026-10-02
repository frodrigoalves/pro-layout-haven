import { cn } from "@/lib/utils";

export function SectionLabel({ children, inverse = false, className }: { children: React.ReactNode; inverse?: boolean; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]", inverse ? "text-hero-muted" : "text-muted-foreground", className)}>
      <span className="h-px w-7 bg-current" aria-hidden="true" />{children}
    </p>
  );
}