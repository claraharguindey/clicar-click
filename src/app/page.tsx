'use client';
import styles from './page.module.css';
import { RefObject, useState } from 'react';
import { useRef } from 'react';
import { useGlobalContext } from './context/store';

const Home = () => {
  const [initialClicksCount, setInitialClicksCount] = useState(0);
  const { clicksCount, setClicksCount } = useGlobalContext();

  const container = useRef<HTMLElement>(null);
  const text0 = useRef<HTMLElement>(null);
  const text1 = useRef<HTMLElement>(null);
  const text2 = useRef<HTMLElement>(null);
  const text3 = useRef<HTMLElement>(null);
  const text4 = useRef<HTMLElement>(null);
  const text5 = useRef<HTMLElement>(null);
  const text6 = useRef<HTMLElement>(null);
  const articles = [
    text0,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
  ] as RefObject<HTMLElement>[];

  const getMousePosition = (
    e: React.MouseEvent,
    item: RefObject<HTMLElement>
  ) => {
    var posx = 0;
    var posy = 0;

    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX;
      posy = e.clientY;
    }

    if (item.current) {
      item.current.style.position = 'absolute';
      item.current.style.left = `${posx}px`;
      item.current.style.top = `${posy}px`;
      item.current.style.display = 'block';
    }
  };

  const setGrid = () => {
    if (container.current) {
      container.current.className = `${styles.grid}`;
    }
  };

  const onClick = (event: React.MouseEvent) => {
    setClicksCount(clicksCount + 1);
    const currentClickCount = initialClicksCount + 1;
    const TEXTS_LENGTH = 6;
    if (initialClicksCount <= TEXTS_LENGTH) {
      getMousePosition(event, articles[initialClicksCount]);
    } else if (initialClicksCount > TEXTS_LENGTH) {
      setGrid();
    }
    setInitialClicksCount(currentClickCount);
  };

  return (
    <main className={styles.main} onClick={onClick}>
      {initialClicksCount < 1 ? (
        <div className={styles.initMessage}>CLICAR</div>
      ) : null}
      <section ref={container}>
        <article
          ref={text0}
          className={`${styles.article} ${styles.article0} ${styles.hidden}`}
        >
          <h2 className={styles.title}>
            0 <br />
            <br />
            Clicar
          </h2>
          <p></p>
          <p>
            Clicar es un seminario de Mediación Cultural Digital comisariado por{' '}
            <a href="https://www.desmusea.com" target="_blanck">
              Desmusea
            </a>{' '}
            que formó parte del programa <i>Caminar, clicar, desplazar </i>
            impulsado por el Departamento de Educación del Museo Nacional Centro
            de Arte Reina Sofía durante los meses de *** a *** de 2022.
          </p>
        </article>
        <article
          ref={text1}
          className={`${styles.article} ${styles.article1} ${styles.hidden}`}
        >
          <h2 className={styles.title}>
            1 <br />
            <br />
            Poéticas de lo hipervinculado
          </h2>
          <p>
            {' '}
            Poéticas de lo hipervinculado pretende mostrar las posibilidades y
            poéticas de lo que entendemos como mediación cultural digital:
            prácticas de intermediación entre arte y públicos a través de una
            tecnología que funciona como medio, y no como fin.
          </p>
        </article>
        <article
          ref={text2}
          className={`${styles.article} ${styles.article2} ${styles.hidden}`}
        >
          <h2 className={styles.title}>
            2 <br />
            <br />
            El usuario en el museo digital
          </h2>
          <p>
            En este encuentro con Elena Villaespesa significamos cómo, a la hora
            de articular proyectos de mediación digital, resulta importante
            personalizar a la persona que está al otro lado de la pantalla para
            facilitar la interacción con nuestra propuesta.
          </p>
        </article>
        <article
          ref={text3}
          className={`${styles.article} ${styles.article3} ${styles.hidden}`}
        >
          <h2 className={styles.title}>
            3 <br />
            <br />
            Virtual infrastructour
          </h2>
          <p>
            Virtual Infrastructour, un itinerario digital realizado por Mario
            Santamaría, nos revela cómo la mediación cultural digital nos sirve
            como herramienta para transparentar el museo, percatarnos de su
            funcionamiento interno, y cuestionarlo desde otros espacios de
            pensamiento crítico.
          </p>
        </article>
        <article
          ref={text4}
          className={`${styles.article} ${styles.article4} ${styles.hidden}`}
        >
          <h2 className={styles.title}>
            4 <br />
            <br />
            Mediar el daño digital
          </h2>
          <p>
            Entendiendo el museo como un espacio en crisis continua, amenazado
            por el daño, Ontologías Feministas nos propone abordar lo digital
            como un espacio poético para plantear esta cuestión y encontrar
            fórmulas de alivio y reparación.
          </p>
        </article>
        <article
          ref={text5}
          className={`${styles.article} ${styles.article5} ${styles.hidden}`}
        >
          <h2 className={styles.title}>
            5 <br />
            <br />
            Sostenibilidad y archivo
          </h2>
          <p>
            La conservadora Gema Grueso nos acompañó a reflexionar sobre la
            conservación de proyectos digitales más allá de la temporalidad
            inmediata, sobre la importancia del archivo en un contexto de
            producción inmaterial, y las herramientas de las que podemos
            disponer para desarrollar nuestros proyectos digitales.
          </p>
        </article>
        <article
          ref={text6}
          className={`${styles.article} ${styles.article6} ${styles.hidden}`}
        >
          <h2 className={styles.title}>
            6 <br />
            <br />
            Residuos sónicos
          </h2>
          <p>
            En la propuesta Residuos sónicos de Agnes Pe, atravesamos varios
            espacios del museo despertando su sonoridad interna, y con ello,
            dialogando con el edificio y su intrahistoria.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Home;
