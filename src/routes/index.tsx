import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Zap, TrendingUp, Clock, DollarSign, X } from "lucide-react";
import heroImg from "@/assets/acai-hero.jpg";
import { ProvasSociais } from "@/components/ProvasSociais";
import { Planos, LINK_BASIC, LINK_FULL } from "@/components/Planos";
import { FAQ } from "@/components/FAQ";

export const Route = createFileRoute("/")({
  component: Index,
});

const VSL_URL = "https://drive.google.com/file/d/1IUY6ZOLtzzwMrfM4hm4fbm1vgfsccXhb/preview";

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top urgency bar */}
      <div className="bg-gradient-cta text-success-foreground text-center py-2.5 px-4 text-xs sm:text-sm font-bold">
        🔥 OFERTA RELÂMPAGO — Acesso por apenas R$ 9,90 · Vagas liberadas hoje
      </div>

      {/* HERO */}
      <section className="relative bg-gradient-hero pt-12 pb-16 md:pt-20 md:pb-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.55_0.22_305/0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-float-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/15 border border-success/30 text-success text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="h-3.5 w-3.5" /> Método validado · +1.000 alunos
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-5 leading-[1.02]">
              Fature com{" "}
              <span className="text-gradient-gold">Açaí na Garrafa</span>{" "}
              começando com apenas{" "}
              <span className="text-success">R$ 9,90</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Aprenda a criar seu próprio negócio e lucrar mais de{" "}
              <strong className="text-foreground">R$ 200 por dia</strong> de forma simples — mesmo
              começando do zero, sem experiência e sem precisar sair de casa.
            </p>

            <a
              href={LINK_BASIC}
              className="inline-block w-full sm:w-auto bg-gradient-cta text-success-foreground font-black py-5 px-8 sm:px-12 rounded-2xl text-lg md:text-xl shadow-cta animate-pulse-cta transition hover:scale-[1.02]"
            >
              COMEÇAR AGORA POR R$ 9,90 →
            </a>
            <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2 justify-center lg:justify-start">
              <ShieldCheck className="h-4 w-4 text-success" />
              Acesso imediato + garantia de satisfação
            </p>
          </div>

          <div className="relative animate-float-up">
            <div className="absolute -inset-6 bg-gradient-purple opacity-40 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="Açaí na garrafa pronto para vender"
              width={1024}
              height={1024}
              className="relative w-full max-w-md mx-auto rounded-3xl shadow-glow border border-border"
            />
            <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-card border border-border rounded-2xl px-4 py-3 shadow-card flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-success/20 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Faturamento médio</p>
                <p className="text-base font-black">R$ 200+/dia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="py-10 px-4 border-y border-border bg-card/40">
        <div className="mx-auto max-w-5xl grid grid-cols-3 gap-4 text-center">
          {[
            { icon: TrendingUp, label: "Lucro/dia", value: "R$ 200+" },
            { icon: Clock, label: "Para começar", value: "1 dia" },
            { icon: DollarSign, label: "Investimento", value: "R$ 9,90" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <s.icon className="h-6 w-6 text-success" />
              <p className="text-2xl md:text-3xl font-black">{s.value}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VSL */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-bold uppercase tracking-widest mb-4">
              Assista antes de decidir
            </span>
            <h2 className="text-3xl md:text-5xl mb-3">
              Veja como funciona o <span className="text-gradient-gold">método</span>
            </h2>
            <p className="text-muted-foreground">Em poucos minutos você entende tudo.</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-glow border border-border bg-card">
            <div className="aspect-video">
              <iframe
                src={VSL_URL}
                title="Vídeo de apresentação Açaí na Garrafa"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href={LINK_BASIC}
              className="inline-block bg-gradient-cta text-success-foreground font-black py-5 px-8 sm:px-12 rounded-2xl text-lg md:text-xl shadow-cta animate-pulse-cta hover:scale-[1.02] transition"
            >
              GARANTIR MINHA VAGA POR R$ 9,90
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Comece hoje mesmo e dê o primeiro passo para sua renda diária
            </p>
          </div>
        </div>
      </section>

      <ProvasSociais />

      <Planos />

      {/* OBJECTION BREAKING */}
      <section className="py-20 px-4 bg-card/40">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-3">
              "Mas eu <span className="text-gradient-gold">consigo mesmo?</span>"
            </h2>
            <p className="text-muted-foreground text-lg">
              Spoiler: sim. Olha só por quê.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
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
                className="rounded-2xl bg-card border border-border p-6 shadow-card"
              >
                <div className="flex items-center gap-2 text-destructive font-bold mb-3">
                  <X className="h-5 w-5" />
                  <span>{it.obj}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {it.ans}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-gradient-purple p-[2px] shadow-glow">
            <div className="rounded-[calc(1.5rem-2px)] bg-card p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-gold mb-6 shadow-card">
                <ShieldCheck className="h-10 w-10 text-secondary" />
              </div>
              <h2 className="text-4xl md:text-5xl mb-4">
                Risco <span className="text-gradient-gold">ZERO</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
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
      <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.55_0.22_305/0.4),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl mb-6 leading-[1.05]">
            Comece hoje e transforme o{" "}
            <span className="text-gradient-gold">Açaí em sua renda diária</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Escolha seu plano e receba acesso imediato. Em poucos dias você pode estar fazendo suas
            primeiras vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINK_BASIC}
              className="bg-card border-2 border-border hover:border-success text-foreground font-bold py-5 px-8 rounded-2xl text-lg shadow-card transition"
            >
              COMEÇAR COM R$ 9,90
            </a>
            <a
              href={LINK_FULL}
              className="bg-gradient-cta text-success-foreground font-black py-5 px-8 rounded-2xl text-lg shadow-cta animate-pulse-cta hover:scale-[1.02] transition"
            >
              QUERO O PLANO COMPLETO — R$ 19,90
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            🔒 Compra 100% segura · ⚡ Acesso imediato · 💜 Garantia incondicional
          </p>
        </div>
      </section>

      <footer className="py-8 px-4 text-center text-xs text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Açaí na Garrafa Lucrativo · Todos os direitos reservados</p>
        <p className="mt-2 max-w-2xl mx-auto opacity-70">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de
          uma estratégia não deve ser interpretada como uma garantia de resultados.
        </p>
      </footer>
    </main>
  );
}
