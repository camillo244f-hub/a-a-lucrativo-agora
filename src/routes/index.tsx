import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, Star, Check } from "lucide-react";
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
      {/* Header simples */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3.5">
          <p className="text-sm font-semibold tracking-tight">
            Açaí Lucrativo<span className="text-primary">.</span>
          </p>
          <p className="text-[11px] sm:text-xs text-muted-foreground">
            Curso digital · Acesso imediato
          </p>
        </div>
      </header>

      {/* HERO — limpo, editorial */}
      <section className="px-4 pt-10 pb-12 sm:pt-16 sm:pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-7 sm:mb-9">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border mb-5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-foreground text-foreground" />
                ))}
              </div>
              <span className="text-[11px] text-muted-foreground font-medium">
                Avaliado por mais de 1.000 alunos
              </span>
            </div>

            <h1 className="text-[2rem] sm:text-5xl md:text-6xl mb-5 leading-[1.05] text-balance">
              Como faturar com{" "}
              <em className="text-primary not-italic font-semibold">Açaí na Garrafa</em>{" "}
              começando do zero
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-balance">
              Um método passo a passo para você abrir seu próprio negócio de açaí em casa
              e gerar mais de R$ 200 por dia — sem experiência e sem CNPJ.
            </p>
          </div>

          {/* Vídeo */}
          <div className="rounded-xl overflow-hidden border border-border bg-card shadow-elevated">
            <VSLPlayer />
          </div>

          {/* CTA */}
          <div className="mt-7 sm:mt-9 max-w-md mx-auto">
            <button
              onClick={openUpsell}
              className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg text-base transition active:scale-[0.99]"
            >
              Quero começar por R$ 9,90
            </button>
            <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5 justify-center">
              <ShieldCheck className="h-3.5 w-3.5" />
              Pagamento único · Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* Stats — formato editorial */}
      <section className="px-4 py-10 border-y border-border bg-muted/40">
        <div className="mx-auto max-w-4xl grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { value: "R$ 200+", label: "Faturamento médio diário" },
            { value: "1 dia", label: "Para começar a vender" },
            { value: "R$ 9,90", label: "Investimento inicial" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl sm:text-4xl font-display font-medium text-foreground tracking-tight mb-1">
                {s.value}
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProvasSociais />

      <Planos onBasicClick={openUpsell} />

      {/* OBJEÇÕES — perguntas honestas */}
      <section className="px-4 py-14 sm:py-20 bg-muted/40">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
              Dúvidas frequentes
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-balance">
              Será que isso funciona pra mim?
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                obj: "Não tenho experiência com vendas",
                ans: "Não precisa ter. O método foi desenhado para iniciantes absolutos — você recebe scripts prontos, modelos de post e abordagens já testadas.",
              },
              {
                obj: "Não tenho dinheiro pra começar",
                ans: "Com menos de R$ 50 em ingredientes você produz suas primeiras garrafas. O retorno costuma vir já na primeira semana.",
              },
              {
                obj: "Tenho medo de não conseguir vender",
                ans: "É exatamente por isso que você tem 7 dias de garantia. Se aplicar e não funcionar, devolvemos o seu dinheiro.",
              },
            ].map((it) => (
              <div
                key={it.obj}
                className="rounded-xl bg-card border border-border p-5 sm:p-6"
              >
                <p className="font-semibold text-sm sm:text-base mb-1.5">
                  {it.obj}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {it.ans}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-card border border-border p-7 sm:p-10 text-center shadow-card">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-muted mb-5">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl mb-3">
              Garantia incondicional de 7 dias
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
              Você assiste, aplica e, se não funcionar pra você por qualquer motivo, é só
              enviar um e-mail nos primeiros 7 dias. Devolvemos 100% do valor, sem
              perguntas.
            </p>
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA FINAL */}
      <section className="px-4 py-14 sm:py-20 border-t border-border bg-muted/40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-balance">
            Comece hoje. Veja resultado essa semana.
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
            Acesso imediato após o pagamento. Tudo o que você precisa para abrir e crescer o
            seu negócio de açaí.
          </p>

          <div className="max-w-md mx-auto">
            <button
              onClick={openUpsell}
              className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg text-base transition active:scale-[0.99]"
            >
              Começar por R$ 9,90
            </button>
            <a
              href={LINK_FULL}
              className="block w-full mt-2 bg-card hover:bg-muted border border-border text-foreground font-medium py-3.5 px-6 rounded-lg text-sm transition"
            >
              Ver plano completo (R$ 19,90)
            </a>

            <div className="mt-5 flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" /> Compra segura
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" /> Acesso imediato
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" /> Garantia 7 dias
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 py-8 pb-28 md:pb-8 text-center text-[11px] sm:text-xs text-muted-foreground border-t border-border">
        <p className="font-medium text-foreground mb-1">Açaí Lucrativo</p>
        <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
        <p className="mt-3 max-w-2xl mx-auto opacity-80 leading-relaxed">
          Este produto não garante a obtenção de resultados. Qualquer referência ao
          desempenho de uma estratégia não deve ser interpretada como uma garantia de
          resultados.
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
