import { Check } from "lucide-react";

const LINK_BASIC = "https://www.pagamentos-seguro.link/checkout/d39fcd06-39ba-46c9-b707-f1b55c61851d";
const LINK_FULL = "https://www.pagamentos-seguro.link/checkout/24195c5c-e215-4ad7-910d-538b9a03abd9";

const basicFeatures = [
  "Curso completo Açaí na Garrafa",
  "Mais de 30 receitas profissionais",
  "Passo a passo do zero ao primeiro lucro",
  "Acesso vitalício à plataforma",
];

const fullFeatures = [
  "Tudo do Plano Básico",
  "Etiquetas adesivas profissionais",
  "Cardápio digital editável",
  "Kit de gestão (precificação e lucro)",
  "Scripts de venda testados",
  "Calendário de posts pronto",
  "Apostila Turbo Delivery (iFood)",
  "Estratégia para faturar +R$ 200/dia",
  "Como vender sem CNPJ",
  "Suporte exclusivo via WhatsApp",
];

interface PlanosProps {
  onBasicClick?: () => void;
}

export function Planos({ onBasicClick }: PlanosProps = {}) {
  const handleBasic = (e: React.MouseEvent) => {
    if (onBasicClick) {
      e.preventDefault();
      onBasicClick();
    }
  };

  return (
    <section id="planos" className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
            Planos
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 text-balance">
            Escolha como quer começar
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Pagamento único, sem mensalidade. Acesso imediato após a confirmação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 items-stretch max-w-4xl mx-auto">
          {/* BÁSICO */}
          <div className="rounded-2xl bg-card border border-border p-7 sm:p-8 flex flex-col">
            <div className="mb-6 pb-6 border-b border-border">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2 font-semibold">
                Básico
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base text-muted-foreground">R$</span>
                <span className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-foreground">
                  9,90
                </span>
                <span className="text-sm text-muted-foreground ml-1">à vista</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Para quem quer começar do zero, hoje.
              </p>
            </div>

            <ul className="space-y-3 mb-7 flex-1">
              {basicFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={LINK_BASIC}
              onClick={handleBasic}
              className="block w-full text-center bg-card hover:bg-muted border border-border hover:border-primary/40 text-foreground font-semibold py-3 rounded-lg text-sm transition active:scale-[0.99]"
            >
              Começar com o básico
            </a>
          </div>

          {/* COMPLETO — destaque profissional */}
          <div className="relative rounded-2xl bg-card border-2 border-primary p-7 sm:p-8 flex flex-col shadow-elevated">
            <div className="absolute -top-2.5 left-7 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
              Recomendado
            </div>

            <div className="mb-6 pb-6 border-b border-border">
              <p className="text-[11px] uppercase tracking-widest text-primary mb-2 font-semibold">
                Completo
              </p>
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="text-sm text-muted-foreground line-through">R$ 67</span>
                <span className="text-base text-muted-foreground">R$</span>
                <span className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-foreground">
                  19,90
                </span>
                <span className="text-sm text-muted-foreground ml-1">à vista</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Para quem quer escalar e faturar mais rápido.
              </p>
            </div>

            <ul className="space-y-3 mb-7 flex-1">
              {fullFeatures.map((f, i) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check
                    className={`h-4 w-4 shrink-0 mt-0.5 ${
                      i === 0 ? "text-muted-foreground" : "text-primary"
                    }`}
                  />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={LINK_FULL}
              className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 rounded-lg text-sm transition active:scale-[0.99]"
            >
              Quero o plano completo
            </a>
            <p className="text-center text-[11px] text-muted-foreground mt-3">
              Acesso imediato · Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { LINK_BASIC, LINK_FULL };
