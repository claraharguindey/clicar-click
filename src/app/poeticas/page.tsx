"use client";

import Image from "next/image";
import { useGlobalContext } from "../context/store";

export default function Poeticas() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section
      className="pageSection"
      onClick={() => setClicksCount(clicksCount + 1)}
    >
      <aside>
        <h1 className="title">poéticas de lo hipervinculado</h1>
        <span>#activación</span>
      </aside>
      <article className="article">
        <p>
          <i>Poéticas de lo hipervinculado</i> hace referencia directa a
          <i>Poéticas de lo inacabado</i> , una intervención que la artista
          Alejandra Riera llevó a cabo en 2013 en el Museo Reina Sofía. En ella,
          ejecutó una oquedad en un muro que ponía en contacto dos espacios
          contrapuestos: las bóvedas subterráneas, y la entrada del museo. Este
          gesto, que pone en común dos lugares del museo ajenos en usos y
          funciones y los conecta íntima e irreversiblemente, puede ser leído
          como un acto <i>hipervinculante</i>.
        </p>
        <p>
          <i>Poéticas de lo hipervinculado</i>, como sesión inaugural del
          seminario, buscó presentar el concepto de mediación cultural digital.
          Entendiendo la mediación cultural como un territorio intermedio de
          posibilidad entre obras y públicos, la{" "}
          <i>mediación cultural digital</i> trata de expandir este lugar
          haciendo uso de la tecnología y la digitalidad. Esta práctica no se
          limitaría entonces a pensar en el fin, sino también en el propio
          medio.
        </p>
        <p>
          De la audioguía como herramienta fundacional a las DAO como escenario
          futurible, el recorrido buscó dar cuenta de los diferentes medios
          técnicos de los que la práctica de la mediación se ha servido, y
          atenuar ciertos aspectos que aún hoy parecen poner distancia entre las
          mediadoras y el uso de tecnología.
        </p>
        <p>
          Reconectando con el cuerpo tras las pantallas a través de una
          coreografía que imitaba los movimientos de la escultura <i>Carmen</i>{" "}
          de Calder; magnetizando la <i>Nueva Babilonia</i> de Konstant con
          figuraciones sobre cómo serán los museos en el metaverso y el papel de
          las mediadoras culturales en ese ecosistema; o modificando la
          apariencia de la página web del <i>Guernica</i> para incorporar
          ciertos planteamientos del paseo, la propuesta quiso atravesar la
          Colección desde propuestas no-lineales, rizomáticas, generando nuevas
          relaciones que legitimasen la experiencia íntima de los públicos.
          Propuestas, en definitiva, que las mediadoras llevan conociendo y
          aplicando desde hace años, solo que asumen y habitan la virtualidad y
          el museo interconectado como un escenario fértil para la
          experimentación y una poderosa herramienta para la pedagogía crítica y
          el cambio social a través del arte.
        </p>
        <p>
          La tecnología no ha creado una disrupción, sino que ha trasladado y
          acompañado aprendizajes a un <i>nuevo</i> entorno. Hemos trasladado el
          <i>vínculo</i> al <i>hipervínculo</i>.
        </p>
      </article>
      <div className="rowGridGallery">
        <div className="columnGridGallery">
          <Image
            src="/img/guernica.jpg"
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
            src="/img/calder.jpg"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Un grupo de personas en un pasillo del Museo Reina Sofía elevan sus móviles por encima de sus cabezas y miran la pantalla."
          />
          <Image
            src="/img/senor.jpg"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Un grupo de personas en un pasillo del Museo Reina Sofía elevan sus móviles por encima de sus cabezas y miran la pantalla."
          />
          <div className="spaceGridGallery"></div>
          <Image
            src="/img/mireia.jpg"
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
