"use client";
import { useGlobalContext } from "../context/store";

export default function About() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section
      className="pageSection"
      onClick={() => setClicksCount(clicksCount + 1)}
    >
      <h1 className="title">Participantes</h1>
      <ul>
        <li>
          <b>Gema Grueso</b> es licenciada en Bellas Artes con la especialidad
          de Conservación-Restauración de Bienes Culturales y ha cursado
          diferentes postgrados relacionados con este campo, especializándose en
          2012 en Conservación de Arte Contemporáneo. El interés de su
          investigación se centra en el arte digital que se produce y se
          experimenta en línea. Su experiencia profesional es muy variada: ha
          trabajado tanto para empresas privadas en obra y taller, como para
          entidades públicas como el Museo Nacional Centro de Arte Reina Sofía.
          Es cofundadora de C·ART·A Conservación de Arte Actual S. L.
        </li>
        <br />
        <li>
          <b>Ontologías Feministas</b> es un colectivo de producción cultural
          formado por Elena Castro Córdoba, Blanca Martínez Gómez y Laura
          Tabarés. Desde su creación se ha consolidado como proyecto colectivo
          político-artístico y ha desarrollado talleres, programado eventos y
          mediado en proyectos. Los ejes principales de su trabajo son la
          virtualidad situada y la educación desde una perspectiva feminista, la
          revisión de prácticas y políticas en espacios institucionales y
          académicos, y la generación de redes feministas para crear espacios de
          ocio más seguros. Han desarrollado su trabajo en instituciones como
          Hangar, La Casa Encendida, Fabra i Coats – Fàbrica de Creació,
          Matadero Madrid, Museo La Neomudéjar, Sala de Arte Joven de la
          Comunidad de Madrid, Universidad Politécnica de Madrid (ETSAM), Centro
          Cultural Kirchner, Cuartel de Artillería de Murcia, Sala Beckett,
          University of the West of England (Bristol, Reino Unido), Tabakalera,
          Tenerife Espacio de las Artes (TEA) y Primavera Pro, entre otros.
        </li>
        <br />
        <li>
          <b>Agnes Pe</b> es investigadora musical y productora sonora, además
          de estar interesada en la pedagogía. Es licenciada en Comunicación
          Audiovisual, ha cursado el máster en Comunicación Social de la
          Universitat Pompeu Fabra y ha completado su formación en Ciudad de
          México. Sus producciones sonoras se desprenden de las limitaciones de
          cualquier género musical, navegando en el detritus que genera a partir
          de archivos MIDI y narrativas ficcionadas. Actualmente conduce el
          programa radiofónico Mitt Paté (Radio On Berlin) en el que indaga
          sobre plunderphonias generadas y distribuidas en el marco de internet.
          Sus proyectos se han expuesto en el Centro de Cultura Contemporánea
          Condeduque, Tabakalera y Matadero Madrid. Ha realizado conciertos en
          el Museu d’Art Contemporani de Barcelona (MACBA), el Centro Botín,
          Centro de Arte Dos de Mayo (CA2M), La Casa Encendida, Centre d’Art La
          Panera y L´Larraskito Kluba, además de participar en festivales
          internacionales como BangFace (Reino Unido) o Piksel (Noruega).
          Actualmente colaboradora con Radio del Museo Reina Sofia (RRS), Radio
          On Berlin y Resonance Extra (Reino Unido).
        </li>
        <br />
        <li>
          <b>Mario Santamaría</b> es artista visual y trabaja con una amplia
          gama de medios, utilizando frecuentemente fotografía, vídeo,
          performance, sitios web e intervenciones online. Es docente en la
          Escuela Superior de Diseño e Ingeniería Elisava de Barcelona y ha sido
          comisario de Internet Yami-Ichi en el Centre de Cultura Contemporània
          de Barcelona (CCCB, 2016) y Matadero Madrid (2018). Ha sido artista
          residente en Hangar y HISK (Gante), entre otros, y finalista del
          prestigioso premio Post-Photography Prototyping de Fotomuseum
          Winterthur. Su trabajo ha sido expuesto en instituciones como el Museu
          d’Art Contemporani de Barcelona (MACBA), Zentrum für Kunst und Medien
          (ZKM, Karlsruhe), Wuerttemberg Art Association Stuttgart (WKV,
          Stuttgart), C/O Berlin, Or Gallery Berlin, La Casa Encendida, Centro
          Nacional de las Artes (CENART, Ciudad de México), Arebyte Gallery
          (Londres) y Aksioma (Liubliana), entre otros.
        </li>
        <br />
        <li>
          <b>Elena Villaespesa</b> trabaja como assistant professor en el Pratt
          Institute de Nueva York. Obtuvo el máster en Gestión Cultural de la
          Universidad Carlos III de Madrid, así como el doctorado en Digital
          Heritage en la School of Museum Studies de la Universidad de Leicester
          (Reino Unido). Sus áreas de interés en investigación y enseñanza
          incluyen estrategias digitales como el análisis de datos y la
          investigación de la experiencia del usuario, también aplicada al
          sector de los museos. Su carrera profesional abarca una amplia
          experiencia internacional, siendo un referente en gestión de analítica
          digital. Ha trabajado en diversos museos, entre los que se encuentran
          el Metropolitan Museum of Art de Nueva York y la Tate Modern de
          Londres, donde ha coordinado el programa de análisis de datos del
          museo con el que se evalúan las iniciativas digitales a través de
          estudios de público, evaluación de la web, redes sociales móviles y
          actividades interactivas. También trabajó como productora digital en
          el Museo Thyssen-Bornemisza.
        </li>
      </ul>
    </section>
  );
}
