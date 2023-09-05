'use client';
import { useGlobalContext } from "../context/store";

export default function MediarElDano() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section onClick={() => setClicksCount(clicksCount + 1)}>
      <h1>mediar el dano digital</h1>
      <article>
        <p>
          <b>
            <i>Poéticas de lo hipervinculado</i> pretende mostrar las
            posibilidades y poéticas de lo que entendemos como mediación
            cultural digital: prácticas de intermediación entre arte y públicos
            a través de una tecnología que funciona como medio, y no como fin.
          </b>
        </p>
        <p>
          Entendiendo la mediación cultural como un territorio intermedio entre
          obras y públicos donde ocurre un cuestionamiento, aprendizaje o
          transmisión de conocimiento, la mediación cultural digital trata de
          expandir este lugar mediante las posibilidades que nos presta la
          tecnología.
        </p>
        <p>
          Sin embargo, en ocasiones las instituciones culturales hacen uso de la
          tecnología como fin y no como medio de encuentro genuino con el
          conocimiento. Por ejemplo una audioguía al uso, con datos sobre la
          fecha, características y vida del autor de la obra, no ofrece una
          experiencia enriquecida frente a la explicación que nos aportaría una
          guía humana. Entenderíamos mediación digital cuando aprovecha la
          potencia de este medio para ofrecer un contenido expandido: en el
          recorrido, conectamos el Guernica con audios de una mujer que vivió el
          bombardeo de pequeña, y con las emociones personales que nos provocó
          su testimonio.
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
    </section>
  );
}
