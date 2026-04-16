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
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 rounded-lg text-sm transition active:scale-[0.99]"
      >
        Começar por R$ 9,90
      </button>
    </div>
  );
}
