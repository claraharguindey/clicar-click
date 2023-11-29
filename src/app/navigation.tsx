"use client";
import Link from "next/link";
import styles from "./navigation.module.css";
import { useGlobalContext } from "./context/store";

const linksInfo = [
  { label: "Acerca de", route: "/about" },
  { label: "Participantes", route: "/participantes" },
  { label: "Encuentros", route: "/" },
  { label: "Textos", route: "/textos" },
];

const Navigation = () => {
  const { clicksCount, setClicksCount, gridDisplayed, setGridDisplayed } =
    useGlobalContext();

  const displaySessions = (label: string) => {
    if (label === "Encuentros" && !gridDisplayed) {
      setGridDisplayed(true);
    }
  };

  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        onClick={() => setClicksCount(clicksCount + 1)}
      >
        <ul className={styles.menu}>
          {linksInfo.map(({ label, route }, i) => (
            <li key={i} className={styles.menuItem}>
              <Link href={route} onClick={() => displaySessions(label)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <span className={styles.counter}>Clics: [{clicksCount}]</span>
      </nav>
    </header>
  );
};

export default Navigation;
