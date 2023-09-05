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
          clicar fue un seminario sobre mediación cultural digital comisariado
          por Desmusea que partió del programa{' '}
          <Link href="https://www.museoreinasofia.es/actividades/caminar-clicar-desplazar">
            caminar, clicar, desplazar…
          </Link>
          , impulsado por el Departamento de Educación del Museo Nacional Centro
          de Arte Reina Sofía. A través de los tres verbos: caminar (coordinado
          por <Link href="https://www.laliminal.com/">La Liminal</Link>),
          clicar, y desplazar (coordinado por{' '}
          <Link href="https://felipamanuela.org/">Felipa Manuela</Link>) se
          pretendió analizar diferentes acercamientos contemporáneos a la
          mediación cultural.
        </p>
      </article>
    </section>
  );
}
