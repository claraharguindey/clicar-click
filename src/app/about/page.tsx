'use client';

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
          Los museos y las instituciones culturales son parte de un contexto
          cada vez más atravesado por la virtualidad, en el que la producción y
          el consumo de arte se han ido desplazando a los espacios web y en el
          que las utopías del metaverso ya están presentes y son totalmente
          inmediatas. Nuevas prácticas de mediación cultural, imbricadas en lo
          rizomático, lo interconectado y lo digital, han ido tomando progresiva
          fuerza en el territorio museístico, articulando nuevos vínculos entre
          las propuestas artísticas y la ciudadanía.
          <br /> <br />
          Este nodo pretendió configurar un marco general en torno a la
          mediación cultural digital, entendida como ejercicio de intermediación
          artística que ubica el pensamiento tecnológico en el centro. Busca no
          solo ofrecer un contexto teórico (que aterrice el concepto de
          mediación cultural digital, la cuestión de los públicos en la
          virtualidad y la conservación y archivo de estas prácticas), sino
          también constituir un ejercicio propositivo que transforme estas ideas
          en acciones específicas, ofreciendo una imagen prismática de
          diferentes posibilidades poéticas y políticas que se abren ante el
          diálogo con la dimensión online de la institució
        </p>
      </article>
    </section>
  );
}
