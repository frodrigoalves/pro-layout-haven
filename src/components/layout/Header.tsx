import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Brand } from "./Brand";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { homeContent } from "@/data/homeContent";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 transition-all duration-500", scrolled ? "px-3 pt-3 md:px-6" : "px-5 pt-5 md:px-10 md:pt-7")}>
      <div className={cn("mx-auto grid max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center transition-all duration-500 md:grid-cols-[1fr_auto_1fr]", scrolled ? "rounded-lg border border-border/60 bg-background/90 px-4 py-3 shadow-lg backdrop-blur-xl md:px-5" : "px-0 py-1")}>
        <Brand inverse={!scrolled} />
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {homeContent.navigation.map((item) => <a key={item.href} href={item.href} className={cn("story-link text-xs font-medium", scrolled ? "text-foreground" : "text-hero-muted")}>{item.label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center justify-end gap-2">
          <Button asChild size="sm" className={cn("hidden rounded-full px-4 sm:inline-flex", !scrolled && "bg-hero-foreground text-hero hover:bg-hero-foreground/90")}>
            <a href="#contato">Falar com a Coolaborativa <ArrowUpRight /></a>
          </Button>
          <Sheet>
            <SheetTrigger asChild><Button variant="outline" size="icon" aria-label="Abrir menu" className={cn("rounded-full", !scrolled && "border-hero-foreground/30 bg-hero/20 text-hero-foreground hover:bg-hero-foreground hover:text-hero")}><Menu /></Button></SheetTrigger>
            <SheetContent className="w-full border-l-border bg-background p-8 sm:max-w-md">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Brand />
              <nav className="mt-20 flex flex-col border-t border-border">
                {homeContent.navigation.map((item, index) => <SheetClose asChild key={item.href}><a href={item.href} className="grid grid-cols-[2rem_1fr_auto] items-center border-b border-border py-5 font-display text-2xl"><span className="font-sans text-xs text-muted-foreground">0{index + 1}</span>{item.label}<ArrowUpRight className="size-4" /></a></SheetClose>)}
              </nav>
              <SheetClose asChild><Button asChild className="mt-8 h-12 w-full rounded-none"><a href="#contato">Falar com a Coolaborativa</a></Button></SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}