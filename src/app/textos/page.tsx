"use client";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "../context/store";

export default function About() {
  const { clicksCount, setClicksCount } = useGlobalContext();

  return (
    <section
      className="pageSection"
      onClick={() => setClicksCount(clicksCount + 1)}
    >
      <aside className="textsDescription">
        <h1 className="title">Textos</h1>
        <div>
          {" "}
          Recopilación de textos publicados en{" "}
          <Link href={"https://desmusea.substack.com/"}>Servicio Postal</Link>,
          la <i>newsletter</i> de Desmusea sobre mediación cultural digital,
          museos e Internet.
        </div>
      </aside>
      <div>
        <ul>
          <li>
            <Link
              href={"https://desmusea.substack.com/p/04e"}
              target="_blank"
            >
              <h2 className="subtitle">
                Etopía, media art y la economía feminista
              </h2>
            </Link>
            <p>
              Resulta urgente defender un modelo de institución cultural que se
              desplace de lógicas mercantilistas y heteropatriarcales, que
              construyan posibilidad y afección política. Por ello, en esta
              postalita recuperamos tres proyectos de media art en torno a los
              tres principios que la filósofa Nancy Fraser...
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message-11"}
              target="_blank"
            >
              <h2 className="subtitle">Clicar, click</h2>
            </Link>
            <p>
              El término del año nos provoca ensoñaciones y deseos para el que
              viene. Entre otros, el de continuar ahondando en la noción de
              mediación cultural digital generando más experiencias, encuentros,
              y trabajos teóricos en torno a esta cuestión...
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message-10"}
              target="_blank"
            >
              <h2 className="subtitle">Ezprogui</h2>
            </Link>
            <p>
              Hace tiempo que llevamos trabajando en un nuevo proyecto para
              vitrin.as, nuestra galería de proyectos net.art en torno a museos
              del territorio español...
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message-9"}
              target="_blank"
            >
              <h2 className="subtitle">Sobre la IA</h2>
            </Link>
            <p>
              Si fuésemos lectoras de una newsletter y recibiésemos un texto
              sobre Inteligencia Artificial, probablemente pararíamos de leer.
              No es fácil encontrar razones para volver a interesarnos en una
              h...
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message-8"}
              target="_blank"
            >
              <h2 className="subtitle">Sobre el patrimonio inmaterial</h2>
            </Link>
            <p>
              Tras la última postal que os enviamos en verano, volvemos con
              energías html renovadas para este nuevo curso en el que Desmusea
              se encuentra deslocalizada entre Madrid y Val...
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message-7"}
              target="_blank"
            >
              <h2 className="subtitle">Sobre los museos y la atención</h2>
            </Link>
            <p>
              Hacía algunos ayeres que no os mandábamos postales, y el verano es
              tiempo de correspondencia. Hoy es el primer día de agosto, y
              Desmusea bajamos el ritmo a la espera de la llegada de
              septiembre....
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message-6"}
              target="_blank"
            >
              <h2 className="subtitle">
                Sobre repensar el museo desde lo digital
              </h2>
            </Link>
            <p>
              Hace unas semanas tuvo lugar la última sesión de Repensar el museo
              , el nodo que co-coordinamos del programa Tejidos...
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message-5"}
              target="_blank"
            >
              <h2 className="subtitle">
                Sobre la creación colectiva y un cumpleaños
              </h2>
            </Link>
            <p>
              Hoy, 18 de mayo, no sólo conmemoramos el Día Internacional de los
              Museos, sino que también celebramos algo (muchíiiisimo más)
              importante para nosotras (🤭): cumplimos cinco años de trabajo ...
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message-4"}
              target="_blank"
            >
              <h2 className="subtitle">Sobre los museos y la ficción</h2>
            </Link>
            <p>
              Recientemente hemos lanzado equipomotor.TXT , una web inspirada
              por la obra *TXT* de Ana Torfs...
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message-3"}
              target="_blank"
            >
              <h2 className="subtitle">
                Sobre el museo futurible y el metaverso (la web 3.0)
              </h2>
            </Link>

            <p>
              Con esta terminamos la trilogía de postales en torno al museo y
              los paradigmas web.
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message-2"}
              target="_blank"
            >
              <h2 className="subtitle">
                Sobre el museo ilustrado y la web 2.0
              </h2>
            </Link>

            <p>
              Esta es la segunda de una trilogía de postales en torno al museo y
              los paradigmas web.
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message-1"}
              target="_blank"
            >
              <h2 className="subtitle">Sobre la wunderkammer y la web 1.0</h2>
            </Link>
            <p>
              La que sigue, es la primera de una trilogía de postales en las que
              definiremos un diálogo secuencial entre los paradigmas museo y web
              desde el punto de vista del rol de las usuarias, con el fin d...
            </p>
          </li>
          <br />
          <li>
            <Link
              href={"https://desmusea.substack.com/p/message"}
              target="_blank"
            >
              <h2 className="subtitle">Sobre jardines digitales</h2>
            </Link>
            <p>
              Os mandamos esta primera postal desde una casita digital que
              ocupamos para pensar en mediación cultural, museos e Internet.
              Gracias por dejarnos pasar a vuestra bandeja de entrada...
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
