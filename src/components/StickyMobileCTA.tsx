import { useEffect, useState } from "react";

interface StickyMobileCTAProps {
  onClick: () => void;
}

export function StickyMobileCTA({ onClick }: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 md:hidden p-3 bg-background/95 backdrop-blur-md border-t border-border transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <button
        onClick={onClick}
        className="w-full bg-gradient-cta text-success-foreground font-bold py-3.5 rounded-xl text-sm shadow-cta active:scale-[0.98] transition"
      >
        Começar por R$ 9,90 →
      </button>
    </div>
  );
}
