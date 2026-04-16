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
    <section className="px-4 py-14 sm:py-20 bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
            Histórias reais
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 text-balance">
            Resultados de quem aplicou o método
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Prints reais enviados pela nossa comunidade de alunos.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-5">
              {provas.map((p, i) => (
                <div
                  key={i}
                  className="shrink-0 grow-0 basis-[80%] sm:basis-[55%] md:basis-[40%] lg:basis-[32%]"
                >
                  <div className="rounded-xl overflow-hidden bg-card border border-border shadow-card">
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
            className="hidden sm:flex absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card border border-border items-center justify-center shadow-card hover:bg-muted transition disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Próximo"
            className="hidden sm:flex absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card border border-border items-center justify-center shadow-card hover:bg-muted transition disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
