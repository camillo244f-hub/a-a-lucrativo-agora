import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, TrendingUp, Clock, DollarSign, Star } from "lucide-react";
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
      {/* Top bar — discreta, sem brilho */}
      <div className="bg-success/10 border-b border-success/20 text-success text-center py-2 px-4 text-[11px] sm:text-xs font-semibold tracking-wide">
        Oferta válida por tempo limitado · Acesso por R$ 9,90
      </div>

      {/* HERO — limpo, foco no vídeo */}
      <section className="relative bg-gradient-hero pt-8 pb-10 md:pt-16 md:pb-16 px-4">
        <div className="relative mx-auto max-w-3xl">
          <div className="text-center mb-5 md:mb-8">
            <div className="inline-flex items-center gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
              <span className="ml-1 text-[11px] sm:text-xs text-muted-foreground font-medium">
                +1.000 alunos · Método validado
              </span>
            </div>

            <h1 className="text-[1.65rem] sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-[1.1] font-display">
              O método para faturar com{" "}
              <span className="text-gradient-gold">Açaí na Garrafa</span>{" "}
              começando hoje
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Aprenda do zero e fature mais de{" "}
              <strong className="text-foreground">R$ 200 por dia</strong>, mesmo sem
              experiência ou CNPJ.
            </p>
          </div>

          {/* Vídeo — ÚNICO elemento com glow */}
          <div className="relative rounded-2xl overflow-hidden shadow-glow border border-border bg-card">
            <VSLPlayer />
          </div>

          {/* CTA principal */}
          <div className="mt-5 sm:mt-8">
            <button
              onClick={openUpsell}
              className="block w-full bg-gradient-cta text-success-foreground font-bold py-4 sm:py-5 px-6 rounded-2xl text-base sm:text-lg shadow-cta active:scale-[0.98] transition"
            >
              Começar agora por R$ 9,90 →
            </button>
            <p className="mt-3 text-[11px] sm:text-sm text-muted-foreground flex items-center gap-1.5 justify-center">
              <ShieldCheck className="h-3.5 w-3.5 text-success" />
              Acesso imediato · Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* QUICK STATS — clean, sem ícones coloridos competindo */}
      <section className="py-8 sm:py-10 px-4 border-y border-border">
        <div className="mx-auto max-w-4xl grid grid-cols-3 gap-3 sm:gap-6 text-center">
          {[
            { icon: TrendingUp, label: "Lucro/dia", value: "R$ 200+" },
            { icon: Clock, label: "Para começar", value: "1 dia" },
            { icon: DollarSign, label: "Investimento", value: "R$ 9,90" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5">
              <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <p className="text-xl sm:text-2xl md:text-3xl font-black leading-none text-foreground">
                {s.value}
              </p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProvasSociais />

      <Planos onBasicClick={openUpsell} />

      {/* OBJEÇÕES — formato lista limpa */}
      <section className="py-14 sm:py-20 px-4 bg-card/30">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl mb-3 font-display">
              Funciona pra você?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              As 3 desculpas mais comuns — e por que não te param
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                obj: "Não tenho experiência",
                ans: "O passo a passo é tão simples que qualquer pessoa começa do zero hoje mesmo.",
              },
              {
                obj: "Não tenho dinheiro",
                ans: "Com menos de R$ 50 em ingredientes você já produz suas primeiras garrafas.",
              },
              {
                obj: "Não sei vender",
                ans: "Você recebe scripts prontos de venda, posts e abordagens já testados.",
              },
            ].map((it) => (
              <div
                key={it.obj}
                className="rounded-2xl bg-card border border-border p-5 sm:p-6"
              >
                <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider mb-1.5 font-semibold">
                  "{it.obj}"
                </p>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  {it.ans}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA — sem gradient, mais sóbria */}
      <section className="py-14 sm:py-20 px-4">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl bg-card border border-border p-7 sm:p-10 text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-success/40 bg-success/10 mb-5">
              <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8 text-success" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 font-display">
              Garantia de 7 dias
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Se em 7 dias você não gostar, devolvemos cada centavo. Sem perguntas, sem
              burocracia. Risco <strong className="text-foreground">zero</strong> pra você.
            </p>
          </div>
        </div>
      </section>

      <FAQ />

      {/* FINAL CTA — único, direto */}
      <section className="py-14 sm:py-20 px-4 bg-gradient-hero">
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl mb-4 leading-[1.1] font-display">
            Sua nova renda começa <span className="text-gradient-gold">agora</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-7 max-w-md mx-auto">
            Acesso imediato após o pagamento. Em poucos dias você pode estar fazendo as
            primeiras vendas.
          </p>

          <button
            onClick={openUpsell}
            className="block w-full bg-gradient-cta text-success-foreground font-bold py-4 sm:py-5 px-6 rounded-2xl text-base sm:text-lg shadow-cta active:scale-[0.98] transition"
          >
            Quero começar por R$ 9,90 →
          </button>
          <a
            href={LINK_FULL}
            className="block w-full mt-3 bg-transparent border border-border hover:border-primary/40 text-foreground font-medium py-3 px-6 rounded-2xl text-sm transition"
          >
            Ou ver o plano completo (R$ 19,90)
          </a>

          <p className="mt-5 text-[11px] sm:text-xs text-muted-foreground">
            Compra 100% segura · Acesso imediato · Garantia de 7 dias
          </p>
        </div>
      </section>

      <footer className="py-8 px-4 pb-28 md:pb-8 text-center text-[11px] sm:text-xs text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Açaí na Garrafa Lucrativo · Todos os direitos reservados</p>
        <p className="mt-2 max-w-2xl mx-auto opacity-70">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho
          de uma estratégia não deve ser interpretada como uma garantia de resultados.
        </p>
      </footer>

      <StickyMobileCTA onClick={openUpsell} />

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
