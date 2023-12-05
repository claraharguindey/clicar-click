"use client";

import Image from "next/image";
import { useGlobalContext } from "../context/store";
import Link from "next/link";

export default function MediarElDano() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section
      className="pageSection"
      onClick={() => setClicksCount(clicksCount + 1)}
    >
      <aside>
        <h1 className="title">Mediar el daño digital</h1>
        <span className="tag">#encuentro</span>
      </aside>
      <article className="article">
        <p>
          Entendiendo el museo como un espacio en crisis continua, lo digital
          puede abordarse como un espacio poético para encontrar fórmulas de
          alivio y reparación.
        </p>
        <p>
          El colectivo Ontologías Feministas, a través de la acción{" "}
          <i>Mediar el daño digital</i>, partieron del museo como un espacio
          sometido a la constante amenaza del daño, al deterioro irreversible de
          sus piezas, a las personas que lo acceden y lo desbordan, haciéndolo
          peligrar. En este sentido, la digitalización de las colecciones, los
          archivos online y otras herramientas informáticas se plantean como
          grandes aliadas frente a este proceso de pérdida.
        </p>{" "}
        <p>
          Durante la activación se transitó, registró e intervino el Reina Sofía
          a través de sus archivos y recursos digitales, como la radio del
          museo, sus obras en gigapíxel, o el buscador de su web. Se fueron así,
          señalando y significando ciertos fenómenos que apelaban a sus heridas,
          como la impermanencia de las audioguías, la desorientación en espacios
          digitales, las páginas 404, o los daños de las obras revelados a
          través de las radiografías.
        </p>
        <p>
          Frente a la frecuente retórica de lo digital como un riesgo que nos
          puede hacer perder lo que somos, esta activación se amparó en los
          beneficios y alivios que Internet nos ofrece, aprehendiendo el museo
          desde la intimidad de una materialidad alternativa.
        </p>
        <p>
          Accede al proyecto,{" "}
          <Link href="https://ontologiasfeministasrecursos.hotglue.me/?lugares">
            aquí
          </Link>
        </p>
      </article>
      <div className="rowGridGallery">
        <div className="columnGridGallery">
          <Image
            src="/img/ontologias/1.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="La imagen contiene algunas fotografías antiguas de los pasillos del Museo Reina Sofía"
          />
        </div>
        <div className="columnGridGallery">
          <Image
            src="/img/ontologias/2.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Captura de pantalla de youtube donde pone 'El vídeo no está disponible'"
          />
          <Image
            src="/img/ontologias/3.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Tres mujeres se manifiestan frente la puerta de la exposición de Carl Andre con camisetas donde pone 'Where is Ana Mendieta?"
          />
        </div>
        <div className="columnGridGallery">
          <Image
            src="/img/ontologias/4.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Captura de la pantalla de error 404 de la web del Museo Reina Sofía"
          />
          <Image
            src="/img/ontologias/5.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Detalle de una fotografía de la obra rasgada por la sufragista canadiense Mary Richardsonde de la Venus del Espejo de Velázquez"
          />
          <Image
            src="/img/ontologias/6.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Detalle de captura de pantalla de la aplicación gigapíxel del Reina Sofía donde pueden verse algunos surcos en la pintura"
          />
        </div>
      </div>
    </section>
  );
}
