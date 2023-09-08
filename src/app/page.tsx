'use client';
import styles from './page.module.css';
import { RefObject, useState, useEffect } from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import { useGlobalContext } from './context/store';
import Link from 'next/link';

const Home = () => {
  const [initialClicksCount, setInitialClicksCount] = useState(0);
  const [linksActive, setLinksActive] = useState(false);
  const { clicksCount, setClicksCount } = useGlobalContext();

  const container = useRef<HTMLAnchorElement>(null);
  const text0 = useRef<HTMLDivElement>(null);
  const text1 = useRef<HTMLAnchorElement>(null);
  const text2 = useRef<HTMLAnchorElement>(null);
  const text3 = useRef<HTMLAnchorElement>(null);
  const text4 = useRef<HTMLAnchorElement>(null);
  const text5 = useRef<HTMLAnchorElement>(null);
  const text6 = useRef<HTMLAnchorElement>(null);
  const click0 = useRef<HTMLAnchorElement>(null);
  const click1 = useRef<HTMLAnchorElement>(null);
  const click2 = useRef<HTMLAnchorElement>(null);
  const click3 = useRef<HTMLAnchorElement>(null);
  const click4 = useRef<HTMLAnchorElement>(null);
  const click5 = useRef<HTMLAnchorElement>(null);
  const click6 = useRef<HTMLAnchorElement>(null);
  const articles = [
    text0,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
  ] as RefObject<HTMLAnchorElement>[];

  const clicksItem = [
    click0,
    click1,
    click2,
    click3,
    click4,
    click5,
    click6,
  ] as RefObject<HTMLAnchorElement>[];

  const getMousePosition = (
    e: React.MouseEvent,
    item: RefObject<HTMLElement>,
    clickItem: RefObject<HTMLElement>
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
      item.current.style.left = `${posx + 10}px`;
      item.current.style.top = `${posy + 10}px`;
      item.current.style.display = 'block';
    }
    if (clickItem.current) {
      clickItem.current.style.position = 'absolute';
      clickItem.current.style.left = `${posx}px`;
      clickItem.current.style.top = `${posy - 20}px`;
      clickItem.current.style.display = 'block';
    }
  };

  const setGrid = () => {
    if (container.current) {
      container.current.className = `${styles.grid}`;
    }
  };

  useEffect(() => {
    if (clicksCount > 7) {
      setGrid();
      setLinksActive(true);
    }
  }, []);

  const onClick = (event: React.MouseEvent) => {
    setClicksCount(clicksCount + 1);
    const currentClickCount = initialClicksCount + 1;
    const TEXTS_LENGTH = 6;
    if (initialClicksCount <= TEXTS_LENGTH) {
      getMousePosition(
        event,
        articles[initialClicksCount],
        clicksItem[initialClicksCount]
      );
    } else if (initialClicksCount > TEXTS_LENGTH) {
      setGrid();
      setLinksActive(true);
    }
    setInitialClicksCount(currentClickCount);
  };

  return (
    <main className={styles.main} onClick={onClick}>
      {clicksCount < 1 ? (
        <div className={styles.initMessage}>CLICAR</div>
      ) : null}
      <section ref={container}>
        {clicksItem.map((click, i) => (
          <span className={styles.hidden} key={i} ref={click}>
            clic
          </span>
        ))}
        <div className={styles.gridRow}>
          <div
            ref={text0}
            className={`${styles.article} ${
              clicksCount > 7 ? '' : styles.hidden
            } ${styles.firstArticle}`}
          >
            {clicksCount < 7 && (
              <h2 className={styles.title}>
                0 <br />
                <br />
                Clicar
              </h2>
            )}
            <div>
              Clicar es un seminario de Mediación Cultural Digital comisariado
              por{' '}
              <a href="https://www.desmusea.com" target="_blanck">
                Desmusea
              </a>{' '}
              que formó parte del programa <i>Caminar, clicar, desplazar </i>
              impulsado por el Departamento de Educación del Museo Nacional
              Centro de Arte Reina Sofía durante los meses de *** a *** de 2022.
            </div>
          </div>
        </div>
        <div className={styles.gridRow}>
          <Link
            href={linksActive ? '/poeticas' : ''}
            ref={text1}
            className={`${styles.article} ${styles.hidden}`}
          >
            <h2 className={styles.title}>
              [1] <br />
              <br />
              Poéticas de lo hipervinculado
            </h2>
            <Image
              className={styles.image}
              src="/img/grupo.png"
              width={200}
              height={250}
              alt="Un grupo de personas en un pasillo del Museo Reina Sofía elevan sus móviles por encima de sus cabezas y miran la pantalla."
            />
          </Link>
          <Link
            href={linksActive ? '/user' : ''}
            ref={text2}
            className={`${styles.article} ${
              clicksCount > 7 ? '' : styles.hidden
            }`}
          >
            <h2 className={styles.title}>
              [2] <br />
              <br />
              El usuario en el museo digital
            </h2>
            <Image
              className={styles.image}
              src="/img/movil.png"
              width={200}
              height={250}
              alt="Un grupo de personas en un pasillo del Museo Reina Sofía elevan sus móviles por encima de sus cabezas y miran la pantalla."
            />
          </Link>
          <Link
            href={linksActive ? '/virtual-infrastructour' : ''}
            ref={text3}
            className={`${styles.article}  ${
              clicksCount > 7 ? '' : styles.hidden
            }`}
          >
            <h2 className={styles.title}>
              [3] <br />
              <br />
              Virtual infrastructour
            </h2>
            <Image
              className={styles.image}
              src="/img/virtual-infrastuctour.png"
              width={200}
              height={250}
              alt="La imagen muestra un conjunto de cables."
            />
          </Link>
          <Link
            href={linksActive ? '/mediar-dano-digital' : ''}
            ref={text4}
            className={`${styles.article} ${
              clicksCount > 7 ? '' : styles.hidden
            }`}
          >
            <h2 className={styles.title}>
              [4] <br />
              <br />
              Mediar el dano digital
            </h2>
            <Image
              className={styles.image}
              src="/img/dano.png"
              width={200}
              height={250}
              alt="Captura de pantalla de una videollamada. En ella se ve a tres personas conectadas."
            />
          </Link>
          <Link
            href={linksActive ? '/archivo' : ''}
            ref={text5}
            className={`${styles.article}  ${
              clicksCount > 7 ? '' : styles.hidden
            }`}
          >
            <h2 className={styles.title}>
              [5] <br />
              <br />
              Sostenibilidad y archivo
            </h2>
            <Image
              className={styles.image}
              src="/img/distorsion.png"
              width={200}
              height={250}
              alt="Imagen de una cara distorsionada, dificilmente reconocible."
            />
          </Link>
          <Link
            href={linksActive ? '/residuos-sonicos' : ''}
            ref={text6}
            className={`${styles.article} ${
              clicksCount > 7 ? '' : styles.hidden
            }`}
          >
            <h2 className={styles.title}>
              [6] <br />
              <br />
              Residuos sónicos
            </h2>
            <Image
              className={styles.image}
              src="/img/ana.png"
              width={200}
              height={250}
              alt="Una chica acerca un micrófono a una pared."
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
