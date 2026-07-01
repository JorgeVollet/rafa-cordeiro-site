import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * §10 "O Dr. Rafael explica" — galeria de vídeos educativos (vertical 9:16, player nativo).
 *
 * COMO ADICIONAR / TROCAR UM VÍDEO:
 *   1. Coloque o .mp4 em  public/videos/  (nome web-safe: sem espaços/acentos).
 *   2. Gere uma capa (frame) em public/videos/posters/<nome>.jpg  — opcional, mas recomendado.
 *      (As capas atuais foram extraídas automaticamente dos vídeos.)
 *   3. Adicione/edite o item em `videos` abaixo. Os TÍTULOS aqui são um palpite a partir
 *      do nome do arquivo — ajuste para o título real de cada vídeo.
 */
interface VideoItem {
  titulo: string;
  assunto: string;
  src: string;
  poster: string;
}

const videos: VideoItem[] = [
  { titulo: "Eu vejo vocês", assunto: "Apresentação", src: "/videos/eu-vejo-voces.mp4", poster: "/videos/posters/eu-vejo-voces.jpg" },
  { titulo: "Bate-papo · Episódio 01 — Parte I", assunto: "Episódio", src: "/videos/ep-01-parte-1.mp4", poster: "/videos/posters/ep-01-parte-1.jpg" },
  { titulo: "Bate-papo · Episódio 01 — Parte II", assunto: "Episódio", src: "/videos/ep-01-parte-2.mp4", poster: "/videos/posters/ep-01-parte-2.jpg" },
  { titulo: "Bate-papo · Episódio 02", assunto: "Episódio", src: "/videos/ep-02.mp4", poster: "/videos/posters/ep-02.jpg" },
  { titulo: "Bate-papo · Episódio 03", assunto: "Episódio", src: "/videos/ep-03.mp4", poster: "/videos/posters/ep-03.jpg" },
  { titulo: "Dor lombar", assunto: "Coluna", src: "/videos/dor-lombar.mp4", poster: "/videos/posters/dor-lombar.jpg" },
  { titulo: "Artrodese da coluna", assunto: "Tratamento", src: "/videos/artrodese.mp4", poster: "/videos/posters/artrodese.jpg" },
  { titulo: "Pós-operatório", assunto: "Tratamento", src: "/videos/pos-operatorio.mp4", poster: "/videos/posters/pos-operatorio.jpg" },
  { titulo: "Dor de cabeça", assunto: "Cérebro", src: "/videos/dor-de-cabeca.mp4", poster: "/videos/posters/dor-de-cabeca.jpg" },
  { titulo: "Tumor cerebral", assunto: "Cérebro", src: "/videos/tumor-cerebral.mp4", poster: "/videos/posters/tumor-cerebral.jpg" },
  { titulo: "Parkinson", assunto: "Cérebro", src: "/videos/parkinson.mp4", poster: "/videos/posters/parkinson.jpg" },
  { titulo: "Tontura e vertigem", assunto: "Cérebro", src: "/videos/tontura-vertigem.mp4", poster: "/videos/posters/tontura-vertigem.jpg" },
];

function PlayIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function VideoCard({ video }: { video: VideoItem }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="card-light card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[9/16] overflow-hidden bg-[#0E1B2E]">
        {playing ? (
          <video
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Assistir: ${video.titulo}`}
            className="absolute inset-0 grid place-items-center"
          >
            <img
              src={video.poster}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg,rgba(12,26,46,0.05) 0%,rgba(12,26,46,0.1) 55%,rgba(12,26,46,0.5) 100%)" }}
            />
            <span className="f-mono absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.08em] text-[#1565C0] backdrop-blur">
              {video.assunto}
            </span>
            <span className="relative grid size-14 place-items-center rounded-full bg-[#2979FF] pl-0.5 text-white shadow-[0_14px_30px_-10px_rgba(41,121,255,0.6)] transition-transform duration-300 group-hover:scale-105">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>

      <div className="p-4">
        <h3 className="f-display text-base font-semibold leading-tight tracking-tight text-[#16263A]">
          {video.titulo}
        </h3>
      </div>
    </div>
  );
}

export function Video() {
  return (
    <section className="sec-light py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#1565C0]">
            O Dr. Rafael explica
          </span>
          <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-[#16263A] sm:text-6xl">
            Coluna e cérebro sem mistério
          </h2>
          <p className="f-body mt-6 text-base leading-relaxed text-[#52617A]">
            Vídeos curtos e diretos explicando dúvidas comuns sobre dores,
            condições e tratamentos — na linguagem de quem está procurando respostas.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {videos.map((v, i) => (
            <Reveal key={v.src} delay={(i % 4) * 70}>
              <VideoCard video={v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
