"use client";

import Link from "next/link";
import { useGlobalContext } from "../context/store";
import Image from "next/image";

export default function User() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section
      className="pageSection"
      onClick={() => setClicksCount(clicksCount + 1)}
    >
      <h1 className="title">El usuario en el museo virtual</h1>
      <article className="article">
        <p>#encuentro</p>
        <p>
          Elena Villaespesa es experta en estrategias digitales en museos,
          investigando en análisis de datos y experiencia del usuario para
          numerosos museos de Europa y Estados Unidos entre los que figuran el
          Metropolitan Museum of Art de Nueva York, o la Tate Modern de Londres.
        </p>
        <p>
          Elena ha insistido desde hace años en la importancia creciente de la
          dimensión digital de estas instituciones y así lo ejemplifican los
          estudios: la Tate recibe más visitas anuales a su web que la suma de
          sus cuatro sedes físicas.
        </p>
        <p>
          Pensar en las usuarias de la web como visitantes del Museo condiciona
          el modo en que entendemos y atendemos a esta versión online de la
          institución. A través de tiempos de visionado, la ubicación de los
          clics en la pantalla, o los recorridos que hacen los cursores de las
          usuarias navegando entre hipervínculos podemos hacer un análisis
          datificado de la experiencia y del modo en que podemos, como
          mediadoras, trabajar con ella tras las pantallas.
        </p>
        <p>
          Podemos preguntarnos, ¿qué matrices conceptuales genera la
          arquitectura de la web del museo en el que trabajamos? ¿Cómo se
          organizan los relatos? ¿Cuáles son sus lógicas de archivo y
          navegación? ¿Qué términos buscan las usuarias? ¿Quiénes son? ¿Por qué
          han venido? ¿Cuánto tiempo estarán aquí? ¿Por qué volverían?
        </p>
        <p>
          A través de estos análisis, Elena y su equipo descubrieron, por
          ejemplo, que el término <i>Colección</i> en el menú de la web no era
          un término fácilmente entendible por usuarias no familiarizadas con el
          museo, optando por la palabra <i>Obras</i>. Estos pequeños gestos
          orientados a conocer y atender las necesidades y preferencias de
          quienes visitan estas instituciones virtuales nos dirigen a
          mediaciones digitales más accesibles, satisfactorias, y complejas.
        </p>
        <p>
          Contenidos complementarios:{" "}
          <Link href="https://docs.google.com/document/d/1K2TWN8MphlQDAN9WtTxUvmooJrRbuB5ngzzTrhDR6qQ/edit">
            aquí
          </Link>
          .
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
