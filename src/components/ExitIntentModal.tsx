import { X, Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface ExitIntentModalProps {
  basicLink: string;
}

export function ExitIntentModal({ basicLink }: ExitIntentModalProps) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (shown) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("exit_intent_shown")) {
      setShown(true);
      return;
    }

    const trigger = () => {
      if (shown) return;
      setOpen(true);
      setShown(true);
      sessionStorage.setItem("exit_intent_shown", "1");
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let timeoutId: number | undefined;
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const delta = lastScrollY - window.scrollY;
      if (delta > 80 && window.scrollY < 200) trigger();
      lastScrollY = window.scrollY;
    };

    if (isMobile) {
      timeoutId = window.setTimeout(trigger, 28000);
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      document.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [shown]);

  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-foreground/40 backdrop-blur-sm animate-fade-in p-0 sm:p-4"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full sm:max-w-md bg-card rounded-t-2xl sm:rounded-2xl shadow-elevated animate-scale-in border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-muted hover:bg-border flex items-center justify-center transition z-10"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>

        <div className="p-6 sm:p-8 text-center">
          <p className="text-[11px] uppercase tracking-widest text-primary font-semibold mb-3">
            Espera
          </p>

          <h2 className="text-2xl sm:text-[1.65rem] font-display font-medium leading-tight tracking-tight mb-3 text-balance">
            Antes de sair, garanta seu acesso por R$ 9,90
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Esta é a última chance de começar com o valor promocional.
          </p>

          <div className="bg-muted/60 border border-border rounded-xl py-4 mb-6">
            <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-semibold">
              <Clock className="h-3 w-3" />
              Oferta expira em
            </div>
            <div className="text-3xl font-display font-semibold text-foreground tabular-nums tracking-tight">
              {mm}:{ss}
            </div>
          </div>

          <a
            href={basicLink}
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 rounded-lg text-sm transition active:scale-[0.99]"
          >
            Garantir meu acesso por R$ 9,90
          </a>
          <button
            onClick={() => setOpen(false)}
            className="block w-full text-center text-muted-foreground hover:text-foreground py-3 mt-1 text-xs underline underline-offset-4 transition"
          >
            Não, vou perder essa oportunidade
          </button>
        </div>
      </div>
    </div>
  );
}
