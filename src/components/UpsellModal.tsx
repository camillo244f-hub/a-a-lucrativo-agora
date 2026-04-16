import { Check, X } from "lucide-react";
import { useEffect } from "react";

interface UpsellModalProps {
  open: boolean;
  onClose: () => void;
  basicLink: string;
  fullLink: string;
}

const upsellFeatures = [
  "Tudo do Plano Básico incluso",
  "Etiquetas adesivas profissionais",
  "Cardápio digital editável",
  "Kit de gestão (precificação e lucro)",
  "Scripts de venda testados",
  "Estratégia para faturar +R$ 200/dia",
  "Como vender sem CNPJ",
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
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-foreground/40 backdrop-blur-sm animate-fade-in p-0 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full sm:max-w-md bg-card rounded-t-2xl sm:rounded-2xl shadow-elevated animate-scale-in max-h-[95vh] overflow-y-auto border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-muted hover:bg-border flex items-center justify-center transition z-10"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="mb-5">
            <p className="text-[11px] uppercase tracking-widest text-primary font-semibold mb-2">
              Antes de continuar
            </p>
            <h2 className="text-2xl sm:text-[1.65rem] font-display font-medium leading-tight tracking-tight text-balance">
              Por mais R$ 10 você leva tudo o que precisa para escalar.
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              97% dos nossos alunos preferem o Plano Completo.
            </p>
          </div>

          <div className="bg-muted/60 rounded-xl p-4 mb-5 border border-border">
            <ul className="space-y-2">
              {upsellFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-5 pb-5 border-b border-border">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground line-through">R$ 67</span>
              <span className="text-base text-muted-foreground">por apenas</span>
            </div>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-base text-muted-foreground">R$</span>
              <span className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-foreground">
                19,90
              </span>
              <span className="text-sm text-muted-foreground ml-1">à vista</span>
            </div>
          </div>

          <a
            href={fullLink}
            className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 rounded-lg text-sm transition active:scale-[0.99]"
          >
            Quero o Plano Completo
          </a>

          <button
            onClick={() => {
              window.location.href = basicLink;
            }}
            className="block w-full text-center text-muted-foreground hover:text-foreground py-3 mt-1 text-xs underline underline-offset-4 transition"
          >
            Não, prefiro continuar com o básico de R$ 9,90
          </button>
        </div>
      </div>
    </div>
  );
}
