'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useGlobalContext } from '../context/store';

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
          Clicar fue el seminario sobre mediación cultural digital comisariado
          por Desmusea y en el que intervinieron diferentes artistas y
          profesionales cuyo trabajo atraviesa los ámbitos del museo, la
          mediación y la virtualidad. Clicar que formó parte del programa{' '}
          <Link href="https://www.museoreinasofia.es/actividades/caminar-clicar-desplazar">
            Caminar, clicar, desplazar…
          </Link>
          , impulsado por el Departamento de Educación del Museo Nacional Centro
          de Arte Reina Sofía. A partir de los tres verbos: caminar (coordinado
          por <Link href="https://www.laliminal.com/">La Liminal</Link>),
          clicar, y desplazar (coordinado por{' '}
          <Link href="https://felipamanuela.org/">Felipa Manuela</Link>) la
          propuesta pretendía analizar diferentes acercamientos contemporáneos a
          la mediación cultural.
          <br />
          <br />
          En un contexto en el que las instituciones culturales se encuentran
          cada vez más atravesadas por la virtualidad, Clicar pretendió definir
          un marco general en torno a la mediación cultural digital – aquellas
          prácticas de mediación que hacen uso de la tecnología formal o
          conceptualmente. Clicar se articuló a través de encuentros de
          pensamiento y acciones específicas que ampliasen las posibilidades
          <i>poéticas y políticas</i> que se abren ante el diálogo con la
          dimensión online de la institución.
          <br /> <br />
          Clicar tuvo lugar entre mayo y septiembre de 2022 contando con Elena
          Villaespesa, Gema Grueso, Mario Santamaría, Ontologías Feministas y
          Agnès Pe.
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
