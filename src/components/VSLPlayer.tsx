import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const FILE_ID = "1IUY6ZOLtzzwMrfM4hm4fbm1vgfsccXhb";
const MP4_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;
const PREVIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/preview`;

export function VSLPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => setFallback(true));
    tryPlay();
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  if (fallback) {
    return (
      <div className="aspect-video">
        <iframe
          src={PREVIEW_URL}
          title="Vídeo de apresentação Açaí na Garrafa"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video bg-black">
      <video
        ref={videoRef}
        src={MP4_URL}
        playsInline
        autoPlay
        muted
        controls
        onError={() => setFallback(true)}
        className="w-full h-full object-contain"
      />
      {muted && (
        <button
          onClick={toggleMute}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition group"
          aria-label="Ativar som"
        >
          <span className="flex items-center gap-3 bg-gradient-cta text-success-foreground font-black px-6 py-4 rounded-2xl shadow-cta animate-pulse-cta">
            {muted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            CLIQUE PARA ATIVAR O SOM
          </span>
        </button>
      )}
    </div>
  );
}
