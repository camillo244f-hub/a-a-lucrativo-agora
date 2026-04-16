import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import prova1 from "@/assets/prova-1.webp";
import prova2 from "@/assets/prova-2.webp";
import prova3 from "@/assets/prova-3.webp";
import prova4 from "@/assets/prova-4.webp";
import prova5 from "@/assets/prova-5.webp";

const provas = [
  { src: prova1, alt: "Aluna vendeu todas as garrafas de açaí em uma noite" },
  { src: prova2, alt: "Encomenda de açaí sem nem sair de casa" },
  { src: prova3, alt: "Primeira venda faturando R$245 em um dia" },
  { src: prova4, alt: "Venda de 20 garrafas de uma vez — R$400 em uma única venda" },
  { src: prova5, alt: "Saldo disponível R$311 — vendas do dia" },
];

export function ProvasSociais() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
  }, [emblaApi]);

  return (
    <section className="py-20 px-4 bg-gradient-purple/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.55_0.22_305/0.3),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-success/20 text-success text-xs font-bold uppercase tracking-widest mb-4">
            Resultados reais
          </span>
          <h2 className="text-4xl md:text-5xl mb-3">
            Veja quem já está <span className="text-gradient-gold">lucrando</span>
            <br />com Açaí na Garrafa
          </h2>
          <p className="text-muted-foreground text-lg">
            Prints reais da nossa comunidade de alunos
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {provas.map((p, i) => (
                <div
                  key={i}
                  className="shrink-0 grow-0 basis-[85%] sm:basis-[55%] md:basis-[40%] lg:basis-[32%]"
                >
                  <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-glow transition-shadow">
                    <img
                      src={p.src}
                      alt={p.alt}
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Anterior"
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-card border border-border flex items-center justify-center shadow-card hover:bg-primary hover:text-primary-foreground transition disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Próximo"
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-card border border-border flex items-center justify-center shadow-card hover:bg-primary hover:text-primary-foreground transition disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
