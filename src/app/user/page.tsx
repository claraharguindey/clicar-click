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
      <aside>
        <h1 className="title">El usuario en el museo virtual</h1>
        <span className="tag">#encuentro</span>
      </aside>
      <article className="article">
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
            src="/img/elena.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Elena explicando algo"
          />
        </div>
        <div className="columnGridGallery">
          <Image
            src="/img/mapacalor.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Detalle de un mapa de calor"
          />
        </div>
        <div className="columnGridGallery">
          <Image
            src="/img/call.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Captura de pantalla de una videollamada en la que solo se ven fragmentos de las ventanas de las usuarias conectadas a la llamada"
          />
          <div className="spaceGridGallery"></div>
          <Image
            src="/img/user.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Detalle de una captura de pantalla donde se ve dibujado un pentágono y sobre él pone 'Perfil de usuario'. En cada vérticel del pentagono hay unos cuadros de colores con más textos ilegibles por la baja calidad de la imagen."
          />
        </div>
      </div>
    </section>
  );
}
