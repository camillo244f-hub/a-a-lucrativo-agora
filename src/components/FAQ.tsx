import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    a: "Vários alunos relatam suas primeiras vendas no mesmo dia em que começam a aplicar o método. O retorno depende da sua dedicação e aplicação.",
  },
  {
    q: "O acesso é imediato?",
    a: "Sim! Assim que o pagamento é confirmado, você recebe acesso instantâneo à área de membros por e-mail.",
  },
  {
    q: "Funciona na minha cidade?",
    a: "Sim. O método funciona em qualquer cidade do Brasil — desde capitais até cidades pequenas. Açaí é desejo nacional.",
  },
  {
    q: "Como recebo o material?",
    a: "Tudo é digital. Você acessa o curso, as receitas, as etiquetas e o cardápio direto na nossa plataforma online, 24h por dia.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-14 sm:py-20 px-4">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl mb-3 font-display">
          Perguntas <span className="text-gradient-gold">frequentes</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-10">
          Tire suas dúvidas antes de começar
        </p>
        <div className="space-y-2.5">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-card border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left font-semibold text-sm sm:text-base hover:bg-muted/40 transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    open === i ? "rotate-180 text-foreground" : "text-muted-foreground"
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
