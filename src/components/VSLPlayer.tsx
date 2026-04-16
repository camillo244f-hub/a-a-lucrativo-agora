const YT_ID = "IIXqkuTOrFw";
const YT_URL = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&loop=1&playlist=${YT_ID}`;

export function VSLPlayer() {
  return (
    <div className="aspect-video bg-black">
      <iframe
        src={YT_URL}
        title="Vídeo de apresentação Açaí na Garrafa"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
