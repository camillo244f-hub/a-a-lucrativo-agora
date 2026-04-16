import { useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";

const YT_ID = "IIXqkuTOrFw";

export function VSLPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [unmuted, setUnmuted] = useState(false);

  // Carrega API do YouTube
  useEffect(() => {
    if (document.getElementById("yt-iframe-api")) return;
    const tag = document.createElement("script");
    tag.id = "yt-iframe-api";
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }, []);

  const handleUnmute = () => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow) return;
    // Comandos via postMessage para o YouTube IFrame API
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "unMute", args: [] }),
      "*"
    );
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
      "*"
    );
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "playVideo", args: [] }),
      "*"
    );
    setUnmuted(true);
  };

  const src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=1&loop=1&playlist=${YT_ID}&enablejsapi=1`;

  return (
    <div className="relative aspect-video bg-black">
      <iframe
        ref={iframeRef}
        src={src}
        title="Vídeo de apresentação Açaí na Garrafa"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
      {!unmuted && (
        <button
          onClick={handleUnmute}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 hover:bg-black/45 transition cursor-pointer group"
          aria-label="Ativar som do vídeo"
        >
          <span className="flex items-center gap-3 bg-gradient-cta text-success-foreground font-black px-6 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-cta animate-pulse-cta text-base sm:text-lg group-hover:scale-105 transition-transform">
            <Volume2 className="h-6 w-6" />
            CLIQUE PARA OUVIR O VÍDEO
          </span>
          <span className="mt-3 text-white/90 text-xs sm:text-sm font-bold uppercase tracking-wider drop-shadow">
            🔊 Seu vídeo está sem som
          </span>
        </button>
      )}
    </div>
  );
}
