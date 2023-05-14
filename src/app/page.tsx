"use client";
import styles from './page.module.css';
import { MouseEventHandler, useState } from 'react';

const Home = () => {
  const [clicksCount, setClickCount] = useState(0);
  const [isInitialMsgHidden, setIsInitialMsgHidden] = useState(false);
  const [posX, setPosX] = useState('');
  const [posY, setPosY] = useState('');

  const getMousePosition = (e: React.MouseEvent) => {
    var posx = 0;
    var posy = 0;
    // if (!e) let e = window.event;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX;
      posy = e.clientY;
    }
    setPosX(`${posx}px`);
    setPosY(`${posy}px`);
    // document.querySelector(`.${item}${n}`).style.position = 'absolute';
    // document.querySelector(`.${item}${n}`).style.left = `${posx}px`;
    // document.querySelector(`.${item}${n}`).style.top = `${posy}px`;
    // document.querySelector(`.${item}${n}`).style.display = 'block';
  };

  const onClick = (event: React.MouseEvent) => {
    const currentClickCount = clicksCount + 1;
    setClickCount(currentClickCount);
  };
  
  return (
    <main className={styles.main} onClick={onClick}>
      <header className={styles.header}>
        <div>{clicksCount}</div>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/projects/project.html"></a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        {clicksCount >= 1 ? (
          <div className={styles.initMessage}>Haz CLICK.</div>
        ) : null}
        {clicksCount >= 1 ? (
          <article className="article article0 hidden">
            <p>
              Clicar es un seminario sobre mediación cultural digital
              comisariado por Desmusea que parte del programa caminar, clicar,
              desplazar…, impulsado por el Departamento de Educación del Museo
              Nacional Centro de Arte Reina Sofía. A través de los tres verbos:
              caminar (coordinado por La Liminal), clicar y desplazar
              (coordinado por Felipa Manuela) se pretende analizar los
              diferentes acercamientos contemporáneos a la mediación cultural.
              En un contexto en el que las instituciones culturales se
              encuentran cada vez más atravesadas por la virtualidad, clicar
              pretende definir un marco general en torno a la mediación cultural
              digital – aquellas prácticas de mediación que hacen uso de la
              tecnología formal o conceptualmente. clicar se articula a través
              de encuentros de pensamiento y acciones específicas que amplíen
              las posibilidades poéticas y políticas que se abren ante el
              diálogo con la dimensión online de la institución. La primera
              edición tuvo lugar entre mayo y septiembre de 2022 contando con
              Elena Villaespesa, Gema Grueso, Mario Santamaría, Ontologías
              Feministas y Agnès Pe.
            </p>
          </article>
        ) : null}
        {clicksCount >= 2 ? (
          <article className="article article1 hidden">
            <h2>Poéticas de lo hipervinculado</h2>
            <p>
              {' '}
              Poéticas de lo hipervinculado pretende mostrar las posibilidades y
              poéticas de lo que entendemos como mediación cultural digital:
              prácticas de intermediación entre arte y públicos a través de una
              tecnología que funciona como medio, y no como fin.
            </p>
          </article>
        ) : null}
        {clicksCount >= 3 ? (
          <article className="article article2 hidden">
            <h2>El usuario en el museo digital</h2>
            <p>
              En este encuentro con Elena Villaespesa significamos cómo, a la
              hora de articular proyectos de mediación digital, resulta
              importante personalizar a la persona que está al otro lado de la
              pantalla para facilitar la interacción con nuestra propuesta.
            </p>
          </article>
        ) : null}
        {clicksCount >= 4 ? (
          <article className="article article3 hidden">
            <h2>Virtual infrastructour</h2>
            <p>
              Virtual Infrastructour, un itinerario digital realizado por Mario
              Santamaría, nos revela cómo la mediación cultural digital nos
              sirve como herramienta para transparentar el museo, percatarnos de
              su funcionamiento interno, y cuestionarlo desde otros espacios de
              pensamiento crítico.
            </p>
          </article>
        ) : null}
        {clicksCount >= 5 ? (
          <article className="article article4 hidden">
            <h2>Mediar el daño digital</h2>
            <p>
              Entendiendo el museo como un espacio en crisis continua, amenazado
              por el daño, Ontologías Feministas nos propone abordar lo digital
              como un espacio poético para plantear esta cuestión y encontrar
              fórmulas de alivio y reparación.
            </p>
          </article>
        ) : null}
        {clicksCount >= 6 ? (
          <article className="article article5 hidden">
            <h2>Sostenibilidad y archivo</h2>
            <p>
              La conservadora Gema Grueso nos acompañó a reflexionar sobre la
              conservación de proyectos digitales más allá de la temporalidad
              inmediata, sobre la importancia del archivo en un contexto de
              producción inmaterial, y las herramientas de las que podemos
              disponer para desarrollar nuestros proyectos digitales.
            </p>
          </article>
        ) : null}
        {clicksCount >= 7 ? (
          <article className="article article6 hidden">
            <h2>Residuos sónicos</h2>
            <p>
              En la propuesta Residuos sónicos de Agnes Pe, atravesamos varios
              espacios del museo despertando su sonoridad interna, y con ello,
              dialogando con el edificio y su intrahistoria.
            </p>
          </article>
        ) : null}
      </main>
    </main>
  );
};

export default Home;
