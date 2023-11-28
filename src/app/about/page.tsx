"use client";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "../context/store";

export default function About() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section
      className="pageSection"
      onClick={() => setClicksCount(clicksCount + 1)}
    >
      <h1 className="title">Clicar</h1>
      <article className="article">
        <p>
          <b>Clicar</b> fue el seminario sobre mediación cultural digital
          comisariado por{" "}
          <Link href={"https://www.desmusea.com"}>Desmusea</Link> y en el que
          intervinieron diferentes artistas y profesionales cuyo trabajo
          atraviesa los ámbitos del museo, la mediación y la virtualidad. Clicar
          formó parte del programa{" "}
          <Link href="https://www.museoreinasofia.es/actividades/caminar-clicar-desplazar">
            {" "}
            Caminar, clicar, desplazar…
          </Link>
          , impulsado por el Departamento de Educación del Museo Nacional Centro
          de Arte Reina Sofía. A partir de los tres verbos: <i>caminar</i>{" "}
          (coordinado por La Liminal), <i>clicar</i>, y <i>desplazar</i>{" "}
          (coordinado por Felipa Manuela) la propuesta pretendía analizar
          diferentes acercamientos contemporáneos a la mediación cultural.
        </p>
        <p>
          Los museos y las instituciones culturales son parte de un contexto
          cada vez más atravesado por la virtualidad, en el que la producción y
          el consumo de arte se han ido desplazando a los espacios online, y en
          el que el imaginario aparentemente utópico del metaverso está cada vez
          más presente. Nuevas prácticas de mediación cultural, imbricadas en
          lógicas rizomáticas, interconectadas y digitales, han ido tomando
          progresiva fuerza en el territorio museístico, articulando nuevos
          vínculos entre las propuestas artísticas y la ciudadanía.
        </p>
        <p>
          Este nodo pretendió configurar un marco general en torno a la{" "}
          <b>mediación cultural digital</b>, entendiendo por ello aquellas
          prácticas de mediación donde el uso de la tecnología es definitoria en
          el diseño y ejecución de la propuesta.
        </p>
        <p>
          Buscó no sólo delinear un contexto teórico (que aterrizara el concepto
          de mediación cultural digital, la cuestión de los públicos en la
          virtualidad, y la conservación y archivo de estas prácticas), sino
          también constituir un ejercicio propositivo que transformara estas
          ideas en acciones específicas, ofreciendo una imagen prismática de las
          poéticas que se abren ante el diálogo con la institución.
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
