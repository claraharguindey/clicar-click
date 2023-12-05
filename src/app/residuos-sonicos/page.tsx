"use client";

import { useGlobalContext } from "../context/store";
import Image from "next/image";

export default function ResiduosSonicos() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section
      className="pageSection"
      onClick={() => setClicksCount(clicksCount + 1)}
    >
      <aside>
        <h1 className="title">Residuos sónicos</h1>
        <span className="tag">#activación</span>
      </aside>
      <article className="article">
        <p>
          El museo es un ecosistema que va más allá de la Colección y su
          espacio, y que implica una serie de organismos vivos, componentes
          tecnológicos, interrelaciones y sensorialidades, cuyo encuentro se
          facilita a través de ejercicios y gestos de mediación cultural.
        </p>
        <p>
          En la propuesta <i>Residuos sónicos</i> de Agnes Pe, atravesamos
          varios espacios del museo despertando su sonoridad interna, y con
          ello, dialogando con el edificio y su relato. Partiendo de interpelar
          a su arquitectura, espacios, pasillos, piedras, así como la
          materialidad de sus obras, se fueron despertando en ellos relatos
          relacionados con su condición como lugar histórico, testimonio de
          numerosos tránsitos y transformaciones.
        </p>
        <p>
          Haciendo uso de un dispositivo que revela las ondas electromagnéticas
          que emergen de los aparatos tecnológicos del museo, se fueron
          despertando las resonancias residuales impregnadas en su arquitectura.
          Se indagó así en los márgenes del mundo sonoro, con sus vibraciones e
          intensidades invisibles, puestas en relación con las historias
          sobrenaturales que se cuentan sobre el edificio, sus fantasmas y el
          informe ATA que llevaron a cabo una serie de parapsicólogos en el año
          1995.
        </p>
        <p>
          De esta manera, también se potencia el museo como espacio de
          imaginación, de planteamiento de historias que se entrecruzan con lo
          entendido como auténtico o verídico.
        </p>
      </article>
      <div className="rowGridGallery">
        <div className="columnGridGallery">
          <Image
            src="/img/agnes/1.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="La artista ayuda a una chica a utilizar la grabadora"
          />
          <div className="spaceGridGallery"></div>
          <Image
            src="/img/agnes/2.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Una mujer sostiene un altavoz entre sus manos"
          />
          <Image
            src="/img/agnes/3.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Dos chicos observan una máquina en una de las salas del museo"
          />
        </div>
        <div className="columnGridGallery">
          <Image
            src="/img/agnes/4.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Una chica aproxima un pequeño micrófono a la pared"
          />
          <Image
            src="/img/agnes/5.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="En el suelo hay algunos cables, auriculares, un ordenador y otros materiales técnicos usados en el encuentro"
          />
          <Image
            src="/img/agnes/6.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Un grupo de personas habla en círculo frente a la obra Carmen de Calder, en el jardín del Museo"
          />
        </div>
        <div className="columnGridGallery">
          <div className="spaceGridGallery"></div>
          <Image
            src="/img/agnes/7.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Un grupo de personas observa una de las obras de una sala del Museo"
          />
          <div className="spaceGridGallery"></div>
        </div>
      </div>
    </section>
  );
}
