import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Preciso ter experiência para começar?",
    a: "Não. O método foi feito para iniciantes do zero absoluto. Você recebe o passo a passo completo, com receitas, precificação e scripts prontos.",
  },
  {
    q: "Preciso de CNPJ para vender?",
    a: "Não. Dentro do Plano Completo você aprende exatamente como vender legalmente sem precisar de CNPJ logo no início.",
  },
  {
    q: "Em quanto tempo posso ver retorno?",
    a: "Vários alunos relatam suas primeiras vendas no mesmo dia em que começam a aplicar o método. O retorno depende da sua dedicação.",
  },
  {
    q: "O acesso é imediato?",
    a: "Sim. Assim que o pagamento é confirmado, você recebe acesso instantâneo à área de membros por e-mail.",
  },
  {
    q: "Funciona na minha cidade?",
    a: "Sim. O método funciona em qualquer cidade do Brasil — desde capitais até cidades pequenas.",
  },
  {
    q: "Como recebo o material?",
    a: "Tudo é digital. Você acessa o curso, as receitas, as etiquetas e o cardápio direto na nossa plataforma online, 24h por dia.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
            Perguntas frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-balance">
            Tudo o que você precisa saber
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left font-medium text-sm sm:text-base hover:text-primary transition-colors"
                >
                  <span className="font-display font-medium tracking-tight">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0 text-muted-foreground" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {isOpen && (
                  <div className="pb-5 text-sm text-muted-foreground leading-relaxed -mt-1">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
