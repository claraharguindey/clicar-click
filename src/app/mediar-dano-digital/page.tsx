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
        <h1 className="title">Mediar el dano digital</h1>
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
            src="/img/grupo.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Un grupo de personas en un pasillo del Museo Reina Sofía elevan sus móviles por encima de sus cabezas y miran la pantalla."
          />
        </div>
        <div className="columnGridGallery">
          <Image
            src="/img/grupo.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Un grupo de personas en un pasillo del Museo Reina Sofía elevan sus móviles por encima de sus cabezas y miran la pantalla."
          />
        </div>
        <div className="columnGridGallery">
          <Image
            src="/img/grupo.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Un grupo de personas en un pasillo del Museo Reina Sofía elevan sus móviles por encima de sus cabezas y miran la pantalla."
          />
          <div className="spaceGridGallery"></div>
          <Image
            src="/img/grupo.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Un grupo de personas en un pasillo del Museo Reina Sofía elevan sus móviles por encima de sus cabezas y miran la pantalla."
          />
        </div>
      </div>
    </section>
  );
}
