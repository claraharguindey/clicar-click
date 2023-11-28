'use client';

import Image from 'next/image';
import { useGlobalContext } from '../context/store';

export default function Poeticas() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section
      className="pageSection"
      onClick={() => setClicksCount(clicksCount + 1)}
    >
      <h1 className="title">poéticas de lo hipervinculado</h1>
      <article className="article">
        <p>
          <b>
            <i>Poéticas de lo hipervinculado</i> funcionó como presentación
            introductoria de las posibilidades y poéticas de lo que entendemos
            como mediación cultural digital: prácticas de intermediación entre
            arte y públicos a través de una tecnología que funciona como medio,
            y no como fin. Esta sesión tomó forma de recorrido por el Museo.
          </b>
        </p>
        <p>
          Entendiendo la mediación cultural como un territorio intermedio entre
          obras y públicos, la mediación cultural digital trata de expandir y
          explorar este intersticio por medio de la tecnología.
        </p>
        <p>
          En ocasiones las instituciones culturales hacen uso de la tecnología
          como fin y no como medio de encuentro genuino con el conocimiento. Si
          la primera tecnología utilizada en el museo con esta intnción es la
          audioguía, ¿de qué modo esta nos ofrece una experiencia enriquecida
          frente a la explicación que nos aportaría una guía humana? La
          mediación digital buscar aprovechar la potencia de este medio para
          ofrecer un contenido expandido: en el recorrido, visitamos el Guernica
          bajo la escucha del testimonio de una mujer que vivió el bombardeo de
          niña, audios de Whatsapp donde relatábamos los sentires que nos
          provocó su testimonio y otras experiencias de mediación que habían
          puesto esta experiencia en el centro.
        </p>
        <p>
          El recorrido también reivindicó el cuerpo desde lo digital a través de
          una coreografía guiada a través del móvil que imitaba los movimientos
          de Carmen, de Calder; igual que Calder aporta motricidad, juego,
          transformación a una disciplina basada en la solidez y la firmeza,
          incorporamos nuestra corporalidad latente y presente al otro lado de
          la pantalla. Asimismo, pensamos en Konstant y su Nueva Babilonia para
          preguntarnos cómo serán los museos en el metaverso y el papel de los
          mediadores culturales como conocedoras de sus matices y posibilidades.
        </p>
        <p>
          <i>Poéticas de lo hipervinculado</i> hace referencia directa a
          <i>Poéticas de lo inacabado</i>, una intervención de Alejandra Riera
          en el Museo Reina Sofía. En ella, ejecutó una oquedad en una pared que
          ponía en contacto dos espacios contrapuestos: las bóvedas subterráneas
          y la entrada del museo. Nos gusta pensar en este gesto como un acto
          <i> hipervinculante</i>, que pone en común dos lugares del museo
          ajenos en usos y funciones, pero que de pronto quedan íntima e
          irreversiblemente conectados.
        </p>
        <p>
          Esto nos lleva a pensar que las ideas que abrazamos desde la mediación
          cultural digital, como son atravesar la Colección desde propuestas
          no-lineales, desde lo rizomático, generando nuevas relaciones que
          legitiman la experiencia personal de los públicos, en realidad no son
          tan novedosas, sino que las mediadoras las llevan conociendo y
          aplicando desde hace años. La tecnología no ha creado una disrupción,
          sino que ha trasladado y acompañado aprendizajes a un nuevo entorno.
          Hemos trasladado el vínculo al hipervínculo.
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
