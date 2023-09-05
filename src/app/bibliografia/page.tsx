'use client';

import Link from 'next/link';
import { useGlobalContext } from '../context/store';

export default function Bibliografia() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section
      className="pageSection"
      onClick={() => setClicksCount(clicksCount + 1)}
    >
      <h1 className="title">Bibliografía</h1>
      <article className="article">
        <p>
          De la wunderkammer al metaverso. Desmusea, 2023.{' '}
          <i>Cuadernos Saio Irekia</i>
          <br></br>
          <Link
            href="https://www.k6gestioncultural.com/portfolio-items/cuaderno-digital-museos-en-transito/"
            target="_blanck"
          >
            https://www.k6gestioncultural.com/portfolio-items/cuaderno-digital-museos-en-transito/
          </Link>
        </p>
        <p>
          Sobre la mediación cultural digital. Desmusea, 2021. <i>Poliédrica</i>
          <br></br>
          <Link
            href="https://www.poliedrica.cat/es/sobre-la-mediacion-cultural-digital/"
            target="_blanck"
          >
            https://www.poliedrica.cat/es/sobre-la-mediacion-cultural-digital/
          </Link>
        </p>
        <p>
          El arte cyborg de los jóvenes. Desmusea, 2020. <i>El País.</i>
          <br></br>
          <Link
            href="https://elpais.com/espana/madrid/2020-12-11/el-arte-ciborg-de-los-jovenes.html"
            target="_blanck"
          >
            https://elpais.com/espana/madrid/2020-12-11/el-arte-ciborg-de-los-jovenes.html
          </Link>
        </p>
        <p>
          Exponer o exponerse. La educación en museos como producción cultural
          crítica. VV.AA, 2019.
          <i>Catarata.</i>
        </p>
        <p>
          Arte y archivo, 1920-2010: Genealogías, tipologías y discontinuidades.
          Anna María Guasch, 2011.
          <i>Akal.</i>
        </p>
      </article>
    </section>
  );
}
