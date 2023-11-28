"use client";

import { useGlobalContext } from "../context/store";
import Image from "next/image";

export default function VirtualInfrastuctour() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section
      className="pageSection"
      onClick={() => setClicksCount(clicksCount + 1)}
    >
      <aside>
        <h1 className="title">virtual infrastructour</h1>
        <span>#activación</span>
      </aside>
      <article className="article">
        <p>
          Una de las vocaciones de la mediación cultural es la de transparentar
          la institución, revelarnos sus mecanismos internos, y presentarnos
          ciertas políticas que resultan imperceptibles a simple vista,
          permitiéndonos un campo de cuestionamiento crítico. La mediación
          cultural <i>digital</i> dispone estas herramientas a través de la
          pantalla y los medios tecnológicos, desbordando este marco
          interrogativo más allá de lo físico.
        </p>
        <p>
          Virtual Infrastructour es un recorrido por el Museo Reina Sofía a
          través de Google Street View como un cable de Internet que entrase en
          el edificio y traspasara sus espacios ocultos. Partiendo de un
          itinerario itinerario virtual anterior desarrollado en Arts Santa
          Mònica, Mario tomó fotografías 360º de diversos espacios del museo
          para configurar este recorrido que, en lugar de transitar sus
          exposiciones o su Colección Permanente, nos dirige por almacenes,
          depósitos, salas de mantenimiento, tuberías, rejillas y suciedad.
        </p>
        <p>
          Ver esa cara oculta del museo puso en relieve todos esos contextos que
          quedan escondidos del cubo blanco, pero que existen precisamente para
          apuntalarlo y hacerlo posible. En estos lugares, ocupados por las
          manchas y el polvo, el museo parece humanizarse y adquirir una nueva
          materialidad. Precisamente, parte del trabajo de Mario aborda la
          fisicidad de Internet, y los materiales (cables, routers, centros de
          datos) en los que ésta se representa.
        </p>
        <p>
          Resultó revelador que el museo no permitiera fotografiar ciertas salas
          con servidores informáticos por temor a posibles ciberataques
          terroristas, imponiendo una opacidad que no hizo sino subrayar la
          importancia latente de estas entrañas institucionales.
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
