import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ShieldCheck, Zap, TrendingUp, Clock, DollarSign, X } from "lucide-react";
import { ProvasSociais } from "@/components/ProvasSociais";
import { Planos, LINK_BASIC, LINK_FULL } from "@/components/Planos";
import { FAQ } from "@/components/FAQ";
import { VSLPlayer } from "@/components/VSLPlayer";
import { UpsellModal } from "@/components/UpsellModal";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [upsellOpen, setUpsellOpen] = useState(false);
  const openUpsell = () => setUpsellOpen(true);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top urgency bar */}
      <div className="bg-gradient-cta text-success-foreground text-center py-2 sm:py-2.5 px-3 text-[11px] sm:text-sm font-bold leading-snug">
        🔥 OFERTA RELÂMPAGO — Acesso por R$ 9,90 · Vagas liberadas hoje
      </div>

      {/* HERO com Vídeo no topo */}
      <section className="relative bg-gradient-hero pt-8 pb-12 md:pt-16 md:pb-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.55_0.22_305/0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl">
          <div className="text-center animate-float-up mb-5 md:mb-8">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/15 border border-success/30 text-success text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-5">
              <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Método validado · +1.000 alunos
            </span>
            <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 leading-[1.05] px-1">
              Fature com{" "}
              <span className="text-gradient-gold">Açaí na Garrafa</span> começando com apenas{" "}
              <span className="text-success">R$ 9,90</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              Aprenda a criar seu próprio negócio e lucrar mais de{" "}
              <strong className="text-foreground">R$ 200 por dia</strong> — mesmo começando do zero.
            </p>
          </div>

          {/* Vídeo */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-glow border border-border bg-card animate-float-up">
            <VSLPlayer />
          </div>

          {/* CTA abaixo do vídeo */}
          <div className="text-center mt-5 sm:mt-8">
            <button
              onClick={openUpsell}
              className="inline-block w-full sm:w-auto bg-gradient-cta text-success-foreground font-black py-4 sm:py-5 px-6 sm:px-12 rounded-2xl text-sm sm:text-lg md:text-xl shadow-cta animate-pulse-cta transition hover:scale-[1.02] active:scale-[0.98]"
            >
              COMEÇAR AGORA POR R$ 9,90 →
            </button>
            <p className="mt-3 sm:mt-4 text-[11px] sm:text-sm text-muted-foreground flex items-center gap-2 justify-center">
              <ShieldCheck className="h-4 w-4 text-success" />
              Acesso imediato + garantia de satisfação
            </p>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="py-8 sm:py-10 px-3 border-y border-border bg-card/40">
        <div className="mx-auto max-w-5xl grid grid-cols-3 gap-2 sm:gap-4 text-center">
          {[
            { icon: TrendingUp, label: "Lucro/dia", value: "R$ 200+" },
            { icon: Clock, label: "Para começar", value: "1 dia" },
            { icon: DollarSign, label: "Investimento", value: "R$ 9,90" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5 sm:gap-2">
              <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-success" />
              <p className="text-lg sm:text-2xl md:text-3xl font-black leading-none">{s.value}</p>
              <p className="text-[9px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProvasSociais />

      <Planos onBasicClick={openUpsell} />

      {/* OBJECTION BREAKING */}
      <section className="py-14 sm:py-20 px-4 bg-card/40">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3">
              "Mas eu <span className="text-gradient-gold">consigo mesmo?</span>"
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg">
              Spoiler: sim. Olha só por quê.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                obj: "Não tenho experiência",
                ans: "Não precisa! O passo a passo é tão simples que qualquer pessoa começa do zero hoje.",
              },
              {
                obj: "Não tenho dinheiro",
                ans: "Investimento mínimo. Com menos de R$ 50 em ingredientes você já produz suas primeiras garrafas.",
              },
              {
                obj: "Não sei vender",
                ans: "Você recebe scripts prontos de vendas, posts e abordagens que já foram testados e funcionam.",
              },
            ].map((it) => (
              <div
                key={it.obj}
                className="rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-card"
              >
                <div className="flex items-center gap-2 text-destructive font-bold mb-3 text-sm sm:text-base">
                  <X className="h-5 w-5" />
                  <span>{it.obj}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {it.ans}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-14 sm:py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-gradient-purple p-[2px] shadow-glow">
            <div className="rounded-[calc(1.5rem-2px)] bg-card p-6 sm:p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-gold mb-5 sm:mb-6 shadow-card">
                <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
                Risco <span className="text-gradient-gold">ZERO</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Se por qualquer motivo você não gostar, é só pedir o reembolso. Seu investimento
                está <strong className="text-foreground">100% seguro</strong>. Você não tem nada a
                perder — só a oportunidade de mudar de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* FINAL CTA */}
      <section className="py-14 sm:py-20 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.55_0.22_305/0.4),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl mb-5 sm:mb-6 leading-[1.05]">
            Comece hoje e transforme o{" "}
            <span className="text-gradient-gold">Açaí em sua renda diária</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto">
            Escolha seu plano e receba acesso imediato. Em poucos dias você pode estar fazendo suas
            primeiras vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={openUpsell}
              className="bg-card border-2 border-border hover:border-success text-foreground font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-2xl text-base sm:text-lg shadow-card transition"
            >
              COMEÇAR COM R$ 9,90
            </button>
            <a
              href={LINK_FULL}
              className="bg-gradient-cta text-success-foreground font-black py-4 sm:py-5 px-6 sm:px-8 rounded-2xl text-base sm:text-lg shadow-cta animate-pulse-cta hover:scale-[1.02] transition"
            >
              PLANO COMPLETO — R$ 19,90
            </a>
          </div>
          <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
            🔒 Compra 100% segura · ⚡ Acesso imediato · 💜 Garantia incondicional
          </p>
        </div>
      </section>

      <footer className="py-8 px-4 pb-28 md:pb-8 text-center text-[11px] sm:text-xs text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Açaí na Garrafa Lucrativo · Todos os direitos reservados</p>
        <p className="mt-2 max-w-2xl mx-auto opacity-70">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de
          uma estratégia não deve ser interpretada como uma garantia de resultados.
        </p>
      </footer>

      {/* Sticky CTA mobile */}
      <StickyMobileCTA onClick={openUpsell} />

      {/* Modais */}
      <UpsellModal
        open={upsellOpen}
        onClose={() => setUpsellOpen(false)}
        basicLink={LINK_BASIC}
        fullLink={LINK_FULL}
      />
      <ExitIntentModal basicLink={LINK_BASIC} />
    </main>
  );
}
