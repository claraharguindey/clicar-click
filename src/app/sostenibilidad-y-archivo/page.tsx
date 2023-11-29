"use client";

import { useGlobalContext } from "../context/store";
import Image from "next/image";

export default function Archivo() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section
      className="pageSection"
      onClick={() => setClicksCount(clicksCount + 1)}
    >
      <aside>
        <h1 className="title">Sostenibilidad y archivo</h1>
        <span className="tag">#encuentro</span>
      </aside>
      <article className="article">
        <p>
          La cuestión del archivo se ha dispuesto como uno de los grandes retos
          de las prácticas de mediación, imprescindible para tener un
          entendimiento completo del estado de la cuestión en la materia. En el
          marco de la mediación digital, implica tener en cuenta la
          inmaterialidad de muchas de sus prácticas y formatos, y sus
          dificultades asociadas.
        </p>
        <p>
          La conservadora Gema Grueso, especialista en conservación de arte
          digital, reflexionó sobre la conservación de proyectos digitales más
          allá de la temporalidad inmediata, sobre la importancia del archivo en
          un contexto de producción inmaterial, y las herramientas de las que
          podemos disponer para desarrollar nuestros proyectos digitales.
        </p>
        <p>
          Desarrollar proyectos de mediación digital implica conocer las
          problemáticas subyacentes a la aparente transparencia de la nube, como
          son las cuestiones de la democratización o la privacidad, así como
          elegir herramientas de manera coherente, que nos aporten ciertas
          garantías de sostenibilidad en el tiempo, teniendo en cuenta criterios
          como la adopción, la transparencia o la gratuidad.
        </p>
        <p>
          Una vez desarrollado el proyecto digital entra en juego el proceso de
          archivo. En esta fase cobra especial importancia la evaluación
          (cuantitativa o cualitativa) que hagamos del proceso, así como la
          documentación que generemos en torno a él y que constituirá un papel
          fundamental en su preservación.
        </p>
        <p>
          La lógica de los archivos digitales no se define por la
          secuencialidad: no hay preguntas preestablecidas, lo recorremos sin
          principio ni final determinado. Archivar desde esta lógica implica
          importantes preguntas, como cómo vamos a nombrar y ordenar nuestros
          ficheros, qué formatos vamos a usar, bajo qué interfaces y acceso los
          vamos a presentar. Plantear desde el principio estas estructuras
          supone también cuidar nuestra mediación, y asegurar su agencia y
          posibilidad más allá de la duración inmediata del proyecto.{" "}
        </p>
      </article>
      <div className="rowGridGallery">
        <div className="columnGridGallery">
          <Image
            src="/img/gema/1.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Un grupo de personas en un pasillo del Museo Reina Sofía elevan sus móviles por encima de sus cabezas y miran la pantalla."
          />
        </div>
        <div className="columnGridGallery">
          <Image
            src="/img/gema/2.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Un grupo de personas en un pasillo del Museo Reina Sofía elevan sus móviles por encima de sus cabezas y miran la pantalla."
          />
        </div>
        <div className="columnGridGallery">
          <Image
            src="/img/gema/3.png"
            width={200}
            height={200}
            className="imageGridGallery"
            alt="Un grupo de personas en un pasillo del Museo Reina Sofía elevan sus móviles por encima de sus cabezas y miran la pantalla."
          />
          <div className="spaceGridGallery"></div>
          <Image
            src="/img/gema/4.png"
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
