import { Gift, X, Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface ExitIntentModalProps {
  basicLink: string;
}

export function ExitIntentModal({ basicLink }: ExitIntentModalProps) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 min

  // Trigger: desktop mouseleave OR mobile after 25s OR scroll up fast
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

  // Countdown
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
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in p-0 sm:p-4"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full sm:max-w-md bg-gradient-gold p-[2px] rounded-t-3xl sm:rounded-3xl shadow-glow animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-t-[calc(1.5rem-2px)] sm:rounded-[calc(1.5rem-2px)] bg-card p-6 sm:p-8 text-center">
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/60 hover:bg-background flex items-center justify-center transition z-10"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-gold mb-4 shadow-card">
            <Gift className="h-8 w-8 text-secondary" />
          </div>

          <h2 className="text-2xl sm:text-3xl mb-2 leading-tight">
            ESPERA! Não vá embora
            <br />
            <span className="text-gradient-gold">de mãos vazias</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Liberei pra você uma <strong className="text-foreground">última chance</strong> de começar
            por apenas <strong className="text-success">R$ 9,90</strong>.
          </p>

          <div className="bg-background/50 border border-border rounded-2xl py-3 px-4 mb-5">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-1">
              <Clock className="h-3.5 w-3.5 text-destructive" />
              Oferta expira em
            </div>
            <div className="text-3xl font-black text-destructive tabular-nums tracking-tight">
              {mm}:{ss}
            </div>
          </div>

          <a
            href={basicLink}
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-gradient-cta text-success-foreground font-black py-4 rounded-2xl text-base shadow-cta animate-pulse-cta"
          >
            QUERO GARANTIR POR R$ 9,90 →
          </a>
          <button
            onClick={() => setOpen(false)}
            className="block w-full text-center text-muted-foreground hover:text-foreground py-3 mt-1 text-[11px] underline underline-offset-4 transition"
          >
            Não, vou perder essa oportunidade
          </button>
        </div>
      </div>
    </div>
  );
}
