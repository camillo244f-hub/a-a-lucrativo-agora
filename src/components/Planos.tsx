import { Check, Sparkles } from "lucide-react";

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
  "Etiquetas adesivas profissionais prontas",
  "Cardápio digital profissional",
  "Kit Gestão completo (precificação, estoque, lucro)",
  "Scripts de vendas que convertem",
  "Calendário de posts pronto",
  "Apostila Turbo Delivery (iFood e apps)",
  "Estratégia para lucrar +R$200/dia",
  "Método para vender SEM CNPJ",
  "Suporte exclusivo via WhatsApp",
];

export function Planos() {
  return (
    <section id="planos" className="py-20 px-4 relative">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-success/20 text-success text-xs font-bold uppercase tracking-widest mb-4">
            Escolha seu plano
          </span>
          <h2 className="text-4xl md:text-5xl mb-3">
            Comece <span className="text-gradient-gold">hoje mesmo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Dois planos pensados para o seu momento. Acesso imediato após o pagamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* BÁSICO */}
          <div className="rounded-3xl bg-card border border-border p-8 shadow-card relative">
            <div className="text-center mb-6">
              <h3 className="text-3xl mb-2">Plano Básico</h3>
              <p className="text-sm text-muted-foreground mb-5">Ideal para começar do zero</p>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-2xl text-muted-foreground">R$</span>
                <span className="text-6xl font-black tracking-tight">9,90</span>
              </div>
              <p className="text-xs text-muted-foreground">pagamento único</p>
            </div>
            <ul className="space-y-3 mb-8">
              {basicFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={LINK_BASIC}
              className="block w-full text-center bg-gradient-purple hover:opacity-90 text-primary-foreground font-bold py-4 rounded-xl text-lg shadow-glow transition"
            >
              COMEÇAR AGORA
            </a>
          </div>

          {/* COMPLETO */}
          <div className="rounded-3xl bg-gradient-purple p-[2px] shadow-glow relative md:-mt-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-1.5 shadow-card z-10">
              <Sparkles className="h-3.5 w-3.5" />
              Mais escolhido
            </div>
            <div className="rounded-[calc(1.5rem-2px)] bg-card p-8 pt-10 h-full">
              <div className="text-center mb-6">
                <h3 className="text-3xl mb-2">Plano Completo</h3>
                <p className="text-sm text-success font-semibold mb-5">
                  🎁 Inclui todos os bônus para escalar
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-base text-muted-foreground line-through mr-2">R$ 67</span>
                  <span className="text-2xl text-muted-foreground">R$</span>
                  <span className="text-6xl font-black tracking-tight text-gradient-gold">
                    19,90
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">pagamento único · oferta limitada</p>
              </div>
              <ul className="space-y-3 mb-8">
                {fullFeatures.map((f, i) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      className={`h-5 w-5 shrink-0 mt-0.5 ${
                        i === 0 ? "text-muted-foreground" : "text-success"
                      }`}
                    />
                    <span className="text-sm md:text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={LINK_FULL}
                className="block w-full text-center bg-gradient-cta text-success-foreground font-black py-5 rounded-xl text-lg shadow-cta animate-pulse-cta transition"
              >
                QUERO LUCRAR MAIS — R$ 19,90
              </a>
              <p className="text-center text-xs text-muted-foreground mt-3">
                ✅ Acesso imediato · 🔒 Compra 100% segura
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { LINK_BASIC, LINK_FULL };
