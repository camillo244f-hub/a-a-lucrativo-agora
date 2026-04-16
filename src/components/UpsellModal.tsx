import { Check, Sparkles, X } from "lucide-react";
import { useEffect } from "react";

interface UpsellModalProps {
  open: boolean;
  onClose: () => void;
  basicLink: string;
  fullLink: string;
}

const upsellFeatures = [
  "Tudo do plano básico incluso",
  "Etiquetas adesivas profissionais",
  "Cardápio digital pronto",
  "Kit Gestão (precificação + lucro)",
  "Scripts de venda que convertem",
  "Estratégia para lucrar +R$200/dia",
  "Método para vender SEM CNPJ",
  "Suporte exclusivo via WhatsApp",
];

export function UpsellModal({ open, onClose, basicLink, fullLink }: UpsellModalProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-0 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full sm:max-w-md bg-gradient-purple p-[2px] rounded-t-3xl sm:rounded-3xl shadow-glow animate-scale-in max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-t-[calc(1.5rem-2px)] sm:rounded-[calc(1.5rem-2px)] bg-card p-5 sm:p-7">
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/60 hover:bg-background flex items-center justify-center transition z-10"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-1.5 bg-gradient-gold text-secondary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              <Sparkles className="h-3 w-3" />
              ESPERA! Oferta especial
            </div>
            <h2 className="text-2xl sm:text-3xl mb-2 leading-tight">
              Por <span className="text-gradient-gold">+R$10</span> você leva
              <br />
              <span className="text-gradient-gold">TUDO</span> que precisa para escalar
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              97% dos alunos escolhem essa opção
            </p>
          </div>

          <div className="bg-background/40 rounded-2xl p-4 mb-4 border border-border">
            <ul className="space-y-2">
              {upsellFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mb-4">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-sm text-muted-foreground line-through">R$ 67</span>
              <span className="text-base text-muted-foreground ml-2">por apenas</span>
            </div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-xl text-muted-foreground">R$</span>
              <span className="text-5xl font-black text-gradient-gold tracking-tight">19,90</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">pagamento único · acesso vitalício</p>
          </div>

          <a
            href={fullLink}
            className="block w-full text-center bg-gradient-cta text-success-foreground font-black py-4 rounded-2xl text-base shadow-cta animate-pulse-cta"
          >
            QUERO O PLANO COMPLETO →
          </a>

          <button
            onClick={() => {
              window.location.href = basicLink;
            }}
            className="block w-full text-center text-muted-foreground hover:text-foreground py-3 mt-2 text-xs underline underline-offset-4 transition"
          >
            Não, prefiro continuar com o básico de R$ 9,90
          </button>
        </div>
      </div>
    </div>
  );
}
