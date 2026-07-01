import { SEO } from "@/components/layout/SEO";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { BoasVindas } from "@/components/home/BoasVindas";
import { Diferenciais } from "@/components/home/Diferenciais";
import { Tecnologias } from "@/components/home/Tecnologias";
import { Condicoes } from "@/components/home/Condicoes";
import { Jornada } from "@/components/home/Jornada";
import { ComoFunciona } from "@/components/home/ComoFunciona";
import { CtaIntermediario } from "@/components/home/CtaIntermediario";
import { Video } from "@/components/home/Video";
import { Depoimentos } from "@/components/home/Depoimentos";
import { BlogDestaque } from "@/components/home/BlogDestaque";
import { Orientacoes } from "@/components/home/Orientacoes";
import { Faq } from "@/components/home/Faq";
import { Instagram } from "@/components/home/Instagram";
import { Atendimento } from "@/components/home/Atendimento";

/**
 * Home — design oficial da marca ("dark glass" + azul-ferro), 17 seções (§5).
 * Header e Footer vêm do shell (App); aqui ficam só as seções, em ordem.
 */
export function Home() {
  return (
    <>
      <SEO />
      <Hero /> {/* §1 Hero + §2 Números */}
      <Ticker />
      <BoasVindas /> {/* §3 */}
      <Diferenciais /> {/* §4 */}
      <Tecnologias /> {/* §5 */}
      <Condicoes /> {/* §6 */}
      <Jornada /> {/* §7 */}
      <ComoFunciona /> {/* §8 */}
      <CtaIntermediario /> {/* §9 */}
      <Video /> {/* §10 */}
      <Depoimentos /> {/* §11 */}
      <BlogDestaque /> {/* §12 */}
      <Orientacoes /> {/* §13 */}
      <Faq /> {/* §14 */}
      <Instagram /> {/* §15 */}
      <Atendimento /> {/* §16 */}
      {/* §17 Footer — renderizado pelo shell App */}
    </>
  );
}
