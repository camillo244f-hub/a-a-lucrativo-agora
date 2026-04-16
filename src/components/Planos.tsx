import { Check } from "lucide-react";

const LINK_BASIC = "https://www.pagamentos-seguro.link/checkout/d39fcd06-39ba-46c9-b707-f1b55c61851d";
const LINK_FULL = "https://www.pagamentos-seguro.link/checkout/24195c5c-e215-4ad7-910d-538b9a03abd9";

const basicFeatures = [
  "Curso Açaí na Garrafa do zero",
  "+30 receitas profissionais",
  "Passo a passo simples e direto",
  "Acesso vitalício à plataforma",
];

const fullFeatures = [
  "Tudo do plano básico incluso",
  "Etiquetas adesivas profissionais",
  "Cardápio digital pronto",
  "Kit Gestão (precificação + lucro)",
  "Scripts de venda que convertem",
  "Calendário de posts pronto",
  "Apostila Turbo Delivery (iFood)",
  "Estratégia para lucrar +R$200/dia",
  "Método para vender SEM CNPJ",
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
    <section id="planos" className="py-14 sm:py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-success text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3">
            Escolha seu plano
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 font-display">
            Comece <span className="text-gradient-gold">hoje mesmo</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Acesso imediato após o pagamento. Pagamento único, sem mensalidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          {/* BÁSICO — sóbrio */}
          <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 flex flex-col">
            <div className="mb-5">
              <h3 className="text-xl sm:text-2xl mb-1 font-display">Plano Básico</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Para quem quer começar do zero
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-lg text-muted-foreground">R$</span>
                <span className="text-5xl sm:text-6xl font-black tracking-tight text-foreground">
                  9,90
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">pagamento único</p>
            </div>

            <ul className="space-y-2.5 mb-6 flex-1">
              {basicFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={LINK_BASIC}
              onClick={handleBasic}
              className="block w-full text-center bg-card hover:bg-muted border border-border hover:border-primary/40 text-foreground font-semibold py-3.5 rounded-xl text-sm sm:text-base transition active:scale-[0.98]"
            >
              Quero o básico
            </a>
          </div>

          {/* COMPLETO — destaque, único elemento "premium" */}
          <div className="relative rounded-3xl bg-card border-2 border-success p-6 sm:p-8 flex flex-col shadow-cta">
            <div className="absolute -top-3 left-6 bg-success text-success-foreground text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
              Mais escolhido
            </div>

            <div className="mb-5">
              <h3 className="text-xl sm:text-2xl mb-1 font-display">Plano Completo</h3>
              <p className="text-xs sm:text-sm text-success font-semibold">
                Para quem quer escalar e lucrar mais
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground line-through">R$ 67</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="text-5xl sm:text-6xl font-black tracking-tight text-foreground">
                    19,90
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-success font-semibold mt-1">
                70% OFF · pagamento único
              </p>
            </div>

            <ul className="space-y-2.5 mb-6 flex-1">
              {fullFeatures.map((f, i) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check
                    className={`h-4 w-4 shrink-0 mt-1 ${
                      i === 0 ? "text-muted-foreground" : "text-success"
                    }`}
                  />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={LINK_FULL}
              className="block w-full text-center bg-gradient-cta text-success-foreground font-bold py-4 rounded-xl text-sm sm:text-base shadow-cta active:scale-[0.98] transition"
            >
              Quero o completo — R$ 19,90
            </a>
            <p className="text-center text-[11px] text-muted-foreground mt-3">
              Acesso imediato · Compra 100% segura
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { LINK_BASIC, LINK_FULL };
